import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/shadcn/table";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Container } from "lucide-react";

export default function TableLogsContainers() {
  const logs = [
    {
      timestamp: "2025-06-11T16:13:36",
      container: "container1",
      level: "INFO",
      message: "Listening on port 3000",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-11T16:13:36",
      container: "container2",
      level: "DEBUG",
      message: "Connection latency is above threshold",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-11T16:13:36",
      container: "container3",
      level: "INFO",
      message: "Forwarding request to web-server",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-11T16:13:36",
      container: "container4",
      level: "ERROR",
      message: "Failed to validate token: ExpiredSignature",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-11T16:13:36",
      container: "container5",
      level: "INFO",
      message: "Task #1245 completed in 540ms",
      key: window.crypto.randomUUID(),
    },
  ];
  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle>Container Logs</CardTitle>
        <CardDescription>
          Live output from containers. Use filters to focus on a specific
          container or log level.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-1">Timestamp</TableHead>
              <TableHead className="p-1">Key</TableHead>
              <TableHead className="p-1">Container</TableHead>
              <TableHead className="p-1">Level</TableHead>
              <TableHead className="p-1">Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow className="hover:bg-transparent " key={log.key}>
                <TableCell className="p-1 max-w-[100px] truncate">
                  {log.timestamp}
                </TableCell>
                <TableCell className="p-1 max-w-[100px] truncate">
                  {log.key}
                </TableCell>
                <TableCell className="p-1">
                  <div className="w-fit cursor-pointer rounded  p-2 flex items-center space-x-2 hover:bg-muted">
                    <Container size={12} strokeWidth={1} />
                    <TypographyParagraph>{log.container}</TypographyParagraph>
                  </div>
                </TableCell>
                <TableCell className="p-1">
                  <TypographyParagraph>{log.level}</TypographyParagraph>
                </TableCell>
                <TableCell className="p-1 max-w-[150px] truncate">
                  {log.message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
