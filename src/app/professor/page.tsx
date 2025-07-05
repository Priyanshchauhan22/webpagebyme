import Image from "next/image";
import { professorInfo } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ProfessorPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <Image
            src={professorInfo.photoUrl}
            alt={`Photo of ${professorInfo.name}`}
            data-ai-hint="professor portrait"
            width={250}
            height={250}
            className="rounded-full object-cover mb-6 border-4 border-primary/20 shadow-lg"
          />
          <h1 className="text-3xl font-headline font-bold">{professorInfo.name}</h1>
          <p className="text-primary font-medium mt-1">{professorInfo.title}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {professorInfo.researchFields.map((field) => (
              <Badge key={field} variant="secondary">{field}</Badge>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-headline font-bold mb-6 border-b pb-3">Biography</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            {professorInfo.biography.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
