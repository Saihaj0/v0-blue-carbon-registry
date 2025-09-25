"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Home,
  ShoppingCart,
  BarChart3,
  FileText,
  Settings,
  Target,
  MapPin,
  CheckCircle,
  Search,
  Filter,
  Star,
} from "lucide-react"

export default function MarketplacePage() {
  const navigationItems = [
    { href: "/dashboard/buyer", label: "Overview", icon: Home },
    { href: "/dashboard/buyer/marketplace", label: "Marketplace", icon: ShoppingCart, active: true },
    { href: "/dashboard/buyer/portfolio", label: "My Credits", icon: Target },
    { href: "/dashboard/buyer/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/buyer/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/buyer/settings", label: "Settings", icon: Settings },
  ]

  const availableProjects = [
    {
      id: 1,
      name: "Chilika Lake Seagrass Project",
      location: "Odisha",
      type: "Seagrass Restoration",
      available: 200,
      price: 25,
      rating: 4.8,
      verified: true,
      co2PerCredit: 0.025,
      description: "Large-scale seagrass restoration in Asia's largest brackish water lagoon",
      image: "/seagrass-underwater.jpg",
    },
    {
      id: 2,
      name: "Tamil Nadu Mangrove Initiative",
      location: "Tamil Nadu",
      type: "Mangrove Restoration",
      available: 150,
      price: 28,
      rating: 4.9,
      verified: true,
      co2PerCredit: 0.028,
      description: "Community-driven mangrove restoration along Tamil Nadu coastline",
      image: "/mangrove-forest.jpg",
    },
    {
      id: 3,
      name: "Andhra Pradesh Salt Marsh",
      location: "Andhra Pradesh",
      type: "Salt Marsh Conservation",
      available: 300,
      price: 22,
      rating: 4.7,
      verified: true,
      co2PerCredit: 0.022,
      description: "Protecting and restoring critical salt marsh ecosystems",
      image: "/kerala-backwaters.jpg",
    },
    {
      id: 4,
      name: "Gujarat Coastal Restoration",
      location: "Gujarat",
      type: "Mangrove Restoration",
      available: 180,
      price: 30,
      rating: 4.6,
      verified: true,
      co2PerCredit: 0.03,
      description: "Comprehensive coastal ecosystem restoration program",
      image: "/mangrove-forest.jpg",
    },
    {
      id: 5,
      name: "West Bengal Sundarbans",
      location: "West Bengal",
      type: "Mangrove Conservation",
      available: 120,
      price: 35,
      rating: 4.9,
      verified: true,
      co2PerCredit: 0.035,
      description: "Protecting the world's largest mangrove forest ecosystem",
      image: "/mangrove-forest.jpg",
    },
    {
      id: 6,
      name: "Kerala Backwater Conservation",
      location: "Kerala",
      type: "Wetland Restoration",
      available: 250,
      price: 26,
      rating: 4.8,
      verified: true,
      co2PerCredit: 0.026,
      description: "Restoring Kerala's unique backwater ecosystem",
      image: "/kerala-backwaters.jpg",
    },
  ]

  const handlePurchase = (projectId: number, projectName: string) => {
    console.log(`[v0] Purchase initiated for project ${projectId}: ${projectName}`)
    // Here you would typically open a purchase modal or navigate to purchase flow
    alert(`Purchase flow initiated for ${projectName}`)
  }

  return (
    <DashboardLayout
      userRole="buyer"
      userName="Priya Sharma"
      userEmail="priya.sharma@techcorp.com"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Carbon Credit Marketplace</h1>
            <p className="text-muted-foreground">Browse and purchase verified blue carbon credits</p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects by name or location..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="mangrove">Mangrove Restoration</SelectItem>
                    <SelectItem value="seagrass">Seagrass Restoration</SelectItem>
                    <SelectItem value="saltmarsh">Salt Marsh Conservation</SelectItem>
                    <SelectItem value="wetland">Wetland Restoration</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="odisha">Odisha</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="west-bengal">West Bengal</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  {project.verified && (
                    <Badge className="bg-primary text-primary-foreground">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground line-clamp-1">{project.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline">{project.type}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{project.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-medium">{project.available} credits</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">CO₂/Credit:</span>
                      <span className="font-medium">{project.co2PerCredit}t</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <div className="text-lg font-bold text-foreground">₹{project.price}</div>
                      <div className="text-xs text-muted-foreground">per credit</div>
                    </div>
                    <Button
                      onClick={() => handlePurchase(project.id, project.name)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Purchase
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
