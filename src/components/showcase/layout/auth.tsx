import Link from "next/link";
import { Button } from "../../shadcn/button";
import { Input } from "../../shadcn/input";
import { Label } from "../../shadcn/label";
import TypographyMuted from "../../typography/muted";

export default function AuthenticationShowcase() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="w-[600px] space-y-4">
        <div className="space-y-1 ">
          <Label>Username</Label>
          <Input placeholder="Type your username" />
        </div>
        <div className="space-y-1 ">
          <Label>Password</Label>
          <Input placeholder="Type your password" type="password" />
        </div>
        <div className="flex flex-col space-y-2">
          <Button>Sign In</Button>
          <TypographyMuted>
            Don't have an account?{" "}
            <Button asChild variant={"link"}>
              <Link href={"/"}> Sign Up</Link>
            </Button>
          </TypographyMuted>{" "}
        </div>
      </div>
    </div>
  );
}
