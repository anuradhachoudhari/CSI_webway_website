"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About CCOEW", href: "https://cumminscollege.edu.in/page/?id=144" },
    { name: "Admissions", href: "https://cumminscollege.edu.in/pages/149" },
    { name: "Scholorships", href: "https://cumminscollege.edu.in/pages/249" },
    { name: "Faculty", href: "https://cumminscollege.edu.in/pages/174" },
    { name: "Research", href: "https://cumminscollege.edu.in/pages/245" },
    { name: "Placements", href: "https://cumminscollege.edu.in/pages/223" },
  ]

  const extracurricularLinks = [
    { name: "All Clubs", href: "#clubs" },
    { name: "Events Calendar", href: "#calendar" },
    { name: "Gallery", href: "#gallery" },
    { name: "Student Achievements", href: "#achievements" },
    { name: "Sports & Fitness", href: "https://cumminscollege.edu.in/pages/198" },
    { name: "Cultural Activities", href: "https://cumminscollege.edu.in/cultural-events/" },
  ]

  const contactInfo = [
    { icon: <MapPin className="h-4 w-4" />, text: "Sukli, Mauja, Nagpur" },
    { icon: <Phone className="h-4 w-4" />, text: "+91 0000000000" },
    { icon: <Mail className="h-4 w-4" />, text: "info@cumminscollege.org" },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ccoewnagpur?utm_source=ig_web_button_share_sheet&igsh=cjdyMDZlcmpmZ2Ny", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/school/cummins-college-of-engineering-for-women-mauja/", name: "LinkedIn" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-bold text-foreground">CCEW Extracurricular</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating the vibrant student life at Cummins College of Engineering for Women, where dreams take
              flight and futures are built.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="p-2">
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extracurricular Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-semibold text-foreground">Extracurricular</h3>
            <ul className="space-y-2">
              {extracurricularLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-sans font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-0.5">{contact.icon}</div>
                  <span className="text-sm text-muted-foreground">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Cummins College of Engineering for Women. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for CCOEW students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
