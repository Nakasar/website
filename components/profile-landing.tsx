import {Mail, MapPin} from "lucide-react"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import cover from './images/cover.jpg';
import profileLofi from './images/profile-lofi.png';
import {LogocloudTechnos} from "@/components/logocloud-technos";
import {siGithub, siLinkedin, SimpleIcon, siX} from "simple-icons";

function siToIcon(icon: SimpleIcon) {
  return <svg
    xmlns='http://www.w3.org/2000/svg'
    fill={icon.hex}
    viewBox='0 0 24 24'
    className="size-4"
  >
    <title>{icon.title}</title>
    <path d={icon.path}/>
  </svg>
}

const socialLinks = [
  {
    icon: siToIcon(siGithub),
    url: "https://github.com/nakasar"
  },
  {
    icon: siToIcon(siLinkedin),
    url: "https://www.linkedin.com/in/kevinthizy/"
  },
  {
    icon: siToIcon(siX),
    url: "https://x.com/KevinThizy"
  },
  {
    icon: <Mail className="h-4 w-4" />,
    url: "mailto:contact@nakasar.xyz"
  },
]

export function ProfileLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-grotest">
      {/* Header with cover image */}
      <header className="relative h-64 overflow-hidden">
        <Image
          src={cover}
          alt="Sci-fi themed cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold bg-emerald-500 w-fit">Nakasar</h1>
            <p className="text-xl">Software Developer & Gaming Enthusiast</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile section */}
          <section className="md:w-1/3">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <Image
                  src={profileLofi}
                  alt="Nakasar's profile"
                  className="w-48 h-48 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-center mb-2 text-white">Nakasar</h2>
                <p className="text-center text-gray-400 mb-4">
                  <MapPin className="inline mr-2" size={16}/>
                  France & Luxembourg
                </p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map(({icon, url}) => (
                    <a
                      key={url}
                      href={url}
                      className="text-gray-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon">
                        {icon}
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Bio and interests section */}
          <section className="md:w-2/3">
            <Card className="bg-gray-800 border-gray-700 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white bg-emerald-500 w-fit">About Me</h2>
                <p className="mb-4">
                  I&apos;m a software developer working in the Innovation team at InTech Luxembourg. My focus is on tackling
                  technical challenges related to Blockchain and Artificial Intelligence, as well as solving complex
                  software architectural problems.
                </p>
                <p>
                  Outside of work, I&apos;m passionate about gaming and have developed various tools to enhance the
                  roleplaying game experience for myself and fellow gamers.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white bg-emerald-500 w-fit">Gaming Interests</h3>
                  <ul className="list-disc list-inside">
                    <li>Roleplaying games enthusiast</li>
                    <li>Magic: The Gathering player and Rule Advisor judge</li>
                    <li>TCG player (Altered, Star Wars Unlimited)</li>
                    <li>Video gamer (Star Citizen, Guild Wars 2)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white bg-emerald-500 w-fit">Professional Skills</h3>
                  <ul className="list-disc list-inside">
                    <li>Blockchain development</li>
                    <li>Artificial Intelligence</li>
                    <li>Software architecture</li>
                    <li>Innovation in tech</li>
                    <li>Software development (fullstack + devops)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <section className="py-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <LogocloudTechnos/>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4 mt-8">
        <p>&copy; 2024 Nakasar. All rights reserved.</p>
      </footer>
    </div>
  )
}