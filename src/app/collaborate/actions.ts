"use server";

import { z } from "zod";

const collaborationSchema = z.object({
  institution: z.string().min(2, "Institution name is required."),
  contactPerson: z.string().min(2, "Contact person name is required."),
  email: z.string().email("Invalid email address."),
  proposal: z.string().min(20, "Proposal must be at least 20 characters."),
});

export async function submitCollaborationProposal(formData: unknown) {
  const validatedFields = collaborationSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  // In a real application, you would process this proposal data
  console.log("Collaboration proposal received:", validatedFields.data);

  return {
    message: "Thank you for your proposal! Our team will review it and be in touch soon.",
    success: true,
  };
}
