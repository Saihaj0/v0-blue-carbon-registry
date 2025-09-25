import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Home,
  ShoppingCart,
  BarChart3,
  FileText,
  Settings,
  Target,
  TrendingUp,
  Leaf,
  IndianRupee,
  Download,
} from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function AnalyticsPage() {
  const navigationItems = [
    { href: "/dashboard/buyer", label: "Overview", icon: Home },
    { href: "/dashboard/buyer/marketplace", label: "Marketplace", icon: ShoppingCart },
    { href: "/dashboard/buyer/portfolio", label: "My Credits", icon: Target },
    { href: "/dashboard/buyer/analytics", label: "Analytics", icon: BarChart3, active: true },
    { href: "/dashboard/buyer/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/buyer/settings", label: "Settings", icon: Settings },
  ]

  const monthlyData = [
    { month: "Jan", credits: 0, investment: 0, co2Offset: 0 },
    { month: "Feb", credits: 50, investment: 1250, co2Offset: 1.25 },
    { month: "Mar", credits: 125, investment: 3125, co2Offset: 3.125 },
    { month: "Apr", credits: 200, investment: 5625, co2Offset: 5.0 },
    { month: "May", credits: 225, investment: 6250, co2Offset: 5.625 },
    { month: "Jun", credits: 250, investment: 6875, co2Offset: 6.25 },
  ]

  const projectTypeData = [
    { name: "Mangrove Restoration", value: 175, color: "#0ea5e9" },
    { name: "Seagrass Conservation", value: 50, color: "#10b981" },
    { name: "Salt Marsh Protection", value: 25, color: "#f59e0b" },
  ]

  const regionData = [
    { region: "West Bengal", credits: 100, investment: 3500 },
    { region: "Kerala", credits: 50, investment: 1400 },
    { region: "Gujarat", credits: 75, investment: 2250 },
    { region: "Tamil Nadu", credits: 25, investment: 750 },
  ]

  const impactMetrics = {
    totalCO2Offset: 6.25,
    equivalentTrees: 2250,
    equivalentCars: 1.4,
    mangroveArea: 12.5,
    portfolioGrowth: 28.5,
    avgCreditPrice: 27.5,
  }

  return (
    <DashboardLayout
      userRole="buyer"
      userName="Priya Sharma"
      userEmail="priya.sharma@techcorp.com"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Portfolio Analytics</h1>
            <p className="text-muted-foreground">Track your carbon credit investment performance and impact</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="6months">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Portfolio Growth</p>
                  <p className="text-2xl font-bold text-foreground">+{impactMetrics.portfolioGrowth}%</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    vs last period
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Credit Price</p>
                  <p className="text-2xl font-bold text-foreground">₹{impactMetrics.avgCreditPrice}</p>
                  <p className="text-xs text-blue-600">per credit</p>
                </div>
                <IndianRupee className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CO₂ Impact</p>
                  <p className="text-2xl font-bold text-foreground">{impactMetrics.totalCO2Offset}t</p>
                  <p className="text-xs text-green-600">carbon offset</p>
                </div>
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Mangrove Area</p>
                  <p className="text-2xl font-bold text-foreground">{impactMetrics.mangroveArea}</p>
                  <p className="text-xs text-blue-600">hectares restored</p>
                </div>
                <Target className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Investment Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "investment" ? `₹${value.toLocaleString()}` : value,
                      name === "investment" ? "Investment" : name === "credits" ? "Credits" : "CO₂ Offset (t)",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="investment"
                    stackId="1"
                    stroke="#0ea5e9"
                    fill="#0ea5e9"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Project Type Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Credits by Project Type</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} credits`, "Credits"]} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regional Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Credits by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "investment" ? `₹${value.toLocaleString()}` : `${value} credits`,
                      name === "investment" ? "Investment" : "Credits",
                    ]}
                  />
                  <Bar dataKey="credits" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card>
            <CardHeader>
              <CardTitle>Environmental Impact Equivalents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">🌳</div>
                  <div>
                    <div className="font-semibold text-foreground">Trees Planted Equivalent</div>
                    <div className="text-sm text-muted-foreground">Based on CO₂ absorption</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {impactMetrics.equivalentTrees.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">🚗</div>
                  <div>
                    <div className="font-semibold text-foreground">Cars Off Road</div>
                    <div className="text-sm text-muted-foreground">Annual emissions equivalent</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">{impactMetrics.equivalentCars}</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">🌊</div>
                  <div>
                    <div className="font-semibold text-foreground">Coastal Area Protected</div>
                    <div className="text-sm text-muted-foreground">Mangrove restoration area</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-teal-600">{impactMetrics.mangroveArea} ha</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
