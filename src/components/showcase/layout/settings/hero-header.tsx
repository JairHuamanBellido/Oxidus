import { Separator } from "@/src/components/shadcn/separator";
import TypographyH3 from "@/src/components/typography/h3";
import TypographyMuted from "@/src/components/typography/muted";

interface Props {
  title: string;
  description: string;
}
export default function HeroHeaderSettings({ title, description }: Props) {
  return (
    <div className="w-full relative flex flex-col my-4">
      <TypographyH3 className="mb-1">{title}</TypographyH3>
      <TypographyMuted className="mb-4">{description}</TypographyMuted>
      <Separator />
    </div>
  );
}
