import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, Clock, ArrowRight,
  Home, Building2, Users, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact Heliaxis | Get a Free Quote",
  description:
    "Contact Heliaxis for a free consultation on solar PV, battery storage, and renewable energy solutions in Wales and the South West of England. Request a quote today.",
  keywords: [
    "contact Heliaxis",
    "solar quote Wales",
    "renewable energy consultation",
    "free solar quote",
    "energy assessment Wales",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact us - professional support team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-heliaxis-navy/85" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-heliaxis-gold/20 text-heliaxis-gold border-heliaxis-gold/30 mb-6">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Start the{" "}
              <span className="text-heliaxis-gold">conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Whether you are a homeowner exploring solar and battery storage, a business 
              seeking to reduce operating costs, or a public sector organisation planning 
              decarbonisation, Heliaxis is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-heliaxis-navy mb-6">
                Request a consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll be in touch to discuss your project, 
                answer your questions, or arrange a site assessment.
              </p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-heliaxis-navy mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-heliaxis-gold focus:ring-2 focus:ring-heliaxis-gold/20 outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-heliaxis-navy mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-heliaxis-gold focus:ring-2 focus:ring-heliaxis-gold/20 outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-heliaxis-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-heliaxis-gold focus:ring-2 focus:ring-heliaxis-gold/20 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-heliaxis-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-heliaxis-gold focus:ring-2 focus:ring-heliaxis-gold/20 outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-heliaxis-navy mb-2">
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-heliaxis-gold focus:ring-2 focus:ring-heliaxis-gold/20 outline-none transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="residential">Residential - Home Solar & Battery</option>
                    <option value="commercial">Commercial - Business Energy Solutions</option>
                    <option value="public-sector">Public Sector - Local Authority / Housing Association</option>
                    <option value="consultation">Consultation & Advisory Services</option>
                    <option value="funding">Funding & Support Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-heliaxis-navy mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:border-heliaxis-gold focus:ring-2 focus:ring-heliaxis-gold/20 outline-none transition-colors resize-none"
                    placeholder="Please describe your project, goals, or any questions you have..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-heliaxis-gold focus:ring-heliaxis-gold"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Heliaxis storing my details and contacting me about my enquiry.
                  </label>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-heliaxis-gold hover:bg-heliaxis-gold/90 text-heliaxis-navy font-semibold h-14 text-lg"
                >
                  Send Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-heliaxis-navy mb-6">
                Contact information
              </h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach out directly? You can contact us using the details below.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-heliaxis-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-heliaxis-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heliaxis-navy">Email</h3>
                    <a 
                      href="mailto:hello@heliaxis.co.uk" 
                      className="text-gray-600 hover:text-heliaxis-gold transition-colors"
                    >
                      hello@heliaxis.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-heliaxis-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-heliaxis-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heliaxis-navy">Phone</h3>
                    <a 
                      href="tel:+441633965205" 
                      className="text-gray-600 hover:text-heliaxis-gold transition-colors"
                    >
                      +44 1633 965205
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-heliaxis-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-heliaxis-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heliaxis-navy">Service Area</h3>
                    <p className="text-gray-600">Wales & South West England</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-heliaxis-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-heliaxis-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heliaxis-navy">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 1-2 business days</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-heliaxis-navy rounded-[10px] p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Explore our services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link 
                    href="/residential" 
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-[10px] hover:bg-white/10 transition-colors"
                  >
                    <Home className="w-5 h-5 text-heliaxis-gold" />
                    <span>Residential</span>
                  </Link>
                  <Link 
                    href="/commercial" 
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-[10px] hover:bg-white/10 transition-colors"
                  >
                    <Building2 className="w-5 h-5 text-heliaxis-gold" />
                    <span>Commercial</span>
                  </Link>
                  <Link 
                    href="/consultation" 
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-[10px] hover:bg-white/10 transition-colors"
                  >
                    <Users className="w-5 h-5 text-heliaxis-gold" />
                    <span>Consultation</span>
                  </Link>
                  <Link 
                    href="/funding" 
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-[10px] hover:bg-white/10 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-heliaxis-gold" />
                    <span>Funding</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 section-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heliaxis-navy mb-6">
              What happens <span className="text-heliaxis-gold">next?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              After you submit your enquiry, here&apos;s what you can expect from Heliaxis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-heliaxis-gold text-heliaxis-navy flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <CardTitle className="text-xl text-heliaxis-navy">We&apos;ll Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We&apos;ll review your enquiry and get back to you within 1-2 business days 
                  to discuss your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-heliaxis-gold text-heliaxis-navy flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <CardTitle className="text-xl text-heliaxis-navy">Initial Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We&apos;ll arrange a consultation to understand your building, energy use 
                  and objectives in more detail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-heliaxis-gold text-heliaxis-navy flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <CardTitle className="text-xl text-heliaxis-navy">Tailored Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  You&apos;ll receive a clear proposal with recommended options, expected 
                  outcomes and costs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

