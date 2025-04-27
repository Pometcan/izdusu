import Hero from "@/components/hero"
import SectorCard from "@/components/sector-card"

export default function Home() {
  return (
    <>
      <Hero />

      <SectorCard
        id="zemin-etud"
        title="ZEMİN ETÜDÜ & MADEN ARAMA"
        description="Yer altındaki bilinmeyeni keşfedin. Güvenli yapılar ve verimli madencilik faaliyetleri için kapsamlı analizler sunuyoruz. Zemin etüdü ve maden arama çalışmalarımızla projelerinize sağlam bir temel oluşturuyoruz."
        services={[
          "Jeofizik ve jeoteknik analizler",
          "Yer radarı, sismik ve elektrik yöntemler",
          "Maden sahalarının araştırılması",
        ]}
        imageSrc="/paletli-sondaj-makinesi.png?height=400&width=600"
        imageAlt="Zemin Etüdü ve Maden Arama Çalışmaları"
      />

      <SectorCard
        id="post-produksiyon"
        title="POST PRODÜKSİYON & REKLAM"
        description="Görsel hikayeler anlatıyoruz. Video kurgu, renk düzenleme, animasyon ve diğer yaratıcı çözümlerle projelerinizi profesyonel bir seviyeye taşıyoruz."
        services={["Video kurgu & montaj", "Renk düzenleme ve efektler", "Reklam ve tanıtım videoları"]}
        imageSrc="/reklam1.jpg?height=400&width=600"
        imageAlt="Post Prodüksiyon ve Reklam Çalışmaları"
        reverse={true}
      />

      <SectorCard
        id="servis-tasimacilik"
        title="SERVİS TAŞIMACILIĞI"
        description="Güvenli ve konforlu ulaşım çözümleri sunuyoruz. Personel taşımacılığı ve VIP taşımacılık hizmetlerimizle, ihtiyaçlarınıza uygun çözümler üretiyoruz."
        services={["Personel taşımacılığı", "VIP taşımacılık hizmetleri", "Kurumsal taşımacılık çözümleri"]}
        imageSrc="/servis1.jpg?height=400&width=600"
        imageAlt="Servis Taşımacılığı Hizmetleri"
      />

      <SectorCard
        id="gayrimenkul"
        title="GAYRİMENKUL DANIŞMANLIĞI"
        description="Doğru yatırım, güvenilir danışmanlık. Türkiye ve Kıbrıs'taki konut projeleriyle ilgili danışmanlık hizmetleri sunuyoruz."
        services={["Türkiye ve Kıbrıs'ta konut projeleri", "Yatırım danışmanlığı", "Satış & kiralama hizmetleri"]}
        imageSrc="/2-2.jpg?height=400&width=600"
        imageAlt="Gayrimenkul Danışmanlığı Hizmetleri"
        reverse={true}
      />

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sizlerle Daha İyi Bir Gelecek İçin Çalışıyoruz!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Profesyonel ekibimiz ve yenilikçi çözümlerimizle projelerinize değer katıyoruz.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition-colors"
          >
            Bizimle İletişime Geçin
          </a>
        </div>
      </section>
    </>
  )
}
