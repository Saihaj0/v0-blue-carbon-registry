"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Home,
  CheckCircle,
  TreePine,
  Users,
  BarChart3,
  FileText,
  Settings,
  Download,
  Search,
  Calendar,
  Eye,
  Plus,
  Filter,
  TrendingUp,
} from "lucide-react"

export default function AdminReportsPage() {
  const navigationItems = [
    { href: "/dashboard/admin", label: "Overview", icon: Home },
    { href: "/dashboard/admin/verification", label: "Verification Queue", icon: CheckCircle },
    { href: "/dashboard/admin/projects", label: "All Projects", icon: TreePine },
    { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText, active: true },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const systemReports = [
    {
      id: 1,
      title: "Annual System Performance Report 2023",
      type: "System Performance",
      generatedDate: "2024-01-15",
      period: "Jan 2023 - Dec 2023",
      totalProjects: 156,
      creditsIssued: 12450,
      organizations: 89,
      verifications: 324,
    },
    {
      id: 2,
      title: "Q4 2023 Verification Summary",
      type: "Verification Report",
      generatedDate: "2024-01-05",
      period: "Oct 2023 - Dec 2023",
      totalProjects: 45,
      creditsIssued: 3200,
      organizations: 28,
      verifications: 89,
    },
    {
      id: 3,
      title: "Organization Compliance Report",
      type: "Compliance Report",
      generatedDate: "2023-12-31",
      period: "Jan 2023 - Dec 2023",
      totalProjects: 156,
      creditsIssued: 12450,
      organizations: 89,
      verifications: 324,
    },
    {
      id: 4,
      title: "Blue Carbon Impact Assessment 2023",
      type: "Impact Report",
      generatedDate: "2023-12-20",
      period: "Jan 2023 - Dec 2023",
      totalProjects: 156,
      creditsIssued: 12450,
      organizations: 89,
      verifications: 324,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "System Performance":
        return "bg-primary text-primary-foreground"
      case "Verification Report":
        return "bg-secondary text-secondary-foreground"
      case "Compliance Report":
        return "bg-accent text-accent-foreground"
      case "Impact Report":
        return "bg-chart-2 text-chart-2-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleDownloadReport = (reportId: number, title: string) => {
    console.log("[v0] Downloading report:", reportId, title)
    if (typeof window !== "undefined") {
      // Create a mock PDF download
      const link = window.document.createElement("a")
      link.href = `/api/reports/download?id=${reportId}&format=pdf`
      link.download = `${title.replace(/\s+/g, "_")}.pdf`
      window.document.body.appendChild(link)
      link.click()
      window.document.body.removeChild(link)
    }
  }

  const handlePreviewReport = (reportId: number, title: string) => {
    console.log("[v0] Previewing report:", reportId, title)
    if (typeof window !== "undefined") {
      // Open report in new window/modal
      window.open(`/api/reports/preview?id=${reportId}`, "_blank", "width=800,height=600")
    }
  }

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
            <h1 className="text-2xl font-bold text-foreground">System Reports</h1>
            <p className="text-muted-foreground">Generate comprehensive reports on system performance and compliance</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Generate Report</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reports</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                  <p className="text-2xl font-bold text-foreground">99.8%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-bold text-foreground">2,340</p>
                </div>
                <Download className="w-8 h-8 text-accent" />
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
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-4">
          {systemReports.map((report) => (
            <Card key={report.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Period: {report.period}</span>
                      <span>Generated: {report.generatedDate}</span>
                    </div>
                  </div>
                  <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.totalProjects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.creditsIssued.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Credits Issued</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.organizations}</div>
                    <div className="text-xs text-muted-foreground">Organizations</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.verifications}</div>
                    <div className="text-xs text-muted-foreground">Verifications</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handlePreviewReport(report.id, report.title)}>
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" onClick={() => handleDownloadReport(report.id, report.title)}>
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
