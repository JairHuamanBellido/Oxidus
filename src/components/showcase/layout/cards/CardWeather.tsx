import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Droplet } from "lucide-react";

export default function CardWeather() {
  return (
    <Card className="bg-gradient-to-tr from-card to-secondary border-none ">
      <CardHeader className="flex flex-col space-y-4">
        <CardTitle className="font-light flex items-center space-x-2">
          <Droplet />
          <span> Humidity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-6xl font-bold">
          <span>94</span>
          <span className="font-light text-4xl ml-2">%</span>
        </p>
        <p className="text-card-foreground/60 mt-2">
          Stay updated with real-time humidity data to ensure comfort and
          environmental awareness.
        </p>
      </CardContent>
    </Card>
  );
}
