"use server";

import { summarizePublication } from "@/ai/flows/summarize-publication-flow";
import type { SummarizePublicationInput } from "@/ai/flows/summarize-publication-flow";

export async function getSummary(input: SummarizePublicationInput): Promise<string> {
  try {
    const result = await summarizePublication(input);
    return result.summary;
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Failed to generate summary. Please try again later.";
  }
}
