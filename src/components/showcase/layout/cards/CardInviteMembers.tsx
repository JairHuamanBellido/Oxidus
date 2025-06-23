"use client";
import { Button } from "@/src/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Input } from "@/src/components/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/select";
import TypographyH4 from "@/src/components/typography/h4";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function CardInviteMembers() {
  const {
    cssVariables: { shadcn },
  } = useThemeContext();
  const { systemTheme } = useTheme();

  const members = [
    {
      name: "Jhon Doe",
      position: "Software Engineer",
      avatarUrl: "/avatar-1.svg",
      role: "owner",
    },
    {
      name: "Daniel",
      position: "Software Engineer",
      avatarUrl: "/avatar-2.svg",
      role: "editor",
    },
  ];

  const background = shadcn[systemTheme as "dark" | "light"].background.color;
  const mixBackground = systemTheme === "dark" ? "white" : "black";
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">Invite Team member</CardTitle>
        <CardDescription>
          Everyone at project can access to Oxidus
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-2">
          <Input placeholder="foo@bar.xyz" className="p-2 w-3/4  bg-none" />
          <Button className="w-1/4">Send</Button>
        </div>
        <div className="mt-3">
          <TypographyH4 className="text-lg">Folks</TypographyH4>
          <div className="space-y-2">
            {members.map((member) => (
              <div
                key={member.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Image
                    src={member.avatarUrl}
                    width={64}
                    height={64}
                    alt="avatar-1"
                  />
                  <div>
                    <TypographyParagraph className="text-base">
                      {member.name}
                    </TypographyParagraph>
                    <TypographyMuted className="text-sm">
                      {member.position}
                    </TypographyMuted>
                  </div>
                </div>
                <Select defaultValue={member.role}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
