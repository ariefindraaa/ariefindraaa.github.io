# ASSET GUIDE — Panduan Upload Foto & Dokumen

Panduan praktis untuk menambahkan foto, screenshot, CV, dan sertifikat ke portfolio
`ariefindraaa.github.io`.

Prinsip utamanya satu: **semua slot aset sudah disiapkan di HTML dan menunggu nama
file tertentu.** Upload file dengan nama yang persis sama, gambar langsung muncul.
Tidak perlu mengedit HTML sama sekali.

Selama file belum ada:

- Foto profil → tetap menampilkan inisial **AIK** (bukan gambar rusak).
- Slot galeri proyek → menampilkan kotak placeholder bergaris putus-putus.
- Tombol **Download CV** → tetap tersembunyi, jadi tidak ada link mati.

Artinya portfolio aman dilihat rekruter kapan pun, bahkan sebelum satu foto pun di-upload.

---

## 1. Struktur folder

```text
assets/
├── img/             → foto profil dan gambar umum situs
├── projects/        → foto lapangan dan screenshot teknis per proyek
├── cv/              → CV PDF
└── certificates/    → sertifikat, HKI, bukti pendukung
```

Setiap folder punya `README.md` sendiri yang mendaftar file yang diharapkan.

---

## 2. Cara upload lewat website GitHub

1. Buka repository `ariefindraaa/ariefindraaa.github.io` di browser.
2. Masuk ke folder tujuan, misalnya `assets/projects/`.
3. Klik **Add file → Upload files**.
4. Tarik file ke area upload. **Pastikan nama file persis sama** dengan daftar di bawah.
5. Isi commit message, misalnya `Add PLTS KKN field documentation`.
6. Klik **Commit changes**.
7. Tunggu 1–2 menit sampai GitHub Pages selesai build, lalu refresh halaman.

> Nama file bersifat **case-sensitive** di GitHub Pages.
> `Profile.JPG` ≠ `profile.jpg`. Selalu gunakan huruf kecil.

---

## 3. Daftar file yang ditunggu

### 3.1 Foto profil — `assets/img/`

| File | Dipakai di | Spesifikasi |
| --- | --- | --- |
| `profile.jpg` | Hero `index.html` | Rasio 1:1, minimal 800 × 800 px, maksimal ~400 KB |

**Gaya foto yang disarankan:** formal casual (kemeja polos atau almamater),
background netral dan bersih, pencahayaan terang dan merata, crop setengah badan,
wajah menghadap kamera, ekspresi netral sampai tersenyum tipis.
Hindari foto grup yang di-crop, foto dengan filter berat, atau background ramai.

### 3.2 CV — `assets/cv/`

| File | Dipakai di | Spesifikasi |
| --- | --- | --- |
| `Arief_Indra_Kusuma_CV.pdf` | Tombol **Download CV** di hero | PDF, maksimal 2 halaman, di bawah 2 MB |

Tombol Download CV muncul otomatis begitu file ini terdeteksi. Nama file harus persis.

### 3.3 Dokumentasi proyek — `assets/projects/`

**Tugas Akhir** → `projects/transient-stability-ieee39.html`

| File | Isi |
| --- | --- |
| `ta-ieee39-single-line.jpg` | Single-line diagram IEEE 39-Bus di DIgSILENT PowerFactory |
| `ta-digsilent-simulation.jpg` | Setup simulasi dinamik / respons sudut rotor |
| `ta-model-evaluation.jpg` | Confusion matrix dan kurva ROC |

**Neera** → `projects/neera-distribution-masterplan.html`

| File | Isi |
| --- | --- |
| `neera-single-line.jpg` | Single-line diagram distribusi di ETAP 12.6 |
| `neera-load-flow.jpg` | Hasil load flow / profil tegangan |
| `neera-reliability.jpg` | Ringkasan SAIFI / SAIDI |

**Lombok** → `projects/lombok-protection-study.html`

| File | Isi |
| --- | --- |
| `lombok-single-line.jpg` | Sistem 150 kV Lombok di ETAP 21 |
| `lombok-load-flow.jpg` | Load flow sebelum / sesudah kapasitor bank 75 Mvar |
| `lombok-relay-coordination.jpg` | Kurva koordinasi OCR dan distance relay |

**PLTS KKN** → `projects/plts-hybrid-kkn.html`

| File | Isi |
| --- | --- |
| `plts-kkn-installation.jpg` | Pemasangan modul PV dan struktur |
| `plts-kkn-panel-box.jpg` | Inverter, SCC, dan baterai |
| `plts-kkn-commissioning.jpg` | Pengukuran saat commissioning |
| `plts-kkn-team.jpg` | Tim KKN-PPM UGM dengan sistem terpasang |

