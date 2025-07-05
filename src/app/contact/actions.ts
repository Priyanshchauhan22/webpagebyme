"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(formData: unknown) {
  const validatedFields = contactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  // In a real application, you would process the data here (e.g., send an email, save to a database)
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    success: true,
  };
}
