import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Users, Globe, Leaf, Waves } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/earth.jpg')`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float border border-white/20">
                <Waves className="w-8 h-8 text-white animate-wave" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
              Blockchain for Blue Carbon:
              <span className="text-blue-300"> Transparent MRV</span> & Carbon Credits
            </h1>
            <p className="text-xl text-gray-100 mb-8 text-pretty max-w-3xl mx-auto drop-shadow-lg">
              Restoring mangroves, seagrass, and salt marshes with blockchain transparency. Supporting India's climate
              goals through verifiable ecosystem restoration and carbon credit generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/features">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white shadow-lg">
                  Explore the Registry
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                >
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/blue-carbon-ecosystem.jpg"
              alt="Blue carbon ecosystem with mangroves and marine life"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Transparent Blue Carbon Solutions</h2>
              <p className="text-lg max-w-2xl">
                Blockchain technology ensures every restoration project is verifiable, traceable, and contributes to
                India's climate commitments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Immutable Registry</h3>
                <p className="text-sm text-muted-foreground">
                  Blockchain-secured project data that cannot be altered or manipulated
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Smart Contracts</h3>
                <p className="text-sm text-muted-foreground">
                  Automated carbon credit issuance based on verified restoration data
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
                <p className="text-sm text-muted-foreground">
                  NGOs and coastal panchayats participate in restoration efforts
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-chart-2/20 transition-colors">
                  <Globe className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Global Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing to international climate goals and carbon markets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join the Blue Carbon Revolution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're an NGO, coastal panchayat, or business looking to purchase carbon credits, our platform
            provides the transparency and trust you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/communities">
              <Button size="lg" variant="outline">
                For Communities
              </Button>
            </Link>
            <Link href="/buyers">
              <Button size="lg">For Buyers</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
