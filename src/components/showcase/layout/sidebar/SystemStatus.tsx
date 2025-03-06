import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { cn } from "@/src/utils/utils";

const lastTwoMonthsApiCalls = [
  {
    date: "2024-01-01",
    apiCalls: 100,
  },
  {
    date: "2024-01-02",
    apiCalls: 120,
  },
  {
    date: "2024-01-03",
    apiCalls: 95,
  },
  {
    date: "2024-01-04",
    apiCalls: 2500,
  },
  {
    date: "2024-01-05",
    apiCalls: 110,
  },
  {
    date: "2024-01-06",
    apiCalls: 3000,
    note: "Major DDoS attack",
  },
  {
    date: "2024-01-07",
    apiCalls: 2800,
    note: "DDoS attack mitigation in progress",
  },
  {
    date: "2024-01-08",
    apiCalls: 105,
  },
  {
    date: "2024-01-09",
    apiCalls: 115,
  },
  {
    date: "2024-01-10",
    apiCalls: 125,
  },
  {
    date: "2024-01-11",
    apiCalls: 4500,
  },
  {
    date: "2024-01-12",
    apiCalls: 4200,
  },
  {
    date: "2024-01-13",
    apiCalls: 130,
  },
  {
    date: "2024-01-14",
    apiCalls: 145,
  },
  { date: "2024-01-15", apiCalls: 630 },
  { date: "2024-01-16", apiCalls: 240 },
  { date: "2024-01-17", apiCalls: 150 },
  { date: "2024-01-18", apiCalls: 60 },
  { date: "2024-01-19", apiCalls: 1270 },
  { date: "2024-01-20", apiCalls: 1280 },
  { date: "2024-01-21", apiCalls: 1290 },
  { date: "2024-01-22", apiCalls: 1300 },
  { date: "2024-01-23", apiCalls: 1310 },
  { date: "2024-01-24", apiCalls: 520 },
  { date: "2024-01-25", apiCalls: 332 },
  { date: "2024-01-26", apiCalls: 389 },
  { date: "2024-01-27", apiCalls: 482 },
  { date: "2024-01-28", apiCalls: 512 },
  { date: "2024-01-29", apiCalls: 370 },
  { date: "2024-01-30", apiCalls: 380 },
  { date: "2024-01-31", apiCalls: 234 },
  { date: "2024-02-01", apiCalls: 102 },
  { date: "2024-02-02", apiCalls: 789 },
  { date: "2024-02-03", apiCalls: 182 },
  { date: "2024-02-04", apiCalls: 387 },
  { date: "2024-02-05", apiCalls: 1723 },
  { date: "2024-02-06", apiCalls: 1234 },
  { date: "2024-02-07", apiCalls: 1234 },
  { date: "2024-02-08", apiCalls: 823 },
  { date: "2024-02-09", apiCalls: 512 },
  { date: "2024-02-10", apiCalls: 818 },
  { date: "2024-02-11", apiCalls: 132 },
  { date: "2024-02-12", apiCalls: 510 },
  { date: "2024-02-13", apiCalls: 520 },
  { date: "2024-02-14", apiCalls: 530 },
  { date: "2024-02-15", apiCalls: 540 },
  { date: "2024-02-16", apiCalls: 550 },
  { date: "2024-02-17", apiCalls: 560 },
  { date: "2024-02-18", apiCalls: 570 },
  { date: "2024-02-19", apiCalls: 580 },
  { date: "2024-02-20", apiCalls: 590 },
  { date: "2024-02-21", apiCalls: 200 },
  { date: "2024-02-22", apiCalls: 310 },
  { date: "2024-02-23", apiCalls: 720 },
  { date: "2024-02-24", apiCalls: 130 },
  { date: "2024-02-25", apiCalls: 140 },
  { date: "2024-02-26", apiCalls: 350 },
  { date: "2024-02-27", apiCalls: 660 },
  { date: "2024-02-28", apiCalls: 970 },
  { date: "2024-02-29", apiCalls: 480 },
];

export default function SystemStatus() {
  return (
    <div className="w-full relative flex flex-col gap-4">
      <div>
        <TypographyParagraph className="text-xl">
          Live Status
        </TypographyParagraph>
        <TypographyMuted>Live status of the system.</TypographyMuted>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-full flex items-center justify-between">
          <TypographyParagraph>API</TypographyParagraph>
          <TypographyMuted>94.2% Uptime</TypographyMuted>
        </div>
        <div className="flex gap-[2px]">
          {lastTwoMonthsApiCalls.map((data) => (
            <div
              key={`api-system-status-${data.date}`}
              className={cn("w-full h-[16px]", {
                "bg-green-500": data.apiCalls < 700,
                "bg-yellow-500": data.apiCalls >= 700 && data.apiCalls < 1000,
                "bg-red-500": data.apiCalls >= 1000,
              })}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-full flex items-center justify-between">
          <TypographyParagraph>Websockets</TypographyParagraph>
          <TypographyMuted>62.41% Uptime</TypographyMuted>
        </div>
        <div className="flex gap-[2px]">
          {lastTwoMonthsApiCalls.map((data) => (
            <div
              key={`websockets-system-status-${data.date}`}
              className={cn("w-full h-[16px]", {
                "bg-green-500": data.apiCalls < 300,
                "bg-yellow-500": data.apiCalls >= 300 && data.apiCalls < 600,
                "bg-red-500": data.apiCalls >= 600,
              })}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-full flex items-center justify-between">
          <TypographyParagraph>Transactions APIs</TypographyParagraph>
          <TypographyMuted>98.73% Uptime</TypographyMuted>
        </div>
        <div className="flex gap-[2px]">
          {lastTwoMonthsApiCalls.map((data) => (
            <div
              key={`transactions-system-status-${data.date}`}
              className={cn("w-full h-[16px]", {
                "bg-green-500": data.apiCalls < 1000,
                "bg-yellow-500": data.apiCalls >= 1000 && data.apiCalls < 1500,
                "bg-red-500": data.apiCalls >= 1500,
              })}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
