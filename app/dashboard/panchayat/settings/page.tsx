import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Home, TreePine, Users, FileText, Settings, User, Bell, Shield, MapPin, Save, Building } from "lucide-react"

export default function PanchayatSettingsPage() {
  const navigationItems = [
    { href: "/dashboard/panchayat", label: "Overview", icon: Home },
    { href: "/dashboard/panchayat/projects", label: "Local Projects", icon: TreePine },
    { href: "/dashboard/panchayat/community", label: "Community", icon: Users },
    { href: "/dashboard/panchayat/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/panchayat/settings", label: "Settings", icon: Settings, active: true },
  ]

  return (
    <DashboardLayout
      userRole="panchayat"
      userName="Sarpanch Vijay Patel"
      userEmail="vijay.patel@sundarbans.gov.in"
      navigationItems={navigationItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your panchayat profile and community preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Settings Menu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Building className="w-4 h-4 mr-2" />
                Panchayat Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Personal Details
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Location Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Button>
            </CardContent>
          </Card>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Panchayat Profile */}
            <Card>
              <CardHeader>
                <CardTitle>Panchayat Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="panchayatName">Panchayat Name</Label>
                    <Input id="panchayatName" defaultValue="Sundarbans Gram Panchayat" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blockName">Block</Label>
                    <Input id="blockName" defaultValue="Gosaba Block" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Input id="district" defaultValue="South 24 Parganas" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" defaultValue="West Bengal" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="panchayatCode">Panchayat Code</Label>
                  <Input id="panchayatCode" defaultValue="WB/S24P/GSB/001" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="population">Population</Label>
                    <Input id="population" defaultValue="12,500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="households">Households</Label>
                    <Input id="households" defaultValue="2,800" />
                  </div>
                </div>
                <Button className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Panchayat Profile</span>
                </Button>
              </CardContent>
            </Card>

            {/* Personal Details */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Vijay Patel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input id="designation" defaultValue="Sarpanch" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="termStart">Term Start Date</Label>
                    <Input id="termStart" defaultValue="2023-05-15" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="termEnd">Term End Date</Label>
                    <Input id="termEnd" defaultValue="2028-05-14" type="date" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alternatePhone">Alternate Phone</Label>
                    <Input id="alternatePhone" defaultValue="+91 87654 32109" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Textarea
                    id="address"
                    defaultValue="Village Sundarbans, Post Office Gosaba, South 24 Parganas, West Bengal 743370"
                    rows={2}
                  />
                </div>
                <Button className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Personal Details</span>
                </Button>
              </CardContent>
            </Card>

            {/* Location Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Coverage Area</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input id="latitude" defaultValue="22.1696" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input id="longitude" defaultValue="88.8121" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverageArea">Coverage Area (sq km)</Label>
                  <Input id="coverageArea" defaultValue="45.2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coastalLength">Coastal Length (km)</Label>
                  <Input id="coastalLength" defaultValue="12.8" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="villages">Villages Covered</Label>
                  <Textarea
                    id="villages"
                    defaultValue="Sundarbans Village, Mangrove Settlement, Coastal Ward 3, Fishermen Colony"
                    rows={2}
                  />
                </div>
                <Button className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Location Settings</span>
                </Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="projectUpdates">Project Updates</Label>
                    <p className="text-sm text-muted-foreground">Notifications about local project progress</p>
                  </div>
                  <Switch id="projectUpdates" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="communityAlerts">Community Alerts</Label>
                    <p className="text-sm text-muted-foreground">Important community member notifications</p>
                  </div>
                  <Switch id="communityAlerts" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="paymentNotifications">Payment Notifications</Label>
                    <p className="text-sm text-muted-foreground">Notifications about community payments</p>
                  </div>
                  <Switch id="paymentNotifications" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reportReminders">Report Reminders</Label>
                    <p className="text-sm text-muted-foreground">Reminders for monthly and quarterly reports</p>
                  </div>
                  <Switch id="reportReminders" defaultChecked />
                </div>
                <Button className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Preferences</span>
                </Button>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Update Password</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
