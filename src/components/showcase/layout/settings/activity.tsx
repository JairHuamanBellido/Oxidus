import TypographyH4 from "@/src/components/typography/h4";
import HeroHeaderSettings from "./hero-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/shadcn/table";
import { cn } from "@/src/utils/utils";
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
import TypographyParagraph from "@/src/components/typography/paragraph";

const activityLogs = [
  {
    dateTime: "2023-10-01 09:15:42",
    IP: "192.168.1.10",
    country: "🇺🇸 USA",
    status: "Success",
    actionType: "Login",
    description: "Successful login.",
  },
  {
    dateTime: "2023-10-01 14:30:20",
    IP: "203.45.12.5",
    country: "🇨🇦 Canada",
    status: "Success",
    actionType: "Data Update",
    description: "Email address updated.",
  },
  {
    dateTime: "2023-10-02 10:05:17",
    IP: "128.66.2.14",
    country: "🇩🇪 Germany",
    status: "Failed",
    actionType: "Password Change",
    description: "Failed password change attempt.",
  },
  {
    dateTime: "2023-10-03 08:45:55",
    IP: "72.98.11.8",
    country: "🇬🇧 UK",
    status: "Success",
    actionType: "Logout",
    description: "Successful logout.",
  },
  {
    dateTime: "2023-10-04 12:20:37",
    IP: "203.45.12.5",
    country: "🇨🇦 Canada",
    status: "Success",
    actionType: "Data Update",
    description: "Email address updated.",
  },
  {
    dateTime: "2023-10-05 15:55:28",
    IP: "128.66.2.14",
    country: "🇵🇪 Peru",
    status: "Failed",
    actionType: "Password Change",
    description: "Failed password change attempt.",
  },
  {
    dateTime: "2023-10-06 14:12:10",
    IP: "192.168.1.10",
    country: "🇺🇸 USA",
    status: "Success",
    actionType: "Login",
    description: "Successful login.",
  },
  {
    dateTime: "2023-10-07 09:30:42",
    IP: "72.98.11.8",
    country: "🇬🇧 UK",
    status: "Success",
    actionType: "Logout",
    description: "Successful logout.",
  },
  {
    dateTime: "2023-10-08 16:40:53",
    IP: "128.66.2.14",
    country: "🇩🇪 Germany",
    status: "Success",
    actionType: "Data Update",
    description: "Email address updated.",
  },
  {
    dateTime: "2023-10-09 18:20:15",
    IP: "203.45.12.5",
    country: "🇨🇦 Canada",
    status: "Failed",
    actionType: "Password Change",
    description: "Failed password change attempt.",
  },
];

export default function ActivityLogsSettings() {
  return (
    <div>
      <HeroHeaderSettings
        title="Activity History and Logs"
        description="Access a detailed log of your recent actions and adjust data retention settings."
      />
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <TypographyH4>View Activity Logs</TypographyH4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Time</TableHead>
                <TableHead>IP</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityLogs.map((log) => (
                <TableRow key={log.IP}>
                  <TableCell>{log.dateTime}</TableCell>
                  <TableCell>{log.IP}</TableCell>
                  <TableCell>{log.country}</TableCell>
                  <TableCell>
                    <span
                      className={cn("p-2 rounded", {
                        "bg-green-500/20 text-green-500":
                          log.status === "Success",
                        "bg-red-500/20 text-red-400": log.status === "Failed",
                      })}
                    >
                      {log.status}
                    </span>
                  </TableCell>
                  <TableCell>{log.actionType}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {log.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="space-y-4">
          <TypographyH4>Clear Activity Logs</TypographyH4>
          <div className="space-y-2">
            <TypographyParagraph className="text-foreground/80">
              This you to clear your activity log, which contains a record of
              your recent actions and account activity.
            </TypographyParagraph>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Clear Activity Log</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to clear your activity log?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will permanently remove all recorded activities,
                    and you won't be able to recover them. Please confirm to
                    proceed."
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
