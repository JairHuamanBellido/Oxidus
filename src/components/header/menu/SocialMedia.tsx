import Link from "next/link";
import { Button } from "../../shadcn/button";
import { Github } from "lucide-react";

export default function SocialMediaMenuItem() {
  return (
    <Button className="w-9 px-0" asChild variant={"ghost"}>
      <Link
        target="_blank"
        href={"https://github.com/JairHuamanBellido/Oxidus"}
      >
        <Github strokeWidth={1.5} size={20} />
      </Link>
    </Button>
  );
}
