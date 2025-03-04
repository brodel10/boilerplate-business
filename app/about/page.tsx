import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { TeamMember } from "@/components/team-member"
import { PageTransition } from "@/components/page-transition"

export const metadata = {
  title: "About Us | Business Name",
  description: "Learn about our company history, mission, and the team behind our success.",
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <PageHeader
          title="About Us"
          description="Learn about our company history, mission, and the team behind our success."
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2010, Business Name began with a simple mission: to provide exceptional products and
                    services that make a difference in our customers' lives.
                  </p>
                  <p>
                    What started as a small operation has grown into a thriving business, serving hundreds of satisfied
                    customers across the region. Our journey has been marked by continuous innovation, unwavering
                    commitment to quality, and a deep understanding of our customers' needs.
                  </p>
                  <p>
                    Today, we continue to build on our strong foundation, expanding our offerings while staying true to
                    the core values that have guided us from the beginning.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Company history"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Sets Us Apart</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our unique approach and commitment to excellence make us the preferred choice for our customers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Customer-Centric Approach</h3>
                <p className="text-center text-muted-foreground">
                  We put our customers at the center of everything we do, tailoring our solutions to meet their specific
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Experienced Team</h3>
                <p className="text-center text-muted-foreground">
                  Our team brings decades of combined experience and expertise to every project we undertake.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Innovative Solutions</h3>
                <p className="text-center text-muted-foreground">
                  We leverage the latest technologies and methodologies to deliver innovative solutions that drive
                  results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The dedicated professionals who make our success possible.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <TeamMember
                name="John Doe"
                position="CEO & Founder"
                bio="John has over 15 years of experience in the industry and leads our company with vision and integrity."
                imageSrc="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Jane Smith"
                position="Operations Director"
                bio="Jane ensures that our day-to-day operations run smoothly and efficiently to deliver the best results."
                imageSrc="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Michael Johnson"
                position="Technical Lead"
                bio="Michael brings technical expertise and innovation to all our projects and solutions."
                imageSrc="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Sarah Williams"
                position="Customer Relations Manager"
                bio="Sarah is dedicated to ensuring our customers receive exceptional service and support."
                imageSrc="/placeholder.svg?height=300&width=300"
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

