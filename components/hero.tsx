
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed text-white py-64 lg:py-96"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Güven, Kalite, Yenilik</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Geleceği inşa ediyor, derinlere iniyor, hikayeler anlatıyor ve taşımacılığı yönetiyoruz!
          </p>
          <div className="mb-8 text-gray-200">
            <p className="text-sm md:text-base font-light">
              <span>Zemin Etüdü</span>
              <span className="mx-2">|</span>
              <span>Maden Arama</span>
              <span className="mx-2">|</span>
              <span>Post Prodüksiyon</span>
              <span className="mx-2">|</span>
              <span>Servis Taşımacılığı</span>
              <span className="mx-2">|</span>
              <span>Gayrimenkul Danışmanlığı</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

