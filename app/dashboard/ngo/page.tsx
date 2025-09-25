import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  TreePine,
  FileText,
  Users,
  Settings,
  Plus,
  MapPin,
  Calendar,
  TrendingUp,
  IndianRupee,
  Camera,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

export default function NGODashboard() {
  const navigationItems = [
    { href: "/dashboard/ngo", label: "Overview", icon: Home, active: true },
    { href: "/dashboard/ngo/projects", label: "My Projects", icon: TreePine },
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
      lastUpdate: "1 month ago",
    },
  ]

  const recentActivities = [
    {
      type: "upload",
      message: "Uploaded 25 new photos for Sundarbans project",
      time: "2 hours ago",
      icon: Camera,
    },
    {
      type: "verification",
      message: "Chilika project approved by NCCR verifier",
      time: "1 day ago",
      icon: CheckCircle,
    },
    {
      type: "payment",
      message: "Received ₹45,000 for completed Kerala project",
      time: "3 days ago",
      icon: IndianRupee,
    },
    {
      type: "reminder",
      message: "Monthly report due for Sundarbans project",
      time: "5 days ago",
      icon: AlertCircle,
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
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "upload":
        return Camera
      case "verification":
        return CheckCircle
      case "payment":
        return IndianRupee
      case "reminder":
        return AlertCircle
      default:
        return Clock
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
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <TreePine className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Planted</p>
                  <p className="text-2xl font-bold text-foreground">23,500</p>
                </div>
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credits Earned</p>
                  <p className="text-2xl font-bold text-foreground">770</p>
                </div>
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="text-2xl font-bold text-foreground">₹1.2L</p>
                </div>
                <IndianRupee className="w-8 h-8 text-chart-2" />
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
              <Button className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Camera className="w-4 h-4" />
                <span>Upload Photos</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <FileText className="w-4 h-4" />
                <span>Submit Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>

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
                      <span>{project.credits} credits</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>Updated {project.lastUpdate}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const IconComponent = getActivityIcon(activity.type)
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
