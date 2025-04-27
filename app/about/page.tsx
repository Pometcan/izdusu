import Image from "next/image"
import { Award, Target, Zap } from "lucide-react"

export default function About() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Hakkımızda</h1>
            <p className="text-lg text-gray-700">
              İZDÜŞÜ MÜHENDİSLİK MİMARLIK MADENCİLİK REKLAM TURİZM TİCARET LİMİTED ŞİRKETİ olarak, mühendislik ve
              ticaret alanlarında geniş bir yelpazede hizmet vermekteyiz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Biz Kimiz?</h2>
              <p className="text-lg text-gray-700 mb-6">
                İZDÜŞÜ MÜHENDİSLİK MİMARLIK MADENCİLİK REKLAM TURİZM TİCARET LİMİTED ŞİRKETİ olarak, mühendislik ve
                ticaret alanlarında geniş bir yelpazede hizmet vermekteyiz. Zemin etüdü, maden arama, post prodüksiyon,
                servis taşımacılığı ve gayrimenkul danışmanlığı gibi farklı sektörlerde sağladığımız çözümlerle,
                projelerinize değer katıyoruz.
              </p>
              <p className="text-lg text-gray-700">
                Profesyonel ekibimiz ve yenilikçi yaklaşımımızla, her projede en yüksek kalite standartlarını sağlamayı
                hedefliyoruz.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="İZDÜŞÜ Ekibi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Misyon ve Vizyonumuz</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Misyonumuz</h3>
              </div>
              <p className="text-gray-700">
                Her projeye titizlikle yaklaşarak, kaliteli ve güvenilir çözümler üretmek. Sürekli gelişen teknoloji ve
                yeniliklerle, sektörümüzdeki en iyi uygulamaları sunmayı hedefliyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Vizyonumuz</h3>
              </div>
              <p className="text-gray-700">
                Yenilikçi ve sürdürülebilir çözümlerle, sektöründe tercih edilen ve saygın bir firma olmak. Geleceği
                inşa etmek ve her alanda güçlü adımlar atmak için çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Değerlerimiz</h2>
            <p className="text-lg text-gray-700">
              İZDÜŞÜ olarak, tüm çalışmalarımızda temel değerlerimizi ön planda tutuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Güven</h3>
              <p className="text-gray-700">
                Müşterilerimizle kurduğumuz güven ilişkisi, iş yapış şeklimizin temelidir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Kalite</h3>
              <p className="text-gray-700">Her projede en yüksek kalite standartlarını sağlamak için çalışıyoruz.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Yenilik</h3>
              <p className="text-gray-700">
                Sürekli gelişen teknoloji ve yeniliklerle, sektörümüzdeki en iyi uygulamaları sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Hizmet Alanlarımız</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Zemin Etüdü</h3>
              <p className="text-gray-700">Güvenli yapılar için kapsamlı analizler ve yer altı araştırmaları.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Maden Arama</h3>
              <p className="text-gray-700">Derinlemesine keşiflerle madencilik faaliyetlerinde güvenli adımlar.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Post Prodüksiyon</h3>
              <p className="text-gray-700">Yaratıcı video kurgu, renk düzenleme ve reklam çözümleri.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Servis Taşımacılığı</h3>
              <p className="text-gray-700">Personel taşımacılığı ve VIP taşımacılık hizmetleri.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gayrimenkul Danışmanlığı</h3>
              <p className="text-gray-700">Kıbrıs'taki konut projeleri ve yatırım danışmanlığı.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
