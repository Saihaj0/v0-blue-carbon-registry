import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Home,
  ShoppingCart,
  BarChart3,
  FileText,
  Settings,
  Target,
  Download,
  Search,
  Calendar,
  Eye,
  Plus,
  Filter,
  Leaf,
} from "lucide-react"

export default function BuyerReportsPage() {
  const navigationItems = [
    { href: "/dashboard/buyer", label: "Overview", icon: Home },
    { href: "/dashboard/buyer/marketplace", label: "Marketplace", icon: ShoppingCart },
    { href: "/dashboard/buyer/portfolio", label: "My Credits", icon: Target },
    { href: "/dashboard/buyer/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/buyer/reports", label: "Reports", icon: FileText, active: true },
    { href: "/dashboard/buyer/settings", label: "Settings", icon: Settings },
  ]

  const reports = [
    {
      id: 1,
      title: "Annual Carbon Offset Report 2023",
      type: "Annual Summary",
      generatedDate: "2024-01-15",
      period: "Jan 2023 - Dec 2023",
      totalCredits: 500,
      co2Offset: 12.5,
      projects: 8,
      investment: 125000,
    },
    {
      id: 2,
      title: "Q4 2023 Impact Assessment",
      type: "Quarterly Report",
      generatedDate: "2024-01-05",
      period: "Oct 2023 - Dec 2023",
      totalCredits: 150,
      co2Offset: 3.75,
      projects: 3,
      investment: 37500,
    },
    {
      id: 3,
      title: "Sundarbans Project Impact Report",
      type: "Project-Specific",
      generatedDate: "2023-12-20",
      period: "Jun 2023 - Dec 2023",
      totalCredits: 200,
      co2Offset: 5.0,
      projects: 1,
      investment: 50000,
    },
    {
      id: 4,
      title: "ESG Compliance Report 2023",
      type: "Compliance Report",
      generatedDate: "2023-12-31",
      period: "Jan 2023 - Dec 2023",
      totalCredits: 500,
      co2Offset: 12.5,
      projects: 8,
      investment: 125000,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Annual Summary":
        return "bg-primary text-primary-foreground"
      case "Quarterly Report":
        return "bg-secondary text-secondary-foreground"
      case "Project-Specific":
        return "bg-accent text-accent-foreground"
      case "Compliance Report":
        return "bg-chart-2 text-chart-2-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <DashboardLayout
      userRole="buyer"
      userName="Priya Sharma"
      userEmail="priya.sharma@techcorp.com"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">
              Generate and download impact reports for your carbon offset activities
            </p>
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
                  <p className="text-sm text-muted-foreground">This Year</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CO₂ Reported</p>
                  <p className="text-2xl font-bold text-foreground">45.2t</p>
                </div>
                <Leaf className="w-8 h-8 text-chart-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
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
          {reports.map((report) => (
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
                    <div className="text-lg font-bold text-foreground">{report.totalCredits}</div>
                    <div className="text-xs text-muted-foreground">Credits</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.co2Offset}t</div>
                    <div className="text-xs text-muted-foreground">CO₂ Offset</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{report.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">₹{(report.investment / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-muted-foreground">Investment</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm">
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
