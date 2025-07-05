import { CollaborationForm } from "@/components/collaboration-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Lightbulb, Target } from "lucide-react";

export default function CollaboratePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">
          Collaborate With Us
        </h1>
        <p className="text-lg text-muted-foreground">
          We believe that great science is a team sport. We are always open to new ideas and partnerships with other labs, institutions, and industry leaders.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-headline font-semibold">Why Partner with the Research Hub?</h2>
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                    <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold">Innovative Environment</h3>
                    <p className="text-sm text-muted-foreground">Access a dynamic, interdisciplinary team at the forefront of scientific research.</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                    <Target className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold">State-of-the-Art Facilities</h3>
                    <p className="text-sm text-muted-foreground">Utilize our cutting-edge equipment and resources for genomics, imaging, and computation.</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                    <Handshake className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-semibold">Impactful Outcomes</h3>
                    <p className="text-sm text-muted-foreground">Join us in translating fundamental discoveries into real-world applications and publications.</p>
                </div>
            </div>
        </div>
        <div className="lg:col-span-3">
          <Card className="p-6 md:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-headline text-2xl">Collaboration Proposal</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CollaborationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}