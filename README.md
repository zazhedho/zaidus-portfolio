<div align="center">

# ZAIDUS ZHUHUR — PROJECT INDEX

**A quiet place for things I have designed, built, and shipped.**

[![React](https://img.shields.io/badge/React-19-181815?style=flat-square&logo=react&logoColor=F0EEE7)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-181815?style=flat-square&logo=vite&logoColor=F0EEE7)](https://vite.dev/)
[![Build](https://img.shields.io/badge/build-passing-F04B23?style=flat-square)](#menjalankan-lokal)
[![License](https://img.shields.io/badge/license-personal-D6E337?style=flat-square)](#lisensi)

[Lihat Project](#project) · [Mulai](#menjalankan-lokal) · [Kustomisasi](#kustomisasi) · [Kontak](#kontak)

</div>

---

Landing page editorial milik **Zaidus Zhuhur** untuk mengarsipkan produk digital, tools, dan sistem yang sudah benar-benar dirilis. Dibangun dengan tampilan tipografis, layout asimetris, satu aksen kuat, dan gerakan seperlunya—tanpa glassmorphism, gradient blob, atau fake statistics.

## Preview

| Desktop | Mobile |
| :--- | :--- |
| Grid editorial dua kolom dengan satu featured project | Alur satu kolom tanpa horizontal overflow |

> Jalankan project secara lokal untuk melihat desain, hover interaction, live WIB clock, dan responsive layout.

## Project

| # | Project | Jenis | Tahun | Tautan |
| :-: | :--- | :--- | :-: | :---: |
| 01 | **Location Service** | Public API & Explorer | 2026 | [Buka ↗](https://location-service-do.vercel.app/) |
| 02 | **Yourz Itinerary** | Travel Planner | 2026 | [Buka ↗](https://github.com/zazhedho/yourz-itinerary) |
| 03 | **Yourz Gift** | Digital Commerce | 2026 | [Buka ↗](https://github.com/zazhedho/yourz-gift) |
| 04 | **Safety Riding** | Operations Platform | 2025 | [Buka ↗](https://github.com/zazhedho/safety-riding) |

## Menjalankan lokal

```bash
cd zaidus-portfolio
npm install
npm run dev
```

Buka `http://localhost:5173`.

<details>
<summary><strong>Perintah tersedia</strong></summary>

| Perintah | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run preview` | Melihat production build secara lokal |
| `npm run lint` | Memeriksa kualitas kode |

</details>

## Kustomisasi

### Menambah project

Edit [`src/projects.js`](src/projects.js), lalu tambahkan object berikut:

```js
{
  number: '05',
  name: 'Nama Project',
  kind: 'Kategori',
  year: '2026',
  description: 'Deskripsi singkat dan jelas.',
  url: 'https://project.example.com',
  palette: 'vermillion',
  mark: 'NP',
}
```

Pilihan `palette`: `vermillion`, `cobalt`, `citron`, atau `lavender`.

<details>
<summary><strong>Mengubah identitas dan kontak</strong></summary>

- Nama, copyright, email, dan tautan kontak berada di [`src/App.jsx`](src/App.jsx).
- Judul dan metadata halaman berada di [`index.html`](index.html).
- Warna, tipografi, breakpoint, dan animasi berada di [`src/styles.css`](src/styles.css).

Kontak saat ini menggunakan `zaiduszhuhur@gmail.com` dan profil LinkedIn di bawah.

</details>

## Prinsip desain

- **Editorial, bukan template:** hierarki berasal dari tipografi dan ruang kosong.
- **Project sebagai fokus:** setiap item memiliki konteks, tahun, dan tujuan yang jelas.
- **Responsif:** layout diuji pada desktop dan mobile tanpa horizontal overflow.
- **Aksesibel:** semantic HTML, focusable links, label navigasi, dan reduced motion.
- **Ringan:** tanpa UI framework dan tanpa animation library.

## Struktur

```text
zaidus-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        # struktur halaman
│   ├── projects.js    # data project
│   ├── styles.css     # seluruh visual system
│   └── main.jsx       # entry point
└── index.html
```

## Kontak

Dibuat oleh **Zaidus Zhuhur**.

[LinkedIn](https://www.linkedin.com/in/zaidus-zhuhur/) · [GitHub](https://github.com/zazhedho) · [Email](mailto:zaiduszhuhur@gmail.com)

## Lisensi

Project personal. Kode boleh dipelajari dan dijadikan referensi; identitas visual dan konten project tetap milik Zaidus Zhuhur.

---

<div align="center">

**Designed & built in Indonesia.**

<sub>Ideas made useful.</sub>

</div>
