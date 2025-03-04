import { PageHeader } from "@/components/page-header"
import { ServiceCard } from "@/components/service-card"
import { CtaSection } from "@/components/cta-section"
import { PageTransition } from "@/components/page-transition"

export const metadata = {
  title: "Our Services | Business Name",
  description: "Explore our comprehensive range of services designed to help your business succeed.",
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Service One",
      description: "A comprehensive solution designed to address your specific needs with precision and efficiency.",
      price: "$99",
      features: [
        "Feature one description",
        "Feature two description",
        "Feature three description",
        "Feature four description",
      ],
      imageSrc: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Service Two",
      description: "An advanced offering that takes your capabilities to the next level with innovative approaches.",
      price: "$199",
      features: [
        "Feature one description",
        "Feature two description",
        "Feature three description",
        "Feature four description",
        "Feature five description",
      ],
      imageSrc: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Service Three",
      description: "Our premium service package that delivers comprehensive solutions for complex challenges.",
      price: "$299",
      features: [
        "Feature one description",
        "Feature two description",
        "Feature three description",
        "Feature four description",
        "Feature five description",
        "Feature six description",
      ],
      imageSrc: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Service Four",
      description: "A specialized service tailored to meet unique requirements with customized solutions.",
      price: "$399",
      features: [
        "Feature one description",
        "Feature two description",
        "Feature three description",
        "Feature four description",
      ],
      imageSrc: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Service Five",
      description: "An integrated approach that combines multiple capabilities for maximum impact and efficiency.",
      price: "$499",
      features: [
        "Feature one description",
        "Feature two description",
        "Feature three description",
        "Feature four description",
        "Feature five description",
      ],
      imageSrc: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Service Six",
      description: "Our most comprehensive package designed for businesses seeking end-to-end solutions.",
      price: "$599",
      features: [
        "Feature one description",
        "Feature two description",
        "Feature three description",
        "Feature four description",
        "Feature five description",
        "Feature six description",
      ],
      imageSrc: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <PageHeader
          title="Our Services"
          description="Explore our comprehensive range of services designed to help your business succeed."
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We follow a structured approach to ensure the best results for our clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mt-4">Consultation</h3>
                <p className="text-center text-muted-foreground">
                  We begin by understanding your specific needs and objectives through a detailed consultation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mt-4">Planning</h3>
                <p className="text-center text-muted-foreground">
                  Our team develops a comprehensive plan tailored to your requirements and goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mt-4">Implementation</h3>
                <p className="text-center text-muted-foreground">
                  We execute the plan with precision, keeping you informed throughout the process.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mt-4">Review & Refine</h3>
                <p className="text-center text-muted-foreground">
                  We continuously monitor results and make adjustments to ensure optimal outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </div>
    </PageTransition>
  )
}

