"use client";
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
import { cn } from "@/src/utils/utils";
import { Container } from "lucide-react";

export default function TableLogs() {
  const logs = [
    {
      timestamp: "2025-06-12T10:00:01",
      container: "container1",
      level: "INFO",
      message: "Server started successfully",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:05",
      container: "container2",
      level: "DEBUG",
      message: JSON.stringify({ db: "connected", retries: 1 }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:10",
      container: "container3",
      level: "WARN",
      message: "High memory usage detected (85%)",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:14",
      container: "container4",
      level: "ERROR",
      message: "Unhandled exception: TypeError at line 42",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:18",
      container: "container5",
      level: "INFO",
      message: "Cache cleared successfully",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:22",
      container: "container1",
      level: "INFO",
      message: "Listening on port 8080",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:26",
      container: "container2",
      level: "DEBUG",
      message: JSON.stringify({ latency: "120ms", endpoint: "/api/user" }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:30",
      container: "container3",
      level: "WARN",
      message: "Disk space low on /var/lib/docker",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:34",
      container: "container4",
      level: "ERROR",
      message: JSON.stringify({
        error: "ECONNREFUSED",
        service: "auth-service",
      }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:38",
      container: "container5",
      level: "INFO",
      message: "Background job completed",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:42",
      container: "container1",
      level: "DEBUG",
      message: JSON.stringify({ cacheHits: 34, cacheMisses: 2 }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:46",
      container: "container2",
      level: "INFO",
      message: "User login successful: user123",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:50",
      container: "container3",
      level: "ERROR",
      message: "Service timeout after 5s on /payments",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:54",
      container: "container4",
      level: "INFO",
      message: "Restart triggered due to config update",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:00:58",
      container: "container5",
      level: "DEBUG",
      message: JSON.stringify({ queueLength: 0, workers: 3 }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:02",
      container: "container1",
      level: "WARN",
      message: "Deprecated API usage in module utils.js",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:06",
      container: "container2",
      level: "INFO",
      message: "Health check passed",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:10",
      container: "container3",
      level: "DEBUG",
      message: JSON.stringify({ ping: "75ms", status: "ok" }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:14",
      container: "container4",
      level: "ERROR",
      message: "Failed to authenticate JWT: signature invalid",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:18",
      container: "container5",
      level: "INFO",
      message: "Database migration complete",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:22",
      container: "container1",
      level: "DEBUG",
      message: JSON.stringify({ memory: "512MB", cpu: "2.5%" }),
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:26",
      container: "container2",
      level: "WARN",
      message: "Connection pool limit reached",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:30",
      container: "container3",
      level: "INFO",
      message: "WebSocket connection established",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:34",
      container: "container4",
      level: "ERROR",
      message: "Container crashed unexpectedly (exit code 137)",
      key: window.crypto.randomUUID(),
    },
    {
      timestamp: "2025-06-12T10:01:38",
      container: "container5",
      level: "INFO",
      message: "Scheduled backup completed",
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
              <TableHead className="p-0">Timestamp</TableHead>
              <TableHead className="p-0">Level</TableHead>
              <TableHead className="p-0">Container</TableHead>
              <TableHead className="p-0">Key</TableHead>
              <TableHead className="p-0">Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow className="hover:bg-transparent " key={log.key}>
                <TableCell className=" py-[2px] px-[2px] max-w-[100px] truncate">
                  {log.timestamp}
                </TableCell>
                <TableCell
                  className={cn(" py-[2px] px-[2px] text-center", {
                    " bg-red-600/20 text-red-500": log.level === "ERROR",
                  })}
                >
                  <TypographyParagraph>{log.level}</TypographyParagraph>
                </TableCell>
                <TableCell className=" py-[2px] px-[2px] max-w-[100px]">
                  <div className="w-fit cursor-pointer rounded  p-2 flex items-center space-x-2 hover:bg-muted">
                    <Container size={12} strokeWidth={1} />
                    <TypographyParagraph>{log.container}</TypographyParagraph>
                  </div>
                </TableCell>
                <TableCell className=" py-[2px] px-1  truncate">
                  {log.key}
                </TableCell>

                <TableCell className=" py-[2px] px-2  truncate">
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
