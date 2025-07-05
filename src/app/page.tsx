import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Science Laboratory"
          data-ai-hint="science laboratory"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter mb-4 text-shadow-lg">
            Pioneering the Future of Science
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            The Research Hub is a collective of scientists dedicated to unraveling the complexities of nature and engineering a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/research">
                Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/collaborate">Collaborate With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter">About Our Lab</h2>
              <p className="text-muted-foreground md:text-lg">
                The Research Hub was founded on the principle of interdisciplinary collaboration. We believe that the most significant scientific breakthroughs occur at the intersection of different fields. Our lab brings together experts from neuroscience, genetics, computer science, and quantum physics to tackle some of the most challenging questions of our time.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our mission is to foster an environment of curiosity, rigor, and innovation. We are committed to pushing the boundaries of knowledge, training the next generation of scientists, and translating our discoveries into impactful technologies that benefit society.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team of scientists"
                data-ai-hint="team scientists"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}