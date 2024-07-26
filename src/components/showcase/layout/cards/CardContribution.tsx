import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";

const commits = Array.from({ length: 100 }, (_) => ({
  quantity: Math.random() % 5 === 0 ? Math.random() * 0.5 : Math.random(),
  isEmpty: Math.floor(Math.random() * 100) % 3 === 0,
}));

export default function CardContribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-light">Contributions</CardTitle>
        <div className="flex items-center space-x-4 pt-4">
          <div>
            <TypographyParagraph className="text-xl">
              83,490
            </TypographyParagraph>
            <TypographyMuted>Contribution in this year</TypographyMuted>
          </div>
          <div>
            <TypographyParagraph className="text-xl">
              21 days
            </TypographyParagraph>
            <TypographyMuted>Long Streak</TypographyMuted>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1 w-full items-center">
        {commits.map((commit, index) => (
          <div
            key={`commit-${index}-${commit.quantity}`}
            style={{
              opacity: commit.isEmpty ? "0.10" : commit.quantity,
            }}
            className={"h-4 w-4 bg-primary"}
          ></div>
        ))}
      </CardContent>
    </Card>
  );
}
