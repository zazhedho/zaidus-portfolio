<div align="center">

# ZAIDUS ZHUHUR — PROJECT INDEX

**A quiet place for things I have designed, built, and shipped.**

[![React](https://img.shields.io/badge/React-19-181815?style=flat-square&logo=react&logoColor=F0EEE7)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-181815?style=flat-square&logo=vite&logoColor=F0EEE7)](https://vite.dev/)
[![Build](https://img.shields.io/badge/build-passing-F04B23?style=flat-square)](#menjalankan-lokal)
[![License](https://img.shields.io/badge/license-personal-D6E337?style=flat-square)](#lisensi)

[Live Portfolio](https://zaiduszh.imyourz.com/) · [Repository](https://github.com/zazhedho/zaidus-portfolio) · [Lihat Project](#project) · [Mulai](#menjalankan-lokal) · [Kustomisasi](#kustomisasi) · [Kontak](#kontak)

</div>

---

Landing page editorial milik **Zaidus Zhuhur** untuk mengarsipkan produk digital, tools, dan sistem yang sudah benar-benar dirilis. Dibangun dengan React dan Vite menggunakan tampilan tipografis, layout asimetris, satu aksen kuat, dan gerakan seperlunya—tanpa glassmorphism, gradient blob, atau fake statistics.

## Preview

| Desktop | Mobile |
| :--- | :--- |
| Grid editorial dua kolom dengan satu featured project | Alur satu kolom tanpa horizontal overflow |

> Jalankan project secara lokal untuk melihat desain, hover interaction, live WIB clock, dan responsive layout.

## Project

| # | Project | Production | Source |
| :-: | :--- | :---: | :---: |
| 01 | **3ZA Digital** | [Live ↗](https://digital.zzaz.tech/) | [GitHub ↗](https://github.com/zazhedho/3za-digital) |
| 02 | **Yourz Itinerary** | [Live ↗](https://yourz-itinerary.vercel.app/) | [GitHub ↗](https://github.com/zazhedho/yourz-itinerary) |
| 03 | **Yourz Gift** | [Live ↗](https://gift.imyourz.com/) | [GitHub ↗](https://github.com/zazhedho/yourz-gift) |
| 04 | **Format Forge** | [Live ↗](https://jsonformatter.imyourz.com) | [GitHub ↗](https://github.com/zazhedho/format-forge) |
| 05 | **Location Service** | [Live ↗](https://indonesia.imyourz.com/) | [GitHub ↗](https://github.com/zazhedho/location-service) |
| 06 | **Songket Dashboard** | [Live ↗](https://songketdashboard.com/) | [GitHub ↗](https://github.com/zazhedho/service-songket) |
| 07 | **Anniversary Site** | [Live ↗](https://zaiduszh.tech/) | [GitHub ↗](https://github.com/zazhedho/anniversary-site) |
| 08 | **Safety Riding** | — | [GitHub ↗](https://github.com/zazhedho/safety-riding) |
| 09 | **Family Timeline** | [Live ↗](https://family.imyourz.com/) | [GitHub ↗](https://github.com/zazhedho/family-timeline) |
| 10 | **Vendor Management System** | [Live ↗](https://vms-astrantb.online/) | [GitHub ↗](https://github.com/zazhedho/vendor-management-system) |
| 11 | **Kota Siaga** | — | [GitHub ↗](https://github.com/zazhedho/kota-siaga) |

## Menjalankan lokal

### Prasyarat

- Node.js 24 atau lebih baru
- npm

Clone repository, lalu pasang dependensi:

```bash
git clone https://github.com/zazhedho/zaidus-portfolio.git
cd zaidus-portfolio
npm ci
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

### Menjalankan dengan Docker

```bash
docker build -t zaidus-portfolio .
docker run --rm -p 8080:80 zaidus-portfolio
```

Buka `http://localhost:8080`.

## Deployment

Push ke `main` memicu [workflow build](.github/workflows/build.yml), yang
membangun image multi-arsitektur AMD64 dan ARM64 lalu menerbitkan tag bergerak
`latest` dan tag commit SHA ke GHCR. Setelah build sukses, workflow deploy
otomatis mengirim image SHA yang sama ke target aktif.

Target otomatis diatur lewat GitHub Environment Variable `DEPLOY_TARGET` pada
environment `production`: `oci-arm64` atau `vps-amd64`. Jika variable belum
diatur, target default `oci-arm64`. Untuk deploy manual satu kali, buka
**Actions → Deploy Portfolio → Run workflow**, pilih branch `main` dan target.
Workflow memeriksa build untuk commit itu dan arsitektur VPS sebelum menjalankan
Compose. User deploy harus punya akses `sudo -n` ke Docker. Source aplikasi
tetap di GitHub Actions runner; VPS hanya menerima image hasil build dan memakai
`compose.yaml` yang sudah ada.

Workflow memakai GitHub Environment `production` dengan secret berikut:

| Secret | Kegunaan |
| :--- | :--- |
| `OCI_VPS_HOST`, `OCI_VPS_USER`, `OCI_VPS_SSH_KEY` | OCI ARM VPS |
| `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` | VPS AMD64 |

Host, user, dan private key tetap di GitHub Environment secret. Workflow
mempelajari host key saat berjalan melalui `ssh-keyscan` dan mewajibkan host-key
checking untuk koneksi SSH. Tidak ada fingerprint Variable; scan runtime tidak
memverifikasi identitas host secara independen dan berisiko MITM saat scan.
Gunakan SSH key deployment terpisah; simpan private key hanya di GitHub
Environment secret dan pasang public key-nya di VPS. Untuk server baru, tambahkan
opsi target, pemetaan arsitektur, serta secret host/user/key. Jangan menaruh
host, private key, token, password, atau file `.env` di repository.

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
  productionUrl: 'https://project.example.com',
  repositoryUrl: 'https://github.com/username/project',
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
├── .github/
│   └── workflows/
│       ├── build.yml         # build AMD64 + ARM64 dan push ke GHCR
│       └── deploy.yml        # auto-deploy setelah build main sukses
├── Dockerfile               # build dan runtime image
├── compose.yaml             # konfigurasi runtime image
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
