import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  CheckCircle,
  TreePine,
  Users,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  RefreshCw,
} from "lucide-react"

export default function AnalyticsPage() {
  const navigationItems = [
    { href: "/dashboard/admin", label: "Overview", icon: Home },
    { href: "/dashboard/admin/verification", label: "Verification Queue", icon: CheckCircle },
    { href: "/dashboard/admin/projects", label: "All Projects", icon: TreePine },
    { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3, active: true },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const systemMetrics = [
    {
      title: "Total Carbon Credits Issued",
      value: "12,450",
      change: "+18%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Active Projects",
      value: "89",
      change: "+12%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Verified Organizations",
      value: "156",
      change: "+8%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.2%",
      trend: "up",
      period: "vs last month",
    },
  ]

  const regionalData = [
    { state: "West Bengal", projects: 25, credits: 3200, organizations: 18, progress: 85 },
    { state: "Odisha", projects: 18, credits: 2800, organizations: 14, progress: 78 },
    { state: "Kerala", projects: 15, credits: 2100, organizations: 12, progress: 70 },
    { state: "Gujarat", projects: 12, credits: 1900, organizations: 10, progress: 65 },
    { state: "Tamil Nadu", projects: 10, credits: 1600, organizations: 8, progress: 60 },
    { state: "Maharashtra", projects: 8, credits: 1200, organizations: 6, progress: 55 },
  ]

  const ecosystemTypes = [
    { type: "Mangrove", projects: 45, credits: 5800, percentage: 47 },
    { type: "Seagrass", projects: 28, credits: 3600, percentage: 29 },
    { type: "Salt Marsh", projects: 23, credits: 2950, percentage: 24 },
  ]

  const monthlyTrends = [
    { month: "Jul", projects: 12, credits: 1200, verifications: 45 },
    { month: "Aug", projects: 15, credits: 1500, verifications: 52 },
    { month: "Sep", projects: 18, credits: 1800, verifications: 48 },
    { month: "Oct", projects: 22, credits: 2200, verifications: 65 },
    { month: "Nov", projects: 25, credits: 2500, verifications: 58 },
    { month: "Dec", projects: 28, credits: 2800, verifications: 72 },
  ]

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
            <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive system performance and impact analytics</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </Button>
            <Button className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <div className="flex items-center space-x-1 text-sm">
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-primary" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                      <span className={metric.trend === "up" ? "text-primary" : "text-destructive"}>
                        {metric.change}
                      </span>
                      <span className="text-muted-foreground">{metric.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regional Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Regional Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {regionalData.map((region, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{region.state}</span>
                    <span className="text-sm text-muted-foreground">{region.progress}%</span>
                  </div>
                  <Progress value={region.progress} className="h-2" />
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div>Projects: {region.projects}</div>
                    <div>Credits: {region.credits}</div>
                    <div>Orgs: {region.organizations}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ecosystem Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Ecosystem Type Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ecosystemTypes.map((ecosystem, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{ecosystem.type}</span>
                    <span className="text-sm text-muted-foreground">{ecosystem.percentage}%</span>
                  </div>
                  <Progress value={ecosystem.percentage} className="h-2" />
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>Projects: {ecosystem.projects}</div>
                    <div>Credits: {ecosystem.credits}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>6-Month Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4">
                {monthlyTrends.map((month, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium text-foreground mb-2">{month.month}</div>
                    <div className="space-y-2">
                      <div className="bg-primary/10 p-2 rounded">
                        <div className="text-lg font-bold text-primary">{month.projects}</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div className="bg-secondary/10 p-2 rounded">
                        <div className="text-lg font-bold text-secondary">{month.credits}</div>
                        <div className="text-xs text-muted-foreground">Credits</div>
                      </div>
                      <div className="bg-chart-2/10 p-2 rounded">
                        <div className="text-lg font-bold text-chart-2">{month.verifications}</div>
                        <div className="text-xs text-muted-foreground">Verifications</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Database Performance</span>
                  <span className="text-sm text-muted-foreground">98%</span>
                </div>
                <Progress value={98} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Excellent response times</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">API Reliability</span>
                  <span className="text-sm text-muted-foreground">99.5%</span>
                </div>
                <Progress value={99.5} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">High availability</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">User Satisfaction</span>
                  <span className="text-sm text-muted-foreground">94%</span>
                </div>
                <Progress value={94} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Based on feedback</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Analytics Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Calendar className="w-4 h-4" />
                <span>Custom Date Range</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <BarChart3 className="w-4 h-4" />
                <span>Detailed Charts</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <FileText className="w-4 h-4" />
                <span>Generate Report</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
