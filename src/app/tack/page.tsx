import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tack",
  robots: { index: false, follow: false },
};

export default function TackPage() {
  return (
    <SectionWrapper background="gradient" className="min-h-screen pt-40">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <Check className="h-8 w-8 text-success" />
        </div>

        <h1 className="text-h1 mt-6 font-[family-name:var(--font-display)] font-medium text-white">
          Tack!
        </h1>

        <p className="text-body-lg mt-4 text-white/60">
          Vi har tagit emot ditt meddelande och återkommer inom 24 timmar.
        </p>

        <div className="mt-8">
          <Button href="/" variant="secondary">
            Tillbaka till startsidan
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
