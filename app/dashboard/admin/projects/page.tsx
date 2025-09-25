import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  CheckCircle,
  TreePine,
  Users,
  BarChart3,
  FileText,
  Settings,
  Search,
  Filter,
  Eye,
  MapPin,
  Calendar,
  Leaf,
  Waves,
  TrendingUp,
} from "lucide-react"

export default function AllProjectsPage() {
  const navigationItems = [
    { href: "/dashboard/admin", label: "Overview", icon: Home },
    { href: "/dashboard/admin/verification", label: "Verification Queue", icon: CheckCircle },
    { href: "/dashboard/admin/projects", label: "All Projects", icon: TreePine, active: true },
    { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const projects = [
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      organization: "Coastal Conservation Foundation",
      location: "West Bengal",
      type: "Mangrove",
      status: "active",
      progress: 75,
      area: "50 hectares",
      creditsEarned: 125,
      creditsTarget: 200,
      startDate: "2023-03-15",
      lastUpdate: "2024-01-20",
      participants: 45,
    },
    {
      id: 2,
      name: "Chilika Lake Seagrass Project",
      organization: "Odisha Environmental Trust",
      location: "Odisha",
      type: "Seagrass",
      status: "completed",
      progress: 100,
      area: "75 hectares",
      creditsEarned: 200,
      creditsTarget: 200,
      startDate: "2022-08-10",
      lastUpdate: "2024-01-19",
      participants: 32,
    },
    {
      id: 3,
      name: "Kerala Backwater Conservation",
      organization: "Kerala Marine Foundation",
      location: "Kerala",
      type: "Salt Marsh",
      status: "active",
      progress: 45,
      area: "30 hectares",
      creditsEarned: 75,
      creditsTarget: 150,
      startDate: "2023-06-20",
      lastUpdate: "2024-01-18",
      participants: 28,
    },
    {
      id: 4,
      name: "Gujarat Coastal Restoration",
      organization: "Gujarat Marine Trust",
      location: "Gujarat",
      type: "Mangrove",
      status: "active",
      progress: 60,
      area: "60 hectares",
      creditsEarned: 150,
      creditsTarget: 250,
      startDate: "2023-01-12",
      lastUpdate: "2024-01-15",
      participants: 52,
    },
    {
      id: 5,
      name: "Tamil Nadu Salt Marsh Project",
      organization: "Tamil Nadu Coastal Foundation",
      location: "Tamil Nadu",
      type: "Salt Marsh",
      status: "planning",
      progress: 15,
      area: "40 hectares",
      creditsEarned: 0,
      creditsTarget: 180,
      startDate: "2024-01-01",
      lastUpdate: "2024-01-12",
      participants: 18,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "completed":
        return "bg-primary text-primary-foreground"
      case "planning":
        return "bg-secondary text-secondary-foreground"
      case "paused":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Mangrove":
        return TreePine
      case "Seagrass":
        return Waves
      case "Salt Marsh":
        return Leaf
      default:
        return TreePine
    }
  }

  const totalProjects = projects.length
  const activeProjects = projects.filter((p) => p.status === "active").length
  const completedProjects = projects.filter((p) => p.status === "completed").length
  const totalCredits = projects.reduce((sum, p) => sum + p.creditsEarned, 0)

  return (
    <DashboardLayout
      userRole="admin"
      userName="Dr. Rajesh Verma"
      userEmail="rajesh.verma@nccr.gov.in"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">All Projects</h1>
            <p className="text-muted-foreground">Monitor and manage all blue carbon restoration projects</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                  <p className="text-2xl font-bold text-foreground">{totalProjects}</p>
                </div>
                <TreePine className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold text-foreground">{activeProjects}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-foreground">{completedProjects}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold text-foreground">{totalCredits.toLocaleString()}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
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

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => {
            const TypeIcon = getTypeIcon(project.type)
            return (
              <Card key={project.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <TypeIcon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-foreground">{project.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{project.organization}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Started: {project.startDate}
                        </span>
                        <span>Last Update: {project.lastUpdate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Project Progress</span>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{project.area}</div>
                      <div className="text-xs text-muted-foreground">Area</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{project.creditsEarned}</div>
                      <div className="text-xs text-muted-foreground">Credits Earned</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{project.creditsTarget}</div>
                      <div className="text-xs text-muted-foreground">Target Credits</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{project.participants}</div>
                      <div className="text-xs text-muted-foreground">Participants</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">
                        {Math.round((project.creditsEarned / project.creditsTarget) * 100)}%
                      </div>
                      <div className="text-xs text-muted-foreground">Credit Progress</div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t border-border">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4 mr-1" />
                      Reports
                    </Button>
                    <Button size="sm">
                      <Settings className="w-4 h-4 mr-1" />
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
