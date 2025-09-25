"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle, FileText, Download } from "lucide-react"

interface AdminModalsProps {
  activeModal: string | null
  onClose: () => void
}

export function AdminModals({ activeModal, onClose }: AdminModalsProps) {
  const [loading, setLoading] = useState(false)

  const handleApproveOrganization = async () => {
    setLoading(true)
    console.log("[v0] Approving organization...")
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      onClose()
      console.log("[v0] Organization approved successfully")
    }, 2000)
  }

  const handleGenerateReport = async () => {
    setLoading(true)
    console.log("[v0] Generating admin report...")
    // Simulate report generation
    setTimeout(() => {
      setLoading(false)
      onClose()
      console.log("[v0] Report generated successfully")
    }, 3000)
  }

  const handleReviewSubmission = async (action: "approve" | "reject") => {
    setLoading(true)
    console.log(`[v0] ${action === "approve" ? "Approving" : "Rejecting"} submission...`)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      onClose()
      console.log(`[v0] Submission ${action}d successfully`)
    }, 2000)
  }

  return (
    <>
      {/* Approve Organization Modal */}
      <Dialog open={activeModal === "approve-organization"} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Approve Organization Registration</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Organization Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Organization Name</Label>
                    <p className="text-sm text-muted-foreground">Marine Conservation Society</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Registration Type</Label>
                    <Badge variant="secondary">NGO</Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Location</Label>
                    <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Contact Person</Label>
                    <p className="text-sm text-muted-foreground">Dr. Priya Sharma</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Mission Statement</Label>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to protecting and restoring marine ecosystems along the Indian coastline through
                    community-based conservation initiatives.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Label htmlFor="approval-notes">Approval Notes</Label>
              <Textarea
                id="approval-notes"
                placeholder="Add any notes or conditions for approval..."
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={handleApproveOrganization}
                disabled={loading}
                className="bg-primary text-primary-foreground"
              >
                {loading ? "Approving..." : "Approve Organization"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Generate Report Modal */}
      <Dialog open={activeModal === "generate-report"} onOpenChange={onClose}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Generate System Report</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly Summary</SelectItem>
                    <SelectItem value="quarterly">Quarterly Report</SelectItem>
                    <SelectItem value="annual">Annual Report</SelectItem>
                    <SelectItem value="verification">Verification Report</SelectItem>
                    <SelectItem value="compliance">Compliance Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date-range">Date Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="date" placeholder="Start date" />
                  <Input type="date" placeholder="End date" />
                </div>
              </div>

              <div>
                <Label htmlFor="report-format">Format</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleGenerateReport} disabled={loading} className="bg-primary text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                {loading ? "Generating..." : "Generate Report"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* System Alerts Modal */}
      <Dialog open={activeModal === "system-alerts"} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>System Alerts & Notifications</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[500px] overflow-y-auto">
            {[
              {
                type: "critical",
                title: "Verification Queue Overload",
                message: "Verification queue is at 92% capacity. Consider adding more reviewers.",
                time: "2 hours ago",
                action: "View Queue",
              },
              {
                type: "warning",
                title: "Drone Survey Overdue",
                message: "Tamil Nadu Mangrove Project drone survey is 3 days overdue.",
                time: "6 hours ago",
                action: "Contact Project",
              },
              {
                type: "info",
                title: "New Organization Registration",
                message: "Coastal Research Institute has submitted registration documents.",
                time: "1 day ago",
                action: "Review Application",
              },
              {
                type: "success",
                title: "System Backup Completed",
                message: "Daily system backup completed successfully.",
                time: "1 day ago",
                action: "View Logs",
              },
            ].map((alert, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {alert.type === "critical" && <XCircle className="w-4 h-4 text-destructive" />}
                        {alert.type === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                        {alert.type === "info" && <FileText className="w-4 h-4 text-blue-500" />}
                        {alert.type === "success" && <CheckCircle className="w-4 h-4 text-green-500" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      {alert.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Review Submission Modal */}
      <Dialog open={activeModal === "review-submission"} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Review Submission</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Submission Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Project</Label>
                    <p className="text-sm text-muted-foreground">Sundarbans Mangrove Restoration</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Organization</Label>
                    <p className="text-sm text-muted-foreground">Coastal Conservation Foundation</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Submission Type</Label>
                    <Badge variant="secondary">Monthly Report</Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Credits Requested</Label>
                    <p className="text-sm text-muted-foreground">125 credits</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Description</Label>
                  <p className="text-sm text-muted-foreground">
                    Monthly progress report including drone survey data, community participation metrics, and carbon
                    sequestration measurements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Label htmlFor="review-comments">Review Comments</Label>
              <Textarea id="review-comments" placeholder="Add your review comments..." className="min-h-[120px]" />
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => handleReviewSubmission("reject")} disabled={loading}>
                <XCircle className="w-4 h-4 mr-2" />
                {loading ? "Rejecting..." : "Reject"}
              </Button>
              <Button
                onClick={() => handleReviewSubmission("approve")}
                disabled={loading}
                className="bg-primary text-primary-foreground"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {loading ? "Approving..." : "Approve"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Approve Submission Modal */}
      <Dialog open={activeModal === "approve-submission"} onOpenChange={onClose}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Approve Submission</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Approve Carbon Credits</h3>
                <p className="text-sm text-muted-foreground">
                  You are about to approve 125 carbon credits for Sundarbans Mangrove Restoration project.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="approval-notes">Approval Notes (Optional)</Label>
              <Textarea id="approval-notes" placeholder="Add any notes for this approval..." className="min-h-[80px]" />
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => handleReviewSubmission("approve")}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {loading ? "Approving..." : "Confirm Approval"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
