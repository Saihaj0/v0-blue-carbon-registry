"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Upload, X } from "lucide-react"

// Register New Member Modal
export function RegisterMemberModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    role: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Registering new member:", formData)
    alert("Member registered successfully!")
    setOpen(false)
    setFormData({ name: "", phone: "", email: "", address: "", role: "", experience: "" })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Register New Community Member</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="field-worker">Field Worker</SelectItem>
                <SelectItem value="data-collector">Data Collector</SelectItem>
                <SelectItem value="coordinator">Coordinator</SelectItem>
                <SelectItem value="volunteer">Volunteer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="experience">Previous Experience</Label>
            <Textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="Any relevant experience in conservation or community work"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Register Member</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Upload Progress Photos Modal
export function UploadPhotosModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Uploading photos:", { files: selectedFiles, description, location })
    alert(`Uploaded ${selectedFiles.length} photos successfully!`)
    setOpen(false)
    setSelectedFiles([])
    setDescription("")
    setLocation("")
  }

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Progress Photos</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="photos">Select Photos</Label>
            <Input
              id="photos"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="cursor-pointer"
            />
          </div>

          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <Label>Selected Files ({selectedFiles.length})</Label>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm truncate">{file.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="location">Location/Area</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Sector A, Mangrove Plot 1"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the progress shown in these photos"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={selectedFiles.length === 0}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Photos
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Submit Monthly Report Modal
export function SubmitReportModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [reportData, setReportData] = useState({
    month: "",
    participantsCount: "",
    areaWorked: "",
    plantsPlanted: "",
    survivalRate: "",
    challenges: "",
    achievements: "",
    nextMonthPlan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Submitting monthly report:", reportData)
    alert("Monthly report submitted successfully!")
    setOpen(false)
    setReportData({
      month: "",
      participantsCount: "",
      areaWorked: "",
      plantsPlanted: "",
      survivalRate: "",
      challenges: "",
      achievements: "",
      nextMonthPlan: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submit Monthly Report</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="month">Reporting Month</Label>
              <Input
                id="month"
                type="month"
                value={reportData.month}
                onChange={(e) => setReportData({ ...reportData, month: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="participants">Active Participants</Label>
              <Input
                id="participants"
                type="number"
                value={reportData.participantsCount}
                onChange={(e) => setReportData({ ...reportData, participantsCount: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="area">Area Worked (hectares)</Label>
              <Input
                id="area"
                type="number"
                step="0.1"
                value={reportData.areaWorked}
                onChange={(e) => setReportData({ ...reportData, areaWorked: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="plants">Plants/Seedlings Planted</Label>
              <Input
                id="plants"
                type="number"
                value={reportData.plantsPlanted}
                onChange={(e) => setReportData({ ...reportData, plantsPlanted: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="survival">Survival Rate (%)</Label>
            <Input
              id="survival"
              type="number"
              min="0"
              max="100"
              value={reportData.survivalRate}
              onChange={(e) => setReportData({ ...reportData, survivalRate: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="challenges">Challenges Faced</Label>
            <Textarea
              id="challenges"
              value={reportData.challenges}
              onChange={(e) => setReportData({ ...reportData, challenges: e.target.value })}
              placeholder="Describe any challenges or issues encountered"
            />
          </div>

          <div>
            <Label htmlFor="achievements">Key Achievements</Label>
            <Textarea
              id="achievements"
              value={reportData.achievements}
              onChange={(e) => setReportData({ ...reportData, achievements: e.target.value })}
              placeholder="Highlight major accomplishments this month"
            />
          </div>

          <div>
            <Label htmlFor="nextPlan">Next Month's Plan</Label>
            <Textarea
              id="nextPlan"
              value={reportData.nextMonthPlan}
              onChange={(e) => setReportData({ ...reportData, nextMonthPlan: e.target.value })}
              placeholder="Outline plans and goals for next month"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              <FileText className="w-4 h-4 mr-2" />
              Submit Report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Project Details Modal
export function ProjectDetailsModal({
  children,
  project,
}: {
  children: React.ReactNode
  project: {
    id: number
    name: string
    ngo: string
    status: string
    progress: number
    participants: number
    area: string
    earnings: number
    lastUpdate: string
  }
}) {
  const [open, setOpen] = useState(false)

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Partner NGO</p>
              <p className="font-medium">{project.ngo}</p>
            </div>
            <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Overall Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-3" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{project.participants}</div>
                <div className="text-sm text-muted-foreground">Active Participants</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{project.area}</div>
                <div className="text-sm text-muted-foreground">Total Area</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">₹{project.earnings.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Community Earnings</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{project.lastUpdate}</div>
                <div className="text-sm text-muted-foreground">Last Updated</div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Project Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">Site Survey Completed</p>
                  <p className="text-sm text-muted-foreground">January 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">Community Training</p>
                  <p className="text-sm text-muted-foreground">February 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">Plantation Phase 1</p>
                  <p className="text-sm text-muted-foreground">March 2024 - In Progress</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <div>
                  <p className="font-medium text-muted-foreground">Monitoring & Maintenance</p>
                  <p className="text-sm text-muted-foreground">April 2024 - Upcoming</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
