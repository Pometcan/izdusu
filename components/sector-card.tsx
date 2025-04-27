import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface SectorCardProps {
  id: string
  title: string
  description: string
  services: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export default function SectorCard({
  id,
  title,
  description,
  services,
  imageSrc,
  imageAlt,
  reverse = false,
}: SectorCardProps) {
  return (
    <section id={id} className={`py-16 ${reverse ? "bg-gray-50" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
          <div className={`${reverse ? "md:order-2" : ""}`}>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">📌 Hizmetlerimiz:</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${reverse ? "md:order-1" : ""}`}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
