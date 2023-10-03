import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1>Hello world</h1>

      <Slider defaultValue={[128]} step={1} max={256} />
    </main>
  );
}
