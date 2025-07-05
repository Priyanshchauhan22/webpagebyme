"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getSummary } from "@/app/publications/actions";
import { publications } from "@/lib/data";
import type { Publication } from "@/lib/data";
import { Loader2, BookOpen } from "lucide-react";

export function PublicationsList() {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [activeAccordionItem, setActiveAccordionItem] = useState<string | null>(null);

  const handleGenerateSummary = async (pub: Publication) => {
    if (summaries[pub.id] || loading[pub.id]) return;

    setLoading((prev) => ({ ...prev, [pub.id]: true }));
    try {
      const summary = await getSummary({ publicationText: pub.fullText });
      setSummaries((prev) => ({ ...prev, [pub.id]: summary }));
    } catch (error) {
      console.error(error);
      setSummaries((prev) => ({
        ...prev,
        [pub.id]: "An error occurred while generating the summary.",
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [pub.id]: false }));
    }
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-4"
      onValueChange={(value) => setActiveAccordionItem(value)}
    >
      {publications.map((pub) => (
        <AccordionItem value={pub.id} key={pub.id} className="border rounded-lg bg-card">
          <AccordionTrigger className="p-6 text-left hover:no-underline">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-primary">{pub.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {pub.authors.join(", ")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <em>{pub.journal}</em>, {pub.year}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0">
            {activeAccordionItem === pub.id && (
              <>
                {!summaries[pub.id] && (
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                    <h4 className="font-semibold mb-2">Want a quick overview?</h4>
                    <p className="text-sm text-muted-foreground mb-4">Generate an AI-powered summary of this paper.</p>
                    <Button
                      onClick={() => handleGenerateSummary(pub)}
                      disabled={loading[pub.id]}
                    >
                      {loading[pub.id] ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        "Generate Summary"
                      )}
                    </Button>
                  </div>
                )}
                {summaries[pub.id] && (
                  <div className="prose prose-sm max-w-none text-foreground">
                    <h4 className="font-semibold mb-2 text-foreground">AI Generated Summary</h4>
                    <p>{summaries[pub.id]}</p>
                  </div>
                )}
              </>
            )}
            <div className="mt-4">
                <a 
                    href={`https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                >
                    View Publication on DOI
                </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
