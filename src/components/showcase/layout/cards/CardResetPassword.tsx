import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { KeyRound } from "lucide-react";
import { Input } from "@/src/components/shadcn/input";
import { Button } from "@/src/components/shadcn/button";
import { Label } from "@/src/components/shadcn/label";

export default function CardResetPassword() {
  return (
    <Card>
      <CardHeader className="flex flex-col justify-center items-center space-y-4">
        <KeyRound size={40} strokeWidth={1} />
        <div className="flex flex-col space-y-2 text-center">
          <CardTitle className="ml-0">Reset Password</CardTitle>
          <CardDescription>
            Enter your email to reset your password
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="font-semibold">Email Address</Label>
              <Input placeholder="Email" />
            </div>
            <Button>Reset Password</Button>
          </div>
        </form>
        <div className="flex flex-col justify-center mt-6">
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?
          </p>
          <Button variant="link" className="text-foreground h-fit p-1">
            Sign up
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
