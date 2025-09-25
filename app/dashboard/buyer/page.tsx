"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  ShoppingCart,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  Target,
  Leaf,
  IndianRupee,
  MapPin,
  CheckCircle,
} from "lucide-react"

export default function BuyerDashboard() {
  const navigationItems = [
    { href: "/dashboard/buyer", label: "Overview", icon: Home, active: true },
    { href: "/dashboard/buyer/marketplace", label: "Marketplace", icon: ShoppingCart },
    { href: "/dashboard/buyer/portfolio", label: "My Credits", icon: Target },
    { href: "/dashboard/buyer/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/buyer/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/buyer/settings", label: "Settings", icon: Settings },
  ]

  const recentPurchases = [
    {
      id: 1,
      project: "Sundarbans Mangrove Restoration",
      location: "West Bengal",
      credits: 100,
      price: 2500,
      date: "2024-01-15",
      status: "active",
      co2Offset: 2.5,
    },
    {
      id: 2,
      project: "Kerala Backwater Conservation",
      location: "Kerala",
      credits: 50,
      price: 1250,
      date: "2024-01-10",
      status: "retired",
      co2Offset: 1.25,
    },
    {
      id: 3,
      project: "Gujarat Coastal Restoration",
      location: "Gujarat",
      credits: 75,
      price: 1875,
      date: "2024-01-05",
      status: "active",
      co2Offset: 1.875,
    },
  ]

  const availableCredits = [
    {
      id: 1,
      project: "Chilika Lake Seagrass Project",
      location: "Odisha",
      available: 200,
      price: 25,
      rating: 4.8,
      verified: true,
    },
    {
      id: 2,
      project: "Tamil Nadu Mangrove Initiative",
      location: "Tamil Nadu",
      available: 150,
      price: 28,
      rating: 4.9,
      verified: true,
    },
    {
      id: 3,
      project: "Andhra Pradesh Salt Marsh",
      location: "Andhra Pradesh",
      available: 300,
      price: 22,
      rating: 4.7,
      verified: true,
    },
  ]

  return (
    <DashboardLayout
      userRole="buyer"
      userName="Priya Sharma"
      userEmail="priya.sharma@techcorp.com"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold text-foreground">225</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CO₂ Offset</p>
                  <p className="text-2xl font-bold text-foreground">5.6t</p>
                </div>
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Invested</p>
                  <p className="text-2xl font-bold text-foreground">₹5.6L</p>
                </div>
                <IndianRupee className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Projects Supported</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <TrendingUp className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button
                className="flex items-center space-x-2"
                onClick={() => {
                  console.log("[v0] Navigating to marketplace")
                  window.location.href = "/dashboard/buyer/marketplace"
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Browse Marketplace</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => {
                  console.log("[v0] Opening retire credits modal")
                  alert("Retire Credits functionality - This would open a modal to select and retire credits")
                }}
              >
                <Target className="w-4 h-4" />
                <span>Retire Credits</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => {
                  console.log("[v0] Generating impact report")
                  alert("Generate Report functionality - This would create and download an impact report")
                }}
              >
                <FileText className="w-4 h-4" />
                <span>Generate Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Purchases */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Purchases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPurchases.map((purchase) => (
                <div key={purchase.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{purchase.project}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{purchase.location}</span>
                      </div>
                    </div>
                    <Badge variant={purchase.status === "active" ? "default" : "secondary"}>{purchase.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Credits:</span>
                      <span className="ml-2 font-medium">{purchase.credits}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CO₂ Offset:</span>
                      <span className="ml-2 font-medium">{purchase.co2Offset}t</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price:</span>
                      <span className="ml-2 font-medium">₹{purchase.price.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <span className="ml-2 font-medium">{purchase.date}</span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-3 pt-3 border-t border-border">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        console.log(`[v0] Viewing certificate for purchase ${purchase.id}`)
                        alert(`Opening certificate for ${purchase.project}`)
                      }}
                    >
                      View Certificate
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Available Credits */}
          <Card>
            <CardHeader>
              <CardTitle>Available Credits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableCredits.map((credit) => (
                <div key={credit.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{credit.project}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{credit.location}</span>
                        {credit.verified && <CheckCircle className="w-4 h-4 text-primary" />}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">₹{credit.price}</div>
                      <div className="text-xs text-muted-foreground">per credit</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="ml-2 font-medium">{credit.available} credits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">★ {credit.rating}</span>
                      <Button
                        size="sm"
                        onClick={() => {
                          console.log(`[v0] Purchasing credits from ${credit.project}`)
                          alert(
                            `Initiating purchase for ${credit.project} - ${credit.available} credits available at ₹${credit.price} each`,
                          )
                        }}
                      >
                        Purchase
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Impact Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Your Climate Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">5.6 tonnes</div>
                <div className="text-sm text-muted-foreground">CO₂ Offset This Year</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">8 Projects</div>
                <div className="text-sm text-muted-foreground">Restoration Projects Supported</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">2,250</div>
                <div className="text-sm text-muted-foreground">Mangroves Planted</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