**Dekatama** → `projects/dekatama-renewable-energy.html`

| File | Isi |
| --- | --- |
| `dekatama-bcs-lombok.jpg` | Instalasi BCS di Lombok |
| `dekatama-pjuts-sumbawa.jpg` | Instalasi PJUTS di Sumbawa |
| `dekatama-pats-sumbawa.jpg` | Instalasi PATS di Sumbawa |
| `dekatama-plts-planning.jpg` | Dokumen perencanaan PLTS / SLD |

**Patra Jasa** → `projects/patra-jasa-rtct.html`

| File | Isi |
| --- | --- |
| `patra-jasa-site.jpg` | Dokumentasi lokasi — hanya jika sudah di-clear |
| `patra-jasa-testing.jpg` | Aktivitas testing & commissioning |
| `patra-jasa-dashboard.jpg` | Dashboard Power BI (anonim) |

### 3.4 Sertifikat — `assets/certificates/`

Belum otomatis ditautkan, tapi folder sudah siap. Saran penamaan:

```text
hki-multix.pdf
hki-kalkulator-resistansi.pdf
sertifikat-infinite-learning.pdf
sertifikat-lks-mekatronika.pdf
sertifikat-abu-robocon-2025.pdf
publikasi-plts-kkn-tre-ugm.pdf
```

---

## 4. Spesifikasi teknis gambar

| Jenis | Rasio | Ukuran disarankan | Maks. file | Format |
| --- | --- | --- | --- | --- |
| Foto profil | 1:1 | 800 × 800 – 1200 × 1200 px | 400 KB | `.jpg` |
| Foto lapangan | 4:3 | 1600 × 1200 px | 500 KB | `.jpg` |
| Screenshot teknis | 4:3 | 1600 × 1200 px | 500 KB | `.jpg` atau `.png` |

Catatan:

- Slot galeri di-crop otomatis ke rasio **4:3** (`object-fit: cover`), jadi pastikan
  objek utama ada di tengah frame.
- Gunakan `.jpg` untuk foto dan `.png` hanya untuk screenshot dengan teks tajam.
- Kompres dulu sebelum upload (misalnya lewat [squoosh.app](https://squoosh.app)).
  Repository GitHub Pages sebaiknya tetap ringan.
- Hindari file di atas 1 MB. Halaman jadi lambat dan rekruter sering membuka dari HP.

---

## 5. Checklist keamanan sebelum upload

Repository ini **publik**. Semua yang di-upload bisa dilihat dan diunduh siapa saja.

- [ ] Tidak ada NIK, nomor KTP, atau nomor ijazah yang terlihat.
- [ ] Tidak ada alamat rumah lengkap.
- [ ] Tidak ada tanda tangan basah yang tidak perlu.
- [ ] Tidak ada data klien, harga kontrak, atau gambar teknis yang bersifat rahasia.
- [ ] Untuk dokumentasi RTCT Pertamina dan proyek klien Dekatama: **sudah
      dikonfirmasi boleh dipublikasikan.**
- [ ] Wajah orang lain di foto lapangan: sudah ada izin, atau crop/blur.

---

## 6. Menambahkan slot foto baru

Kalau mau menambah slot galeri di halaman proyek, salin pola ini ke dalam
`<div class="gallery">`:

```html
<figure class="gallery-item">
  <img src="../assets/projects/NAMA-FILE.jpg" alt="Deskripsi singkat" loading="lazy"
       onerror="this.parentElement.classList.add('is-empty'); this.remove();" />
  <figcaption>Keterangan foto.<br /><code>assets/projects/NAMA-FILE.jpg</code></figcaption>
</figure>
```

Atribut `onerror` itulah yang membuat slot berubah jadi placeholder rapi ketika
file belum ada, bukan ikon gambar rusak.

---

## 7. Prioritas upload

Kalau waktunya terbatas, kerjakan berurutan:

1. `assets/img/profile.jpg` — dampak paling besar untuk kesan pertama rekruter.
2. `assets/cv/Arief_Indra_Kusuma_CV.pdf` — mengaktifkan tombol Download CV.
3. Foto PLTS KKN (4 file) — bukti kerja lapangan paling kuat dan paling aman dipublikasikan.
4. Screenshot ETAP Neera dan Lombok — bukti kemampuan analisis power system.
5. Foto Dekatama BCS / PJUTS / PATS — setelah dipastikan aman dari sisi klien.
6. Screenshot Tugas Akhir — setelah laporan di-clear.
7. Sertifikat — paling akhir, sifatnya pelengkap.
