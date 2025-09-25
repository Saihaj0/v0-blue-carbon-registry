"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  CheckCircle,
  Clock,
  AlertTriangle,
  BarChart3,
  FileText,
  Settings,
  Users,
  TreePine,
  Eye,
  Shield,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AdminModals } from "@/components/admin-modals"

export default function AdminDashboard() {
  const router = useRouter()
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const navigationItems = [
    { href: "/dashboard/admin", label: "Overview", icon: Home, active: true },
    { href: "/dashboard/admin/verification", label: "Verification Queue", icon: CheckCircle },
    { href: "/dashboard/admin/projects", label: "All Projects", icon: TreePine },
    { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const pendingVerifications = [
    {
      id: 1,
      project: "Sundarbans Mangrove Restoration",
      organization: "Coastal Conservation Foundation",
      type: "Monthly Report",
      submitted: "2024-01-20",
      priority: "high",
      credits: 125,
    },
    {
      id: 2,
      project: "Chilika Lake Seagrass Project",
      organization: "Odisha Environmental Trust",
      type: "Project Completion",
      submitted: "2024-01-19",
      priority: "medium",
      credits: 200,
    },
    {
      id: 3,
      project: "Kerala Backwater Conservation",
      organization: "Kerala Marine Foundation",
      type: "Drone Survey",
      submitted: "2024-01-18",
      priority: "low",
      credits: 75,
    },
  ]

  const systemStats = [
    {
      title: "Total Projects",
      value: "156",
      change: "+12%",
      icon: TreePine,
      color: "primary",
    },
    {
      title: "Pending Verifications",
      value: "23",
      change: "-5%",
      icon: Clock,
      color: "secondary",
    },
    {
      title: "Credits Issued",
      value: "12,450",
      change: "+18%",
      icon: CheckCircle,
      color: "accent",
    },
    {
      title: "Active Organizations",
      value: "89",
      change: "+8%",
      icon: Users,
      color: "chart-2",
    },
  ]

  const recentActivities = [
    {
      type: "verification",
      message: "Approved 150 carbon credits for Gujarat Coastal Project",
      time: "2 hours ago",
      user: "Dr. Amit Patel",
    },
    {
      type: "registration",
      message: "New NGO registration: Marine Conservation Society",
      time: "4 hours ago",
      user: "System",
    },
    {
      type: "alert",
      message: "Drone survey overdue for Tamil Nadu Mangrove Project",
      time: "6 hours ago",
      user: "System",
    },
    {
      type: "verification",
      message: "Rejected submission for Andhra Pradesh Salt Marsh - incomplete data",
      time: "1 day ago",
      user: "Dr. Sunita Rao",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive text-destructive-foreground"
      case "medium":
        return "bg-secondary text-secondary-foreground"
      case "low":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleQuickAction = (action: string) => {
    console.log(`[v0] Admin quick action clicked: ${action}`)
    switch (action) {
      case "review":
        router.push("/dashboard/admin/verification")
        break
      case "approve":
        setActiveModal("approve-organization")
        break
      case "report":
        setActiveModal("generate-report")
        break
      case "alerts":
        setActiveModal("system-alerts")
        break
    }
  }

  const handleReviewSubmission = (id: number) => {
    console.log(`[v0] Reviewing submission ID: ${id}`)
    setActiveModal("review-submission")
  }

  const handleApproveSubmission = (id: number) => {
    console.log(`[v0] Approving submission ID: ${id}`)
    setActiveModal("approve-submission")
  }

  return (
    <DashboardLayout
      userRole="admin"
      userName="Dr. Rajesh Verma"
      userEmail="rajesh.verma@nccr.gov.in"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">
                        <span className={stat.change.startsWith("+") ? "text-primary" : "text-destructive"}>
                          {stat.change}
                        </span>{" "}
                        from last month
                      </p>
                    </div>
                    <IconComponent className={`w-8 h-8 text-${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center space-x-2" onClick={() => handleQuickAction("review")}>
                <CheckCircle className="w-4 h-4" />
                <span>Review Submissions</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => handleQuickAction("approve")}
              >
                <Shield className="w-4 h-4" />
                <span>Approve Organization</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => handleQuickAction("report")}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Generate Report</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 bg-transparent"
                onClick={() => handleQuickAction("alerts")}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>System Alerts</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Verifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pending Verifications
                <Badge variant="secondary">{pendingVerifications.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingVerifications.map((item) => (
                <div key={item.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.project}</h3>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                    </div>
                    <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span>{item.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Credits:</span>
                      <span>{item.credits}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Submitted:</span>
                      <span>{item.submitted}</span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-3 pt-3 border-t border-border space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleReviewSubmission(item.id)}>
                      <Eye className="w-4 h-4 mr-1" />
                      Review
                    </Button>
                    <Button size="sm" onClick={() => handleApproveSubmission(item.id)}>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const getActivityIcon = () => {
                    switch (activity.type) {
                      case "verification":
                        return CheckCircle
                      case "registration":
                        return Users
                      case "alert":
                        return AlertTriangle
                      default:
                        return Clock
                    }
                  }
                  const IconComponent = getActivityIcon()

                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{activity.message}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{activity.time}</span>
                          <span>•</span>
                          <span>{activity.user}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Verification Queue</span>
                  <span className="text-sm text-muted-foreground">23/50</span>
                </div>
                <Progress value={46} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">46% capacity</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">System Performance</span>
                  <span className="text-sm text-muted-foreground">98%</span>
                </div>
                <Progress value={98} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Excellent</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Data Integrity</span>
                  <span className="text-sm text-muted-foreground">100%</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AdminModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </DashboardLayout>
  )
}
