import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">İZDÜŞÜ</h3>
            <p className="text-gray-300 mb-4">
              Mühendislik, Mimarlık, Madencilik, Reklam, Turizm alanlarında profesyonel hizmetler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#zemin-etud" className="text-gray-300 hover:text-white transition-colors">
                  Zemin Etüdü
                </Link>
              </li>
              <li>
                <Link href="/#maden-arama" className="text-gray-300 hover:text-white transition-colors">
                  Maden Arama
                </Link>
              </li>
              <li>
                <Link href="/#post-produksiyon" className="text-gray-300 hover:text-white transition-colors">
                  Post Prodüksiyon
                </Link>
              </li>
              <li>
                <Link href="/#servis-tasimacilik" className="text-gray-300 hover:text-white transition-colors">
                  Servis Taşımacılığı
                </Link>
              </li>
              <li>
                <Link href="/#gayrimenkul" className="text-gray-300 hover:text-white transition-colors">
                  Gayrimenkul Danışmanlığı
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <address className="not-italic text-gray-300">
              <p>Ahmet Yesevi Mah.</p>
              <p>Pendik/İstanbul</p>
              <p className="mt-2">Email: info@izdusu.com</p>
              <p>Telefon: +90 (553) 530 55 31</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} İZDÜŞÜ. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
