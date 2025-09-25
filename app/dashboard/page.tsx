"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardRedirect() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, this would check authentication and user role from context/API
    // For now, we'll redirect to admin dashboard as default

    // This would typically come from authentication context
    const getUserRole = () => {
      // Check localStorage, cookies, or authentication context
      const userRole = localStorage.getItem("userRole") || "admin"
      return userRole
    }

    const userRole = getUserRole()

    console.log("[v0] Redirecting to dashboard for role:", userRole)

    // Redirect to appropriate dashboard based on user role
    switch (userRole) {
      case "ngo":
        router.replace("/dashboard/ngo")
        break
      case "panchayat":
        router.replace("/dashboard/panchayat")
        break
      case "buyer":
        router.replace("/dashboard/buyer")
        break
      case "admin":
        router.replace("/dashboard/admin")
        break
      default:
        // If no role found, redirect to login
        router.replace("/login")
        break
    }
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    </div>
  )
}
