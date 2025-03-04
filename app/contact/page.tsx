import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageTransition } from "@/components/page-transition";

export const metadata = {
  title: "Contact Us | Business Name",
  description:
    "Get in touch with our team. We're here to help with any questions or inquiries.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <PageHeader
          title="Contact Us"
          description="Get in touch with our team. We're here to help with any questions or inquiries."
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold">Address</h3>
                        <p className="text-muted-foreground">
                          123 Business Street
                          <br />
                          Suite 100
                          <br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">
                          info@businessname.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter mb-4">
                    Business Hours
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-muted-foreground">
                        9:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-video w-full h-[300px] rounded-lg overflow-hidden bg-muted">
                  {/* Replace with actual map embed code */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Interactive Map Embed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
