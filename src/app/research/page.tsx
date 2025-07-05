import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { researchThemes } from "@/lib/data";
import { Check } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">
          Our Research Focus
        </h1>
        <p className="text-lg text-muted-foreground">
          We are dedicated to exploring the frontiers of science through a multi-disciplinary approach. Our work is organized into several key research themes, each tackling fundamental questions and aiming for groundbreaking discoveries.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {researchThemes.map((theme) => (
          <Card key={theme.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <theme.Icon className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline text-2xl">{theme.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-6">{theme.description}</p>
              <h4 className="font-semibold mb-3">Current Projects:</h4>
              <ul className="space-y-2 text-sm">
                {theme.projects.map((project) => (
                  <li key={project} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
