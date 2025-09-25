import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Smartphone,
  GraduationCap,
  IndianRupee,
  TreePine,
  Award,
  CheckCircle,
  ArrowRight,
  Building,
  Heart,
  Leaf,
} from "lucide-react"
import Link from "next/link"

export default function CommunitiesPage() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Fair Compensation",
      description:
        "Receive direct payments for successful restoration work through blockchain-secured smart contracts.",
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Easy Mobile Reporting",
      description:
        "Simple mobile app for uploading photos, GPS data, and progress reports - no technical expertise required.",
      color: "secondary",
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description:
        "Comprehensive training programs on restoration techniques, mobile app usage, and project management.",
      color: "accent",
    },
    {
      icon: Award,
      title: "Recognition & Incentives",
      description: "Performance-based incentives and recognition for outstanding restoration achievements.",
      color: "chart-2",
    },
  ]

  const participantTypes = [
    {
      title: "NGOs",
      description: "Non-governmental organizations focused on environmental conservation and coastal restoration",
      icon: Heart,
      examples: [
        "Coastal Conservation Foundation",
        "Mangrove Action Project India",
        "Blue Carbon Initiative",
        "Wetlands International",
      ],
      responsibilities: [
        "Lead restoration projects",
        "Train local communities",
        "Coordinate with panchayats",
        "Monitor project progress",
      ],
    },
    {
      title: "Coastal Panchayats",
      description:
        "Local government bodies in coastal areas responsible for community development and environmental protection",
      icon: Building,
      examples: [
        "Sundarbans Gram Panchayat",
        "Chilika Lake Panchayat",
        "Pulicat Lake Panchayat",
        "Backwater Panchayats Kerala",
      ],
      responsibilities: [
        "Provide local coordination",
        "Engage community members",
        "Ensure project compliance",
        "Facilitate land access",
      ],
    },
    {
      title: "Local Communities",
      description: "Coastal residents, fishermen, and local workers directly involved in restoration activities",
      icon: Users,
      examples: ["Fishing communities", "Coastal farmers", "Local youth groups", "Women's self-help groups"],
      responsibilities: [
        "Participate in planting",
        "Monitor site conditions",
        "Report through mobile app",
        "Maintain restoration sites",
      ],
    },
  ]

  const onboardingSteps = [
    {
      step: 1,
      title: "Registration",
      description: "Sign up on the platform with organization details and coastal area information",
    },
    {
      step: 2,
      title: "Verification",
      description: "NCCR verifies your organization and approves participation in the program",
    },
    {
      step: 3,
      title: "Training",
      description: "Complete online and field training on restoration techniques and mobile app usage",
    },
    {
      step: 4,
      title: "Project Assignment",
      description: "Receive assigned restoration sites based on ecological suitability and community capacity",
    },
    {
      step: 5,
      title: "Implementation",
      description: "Begin restoration work with ongoing support and monitoring through the platform",
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
              src="/images/community-training.jpg"
              alt="Coastal community members participating in restoration training"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Communities at the Heart of Blue Carbon
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Empowering NGOs, coastal panchayats, and local communities to lead blue carbon restoration while earning
            fair compensation through transparent blockchain technology.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits for Communities</h2>
            <p className="text-lg text-muted-foreground">
              Our platform ensures communities are fairly compensated and supported throughout the restoration process
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

      {/* Participant Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who Can Participate</h2>
            <p className="text-lg text-muted-foreground">
              Different types of organizations and communities play vital roles in blue carbon restoration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {participantTypes.map((type, index) => {
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
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Example Organizations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {type.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
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

      {/* Onboarding Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Getting Started</h2>
            <p className="text-lg text-muted-foreground">
              Simple onboarding process to join the blue carbon restoration program
            </p>
          </div>

          <div className="space-y-8">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < onboardingSteps.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/mangrove-restoration.jpg"
              alt="Successful mangrove restoration by community members"
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-chart-2/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-4xl mx-auto text-center text-white px-4">
                <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
                <p className="text-lg">Real results from communities participating in blue carbon restoration</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">50,000+</div>
                <p className="text-muted-foreground">Mangrove saplings planted by participating communities</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                <p className="text-muted-foreground">Communities actively participating in restoration projects</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">₹2.5Cr+</div>
                <p className="text-muted-foreground">Total compensation distributed to communities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Join the Blue Carbon Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're an NGO, panchayat, or community group, there's a place for you in India's blue carbon
            restoration movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="group">
                Register Your Organization
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get More Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
