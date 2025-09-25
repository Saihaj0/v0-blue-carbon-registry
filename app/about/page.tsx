import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Waves, TreePine, Fish, Target, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float">
              <Waves className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About Blue Carbon Ecosystems
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Understanding the critical role of coastal ecosystems in India's climate action and how blockchain
            technology ensures transparency in restoration efforts.
          </p>
        </div>
      </section>

      {/* Blue Carbon Explanation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is Blue Carbon?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Blue carbon refers to the carbon captured and stored by coastal and marine ecosystems, particularly
                mangroves, seagrass beds, and salt marshes. These ecosystems are among the most carbon-rich on Earth,
                storing up to 10 times more carbon per hectare than terrestrial forests.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                India's vast coastline of over 7,500 kilometers hosts extensive blue carbon ecosystems that play a
                crucial role in climate regulation, coastal protection, and biodiversity conservation.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TreePine className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Mangroves</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Waves className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Seagrass</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Fish className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Salt Marshes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/mangrove-forest-with-clear-blue-water-and-diverse-.jpg"
                alt="Blue carbon ecosystem showing mangroves and marine life"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* India's Climate Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Supporting India's Climate Commitments</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform directly contributes to India's Nationally Determined Contributions (NDCs) and climate
              targets through verifiable ecosystem restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Net Zero by 2070</h3>
                <p className="text-muted-foreground">
                  Contributing to India's commitment to achieve net-zero emissions by 2070 through enhanced carbon
                  sequestration in coastal ecosystems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">NDC Targets</h3>
                <p className="text-muted-foreground">
                  Supporting the goal to reduce emissions intensity of GDP by 45% by 2030 and create additional carbon
                  sinks through restoration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Benefits</h3>
                <p className="text-muted-foreground">
                  Providing livelihood opportunities for coastal communities while achieving environmental goals through
                  participatory restoration programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blockchain Transparency */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Blockchain for Blue Carbon?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Traditional carbon credit systems often lack transparency and verifiability. Our blockchain-based approach
            ensures every restoration project is traceable, verifiable, and contributes to genuine climate impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Transparency Benefits</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Immutable record of all restoration activities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time verification through drone and mobile data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated carbon credit issuance based on verified data</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Trust & Verification</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>NCCR-approved verification process</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Smart contracts ensure fair compensation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Global standards compliance for carbon markets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
