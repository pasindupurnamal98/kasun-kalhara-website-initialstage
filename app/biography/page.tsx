import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Music, Heart, Star } from "lucide-react"

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4">Biography</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">The Musical Journey</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the inspiring story of Kasun Kalhara, from his humble beginnings to becoming one of Sri Lanka's
            most beloved musicians.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Biography Text */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-slate-800/50 border-blue-800/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Early Life & Musical Awakening</h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Born in the cultural heart of Sri Lanka, Kasun Kalhara's journey with music began at a very young age.
                  Growing up in a family that cherished traditional Sri Lankan music, he was exposed to the rich
                  melodies and rhythms that would later influence his unique musical style.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  His passion for music was evident from childhood, often found humming traditional folk songs and
                  experimenting with various musical instruments. This early exposure to music laid the foundation for
                  what would become an extraordinary musical career.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-800/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rise to Stardom</h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Kasun's professional music career took off in 2000 with the release of his debut album "Haritha
                  Nimnaye," which showcased his exceptional vocal range and innovative composition style. This
                  breakthrough album established him as a fresh voice in Sri Lankan music.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  What set Kasun apart was his ability to blend traditional Sri Lankan musical elements with
                  contemporary sounds, creating a unique genre that resonated with audiences across all age groups. His
                  songs became anthems of love, hope, and cultural pride.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-800/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Musical Philosophy & Impact</h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Throughout his career, Kasun has maintained that music should be a bridge that connects hearts and
                  cultures. His compositions often reflect themes of love, nature, spirituality, and social
                  consciousness, making his music not just entertaining but also meaningful.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  His impact on Sri Lankan music industry is immeasurable. He has mentored numerous young artists,
                  contributed to film soundtracks, and has been instrumental in preserving and promoting traditional Sri
                  Lankan music on international platforms.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Image */}
            <Card className="bg-slate-800/50 border-blue-800/30">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Kasun Kalhara"
                  width={300}
                  height={300}
                  className="rounded-lg w-full mb-4"
                />
                <h3 className="text-xl font-bold text-white text-center">Kasun Kalhara</h3>
                <p className="text-blue-100 text-center">Legendary Sri Lankan Musician</p>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-slate-800/50 border-blue-800/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Born:</span>
                    <span className="text-white">1975</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Genre:</span>
                    <span className="text-white">Pop, Folk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Active:</span>
                    <span className="text-white">2000 - Present</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Albums:</span>
                    <span className="text-white">15+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-slate-800/50 border-blue-800/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Major Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-blue-100">Best Male Vocalist 2020</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-blue-100">Lifetime Achievement Award</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-blue-100">People's Choice Award</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-blue-100">Cultural Ambassador</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
