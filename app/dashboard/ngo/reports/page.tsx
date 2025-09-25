import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Home,
  TreePine,
  FileText,
  Users,
  Settings,
  Download,
  Search,
  Eye,
  Plus,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

export default function NGOReportsPage() {
  const navigationItems = [
    { href: "/dashboard/ngo", label: "Overview", icon: Home },
    { href: "/dashboard/ngo/projects", label: "My Projects", icon: TreePine },
    { href: "/dashboard/ngo/reports", label: "Reports", icon: FileText, active: true },
    { href: "/dashboard/ngo/community", label: "Community", icon: Users },
    { href: "/dashboard/ngo/settings", label: "Settings", icon: Settings },
  ]

  const reports = [
    {
      id: 1,
      title: "Sundarbans Monthly Progress Report - January 2024",
      project: "Sundarbans Mangrove Restoration",
      type: "Monthly Progress",
      status: "submitted",
      submittedDate: "2024-01-31",
      dueDate: "2024-01-31",
      verificationStatus: "approved",
      creditsAwarded: 45,
    },
    {
      id: 2,
      title: "Chilika Lake Quarterly Assessment - Q4 2023",
      project: "Chilika Lake Seagrass Project",
      type: "Quarterly Assessment",
      status: "pending_review",
      submittedDate: "2024-01-15",
      dueDate: "2024-01-15",
      verificationStatus: "under_review",
      creditsAwarded: 0,
    },
    {
      id: 3,
      title: "Kerala Project Completion Report",
      project: "Kerala Backwater Conservation",
      type: "Project Completion",
      status: "approved",
      submittedDate: "2023-12-20",
      dueDate: "2023-12-31",
      verificationStatus: "approved",
      creditsAwarded: 120,
    },
    {
      id: 4,
      title: "Sundarbans Drone Survey Report - December 2023",
      project: "Sundarbans Mangrove Restoration",
      type: "Drone Survey",
      status: "draft",
      submittedDate: null,
      dueDate: "2024-02-15",
      verificationStatus: "not_submitted",
      creditsAwarded: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-chart-2 text-chart-2-foreground"
      case "submitted":
      case "pending_review":
        return "bg-secondary text-secondary-foreground"
      case "draft":
        return "bg-muted text-muted-foreground"
      case "overdue":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getVerificationIcon = (status: string) => {
    switch (status) {
      case "approved":
        return CheckCircle
      case "under_review":
        return Clock
      case "not_submitted":
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
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">Submit and track your project reports and documentation</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Report</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reports</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <Clock className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-2xl font-bold text-foreground">18</p>
                </div>
                <CheckCircle className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credits Earned</p>
                  <p className="text-2xl font-bold text-foreground">770</p>
                </div>
                <TreePine className="w-8 h-8 text-accent" />
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
          {reports.map((report) => {
            const VerificationIcon = getVerificationIcon(report.verificationStatus)
            return (
              <Card key={report.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{report.project}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Type: {report.type}</span>
                        <span>Due: {report.dueDate}</span>
                        {report.submittedDate && <span>Submitted: {report.submittedDate}</span>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(report.status)}>{report.status.replace("_", " ")}</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <VerificationIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {report.verificationStatus.replace("_", " ")}
                        </span>
                      </div>
                      {report.creditsAwarded > 0 && (
                        <div className="text-sm">
                          <span className="text-muted-foreground">Credits: </span>
                          <span className="font-medium text-primary">{report.creditsAwarded}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
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
