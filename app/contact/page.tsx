"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Building, Users, ShoppingCart, HelpCircle, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@bluecarbonregistry.gov.in", "support@bluecarbonregistry.gov.in"],
      color: "primary",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-11-2436-0000", "+91-11-2436-0001 (Support)"],
      color: "secondary",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Ministry of Earth Sciences", "Prithvi Bhavan, Lodhi Road", "New Delhi - 110003, India"],
      color: "accent",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
      color: "chart-2",
    },
  ]

  const inquiryTypes = [
    {
      icon: Users,
      title: "Community Registration",
      description: "NGOs and panchayats interested in joining restoration programs",
    },
    {
      icon: ShoppingCart,
      title: "Carbon Credit Purchase",
      description: "Businesses looking to purchase verified carbon credits",
    },
    {
      icon: Building,
      title: "Partnership Opportunities",
      description: "Organizations interested in strategic partnerships",
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      description: "Platform usage, verification process, and technical queries",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Have questions about blue carbon restoration, carbon credits, or our platform? We're here to help you join
            India's transparent climate action initiative.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-lg text-muted-foreground">Multiple ways to reach our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-${info.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Inquiry Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => handleInputChange("organization", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Select onValueChange={(value) => handleInputChange("role", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ngo">NGO Representative</SelectItem>
                              <SelectItem value="panchayat">Panchayat Member</SelectItem>
                              <SelectItem value="buyer">Corporate Buyer</SelectItem>
                              <SelectItem value="researcher">Researcher</SelectItem>
                              <SelectItem value="government">Government Official</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select onValueChange={(value) => handleInputChange("subject", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="registration">Community Registration</SelectItem>
                            <SelectItem value="purchase">Carbon Credit Purchase</SelectItem>
                            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please provide details about your inquiry..."
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full group">
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Types */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Common Inquiries</h2>
              <div className="space-y-4">
                {inquiryTypes.map((type, index) => {
                  const IconComponent = type.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground">{type.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Links */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-col space-y-2">
                    <a href="/features" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Platform Features & Capabilities
                    </a>
                    <a href="/how-it-works" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      How the Process Works
                    </a>
                    <a href="/communities" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Community Participation Guide
                    </a>
                    <a href="/buyers" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Carbon Credit Purchase Information
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Government Initiative</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The Blue Carbon Registry is an initiative of the Ministry of Earth Sciences, Government of India, in
            collaboration with the National Centre for Coastal Research (NCCR).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ministry of Earth Sciences</h3>
                <p className="text-muted-foreground">
                  Leading India's efforts in earth system science and climate research
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">NCCR Verification</h3>
                <p className="text-muted-foreground">Scientific validation and approval of all restoration projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
