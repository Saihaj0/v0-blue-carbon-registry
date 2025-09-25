"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  Users,
  FileText,
  Settings,
  Plus,
  Search,
  MapPin,
  Calendar,
  TreePine,
  Camera,
  Upload,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"

export default function PanchayatProjectsPage() {
  const navigationItems = [
    { href: "/dashboard/panchayat", label: "Overview", icon: Home },
    { href: "/dashboard/panchayat/projects", label: "My Projects", icon: TreePine, active: true },
    { href: "/dashboard/panchayat/community", label: "Community", icon: Users },
    { href: "/dashboard/panchayat/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/panchayat/settings", label: "Settings", icon: Settings },
  ]

  const projects = [
    {
      id: 1,
      name: "Coastal Mangrove Restoration - Phase 1",
      location: "Kakdwip, South 24 Parganas",
      area: "25 hectares",
      status: "active",
      progress: 75,
      startDate: "2024-01-15",
      expectedCompletion: "2024-06-30",
      participatingFamilies: 45,
      treesPlanted: 12500,
      survivalRate: 92,
      lastUpdate: "2024-01-20",
      nextMilestone: "Monthly monitoring report due",
      coordinator: "Ramesh Mondal",
      fundingOrg: "Coastal Conservation Foundation",
    },
    {
      id: 2,
      name: "Salt Marsh Conservation Initiative",
      location: "Gosaba Island",
      area: "15 hectares",
      status: "planning",
      progress: 25,
      startDate: "2024-03-01",
      expectedCompletion: "2024-08-15",
      participatingFamilies: 30,
      treesPlanted: 0,
      survivalRate: 0,
      lastUpdate: "2024-01-18",
      nextMilestone: "Community training session",
      coordinator: "Sunita Das",
      fundingOrg: "West Bengal Forest Department",
    },
    {
      id: 3,
      name: "Seagrass Bed Restoration",
      location: "Sagar Island",
      area: "10 hectares",
      status: "completed",
      progress: 100,
      startDate: "2023-08-01",
      expectedCompletion: "2023-12-31",
      participatingFamilies: 25,
      treesPlanted: 8000,
      survivalRate: 88,
      lastUpdate: "2024-01-05",
      nextMilestone: "Final verification completed",
      coordinator: "Bijoy Halder",
      fundingOrg: "Marine Conservation Society",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "planning":
        return "bg-secondary text-secondary-foreground"
      case "completed":
        return "bg-accent text-accent-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return Clock
      case "planning":
        return AlertTriangle
      case "completed":
        return CheckCircle
      default:
        return Clock
    }
  }

  const handleUploadPhoto = (projectId: number) => {
    console.log("[v0] Uploading photo for project:", projectId)
    // Handle photo upload
  }

  const handleSubmitReport = (projectId: number) => {
    console.log("[v0] Submitting report for project:", projectId)
    // Handle report submission
  }

  return (
    <DashboardLayout
      userRole="panchayat"
      userName="Shyamal Halder"
      userEmail="shyamal.halder@kakdwip.gov.in"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Projects</h1>
            <p className="text-muted-foreground">Manage your blue carbon restoration projects</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Project Proposal
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search projects by name, location, or status..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => {
            const StatusIcon = getStatusIcon(project.status)
            return (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {project.name}
                        <Badge className={getStatusColor(project.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {project.status}
                        </Badge>
                      </CardTitle>
                      <p className="text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location} • {project.area}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>Coordinator: {project.coordinator}</p>
                      <p>Funded by: {project.fundingOrg}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Project Progress</span>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{project.nextMilestone}</p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">{project.participatingFamilies}</p>
                      <p className="text-xs text-muted-foreground">Families</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">{project.treesPlanted.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Plants/Trees</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">{project.survivalRate}%</p>
                      <p className="text-xs text-muted-foreground">Survival Rate</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">{project.area}</p>
                      <p className="text-xs text-muted-foreground">Area Covered</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Start Date</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.startDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected Completion</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.expectedCompletion}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Update</p>
                      <p className="font-medium">{project.lastUpdate}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" onClick={() => handleUploadPhoto(project.id)}>
                      <Camera className="w-4 h-4 mr-1" />
                      Upload Photos
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleSubmitReport(project.id)}>
                      <Upload className="w-4 h-4 mr-1" />
                      Submit Report
                    </Button>
                    <Button variant="outline" size="sm">
                      <TreePine className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Summary Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Project Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50 ha</p>
                <p className="text-sm text-muted-foreground">Total Area</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100</p>
                <p className="text-sm text-muted-foreground">Families Involved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">20,500</p>
                <p className="text-sm text-muted-foreground">Trees Planted</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
