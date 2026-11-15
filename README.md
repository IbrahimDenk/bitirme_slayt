# Capstone Project 1 — Midterm Presentation

İstanbul Medipol Üniversitesi için hazırlanmış, **13 slaytlık Slidev sunumu**.

**Multi-Agent CV–Job Matching and Interview Preparation** projesinin kapsamını,
literatürünü, iş paketlerini, değerlendirme planını ve talep edilen bütçesini anlatır.
Slaytlar İngilizcedir. Konuşmacı notları ve kaynaklar `slides.md` içinde bulunur.

## Kurulum

- **Node.js 24** (en az 24.11.0) ve **npm 10 veya üzeri** kullanın.
- `.nvmrc` ve `.node-version`, proje için Node 24 sürümünü tanımlar.
- Bu proje Node.js ile çalışır. Bağımlılıklar proje içindeki `node_modules/`
  klasörüne kurulur; Python sanal ortamı gerekmez.

```bash
git clone https://github.com/IbrahimDenk/bitirme_slayt.git
cd bitirme_slayt
npm ci
npm run dev
```

nvm kullanıyorsanız bağımlılıkları kurmadan önce:

```bash
nvm install 24
nvm use 24
```

Sunucu açıkken sunum: [http://localhost:3030](http://localhost:3030).
Belirli bir slayt için `/1` ile `/13` arasındaki adresleri kullanabilirsiniz.
Sunucu `Ctrl+C` ile durdurulur.

## Kullanım

- Sonraki/önceki adım: sağ/sol ok tuşları.
- Sunucu açıkken konuşmacı görünümü: `/presenter/`.
- Konuşmacı notları: `/notes`.
- Animasyonlar otomatik çalışır. Sistemin azaltılmış hareket tercihi etkinse
  ilgili görseller sabit gösterilir.

## Üretim derlemesi

```bash
npm run build
```

Statik sunum `dist/` klasörüne oluşturulur. Animasyonların çalışması için sunumu
bir web sunucusundan açın. `dist/` yeniden üretilebilir ve Git'e eklenmez.

## Sunum sırası

1. Cover — Midterm Presentation
2. About the Team
3. Project Objectives
4. Literature Overview
5. Originality of the Project
6. Project Scope and Work Packages
7. Project Targets and Success Criteria
8. The Contribution of Each WP
9. Work Time Plan of the Project
10. Project Management Risks and B-Plans
11. Cost Analysis
12. Conclusion and Discussion
13. Thank You — Questions and Discussion

## Dosya düzeni

- [`slides.md`](slides.md): slayt sırası, ayarlar, konuşmacı notları ve kaynaklar.
- [`components/`](components/): her slaydın içeriği, diyagramlar ve animasyonlar.
- [`layouts/`](layouts/): slayt yerleşimleri.
- [`style.css`](style.css): ortak renkler, tipografi ve kısa solma geçişi.
- [`global-top.vue`](global-top.vue) ve [`MedipolLogo.vue`](components/MedipolLogo.vue):
  her slaytta aynı konum ve boyutta üniversite logosu.
- [`public/`](public/): açık/koyu zeminler için orijinal Medipol logoları.
- [`data/workPackages.ts`](data/workPackages.ts): WP adları, renkleri, katkı payları,
  takvim ve risk verileri.
- [`data/projectBudget.ts`](data/projectBudget.ts): bütçe kalemleri ve ortak toplamlar.
- [`package-lock.json`](package-lock.json): tekrar kurulabilir bağımlılık sürümleri.

Yazı tipi npm bağımlılığından yerel olarak yüklenir; çalışma sırasında Google Fonts
bağlantısı gerektirmez. `node_modules/`, geçici önizlemeler, yerel PDF çıktıları
ve ortam değişkeni dosyaları Git dışında tutulur.

## İçerik durumu

İlk sürüm İngilizce ve Türkçe ilanları destekler. Arama tercihi getirilen ilanların
dilini seçer; seçilen ilanın gerektirdiği dil CV dayanağını ve mülakatın dilini belirler.
Yanlış dildeki mülakat yanıtı puanlanmadan, gerekli dilde yeniden yanıt istenir.
Adayın ülkesi bu kuralları değiştirmez. Kabul edilen yanıtları yapay zekâ puanlar.

Kapaktaki tarih `TBD` olarak duruyor. Başarı kriterleri pilot için taslak hedeflerdir.
₺12,000 bütçe, TÜBİTAK 2209-A kapsamında **talep edilen** hizmet bütçesidir;
başvuru durumu **Application pending** olarak gösterilir.

Ekip: **İbrahim Denk**, **Fatih Yunus Yıldız**. Danışman: **Selim Akyokuş**.
