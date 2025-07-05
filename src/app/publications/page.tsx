import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    value: "123 Science Avenue, Innovation City, SC 45678",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@researchhub.edu",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "(123) 456-7890",
  },
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground">
          We welcome inquiries from prospective students, potential collaborators, and the public. Please use the form below or contact us directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-headline font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactDetails.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-muted">
                {/* In a real app, you would use a map component here */}
                <img src="https://placehold.co/600x400.png" alt="Map to the lab" data-ai-hint="map location" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <Card className="p-6 md:p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}