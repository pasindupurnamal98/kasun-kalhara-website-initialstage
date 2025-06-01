"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  Play,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-800/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-yellow-400">Kasun Kalhara</div>
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="#biography" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Biography
              </Link>
              <Link href="#discography" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Discography
              </Link>
              <Link href="#gallery" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Gallery
              </Link>
              <Link href="#events" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Events
              </Link>
              <Link href="#media" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Media
              </Link>
              <Link href="#contact" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-blue-900/60 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/kasun-kalhara-hero.jpg"
            alt="Kasun Kalhara performing on stage"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            style={{
              objectPosition: "center 20%",
            }}
          />
        </div>

        <div
          className={`relative z-20 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Kasun <span className="text-yellow-400">Kalhara</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 max-w-4xl mx-auto">
            Legendary Sri Lankan Musician • Composer • Singer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3"
            >
              Explore Music
            </Button>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3">
          <Link
            href="#"
            className="p-2 md:p-3 bg-blue-600/30 backdrop-blur-sm rounded-full text-white hover:bg-yellow-500 hover:text-black transition-all"
          >
            <Instagram className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 md:p-3 bg-blue-600/30 backdrop-blur-sm rounded-full text-white hover:bg-yellow-500 hover:text-black transition-all"
          >
            <Facebook className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 md:p-3 bg-blue-600/30 backdrop-blur-sm rounded-full text-white hover:bg-yellow-500 hover:text-black transition-all"
          >
            <Youtube className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 md:p-3 bg-blue-600/30 backdrop-blur-sm rounded-full text-white hover:bg-yellow-500 hover:text-black transition-all"
          >
            <Twitter className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24+</div>
              <div className="text-blue-100">Years of Music</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-blue-100">Songs Composed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-blue-100">Albums Released</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-blue-100">Live Concerts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Preview */}
      <section id="biography" className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black mb-4">Biography</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">The Musical Journey</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Kasun Kalhara stands as one of Sri Lanka's most celebrated musicians, whose melodious voice and
                exceptional compositions have touched millions of hearts across the island and beyond. His journey from
                a passionate young musician to a legendary figure in Sri Lankan music industry is nothing short of
                inspiring.
              </p>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                With over two decades of musical excellence, Kasun has created timeless melodies that resonate with
                people of all ages. His unique style blends traditional Sri Lankan music with contemporary elements,
                creating a sound that is both nostalgic and refreshingly modern.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Read Full Biography
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-blue-600/20 rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Kasun Kalhara portrait"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section id="discography" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-500 text-black mb-4">Discography</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Albums</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Explore the musical masterpieces that have defined generations and continue to inspire music lovers
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Haritha Nimnaye", year: "2000", songs: 12 },
              { title: "Radical Premaya", year: "2008", songs: 10 },
              { title: "Romantic Opera", year: "2011", songs: 14 },
            ].map((album, index) => (
              <Card
                key={index}
                className="bg-slate-700/50 border-blue-800/30 hover:bg-slate-700/70 transition-all group"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt={album.title}
                      width={250}
                      height={250}
                      className="rounded-lg w-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{album.title}</h3>
                  <p className="text-blue-100 mb-2">{album.year}</p>
                  <p className="text-sm text-blue-300">{album.songs} Songs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-500 text-black mb-4">Events</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Concerts</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Don't miss the chance to experience Kasun Kalhara's magical performances live.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sinhala New Year Concert",
                date: "April 15, 2024",
                venue: "BMICH, Colombo",
                time: "7:00 PM",
              },
              {
                title: "Musical Evening with Kasun",
                date: "May 20, 2024",
                venue: "Nelum Pokuna Theatre",
                time: "6:30 PM",
              },
            ].map((event, index) => (
              <Card key={index} className="bg-slate-700/50 border-blue-800/30">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center text-blue-100 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center text-blue-100">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.venue}
                      </div>
                    </div>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Book Tickets</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-500 text-black mb-4">Contact</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              For bookings, collaborations, or any inquiries, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-blue-800/30 text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-100">info@kasunkalhara.com</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-blue-800/30 text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-blue-100">+94 77 123 4567</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-blue-800/30 text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Management</h3>
                <p className="text-blue-100">Melody Music Productions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Kasun Kalhara</h3>
              <p className="text-blue-100 mb-4">
                Creating timeless melodies that touch hearts and souls across generations.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#biography" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Biography
                  </Link>
                </li>
                <li>
                  <Link href="#discography" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Discography
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Music</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Latest Releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Popular Songs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Albums
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                    Collaborations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-blue-100 mb-4">Stay updated with latest news and releases.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-l-md border border-blue-800/30 focus:outline-none focus:border-yellow-400"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800/30 mt-8 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 Kasun Kalhara. All rights reserved. | Designed with ❤️ for music lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
