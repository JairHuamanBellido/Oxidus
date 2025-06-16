import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Button } from "@/src/components/shadcn/button";
import { Input } from "@/src/components/shadcn/input";
import { Globe } from "lucide-react";
import TypographyParagraph from "@/src/components/typography/paragraph";
import TypographyMuted from "@/src/components/typography/muted";
import { Switch } from "@/src/components/shadcn/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/select";

export default function CardShareProject() {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-base">Share Project</CardTitle>
      </CardHeader>
      <CardContent className="px-4 space-y-4">
        <div className="flex items-center justify-between border rounded-lg p-2">
          <div className="flex items-center ">
            <div className="px-3">
              <Globe size={18} />
            </div>
            <div className="flex flex-col">
              <TypographyParagraph className="font-medium text-sm">
                Public Access
              </TypographyParagraph>
              <TypographyMuted className="text-sm text-muted-foreground">
                Public and share link with anyone
              </TypographyMuted>
            </div>
          </div>
          <div>
            <Switch />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-full relative">
            <Input
              className="border pr-24"
              placeholder="Enter your email"
              type="email"
            />
            <Select defaultValue="canview">
              <SelectTrigger className="w-fit absolute right-1 top-0 bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-sm font-medium">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="canedit">Can Edit</SelectItem>
                <SelectItem value="canview">Can View</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="text-primary-foreground w-[140px]">
            Send Invite
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
