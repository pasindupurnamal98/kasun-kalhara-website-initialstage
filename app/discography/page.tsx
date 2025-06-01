"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Heart, Share2, Download } from "lucide-react"

export default function DiscographyPage() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)

  const albums = [
    {
      id: 1,
      title: "Haritha Nimnaye",
      year: "2000",
      songs: 12,
      duration: "48:32",
      description: "Kasun Kalhara's debut album that introduced his unique musical style to Sri Lankan audiences.",
      tracks: [
        { name: "Haritha Nimnaye", duration: "4:12" },
        { name: "Sanda Eliya", duration: "3:45" },
        { name: "Ran Kekulu", duration: "4:28" },
      ],
    },
    {
      id: 2,
      title: "Radical Premaya",
      year: "2008",
      songs: 10,
      duration: "42:15",
      description: "A revolutionary approach to love songs that redefined romantic music in Sri Lankan cinema.",
      tracks: [
        { name: "Radical Premaya", duration: "4:32" },
        { name: "Sihina Lowak", duration: "3:58" },
        { name: "Mal Pipila", duration: "4:05" },
      ],
    },
    {
      id: 3,
      title: "Romantic Opera",
      year: "2011",
      songs: 14,
      duration: "56:20",
      description: "An operatic masterpiece blending classical elements with contemporary Sri Lankan music.",
      tracks: [
        { name: "Romantic Opera", duration: "4:45" },
        { name: "Sanda Kirana", duration: "3:52" },
        { name: "Oba Nisa", duration: "4:18" },
      ],
    },
  ]

  const handlePlayPause = (albumId: number) => {
    if (currentlyPlaying === albumId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(albumId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4">Discography</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">Musical Collection</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the complete collection of albums and songs that have defined Kasun Kalhara's illustrious musical
            journey.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="space-y-12">
          {albums.map((album) => (
            <Card key={album.id} className="bg-slate-800/50 border-blue-800/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Album Cover */}
                  <div className="relative group">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt={album.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-16 h-16"
                        onClick={() => handlePlayPause(album.id)}
                      >
                        {currentlyPlaying === album.id ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 ml-1" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Album Info */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{album.title}</h2>
                        <p className="text-yellow-400 text-lg mb-2">{album.year}</p>
                        <p className="text-blue-100 mb-4">{album.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-blue-300">
                          <span>{album.songs} Songs</span>
                          <span>{album.duration}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Track List */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white mb-3">Featured Tracks</h3>
                      {album.tracks.map((track, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors group"
                        >
                          <div className="flex items-center">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Play className="h-3 w-3" />
                            </Button>
                            <span className="text-white">{track.name}</span>
                          </div>
                          <span className="text-blue-300 text-sm">{track.duration}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Play className="mr-2 h-4 w-4" />
                        Play Album
                      </Button>
                      <Button
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                      >
                        Add to Playlist
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Listen on Your Favorite Platform</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Spotify", "Apple Music", "YouTube Music", "Amazon Music", "Deezer"].map((platform) => (
              <Button
                key={platform}
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                {platform}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
