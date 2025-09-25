import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  ShoppingCart,
  BarChart3,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Factory,
  Plane,
  Zap,
  Target,
  Award,
  TrendingUp,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function BuyersPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Credits",
      description:
        "Every carbon credit is backed by blockchain-verified restoration data with NCCR approval and scientific validation.",
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "Transparent Tracking",
      description:
        "Complete traceability from restoration site to credit purchase with real-time impact monitoring and reporting.",
      color: "secondary",
    },
    {
      icon: Globe,
      title: "Climate Impact",
      description:
        "Direct contribution to India's climate goals and international commitments while supporting coastal communities.",
      color: "accent",
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description:
        "Credits meet international standards and can be used for regulatory compliance and voluntary commitments.",
      color: "chart-2",
    },
  ]

  const buyerTypes = [
    {
      title: "Manufacturing Companies",
      icon: Factory,
      description: "Heavy industries looking to offset emissions and meet sustainability targets",
      examples: ["Steel & Cement", "Chemicals & Petrochemicals", "Textiles & Automotive", "Power Generation"],
      useCases: ["Scope 1 & 2 emissions offsetting", "Supply chain decarbonization", "ESG reporting compliance"],
    },
    {
      title: "Aviation & Logistics",
      icon: Plane,
      description: "Transportation companies committed to carbon neutrality and sustainable operations",
      examples: ["Airlines", "Shipping Companies", "Logistics Providers", "Fleet Operators"],
      useCases: ["CORSIA compliance", "Net-zero commitments", "Customer carbon offsetting"],
    },
    {
      title: "Technology Companies",
      icon: Zap,
      description: "Tech firms pursuing carbon neutrality and sustainable business practices",
      examples: ["Data Centers", "Software Companies", "E-commerce Platforms", "Fintech Companies"],
      useCases: ["Carbon neutral operations", "Green cloud computing", "Sustainable product offerings"],
    },
    {
      title: "Financial Institutions",
      icon: Building2,
      description: "Banks and financial services integrating climate risk and sustainable finance",
      examples: ["Commercial Banks", "Investment Firms", "Insurance Companies", "Asset Managers"],
      useCases: ["Portfolio decarbonization", "Green finance products", "Climate risk management"],
    },
  ]

  const corporateLogos = [
    { name: "Tata Group", sector: "Conglomerate" },
    { name: "Reliance Industries", sector: "Energy & Petrochemicals" },
    { name: "Infosys", sector: "Technology" },
    { name: "Mahindra Group", sector: "Automotive" },
    { name: "HDFC Bank", sector: "Financial Services" },
    { name: "ITC Limited", sector: "FMCG" },
  ]

  const purchaseProcess = [
    {
      step: 1,
      title: "Browse Credits",
      description: "Explore available carbon credits from verified restoration projects",
    },
    {
      step: 2,
      title: "Due Diligence",
      description: "Review project details, verification reports, and impact metrics",
    },
    {
      step: 3,
      title: "Purchase",
      description: "Secure purchase through smart contracts with transparent pricing",
    },
    {
      step: 4,
      title: "Retirement",
      description: "Credits are retired on blockchain with permanent record for compliance",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Verified Carbon Credits for Business
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Purchase high-quality, blockchain-verified carbon credits from blue carbon restoration projects. Support
            India's climate action while meeting your sustainability commitments.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Carbon Credits</h2>
            <p className="text-lg text-muted-foreground">
              Transparent, verifiable, and impactful carbon credits that support genuine climate action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-${benefit.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${benefit.color}/20 transition-colors`}
                    >
                      <IconComponent className={`w-6 h-6 text-${benefit.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Buyer Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who Can Purchase</h2>
            <p className="text-lg text-muted-foreground">
              Businesses across industries are using our carbon credits to meet their climate commitments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {buyerTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Industry Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Common Use Cases:</h4>
                      <ul className="space-y-1">
                        {type.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Leading Companies</h2>
            <p className="text-lg text-muted-foreground">
              Major Indian corporations are already using our platform for their carbon offsetting needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {corporateLogos.map((company, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm">{company.name}</h3>
                <p className="text-xs text-muted-foreground">{company.sector}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How to Purchase</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent process to purchase verified carbon credits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {purchaseProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < purchaseProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8">
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Measurable Impact</h2>
            <p className="text-lg text-muted-foreground">Track the real-world impact of your carbon credit purchases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">1.2M</div>
                <p className="text-muted-foreground">Tonnes CO2 sequestered</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">5,000</div>
                <p className="text-muted-foreground">Hectares restored</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                <p className="text-muted-foreground">Corporate buyers</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-chart-2" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                <p className="text-muted-foreground">Verified projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join leading companies in supporting India's blue carbon restoration while meeting your climate commitments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="group">
                Start Purchasing Credits
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Request Enterprise Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
