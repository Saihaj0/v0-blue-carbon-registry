import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  RegisterMemberModal,
  UploadPhotosModal,
  SubmitReportModal,
  ProjectDetailsModal,
} from "@/components/modal-dialogs"
import {
  Home,
  TreePine,
  Users,
  FileText,
  Settings,
  Camera,
  IndianRupee,
  TrendingUp,
  CheckCircle,
  Plus,
} from "lucide-react"

export default function PanchayatDashboard() {
  const navigationItems = [
    { href: "/dashboard/panchayat", label: "Overview", icon: Home, active: true },
    { href: "/dashboard/panchayat/projects", label: "Local Projects", icon: TreePine },
    { href: "/dashboard/panchayat/community", label: "Community", icon: Users },
    { href: "/dashboard/panchayat/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/panchayat/settings", label: "Settings", icon: Settings },
  ]

  const localProjects = [
    {
      id: 1,
      name: "Village Mangrove Restoration",
      ngo: "Coastal Conservation Foundation",
      status: "active",
      progress: 65,
      participants: 45,
      area: "12 hectares",
      earnings: 25000,
      lastUpdate: "3 days ago",
    },
    {
      id: 2,
      name: "Backwater Seagrass Initiative",
      ngo: "Marine Life Trust",
      status: "planning",
      progress: 15,
      participants: 20,
      area: "8 hectares",
      earnings: 0,
      lastUpdate: "1 week ago",
    },
  ]

  const communityMembers = [
    { name: "Ramesh Kumar", role: "Lead Coordinator", projects: 2, earnings: 15000 },
    { name: "Sunita Devi", role: "Field Worker", projects: 1, earnings: 8000 },
    { name: "Mohan Singh", role: "Data Collector", projects: 2, earnings: 12000 },
    { name: "Lakshmi Nair", role: "Field Worker", projects: 1, earnings: 7500 },
  ]

  const recentActivities = [
    {
      type: "upload",
      message: "25 community members uploaded restoration photos",
      time: "2 hours ago",
      icon: Camera,
    },
    {
      type: "training",
      message: "Completed mobile app training for 15 new members",
      time: "1 day ago",
      icon: Users,
    },
    {
      type: "payment",
      message: "Distributed ₹25,000 to community participants",
      time: "3 days ago",
      icon: IndianRupee,
    },
    {
      type: "milestone",
      message: "Reached 65% completion for mangrove project",
      time: "5 days ago",
      icon: CheckCircle,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "planning":
        return "bg-secondary text-secondary-foreground"
      case "completed":
        return "bg-chart-2 text-chart-2-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <DashboardLayout
      userRole="panchayat"
      userName="Sarpanch Vijay Patel"
      userEmail="vijay.patel@sundarbans.gov.in"
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
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <TreePine className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Community Members</p>
                  <p className="text-2xl font-bold text-foreground">65</p>
                </div>
                <Users className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="text-2xl font-bold text-foreground">₹42.5K</p>
                </div>
                <IndianRupee className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Area Restored</p>
                  <p className="text-2xl font-bold text-foreground">20 ha</p>
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
              <RegisterMemberModal>
                <Button className="flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Register New Member</span>
                </Button>
              </RegisterMemberModal>

              <UploadPhotosModal>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Camera className="w-4 h-4" />
                  <span>Upload Progress Photos</span>
                </Button>
              </UploadPhotosModal>

              <SubmitReportModal>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <FileText className="w-4 h-4" />
                  <span>Submit Monthly Report</span>
                </Button>
              </SubmitReportModal>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Local Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Local Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {localProjects.map((project) => (
                <div key={project.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">Partner: {project.ngo}</p>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span>Participants: </span>
                        <span className="font-medium">{project.participants}</span>
                      </div>
                      <div>
                        <span>Area: </span>
                        <span className="font-medium">{project.area}</span>
                      </div>
                      <div>
                        <span>Earnings: </span>
                        <span className="font-medium">₹{project.earnings.toLocaleString()}</span>
                      </div>
                      <div>
                        <span>Updated: </span>
                        <span className="font-medium">{project.lastUpdate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-3 pt-3 border-t border-border">
                    <ProjectDetailsModal project={project}>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </ProjectDetailsModal>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Members */}
          <Card>
            <CardHeader>
              <CardTitle>Top Community Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {communityMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">₹{member.earnings.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{member.projects} projects</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const IconComponent = activity.icon
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

        {/* Community Impact */}
        <Card>
          <CardHeader>
            <CardTitle>Community Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">8,500</div>
                <div className="text-sm text-muted-foreground">Mangroves Planted</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">65</div>
                <div className="text-sm text-muted-foreground">Community Members Engaged</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IndianRupee className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">₹42,500</div>
                <div className="text-sm text-muted-foreground">Total Community Earnings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
