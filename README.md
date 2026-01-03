# Portfolio Freelance Web Dev & Ilustrator

Ini website portfolio sederhana yang gue bikin buat freelance web developer sekaligus ilustrator. Pakai Tailwind CSS dengan tema Dusty Taupe yang earthy, cocok buat nuansa profesional tapi hangat. Dark/light mode-nya smooth banget, dan fully responsive dari HP sampe layar gede.

## Fitur Utama
- Toggle dark/light mode pake localStorage, transisi halus gak patah-patah
- Animasi fade-in, hover, sama progress bar skills yang ada shimmer effectnya – keliatan hidup  
- Filter portfolio berdasarkan kategori (web, design, ilustrasi), tinggal klik
- Form kontak sama newsletter di footer, ada validasi dan loading state biar user tau lagi proses
- Navbar sticky dengan highlight active section, plus back-to-top button muncul pas scroll

Gue desain mobile-first, tested di 320px sampe 4K. SEO-nya juga dioptimasi dengan meta tags lengkap.

## Cara Mulai
1. Copy kode ke file: `index.html`, `js/script.js`, gambar portfolio ke `assets/images/`
2. Buka `index.html` langsung di browser, atau pake Live Server di VS Code biar lebih enak develop
3. Kalo mau server lokal: `python -m http.server 8000` trus buka `localhost:8000`

Udah, langsung jalan! Size total di bawah 100KB (tanpa gambar), loading cepet.

## Kustomisasi Gampang
Ganti teks di HTML, tambah project baru di section portfolio – tinggal copy-paste card dan sesuain `data-category`. Update stats kayak "100+ proyek" atau skills percentage di progress bar (edit `data-width`). Kontak: ganti email/phone di bagian contact. Buat form, integrasi EmailJS atau Formspree gampang, tinggal ganti ID di `script.js`.

## Next Level Enhancements

**Lightbox Modal Portfolio** - klik gambar langsung full screen dengan navigasi next/prev:
```html
<!-- Tambah di portfolio card -->
<a href="#modal" class="lightbox-trigger">
  <img src="assets/images/project1.jpg" alt="Project">
</a>
```

**Lazy Loading Gambar** - hemat bandwidth, gambar load pas dibutuhin:
```html
<img src="assets/images/project1.jpg" 
     loading="lazy" 
     alt="Project name"
     class="w-full h-64 object-cover">
```

## Credits
- **Tailwind CSS** - UI Framework tercepat
- **Heroicons** - SVG icons premium 
- **Google Fonts** - Inter font yang clean & readable

## Struktur File
```
freelance-portfolio/
├── index.html
├── js/script.js
├── assets/images/     # Taruh portfolio imgs sini
└── README.md
```

## Deploy Mudah
- **Netlify/Vercel**: Drag-drop atau connect GitHub, auto deploy
- **GitHub Pages**: Push ke repo, enable Pages dari settings

Lighthouse score 95+, first paint <1s.

## Tips dari Pengalaman
Kadang dark mode ga nyala? Cek `localStorage.getItem('theme')` di console, atau clear storage. Form ga submit? Pastiin ID form bener dan cek console error. Gue bikin ini karena sering bikin portfolio client, akhirnya bikin template sendiri biar cepet customize.

Happy coding! Kalo ada bug, open issue ya.