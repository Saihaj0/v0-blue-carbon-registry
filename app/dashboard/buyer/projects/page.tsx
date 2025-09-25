"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Home,
  FileText,
  Settings,
  Search,
  Filter,
  ShoppingCart,
  Eye,
  TreePine,
  MapPin,
  Calendar,
  Leaf,
} from "lucide-react"

export default function BuyerProjectsPage() {
  const navigationItems = [
    { href: "/dashboard/buyer", label: "Overview", icon: Home },
    { href: "/dashboard/buyer/projects", label: "Available Projects", icon: TreePine, active: true },
    { href: "/dashboard/buyer/reports", label: "My Purchases", icon: FileText },
    { href: "/dashboard/buyer/settings", label: "Settings", icon: Settings },
  ]

  const availableProjects = [
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      location: "West Bengal, India",
      organization: "Coastal Conservation Foundation",
      creditsAvailable: 500,
      pricePerCredit: 25,
      projectType: "Mangrove Restoration",
      verificationStatus: "Verified",
      completionDate: "2024-06-15",
      description: "Large-scale mangrove restoration project in the Sundarbans delta region.",
      certifications: ["Gold Standard", "Verra VCS"],
      images: ["/mangrove-forest.jpg"],
    },
    {
      id: 2,
      name: "Chilika Lake Seagrass Conservation",
      location: "Odisha, India",
      organization: "Odisha Environmental Trust",
      creditsAvailable: 300,
      pricePerCredit: 30,
      projectType: "Seagrass Conservation",
      verificationStatus: "Verified",
      completionDate: "2024-08-20",
      description: "Seagrass bed restoration and conservation in Asia's largest brackish water lagoon.",
      certifications: ["Climate Action Reserve"],
      images: ["/seagrass-underwater.jpg"],
    },
    {
      id: 3,
      name: "Kerala Backwater Ecosystem Restoration",
      location: "Kerala, India",
      organization: "Kerala Marine Foundation",
      creditsAvailable: 200,
      pricePerCredit: 35,
      projectType: "Salt Marsh Restoration",
      verificationStatus: "Pending",
      completionDate: "2024-09-30",
      description: "Comprehensive restoration of backwater ecosystems and salt marshes.",
      certifications: ["Plan Vivo"],
      images: ["/kerala-backwaters.jpg"],
    },
  ]

  const handlePurchase = (projectId: number, credits: number) => {
    console.log("[v0] Initiating purchase for project:", projectId, "credits:", credits)
    // Handle purchase logic
  }

  const handleViewDetails = (projectId: number) => {
    console.log("[v0] Viewing project details:", projectId)
    // Handle view details
  }

  return (
    <DashboardLayout
      userRole="buyer"
      userName="Rajesh Kumar"
      userEmail="rajesh.kumar@greentech.com"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Available Projects</h1>
          <p className="text-muted-foreground">Browse and purchase verified blue carbon credits</p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search projects by name, location, or organization..." className="pl-10" />
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
                    <SelectItem value="seagrass">Seagrass Conservation</SelectItem>
                    <SelectItem value="saltmarsh">Salt Marsh Restoration</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="wb">West Bengal</SelectItem>
                    <SelectItem value="od">Odisha</SelectItem>
                    <SelectItem value="kl">Kerala</SelectItem>
                    <SelectItem value="tn">Tamil Nadu</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {availableProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.verificationStatus === "Verified" ? "default" : "secondary"}>
                    {project.verificationStatus}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{project.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Organization:</span>
                      <span className="font-medium">{project.organization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Credits Available:</span>
                      <span className="font-medium">{project.creditsAvailable}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price per Credit:</span>
                      <span className="font-medium">₹{project.pricePerCredit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Completion:</span>
                      <span className="font-medium flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.completionDate}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Certifications:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => handleViewDetails(project.id)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                    <Button size="sm" className="flex-1" onClick={() => handlePurchase(project.id, 50)}>
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Purchase
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-primary" />
              Market Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1,000</p>
                <p className="text-sm text-muted-foreground">Total Credits Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">₹30</p>
                <p className="text-sm text-muted-foreground">Average Price</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">15</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Verification Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
