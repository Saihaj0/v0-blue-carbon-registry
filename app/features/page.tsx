import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Zap,
  Smartphone,
  Users,
  ShoppingCart,
  Database,
  Bone as Drone,
  CheckCircle,
  Globe,
  BarChart3,
  FileText,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Immutable Registry",
      description:
        "Blockchain-secured project data that cannot be altered, ensuring permanent record of all restoration activities and carbon sequestration measurements.",
      benefits: ["Tamper-proof records", "Permanent data storage", "Audit trail transparency"],
      color: "primary",
    },
    {
      icon: Zap,
      title: "Smart Contracts for Carbon Credits",
      description:
        "Automated carbon credit issuance based on verified restoration data, eliminating manual processes and ensuring fair compensation.",
      benefits: ["Automated payments", "Transparent pricing", "Instant credit issuance"],
      color: "secondary",
    },
    {
      icon: Smartphone,
      title: "Drone & Mobile Data Integration",
      description:
        "Seamless integration of mobile uploads and drone surveillance data for comprehensive monitoring of restoration projects.",
      benefits: ["Real-time monitoring", "Multi-source verification", "Easy data collection"],
      color: "accent",
    },
    {
      icon: Users,
      title: "Community Onboarding",
      description:
        "Simple onboarding process for NGOs and coastal panchayats with training, mobile reporting tools, and incentive programs.",
      benefits: ["Easy registration", "Training programs", "Mobile-first design"],
      color: "chart-2",
    },
    {
      icon: ShoppingCart,
      title: "Carbon Credit Marketplace",
      description:
        "Transparent marketplace where businesses can purchase verified carbon credits directly from restoration projects.",
      benefits: ["Direct purchasing", "Price transparency", "Impact tracking"],
      color: "chart-3",
    },
    {
      icon: Database,
      title: "IPFS Evidence Storage",
      description:
        "Decentralized storage of project evidence including photos, videos, and documentation using IPFS technology.",
      benefits: ["Decentralized storage", "Permanent access", "Cost-effective"],
      color: "chart-4",
    },
  ]

  const additionalFeatures = [
    {
      icon: Drone,
      title: "Drone Surveillance",
      description: "Regular aerial monitoring of restoration sites",
    },
    {
      icon: CheckCircle,
      title: "NCCR Verification",
      description: "Official verification by National Centre for Coastal Research",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international carbon credit standards",
    },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Detailed analytics on carbon sequestration and ecosystem health",
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate compliance reports automatically",
    },
    {
      icon: MapPin,
      title: "GIS Integration",
      description: "Geographic information system for precise location tracking",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8 rounded-lg overflow-hidden">
            <img
              src="/images/blockchain-technology.jpg"
              alt="Blockchain technology for transparent carbon credits"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Platform Features</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Comprehensive blockchain-powered tools for transparent blue carbon restoration, verification, and carbon
            credit management.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${feature.color}/20 transition-colors`}
                      >
                        <IconComponent className={`w-6 h-6 text-${feature.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 bg-${feature.color} rounded-full flex-shrink-0`}></div>
                            <span>{benefit}</span>
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

      {/* Additional Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/drone-monitoring.jpg"
              alt="Drone monitoring mangrove restoration sites"
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-4xl mx-auto text-center text-white px-4">
                <h2 className="text-3xl font-bold mb-4">Additional Capabilities</h2>
                <p className="text-lg">
                  Supporting features that enhance the platform's functionality and user experience
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Built on Cutting-Edge Technology</h2>
            <p className="text-lg text-muted-foreground">
              Our platform leverages the latest blockchain and web technologies for maximum reliability and transparency
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">BC</span>
              </div>
              <h3 className="font-medium text-foreground">Blockchain</h3>
              <p className="text-sm text-muted-foreground">Ethereum-compatible</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-secondary">SC</span>
              </div>
              <h3 className="font-medium text-foreground">Smart Contracts</h3>
              <p className="text-sm text-muted-foreground">Solidity-based</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">IPFS</span>
              </div>
              <h3 className="font-medium text-foreground">IPFS Storage</h3>
              <p className="text-sm text-muted-foreground">Decentralized files</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-chart-2">API</span>
              </div>
              <h3 className="font-medium text-foreground">REST APIs</h3>
              <p className="text-sm text-muted-foreground">Mobile integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the transparent blue carbon revolution and contribute to India's climate goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button size="lg">Learn How It Works</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" size="lg">
                Sign Up Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
