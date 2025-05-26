"use server";

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export interface ContactFormState {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
}

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // Simulate sending email or saving to a database
  console.log("Contact Form Submitted:", {
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    message: validatedFields.data.message,
  });

  // In a real application, you would integrate with an email service
  // or save the inquiry to a database here.

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    success: true,
    errors: {}, // Clear errors on success
  };
}
