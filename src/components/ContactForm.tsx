"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Users, Briefcase, HelpCircle, Sun, Battery, Thermometer, Lightbulb, FileText, Coins, CheckCircle2 } from "lucide-react";

const sectors = [
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "public-sector", label: "Public Sector", icon: Users },
  { id: "housing", label: "Housing Association", icon: Briefcase },
  { id: "other", label: "Other", icon: HelpCircle },
];

const interests = [
  { id: "solar-pv", label: "Solar PV Installation", icon: Sun },
  { id: "battery", label: "Battery Storage", icon: Battery },
  { id: "infrared", label: "Infrared Heating", icon: Thermometer },
  { id: "led", label: "LED Lighting", icon: Lightbulb },
  { id: "consultation", label: "Consultation & Advisory", icon: FileText },
  { id: "funding", label: "Funding & Grants", icon: Coins },
];

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    sector: "",
    interests: [] as string[],
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const toggleInterest = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Get sector label
      const sectorLabel = sectors.find(s => s.id === formData.sector)?.label || formData.sector;
      
      // Get interest labels
      const interestLabels = formData.interests
        .map(id => interests.find(i => i.id === id)?.label)
        .filter(Boolean)
        .join(", ");

      // Prepare form data for Web3Forms
      const web3FormData = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        organization: formData.organization || "Not provided",
        phone: formData.phone || "Not provided",
        sector: sectorLabel,
        interests: interestLabels,
        message: formData.message || "No additional message",
        subject: `New enquiry from ${formData.name} - ${sectorLabel}`,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3FormData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            organization: "",
            email: "",
            phone: "",
            sector: "",
            interests: [],
            message: "",
          });
        }, 5000);
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again or contact us directly.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="border-heliaxis-gold/30 shadow-lg">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-heliaxis-gold/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-heliaxis-gold" />
          </div>
          <h3 className="text-2xl font-bold text-heliaxis-navy mb-2">Thank You!</h3>
          <p className="text-gray-600">We've received your enquiry and will be in touch shortly.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-heliaxis-gold/30 shadow-lg">
      <CardContent className="pt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Organization */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-heliaxis-navy">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-heliaxis-gold focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="organization" className="text-sm font-semibold text-heliaxis-navy">
                Organization Name
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-heliaxis-gold focus:border-transparent"
                placeholder="Company or organization"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-heliaxis-navy">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-heliaxis-gold focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-heliaxis-navy">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-heliaxis-gold focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* Sector Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-heliaxis-navy">
              Your Sector <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, sector: sector.id })}
                    className={`p-4 rounded-[5px] border-2 transition-all duration-200 flex flex-col items-center gap-2 hover:scale-105 ${
                      formData.sector === sector.id
                        ? "border-heliaxis-gold bg-heliaxis-gold/10 shadow-md"
                        : "border-gray-300 bg-gray-50 hover:border-heliaxis-gold/50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${formData.sector === sector.id ? "text-heliaxis-gold" : "text-gray-600"}`} />
                    <span className={`text-sm font-medium text-center ${formData.sector === sector.id ? "text-heliaxis-navy" : "text-gray-700"}`}>
                      {sector.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interest Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-heliaxis-navy">
              I am interested in <span className="text-red-500">*</span>
              <span className="text-xs font-normal text-gray-500 ml-2">(Select all that apply)</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {interests.map((interest) => {
                const Icon = interest.icon;
                const isSelected = formData.interests.includes(interest.id);
                return (
                  <button
                    key={interest.id}
                    type="button"
                    onClick={() => toggleInterest(interest.id)}
                    className={`p-4 rounded-[5px] border-2 transition-all duration-200 flex items-center gap-3 hover:scale-105 ${
                      isSelected
                        ? "border-heliaxis-gold bg-heliaxis-gold/10 shadow-md"
                        : "border-gray-300 bg-gray-50 hover:border-heliaxis-gold/50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-heliaxis-gold" : "text-gray-600"}`} />
                    <span className={`text-sm font-medium text-left ${isSelected ? "text-heliaxis-navy" : "text-gray-700"}`}>
                      {interest.label}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-heliaxis-gold ml-auto flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-heliaxis-navy">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-heliaxis-gold focus:border-transparent resize-none"
              placeholder="Tell us more about your project requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[5px] text-red-600 text-sm">
                {error}
              </div>
            )}
            <Button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.sector || formData.interests.length === 0 || isSubmitting}
              className="w-full bg-heliaxis-gold hover:bg-heliaxis-gold/90 text-heliaxis-navy font-semibold py-6 text-lg rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

