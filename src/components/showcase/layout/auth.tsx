import AuthBlock1 from "./auth/auth-block-1";
import AuthBlock2 from "./auth/auth-block-2";

export default function AuthenticationShowcase() {
  return (
    <div className="w-full p-4 flex flex-col rounded space-y-12">
      <AuthBlock1 />
      <AuthBlock2 />
    </div>
  );
}
