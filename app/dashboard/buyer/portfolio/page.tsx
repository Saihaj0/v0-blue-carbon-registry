"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Home,
  ShoppingCart,
  BarChart3,
  FileText,
  Settings,
  Target,
  MapPin,
  CheckCircle,
  Search,
  Eye,
  Calendar,
  TrendingUp,
  Leaf,
} from "lucide-react"

export default function PortfolioPage() {
  const navigationItems = [
    { href: "/dashboard/buyer", label: "Overview", icon: Home },
    { href: "/dashboard/buyer/marketplace", label: "Marketplace", icon: ShoppingCart },
    { href: "/dashboard/buyer/portfolio", label: "My Credits", icon: Target, active: true },
    { href: "/dashboard/buyer/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/dashboard/buyer/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/buyer/settings", label: "Settings", icon: Settings },
  ]

  const myCredits = [
    {
      id: 1,
      project: "Sundarbans Mangrove Restoration",
      location: "West Bengal",
      credits: 100,
      purchasePrice: 2500,
      currentValue: 3200,
      purchaseDate: "2024-01-15",
      status: "active",
      co2Offset: 2.5,
      certificateId: "SMR-2024-001",
      expiryDate: "2034-01-15",
    },
    {
      id: 2,
      project: "Kerala Backwater Conservation",
      location: "Kerala",
      credits: 50,
      purchasePrice: 1250,
      currentValue: 1400,
      purchaseDate: "2024-01-10",
      status: "retired",
      co2Offset: 1.25,
      certificateId: "KBC-2024-002",
      retiredDate: "2024-02-15",
    },
    {
      id: 3,
      project: "Gujarat Coastal Restoration",
      location: "Gujarat",
      credits: 75,
      purchasePrice: 1875,
      currentValue: 2250,
      purchaseDate: "2024-01-05",
      status: "active",
      co2Offset: 1.875,
      certificateId: "GCR-2024-003",
      expiryDate: "2034-01-05",
    },
    {
      id: 4,
      project: "Tamil Nadu Mangrove Initiative",
      location: "Tamil Nadu",
      credits: 25,
      purchasePrice: 700,
      currentValue: 750,
      purchaseDate: "2023-12-20",
      status: "active",
      co2Offset: 0.7,
      certificateId: "TMI-2023-004",
      expiryDate: "2033-12-20",
    },
  ]

  const portfolioStats = {
    totalCredits: myCredits.reduce((sum, credit) => sum + credit.credits, 0),
    totalInvested: myCredits.reduce((sum, credit) => sum + credit.purchasePrice, 0),
    currentValue: myCredits.reduce((sum, credit) => sum + credit.currentValue, 0),
    totalCO2Offset: myCredits.reduce((sum, credit) => sum + credit.co2Offset, 0),
    activeCredits: myCredits
      .filter((credit) => credit.status === "active")
      .reduce((sum, credit) => sum + credit.credits, 0),
    retiredCredits: myCredits
      .filter((credit) => credit.status === "retired")
      .reduce((sum, credit) => sum + credit.credits, 0),
  }

  const handleViewCertificate = (certificateId: string, projectName: string) => {
    console.log(`[v0] Viewing certificate ${certificateId} for ${projectName}`)
    alert(`Opening certificate ${certificateId} for ${projectName}`)
  }

  const handleRetireCredits = (creditId: number, projectName: string) => {
    console.log(`[v0] Retiring credits for ${creditId}: ${projectName}`)
    alert(`Initiating retirement process for credits from ${projectName}`)
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
            <h1 className="text-2xl font-bold text-foreground">My Carbon Credits Portfolio</h1>
            <p className="text-muted-foreground">Manage and track your carbon credit investments</p>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold text-foreground">{portfolioStats.totalCredits}</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Portfolio Value</p>
                  <p className="text-2xl font-bold text-foreground">₹{portfolioStats.currentValue.toLocaleString()}</p>
                  <p className="text-xs text-green-600">
                    +₹{(portfolioStats.currentValue - portfolioStats.totalInvested).toLocaleString()} gain
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
                  <p className="text-sm text-muted-foreground">CO₂ Offset</p>
                  <p className="text-2xl font-bold text-foreground">{portfolioStats.totalCO2Offset}t</p>
                </div>
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Credits</p>
                  <p className="text-2xl font-bold text-foreground">{portfolioStats.activeCredits}</p>
                  <p className="text-xs text-muted-foreground">{portfolioStats.retiredCredits} retired</p>
                </div>
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search your credits by project name..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Newest First</SelectItem>
                    <SelectItem value="date-asc">Oldest First</SelectItem>
                    <SelectItem value="value-desc">Highest Value</SelectItem>
                    <SelectItem value="credits-desc">Most Credits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credits List */}
        <div className="space-y-4">
          {myCredits.map((credit) => (
            <Card key={credit.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{credit.project}</h3>
                      <Badge variant={credit.status === "active" ? "default" : "secondary"}>{credit.status}</Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{credit.location}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>Purchased: {credit.purchaseDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">₹{credit.currentValue.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Current Value</div>
                    {credit.currentValue > credit.purchasePrice && (
                      <div className="text-xs text-green-600">
                        +{(((credit.currentValue - credit.purchasePrice) / credit.purchasePrice) * 100).toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Credits</div>
                    <div className="font-semibold">{credit.credits}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">CO₂ Offset</div>
                    <div className="font-semibold">{credit.co2Offset}t</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Purchase Price</div>
                    <div className="font-semibold">₹{credit.purchasePrice.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Certificate ID</div>
                    <div className="font-semibold text-xs">{credit.certificateId}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    {credit.status === "active" ? (
                      <>Expires: {credit.expiryDate}</>
                    ) : (
                      <>Retired: {credit.retiredDate}</>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleViewCertificate(credit.certificateId, credit.project)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                    {credit.status === "active" && (
                      <Button size="sm" onClick={() => handleRetireCredits(credit.id, credit.project)}>
                        <Target className="w-4 h-4 mr-2" />
                        Retire Credits
                      </Button>
                    )}
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
