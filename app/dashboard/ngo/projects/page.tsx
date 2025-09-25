import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  Home,
  TreePine,
  FileText,
  Users,
  Settings,
  Plus,
  Search,
  MapPin,
  Calendar,
  Camera,
  Eye,
  Edit,
  Filter,
} from "lucide-react"

export default function NGOProjectsPage() {
  const navigationItems = [
    { href: "/dashboard/ngo", label: "Overview", icon: Home },
    { href: "/dashboard/ngo/projects", label: "My Projects", icon: TreePine, active: true },
    { href: "/dashboard/ngo/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/ngo/community", label: "Community", icon: Users },
    { href: "/dashboard/ngo/settings", label: "Settings", icon: Settings },
  ]

  const projects = [
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      location: "West Bengal",
      status: "active",
      progress: 75,
      planted: 12500,
      target: 15000,
      credits: 450,
      startDate: "2023-06-15",
      endDate: "2024-12-31",
      area: "25 hectares",
      participants: 45,
      lastUpdate: "2 days ago",
    },
    {
      id: 2,
      name: "Chilika Lake Seagrass Project",
      location: "Odisha",
      status: "pending",
      progress: 30,
      planted: 3000,
      target: 10000,
      credits: 0,
      startDate: "2023-09-01",
      endDate: "2024-08-31",
      area: "15 hectares",
      participants: 28,
      lastUpdate: "1 week ago",
    },
    {
      id: 3,
      name: "Kerala Backwater Conservation",
      location: "Kerala",
      status: "completed",
      progress: 100,
      planted: 8000,
      target: 8000,
      credits: 320,
      startDate: "2023-01-15",
      endDate: "2023-12-15",
      area: "18 hectares",
      participants: 35,
      lastUpdate: "1 month ago",
    },
    {
      id: 4,
      name: "Gujarat Coastal Restoration",
      location: "Gujarat",
      status: "planning",
      progress: 5,
      planted: 0,
      target: 12000,
      credits: 0,
      startDate: "2024-03-01",
      endDate: "2025-02-28",
      area: "22 hectares",
      participants: 0,
      lastUpdate: "3 days ago",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "pending":
        return "bg-secondary text-secondary-foreground"
      case "completed":
        return "bg-chart-2 text-chart-2-foreground"
      case "planning":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <DashboardLayout
      userRole="ngo"
      userName="Rajesh Kumar"
      userEmail="rajesh@coastalconservation.org"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Projects</h1>
            <p className="text-muted-foreground">Manage and monitor your blue carbon restoration projects</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </Button>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search projects..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>
                      {project.planted.toLocaleString()} / {project.target.toLocaleString()} planted
                    </span>
                    <span>{project.credits} credits earned</span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Area:</span>
                    <span className="ml-2 font-medium">{project.area}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Participants:</span>
                    <span className="ml-2 font-medium">{project.participants}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Start Date:</span>
                    <span className="ml-2 font-medium">{project.startDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">End Date:</span>
                    <span className="ml-2 font-medium">{project.endDate}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {project.lastUpdate}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm">
                      <Camera className="w-4 h-4 mr-1" />
                      Upload
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
