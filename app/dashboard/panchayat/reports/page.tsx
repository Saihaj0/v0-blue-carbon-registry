import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Home,
  TreePine,
  Users,
  FileText,
  Settings,
  Download,
  Search,
  Eye,
  Plus,
  Filter,
  CheckCircle,
  Clock,
  Camera,
} from "lucide-react"

export default function PanchayatReportsPage() {
  const navigationItems = [
    { href: "/dashboard/panchayat", label: "Overview", icon: Home },
    { href: "/dashboard/panchayat/projects", label: "Local Projects", icon: TreePine },
    { href: "/dashboard/panchayat/community", label: "Community", icon: Users },
    { href: "/dashboard/panchayat/reports", label: "Reports", icon: FileText, active: true },
    { href: "/dashboard/panchayat/settings", label: "Settings", icon: Settings },
  ]

  const reports = [
    {
      id: 1,
      title: "Village Mangrove Restoration - Monthly Report January 2024",
      project: "Village Mangrove Restoration",
      type: "Monthly Progress",
      status: "submitted",
      submittedDate: "2024-01-31",
      dueDate: "2024-01-31",
      participants: 45,
      photosIncluded: 125,
      areaReported: "8.5 hectares",
    },
    {
      id: 2,
      title: "Community Participation Summary - Q4 2023",
      project: "All Local Projects",
      type: "Community Report",
      status: "approved",
      submittedDate: "2024-01-15",
      dueDate: "2024-01-15",
      participants: 65,
      photosIncluded: 89,
      areaReported: "12 hectares",
    },
    {
      id: 3,
      title: "Backwater Seagrass Initiative - Progress Update",
      project: "Backwater Seagrass Initiative",
      type: "Progress Update",
      status: "draft",
      submittedDate: null,
      dueDate: "2024-02-15",
      participants: 20,
      photosIncluded: 45,
      areaReported: "3.2 hectares",
    },
    {
      id: 4,
      title: "Annual Community Impact Assessment 2023",
      project: "All Local Projects",
      type: "Annual Summary",
      status: "pending_review",
      submittedDate: "2023-12-31",
      dueDate: "2023-12-31",
      participants: 65,
      photosIncluded: 456,
      areaReported: "20 hectares",
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

  return (
    <DashboardLayout
      userRole="panchayat"
      userName="Sarpanch Vijay Patel"
      userEmail="vijay.patel@sundarbans.gov.in"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Community Reports</h1>
            <p className="text-muted-foreground">
              Submit and track community participation and project progress reports
            </p>
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
                  <p className="text-2xl font-bold text-foreground">18</p>
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
                  <p className="text-2xl font-bold text-foreground">2</p>
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
                  <p className="text-2xl font-bold text-foreground">14</p>
                </div>
                <CheckCircle className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Photos Submitted</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <Camera className="w-8 h-8 text-accent" />
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
          {reports.map((report) => (
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
                  <Badge className={getStatusColor(report.status)}>{report.status.replace("_", " ")}</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.participants}</div>
                    <div className="text-xs text-muted-foreground">Participants</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.photosIncluded}</div>
                    <div className="text-xs text-muted-foreground">Photos</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.areaReported}</div>
                    <div className="text-xs text-muted-foreground">Area Covered</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
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
