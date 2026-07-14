import { createFileRoute } from "@tanstack/react-router";
import { assets } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — ManaCouture" },
      { name: "description", content: "The atelier, the weavers and the philosophy behind ManaCouture." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative h-[70vh]">
        <img src={assets.festival} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-6">
          <div className="eyebrow text-primary-foreground/80 mb-4">Since 2018</div>
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]">
            A Kerala atelier for the modern woman.
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/80">
          "We weave for the women who wear their culture with quiet pride —
          brides, mothers, daughters, and the friends who dance with them
          under Onam lamps."
        </p>
        <div className="eyebrow mt-8">— Anjali Menon, Founder</div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 grid md:grid-cols-3 gap-10">
        {[
          { title: "The Loom", body: "Every ManaCouture piece begins on a hand-pit loom in Balaramapuram, where third-generation weavers work with pure zari and combed cotton." },
          { title: "The Atelier", body: "Our Kochi atelier finishes each piece — hand-hemmed, pressed, wrapped in muslin and packed in reusable wooden trunks." },
          { title: "The Client", body: "From bridal fittings to festival curations, our client care team offers virtual and in-atelier consultations, worldwide." },
        ].map((s) => (
          <div key={s.title}>
            <div className="eyebrow mb-3">{s.title}</div>
            <h3 className="font-display text-2xl mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
