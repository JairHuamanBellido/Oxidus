import TypographyH4 from "@/src/components/typography/h4";
import HeroHeaderSettings from "./hero-header";
import { Progress } from "@/src/components/shadcn/progress";
import TypographyMuted from "@/src/components/typography/muted";
import { Info } from "lucide-react";
import Color from "color";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import TypographyParagraph from "@/src/components/typography/paragraph";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/shadcn/alert-dialog";
import { Button } from "@/src/components/shadcn/button";

export default function StorageSettings() {
  const {
    cssVariables: { shadcn },
    mode,
  } = useThemeContext();

  const background = shadcn[mode].background.color;

  const mixBackground = mode === "dark" ? "white" : "black";
  return (
    <div>
      <HeroHeaderSettings
        title="Data management and Storage"
        description="Monitor storage usage, set storage location preferences, and clean up old or unnecessary data"
      />
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <TypographyH4>Storage Space</TypographyH4>

          <div className="w-1/2 space-y-2">
            <Progress className="h-[4px]" value={80} />
            <div className="flex justify-end">
              <TypographyMuted>800 GB / 1,000 GB</TypographyMuted>
            </div>

            <div
              className="p-3 w-full rounded flex gap-x-2 my-3 text-foreground/60"
              style={{
                background: Color(background)
                  .mix(Color(mixBackground), 0.05)
                  .hex(),
              }}
            >
              <Info />
              <TypographyMuted className="text-in">
                To expand your storage capacity,{" "}
                <span className="text-primary cursor-pointer underline font-semibold">
                  {" "}
                  get in touch with us.{" "}
                </span>
              </TypographyMuted>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <TypographyH4>Data Clean Up</TypographyH4>
          <div className="space-y-2">
            <TypographyParagraph className="text-foreground/80">
              Remove Unnecessary Data' scans for and deletes files and data that
              are no longer needed, freeing up valuable space and ensuring
              efficient storage. This action won't affect your important data.
              Make room for what matters by clearing the clutter!
            </TypographyParagraph>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Remove Unnecessary Data</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Data Cleanup</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove unnecessary data? This
                    action will permanently delete files and data that are no
                    longer needed, freeing up storage space. Please confirm to
                    proceed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
