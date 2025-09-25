import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Home,
  TreePine,
  FileText,
  Users,
  Settings,
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Camera,
  IndianRupee,
} from "lucide-react"

export default function NGOCommunityPage() {
  const navigationItems = [
    { href: "/dashboard/ngo", label: "Overview", icon: Home },
    { href: "/dashboard/ngo/projects", label: "My Projects", icon: TreePine },
    { href: "/dashboard/ngo/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/ngo/community", label: "Community", icon: Users, active: true },
    { href: "/dashboard/ngo/settings", label: "Settings", icon: Settings },
  ]

  const communityMembers = [
    {
      id: 1,
      name: "Ramesh Kumar",
      role: "Lead Coordinator",
      location: "Sundarbans, West Bengal",
      phone: "+91 98765 43210",
      email: "ramesh.kumar@email.com",
      projects: ["Sundarbans Mangrove Restoration"],
      joinDate: "2023-06-15",
      totalEarnings: 25000,
      photosUploaded: 145,
      status: "active",
    },
    {
      id: 2,
      name: "Sunita Devi",
      role: "Field Worker",
      location: "Chilika, Odisha",
      phone: "+91 87654 32109",
      email: "sunita.devi@email.com",
      projects: ["Chilika Lake Seagrass Project"],
      joinDate: "2023-09-01",
      totalEarnings: 18000,
      photosUploaded: 89,
      status: "active",
    },
    {
      id: 3,
      name: "Mohan Singh",
      role: "Data Collector",
      location: "Kerala Backwaters",
      phone: "+91 76543 21098",
      email: "mohan.singh@email.com",
      projects: ["Kerala Backwater Conservation", "Sundarbans Mangrove Restoration"],
      joinDate: "2023-01-15",
      totalEarnings: 32000,
      photosUploaded: 203,
      status: "active",
    },
    {
      id: 4,
      name: "Lakshmi Nair",
      role: "Community Liaison",
      location: "Gujarat Coast",
      phone: "+91 65432 10987",
      email: "lakshmi.nair@email.com",
      projects: ["Gujarat Coastal Restoration"],
      joinDate: "2024-01-10",
      totalEarnings: 5000,
      photosUploaded: 23,
      status: "training",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "training":
        return "bg-secondary text-secondary-foreground"
      case "inactive":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
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
            <h1 className="text-2xl font-bold text-foreground">Community Members</h1>
            <p className="text-muted-foreground">Manage and coordinate with your field team and community partners</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Member</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Members</p>
                  <p className="text-2xl font-bold text-foreground">127</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                  <p className="text-2xl font-bold text-foreground">98</p>
                </div>
                <Users className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Photos Uploaded</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <Camera className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Paid</p>
                  <p className="text-2xl font-bold text-foreground">₹2.4L</p>
                </div>
                <IndianRupee className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search community members..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Community Members List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {communityMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <Badge className={getStatusColor(member.status)}>{member.status}</Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {member.joinDate}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-foreground">{member.projects.length}</p>
                          <p className="text-muted-foreground">Projects</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-foreground">{member.photosUploaded}</p>
                          <p className="text-muted-foreground">Photos</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-foreground">₹{member.totalEarnings.toLocaleString()}</p>
                          <p className="text-muted-foreground">Earned</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Active Projects:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.projects.map((project, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2 mt-4">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
