"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  X,
  Clock,
  AlertTriangle,
  MapPin,
  Calendar,
  Download,
} from "lucide-react"

export default function VerificationQueuePage() {
  const navigationItems = [
    { href: "/dashboard/admin", label: "Overview", icon: Home },
    { href: "/dashboard/admin/verification", label: "Verification Queue", icon: CheckCircle, active: true },
    { href: "/dashboard/admin/projects", label: "All Projects", icon: TreePine },
    { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const pendingSubmissions = [
    {
      id: 1,
      project: "Sundarbans Mangrove Restoration",
      organization: "Coastal Conservation Foundation",
      type: "Monthly Progress Report",
      submittedDate: "2024-01-20",
      priority: "high",
      credits: 125,
      location: "West Bengal",
      area: "50 hectares",
      status: "pending",
      documents: ["progress-report.pdf", "drone-survey.zip", "photos.zip"],
    },
    {
      id: 2,
      project: "Chilika Lake Seagrass Project",
      organization: "Odisha Environmental Trust",
      type: "Project Completion Report",
      submittedDate: "2024-01-19",
      priority: "medium",
      credits: 200,
      location: "Odisha",
      area: "75 hectares",
      status: "under_review",
      documents: ["completion-report.pdf", "impact-assessment.pdf"],
    },
    {
      id: 3,
      project: "Kerala Backwater Conservation",
      organization: "Kerala Marine Foundation",
      type: "Drone Survey Report",
      submittedDate: "2024-01-18",
      priority: "low",
      credits: 75,
      location: "Kerala",
      area: "30 hectares",
      status: "pending",
      documents: ["drone-data.zip", "analysis-report.pdf"],
    },
  ]

  const approvedSubmissions = [
    {
      id: 4,
      project: "Gujarat Coastal Restoration",
      organization: "Gujarat Marine Trust",
      type: "Quarterly Report",
      approvedDate: "2024-01-15",
      credits: 150,
      location: "Gujarat",
      area: "60 hectares",
      verifiedBy: "Dr. Amit Patel",
    },
    {
      id: 5,
      project: "Tamil Nadu Salt Marsh Project",
      organization: "Tamil Nadu Coastal Foundation",
      type: "Monthly Report",
      approvedDate: "2024-01-12",
      credits: 90,
      location: "Tamil Nadu",
      area: "40 hectares",
      verifiedBy: "Dr. Sunita Rao",
    },
  ]

  const rejectedSubmissions = [
    {
      id: 6,
      project: "Andhra Pradesh Mangrove Project",
      organization: "Andhra Coastal Society",
      type: "Progress Report",
      rejectedDate: "2024-01-10",
      reason: "Incomplete documentation - missing drone survey data",
      rejectedBy: "Dr. Sunita Rao",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-secondary text-secondary-foreground"
      case "under_review":
        return "bg-primary text-primary-foreground"
      case "approved":
        return "bg-primary text-primary-foreground"
      case "rejected":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleApprove = (id: number) => {
    console.log("[v0] Approving submission:", id)
    // Implementation for approval
  }

  const handleReject = (id: number) => {
    console.log("[v0] Rejecting submission:", id)
    // Implementation for rejection
  }

  const handleDownloadDocument = (document: string) => {
    console.log("[v0] Downloading document:", document)
    if (typeof window !== "undefined") {
      // Create a mock download
      const link = window.document.createElement("a")
      link.href = `/api/documents/download?file=${encodeURIComponent(document)}`
      link.download = document
      window.document.body.appendChild(link)
      link.click()
      window.document.body.removeChild(link)
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
            <h1 className="text-2xl font-bold text-foreground">Verification Queue</h1>
            <p className="text-muted-foreground">Review and verify project submissions</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-foreground">
                    {pendingSubmissions.filter((s) => s.status === "pending").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Under Review</p>
                  <p className="text-2xl font-bold text-foreground">
                    {pendingSubmissions.filter((s) => s.status === "under_review").length}
                  </p>
                </div>
                <Eye className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved Today</p>
                  <p className="text-2xl font-bold text-foreground">{approvedSubmissions.length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credits Pending</p>
                  <p className="text-2xl font-bold text-foreground">
                    {pendingSubmissions.reduce((sum, s) => sum + s.credits, 0)}
                  </p>
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
                <Input placeholder="Search submissions..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Verification Tabs */}
        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending ({pendingSubmissions.length})</TabsTrigger>
            <TabsTrigger value="approved">Approved ({approvedSubmissions.length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({rejectedSubmissions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{submission.project}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{submission.organization}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {submission.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {submission.submittedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getPriorityColor(submission.priority)}>{submission.priority}</Badge>
                      <Badge className={getStatusColor(submission.status)}>{submission.status.replace("_", " ")}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.credits}</div>
                      <div className="text-xs text-muted-foreground">Credits</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.area}</div>
                      <div className="text-xs text-muted-foreground">Area</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.type}</div>
                      <div className="text-xs text-muted-foreground">Type</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.documents.length}</div>
                      <div className="text-xs text-muted-foreground">Documents</div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Documents:</h4>
                    <div className="flex flex-wrap gap-2">
                      {submission.documents.map((doc, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownloadDocument(doc)}
                          className="flex items-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>{doc}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t border-border">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Review Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleReject(submission.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <Button size="sm" onClick={() => handleApprove(submission.id)}>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            {approvedSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{submission.project}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{submission.organization}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {submission.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Approved: {submission.approvedDate}
                        </span>
                        <span>Verified by: {submission.verifiedBy}</span>
                      </div>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Approved</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.credits}</div>
                      <div className="text-xs text-muted-foreground">Credits Issued</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.area}</div>
                      <div className="text-xs text-muted-foreground">Area</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-foreground">{submission.type}</div>
                      <div className="text-xs text-muted-foreground">Type</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            {rejectedSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{submission.project}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{submission.organization}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Rejected: {submission.rejectedDate}
                        </span>
                        <span>By: {submission.rejectedBy}</span>
                      </div>
                    </div>
                    <Badge className="bg-destructive text-destructive-foreground">Rejected</Badge>
                  </div>

                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-destructive">Rejection Reason:</p>
                        <p className="text-sm text-muted-foreground">{submission.reason}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
