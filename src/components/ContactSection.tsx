import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heliaxis-navy mb-4">
              Ready to get <span className="text-heliaxis-gold">started?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch today and let us help you find the right renewable energy solution for your needs.
            </p>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

