import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  TreePine,
  Smartphone,
  Bone as Drone,
  CheckCircle,
  Coins,
  ShoppingCart,
  Users,
  Camera,
  FileText,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Plantation",
      description:
        "NGOs and coastal panchayats plant mangroves, seagrass, or restore salt marshes in designated coastal areas.",
      icon: TreePine,
      details: [
        "Site selection based on ecological suitability",
        "Community training on restoration techniques",
        "Initial planting with GPS coordinates recorded",
      ],
      color: "primary",
    },
    {
      number: 2,
      title: "Mobile Upload",
      description:
        "Community members use mobile apps to upload photos, GPS data, and progress reports of restoration sites.",
      icon: Smartphone,
      details: ["Easy-to-use mobile application", "Photo documentation with timestamps", "GPS location verification"],
      color: "secondary",
    },
    {
      number: 3,
      title: "Drone Scan",
      description:
        "Regular drone surveillance provides aerial verification of restoration progress and ecosystem health.",
      icon: Drone,
      details: ["High-resolution aerial imagery", "Vegetation health analysis", "Growth pattern monitoring"],
      color: "accent",
    },
    {
      number: 4,
      title: "Verifier Approval",
      description:
        "NCCR (National Centre for Coastal Research) experts verify the restoration data and approve carbon sequestration calculations.",
      icon: CheckCircle,
      details: [
        "Scientific validation of restoration success",
        "Carbon sequestration measurement",
        "Compliance with national standards",
      ],
      color: "chart-2",
    },
    {
      number: 5,
      title: "Carbon Credit Issuance",
      description:
        "Smart contracts automatically mint carbon credits based on verified restoration data and carbon sequestration rates.",
      icon: Coins,
      details: ["Automated credit calculation", "Blockchain-secured issuance", "Transparent pricing mechanism"],
      color: "chart-3",
    },
    {
      number: 6,
      title: "Marketplace",
      description:
        "Businesses purchase verified carbon credits through the transparent marketplace, supporting restoration communities.",
      icon: ShoppingCart,
      details: [
        "Direct purchase from restoration projects",
        "Impact tracking and reporting",
        "Fair compensation to communities",
      ],
      color: "chart-4",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">How It Works</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            A transparent, blockchain-powered process from restoration to carbon credit issuance, ensuring every step is
            verifiable and contributes to genuine climate impact.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">The Complete Process</h2>
            <p className="text-lg text-muted-foreground">
              From planting to marketplace - every step is transparent and verifiable
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 1

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-${step.color}/10 rounded-full flex items-center justify-center text-${step.color} font-bold text-lg`}
                      >
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-muted-foreground">
                          <div className={`w-1.5 h-1.5 bg-${step.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <Card className="w-full max-w-md">
                      <CardContent className="p-8 text-center">
                        <div
                          className={`w-20 h-20 bg-${step.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <IconComponent className={`w-10 h-10 text-${step.color}`} />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">Step {step.number} of 6</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center">
                      <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technology Integration</h2>
            <p className="text-lg text-muted-foreground">
              Multiple data sources ensure comprehensive verification and transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Data Collection</h3>
                <p className="text-muted-foreground">
                  Community members capture real-time data using smartphones with GPS verification and timestamp
                  authentication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Drone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Drone Surveillance</h3>
                <p className="text-muted-foreground">
                  Regular aerial monitoring provides independent verification of restoration progress and ecosystem
                  health metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Blockchain Registry</h3>
                <p className="text-muted-foreground">
                  All data is stored immutably on blockchain with IPFS for evidence storage, ensuring permanent
                  transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why This Process Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>For Communities</span>
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fair compensation for restoration work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Simple mobile-first reporting tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Training and capacity building support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Long-term livelihood opportunities</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>For Buyers</span>
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Verified, high-quality carbon credits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete transparency and traceability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Direct impact on climate goals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compliance with international standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Participate?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the transparent blue carbon ecosystem and contribute to India's climate goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/communities">
              <Button size="lg">For Communities</Button>
            </Link>
            <Link href="/buyers">
              <Button variant="outline" size="lg">
                For Buyers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
