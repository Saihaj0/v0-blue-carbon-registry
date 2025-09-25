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
  Search,
  Filter,
  Eye,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Building,
  Shield,
  AlertTriangle,
} from "lucide-react"

export default function OrganizationsPage() {
  const navigationItems = [
    { href: "/dashboard/admin", label: "Overview", icon: Home },
    { href: "/dashboard/admin/verification", label: "Verification Queue", icon: CheckCircle },
    { href: "/dashboard/admin/projects", label: "All Projects", icon: TreePine },
    { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users, active: true },
    { href: "/dashboard/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/admin/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const organizations = [
    {
      id: 1,
      name: "Coastal Conservation Foundation",
      type: "NGO",
      status: "verified",
      registrationDate: "2022-03-15",
      location: "West Bengal",
      contactPerson: "Dr. Priya Sharma",
      email: "priya@ccf.org",
      phone: "+91 98765 43210",
      projects: 3,
      activeProjects: 2,
      creditsEarned: 450,
      compliance: 95,
      lastActivity: "2024-01-20",
    },
    {
      id: 2,
      name: "Odisha Environmental Trust",
      type: "NGO",
      status: "verified",
      registrationDate: "2021-08-10",
      location: "Odisha",
      contactPerson: "Mr. Rajesh Patel",
      email: "rajesh@oet.org",
      phone: "+91 87654 32109",
      projects: 2,
      activeProjects: 1,
      creditsEarned: 320,
      compliance: 88,
      lastActivity: "2024-01-19",
    },
    {
      id: 3,
      name: "Kerala Marine Foundation",
      type: "NGO",
      status: "pending",
      registrationDate: "2023-06-20",
      location: "Kerala",
      contactPerson: "Ms. Sunita Nair",
      email: "sunita@kmf.org",
      phone: "+91 76543 21098",
      projects: 1,
      activeProjects: 1,
      creditsEarned: 75,
      compliance: 92,
      lastActivity: "2024-01-18",
    },
    {
      id: 4,
      name: "Gujarat Marine Trust",
      type: "NGO",
      status: "verified",
      registrationDate: "2022-01-12",
      location: "Gujarat",
      contactPerson: "Dr. Amit Desai",
      email: "amit@gmt.org",
      phone: "+91 65432 10987",
      projects: 2,
      activeProjects: 2,
      creditsEarned: 280,
      compliance: 90,
      lastActivity: "2024-01-15",
    },
    {
      id: 5,
      name: "Panchayat Coastal Development",
      type: "Panchayat",
      status: "verified",
      registrationDate: "2023-09-05",
      location: "Tamil Nadu",
      contactPerson: "Mr. Murugan K",
      email: "murugan@pcd.gov.in",
      phone: "+91 54321 09876",
      projects: 1,
      activeProjects: 1,
      creditsEarned: 120,
      compliance: 85,
      lastActivity: "2024-01-12",
    },
    {
      id: 6,
      name: "EcoTech Solutions Pvt Ltd",
      type: "Corporate",
      status: "verified",
      registrationDate: "2023-11-20",
      location: "Maharashtra",
      contactPerson: "Ms. Kavya Singh",
      email: "kavya@ecotech.com",
      phone: "+91 43210 98765",
      projects: 0,
      activeProjects: 0,
      creditsEarned: 0,
      compliance: 100,
      lastActivity: "2024-01-10",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-primary text-primary-foreground"
      case "pending":
        return "bg-secondary text-secondary-foreground"
      case "suspended":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "NGO":
        return "bg-primary/10 text-primary"
      case "Panchayat":
        return "bg-secondary/10 text-secondary"
      case "Corporate":
        return "bg-chart-2/10 text-chart-2"
      default:
        return "bg-muted/10 text-muted-foreground"
    }
  }

  const getComplianceColor = (compliance: number) => {
    if (compliance >= 90) return "text-primary"
    if (compliance >= 75) return "text-secondary"
    return "text-destructive"
  }

  const totalOrganizations = organizations.length
  const verifiedOrganizations = organizations.filter((o) => o.status === "verified").length
  const pendingOrganizations = organizations.filter((o) => o.status === "pending").length
  const avgCompliance = Math.round(organizations.reduce((sum, o) => sum + o.compliance, 0) / organizations.length)

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
            <h1 className="text-2xl font-bold text-foreground">Organizations</h1>
            <p className="text-muted-foreground">Manage registered organizations and their compliance</p>
          </div>
          <Button className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Approve Pending</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Organizations</p>
                  <p className="text-2xl font-bold text-foreground">{totalOrganizations}</p>
                </div>
                <Building className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold text-foreground">{verifiedOrganizations}</p>
                </div>
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Approval</p>
                  <p className="text-2xl font-bold text-foreground">{pendingOrganizations}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Compliance</p>
                  <p className="text-2xl font-bold text-foreground">{avgCompliance}%</p>
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
                <Input placeholder="Search organizations..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Organizations List */}
        <div className="space-y-4">
          {organizations.map((org) => (
            <Card key={org.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Building className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{org.name}</h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {org.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Registered: {org.registrationDate}
                      </span>
                      <span>Last Activity: {org.lastActivity}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        {org.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        {org.phone}
                      </span>
                      <span>Contact: {org.contactPerson}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(org.status)}>{org.status}</Badge>
                    <Badge className={getTypeColor(org.type)}>{org.type}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{org.projects}</div>
                    <div className="text-xs text-muted-foreground">Total Projects</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{org.activeProjects}</div>
                    <div className="text-xs text-muted-foreground">Active Projects</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{org.creditsEarned}</div>
                    <div className="text-xs text-muted-foreground">Credits Earned</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className={`text-lg font-bold ${getComplianceColor(org.compliance)}`}>{org.compliance}%</div>
                    <div className="text-xs text-muted-foreground">Compliance</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{org.status === "verified" ? "Yes" : "No"}</div>
                    <div className="text-xs text-muted-foreground">Verified</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-4 border-t border-border">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    Documents
                  </Button>
                  {org.status === "pending" && (
                    <Button size="sm">
                      <Shield className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4 mr-1" />
                    Manage
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
