// ===== DATABASE FRAME (DARI PDF) =====
const glassesData = {
    // === COLLECTION: BASIC SERIES (Plastik/Acetate Umum) ===
    "Kyosi": { 
        nama: "Kyosi", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Full Plastik", bahanGagang: "Full Plastik", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Konan (hanya sedikit variasi), Tamura (versi nosepad)" 
    },
    "Kaizu": { 
        nama: "Kaizu", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis (hanya melebar)", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Kyosi (versi full plastik), Tamura (versi dengan nosepad)" 
    },
    "Tamura": { 
        nama: "Tamura", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak tetap cocok.", 
        rekomendasi: "Kyosi (versi tanpa nosepad)" 
    },
    "Konan": { 
        nama: "Konan", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak tetap cocok.", 
        rekomendasi: "Kyosi (bentuk tidak terlalu kotak), Tamura (versi terdapat nosepad), Hiro (versi untuk wajah lebar)" 
    },
    "Hiro": { 
        nama: "Hiro", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Konan (versi untuk wajah kecil), Yoka (Versi lebih tebal dan tidak elastis)" 
    },
    "Yoka": { 
        nama: "Yoka", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Hiro (versi lebih lebar dan elastis), Haruna (versi lebih tipis dan ringan)" 
    },
    "Akika": { 
        nama: "Akika", koleksi: "Basic Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Akame (versi lebih kotak dan lebar), Anya (versi bahan kombinasi)" 
    },
    "Akame": { 
        nama: "Akame", koleksi: "Basic Series", bentuk: "Cat Eye Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Akika (versi tidak terlalu lebar)" 
    },
    "Hitto": { 
        nama: "Hitto", koleksi: "Basic Series", bentuk: "Oval geometric", bahanDepan: "Full Plastik", bahanGagang: "Full Plastik (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Kotak, Lonjong, Hati, Diamond", catatanWajah: "Wajah Bulat lebar tidak disarankan.", 
        rekomendasi: "Himee (versi full besi)" 
    },
    "Sanmu": { 
        nama: "Sanmu", koleksi: "Basic Series", bentuk: "Oval semi cat eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Sesuaikan lagi dengan lebar wajah.", 
        rekomendasi: "Miyu (versi lebih lebar), Shika (versi lebih cat eye)" 
    },
    "Noze": { 
        nama: "Noze", koleksi: "Basic Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Shuji (versi bahan kombinasi), Akika (versi sedikit lebih kotak), Shika (versi lebih cat eye)" 
    },
    "Shuji": { 
        nama: "Shuji", koleksi: "Basic Series", bentuk: "Oval semi Cat Eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Ada Per", nosepad: "Tanam (Dapat nosepad tempel)", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek.", 
        rekomendasi: "Sora (versi tipis), Noze" 
    },
    "Sora": { 
        nama: "Sora", koleksi: "Basic Series", bentuk: "Oval semi cat eye", bahanDepan: "Plastik", bahanGagang: "Plastik (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam (Dapat nosepad tempel)", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek. Wajah tirus/kecil tidak direkomendasikan.", 
        rekomendasi: "Odate, Siyo, Shuji, Chita" 
    },
    "Siyo": { 
        nama: "Siyo", koleksi: "Basic Series", bentuk: "Oval semi Cat Eye", bahanDepan: "Full Plastik", bahanGagang: "Full Plastik (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam (Dapat nosepad tempel)", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek. Pipi chubby kurang disarankan.", 
        rekomendasi: "Sora (rekomendasi), Sanmu (versi kecil), Kaori (Bentuk mirip tapi versi bahan kombinasi)" 
    },
    "Tamada": { 
        nama: "Tamada", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Akame (versi lebih cat eye)" 
    },
    "Chita": { 
        nama: "Chita", koleksi: "Basic Series", bentuk: "Oval", bahanDepan: "Plastik", bahanGagang: "Plastik (Elastis)", per: "Elastis (batang)", nosepad: "Ada Nosepad (Bridge metal)", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Najio (versi lebih rounded...), Hajime (versi ada nosepad...), Kinsei (versi tidak terlalu lebar)" 
    },
    "Miyu": { 
        nama: "Miyu", koleksi: "Basic Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Sanmu (versi lebih lebar)." 
    },

    // === COLLECTION: METAL SERIES ===
    "Miki": { 
        nama: "Miki", koleksi: "Metal Series", bentuk: "Oval semi Cat Eye", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Ada Per (beberapa warna)", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek. Tidak disarankan wajah big size.", 
        rekomendasi: "Mine, Mizu, Misawa" 
    },
    "Mine": { 
        nama: "Mine", koleksi: "Metal Series", bentuk: "Cat Eye", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Miki (versi tidak terlalu cat eye dan lebih oval)" 
    },
    "Himee": { 
        nama: "Himee", koleksi: "Metal Series", bentuk: "Geometric", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Hitto (versi full plastik)" 
    },
    "Arao": { 
        nama: "Arao", koleksi: "Metal Series", bentuk: "Round", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Kotak, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", 
        rekomendasi: "Misawa (Versi lebih kecil), Inabe (versi kotak)" 
    },
    "Misawa": { 
        nama: "Misawa", koleksi: "Metal Series", bentuk: "Bulat", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Oval, Lonjong, Hati, Diamond", catatanWajah: "Cocok hidung pesek.", 
        rekomendasi: "Najio (versi lebih rounded), Hajime (versi ada nosepad), Kinsei (versi tidak terlalu lebar)" 
    },
    "Osaka": { 
        nama: "Osaka", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", 
        rekomendasi: "Hiromi (versi lebih elastis dengan bahan kombinasi plastik)" 
    },
    "Akita": { 
        nama: "Akita", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Hatsu & Aisai (Versi lebih kecil)" 
    },
    "Inabe": { 
        nama: "Inabe", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Akita (frame kotak full metal dengan detail yang berbeda)" 
    },
    "Hatsu": { 
        nama: "Hatsu", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Najio (versi lebih rounded), Hajime (versi ada nosepad), Kinsei (versi tidak terlalu lebar)" 
    },
    "Aisai": { 
        nama: "Aisai", koleksi: "Metal Series", bentuk: "Rectangle", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Hatsu (versi tidak ada per dan lebih kecil), Akita (versi lebih lebar)" 
    },
    "Hankai": { 
        nama: "Hankai", koleksi: "Metal Series", bentuk: "Oval", bahanDepan: "Plastik", bahanGagang: "Metal", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Bulat chubby tidak disarankan.", 
        rekomendasi: "Akashi (versi lebih lebar)" 
    },
    "Mizu": { 
        nama: "Mizu", koleksi: "Metal Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Miki." 
    },

    // === COLLECTION: DOUBLE RIM / COMBO SERIES ===
    "Karia": { 
        nama: "Karia", koleksi: "Double Rim Series", bentuk: "Rectangle", bahanDepan: "Plastik", bahanGagang: "Plastik (aksen besi)", per: "Elastis (sedikit melebar)", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Konan & Kyosi (versi full plastik), Hiro (versi untuk wajah lebar)" 
    },
    "Miso": { 
        nama: "Miso", koleksi: "Double Rim Series", bentuk: "Cat Eye", bahanDepan: "Plastik (Double Rim)", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Kaori (versi lebih cat eye dengan bahan yang sama)" 
    },
    "Anya": { 
        nama: "Anya", koleksi: "Double Rim Series", bentuk: "Cat Eye semi kotak", bahanDepan: "Plastik (Double Rim)", bahanGagang: "Besi", per: "Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek. Tidak disarankan wajah kecil.", 
        rekomendasi: "Akika (versi full plastik)" 
    },
    "Okimi": { 
        nama: "Okimi", koleksi: "Double Rim Series", bentuk: "Oval semi cat eye", bahanDepan: "Plastik (Double Rim)", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Perhatikan ukuran wajah karena frame kecil.", 
        rekomendasi: "Kaori (versi lebih cat eye), Anya (versi lebih lebar), Haruna & Hiromi (versi lebih kotak)" 
    },
    "Hiromi": { 
        nama: "Hiromi", koleksi: "Double Rim Series", bentuk: "Square", bahanDepan: "Plastik (Double Rim)", bahanGagang: "Besi", per: "Elastis (batang)", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Haruna (versi tidak elastis dan lebih lebar)" 
    },
    "Akashi": {
        nama: "Akashi", koleksi: "Double Rim Series", bentuk: "Oval", bahanDepan: "Double Rim (Plastik + Besi)", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad",
        ukuranWajah: "Medium ke lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-",
        rekomendasi: "Airi (versi lebih tipis dan lebih kecil)"
    },
    "Yuji": { 
        nama: "Yuji", koleksi: "Double Rim Series", bentuk: "Cat Eye", bahanDepan: "Plastik (Double Rim)", bahanGagang: "Besi", per: "Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Perhatikan lagi lebar wajah.", 
        rekomendasi: "Kaori dan Miso (versi lebih kecil)" 
    },
    "Ayumi": { 
        nama: "Ayumi", koleksi: "Double Rim Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Sesuaikan lagi dengan lebar wajah.", 
        rekomendasi: "Shuji (versi lebih oval), Noze (versi full plastik), Hana (versi lebih tipis dan lebar)" 
    },
    "Kaori": { 
        nama: "Kaori", koleksi: "Double Rim Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Siyo, Miso, Yuji, Okimi." 
    },

    // === COLLECTION: TR90 SERIES ===
    "Shika": { 
        nama: "Shika", koleksi: "TR90 Series", bentuk: "Cat Eye", bahanDepan: "Plastik (TR90)", bahanGagang: "Plastik (TR90)", per: "Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah tirus kurang disarankan.", 
        rekomendasi: "Ayumi, Noze, Shuji (versi tidak terlalu lancip)" 
    },
    "Inari": {
        nama: "Inari", koleksi: "TR90 Series", bentuk: "Square", bahanDepan: "TR90", bahanGagang: "TR90", per: "Ada Per", nosepad: "Tanam",
        ukuranWajah: "Untuk wajah lebar", rekomendasiWajah: "Bulat, Oval, Lonjong, Segitiga terbalik/Hati, Diamond", catatanWajah: "-",
        rekomendasi: "Shizu (versi full plastik dan tidak terlalu besar)"
    },
    "Shizu": {
        nama: "Shizu", koleksi: "TR90 Series", bentuk: "Square", bahanDepan: "TR90", bahanGagang: "TR90", per: "Sedikit Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium", rekomendasiWajah: "Bulat, Oval, Lonjong, Segitiga terbalik/Hati, Diamond", catatanWajah: "-",
        rekomendasi: "Inari (versi lebih lebar)"
    },
    "Amiko": {
        nama: "Amiko", koleksi: "TR90 Series", bentuk: "Round", bahanDepan: "TR90 + Metal", bahanGagang: "TR90 + Metal", per: "Ada Per", nosepad: "Tanam",
        ukuranWajah: "Medium", rekomendasiWajah: "Kotak, Oval, Lonjong, Segitiga terbalik/Hati, Diamond", catatanWajah: "-",
        rekomendasi: "Bomi (versi elastis & non nosepad), Hankai (versi dengan nosepad)"
    },

    // === COLLECTION: ACTIVE PROGRESS ===
    "Yukai": { 
        nama: "Yukai", koleksi: "Active Progress", bentuk: "Round/Geometris", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek. Wajah lebar chubby kurang disarankan.", 
        rekomendasi: "Kaiho (versi lebar bernosepad juga), Kaitou (versi full plastik dan lebih tebal)" 
    },
    "Chowa": { 
        nama: "Chowa", koleksi: "Active Progress", bentuk: "Round", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "Wajah Bulat tidak disarankan. Hidung pesek/pipi chubby cocok.", 
        rekomendasi: "Jine & Hiromi (Versi lebih lebar dan besar)" 
    },
    "Ima": { 
        nama: "Ima", koleksi: "Active Progress", bentuk: "Round/Oval (Bayonetta)", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Hidung pesek/pipi chubby cocok.", 
        rekomendasi: "Belum ada (Bisa direkomendasikan ke bentuk bulat kecil lainnya)" 
    },
    "Hajime": { 
        nama: "Hajime", koleksi: "Active Progress", bentuk: "Rectangle/Square", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Ada Nosepad (menyatu)", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek & pipi chubby. Wajah Kotak tirus tidak disarankan.", 
        rekomendasi: "Hiro (versi tanpa nosepad dan lebih elastis), Hoshi (versi lebih tebal)" 
    },
    "Kaiho": { 
        nama: "Kaiho", koleksi: "Active Progress", bentuk: "Rectangle/Geometris", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Ada Nosepad", 
        ukuranWajah: "Untuk wajah lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek & pipi chubby.", 
        rekomendasi: "Kaitou (versi tidak ber nosepad)" 
    },

    // === COLLECTION: SUNYATA ===
    "Najio": { 
        nama: "Najio", koleksi: "Sunyata", bentuk: "Square", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Hoshi (versi lebih kotak), Hajime (versi ada nosepad)" 
    },
    "Kaitou": { 
        nama: "Kaitou", koleksi: "Sunyata", bentuk: "Geometris", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar / Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Kaiho (versi ber nosepad dan lebih tipis), Hitto (lebih tipis, elastis, dan lebih lebar)" 
    },
    "Jine": { 
        nama: "Jine", koleksi: "Sunyata", bentuk: "Round", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "Wajah Bulat lebar/tulang pipi tinggi kurang disarankan.", 
        rekomendasi: "Chowa (Versi lebih kecil, tipis, dan ada nosepad), Hanami (Versi lebih lebar)" 
    },
    "Riyuki": { 
        nama: "Riyuki", koleksi: "Sunyata", bentuk: "Round", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "Wajah Bulat lebar kurang disarankan.", 
        rekomendasi: "Jine dan Hanami (versi lebih bulat oval)" 
    },

    // === COLLECTION: BEYOND THE SHADES ===
    "Kinsei": { 
        nama: "Kinsei", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Hoshi (versi lebih kotak), Hajime (versi ada nosepad), Najio (versi lebih kotak)" 
    },
    "Hoshi": { 
        nama: "Hoshi", koleksi: "Beyond the Shades", bentuk: "Square", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Najio (versi lebih rounded), Hajime (versi ada nosepad), Kinsei (versi tidak terlalu lebar)" 
    },
    "Hanami": { 
        nama: "Hanami", koleksi: "Beyond the Shades", bentuk: "Bulat", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "Wajah Bulat lebar kurang disarankan.", 
        rekomendasi: "Jine (versi tidak terlalu lebar), Riyuki (versi lebih bulat), Chowa (versi ber nose pad)" 
    },
    "Aozora": { 
        nama: "Aozora", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Oval, Lonjong, Hati, Diamond", catatanWajah: "Wajah Bulat & Kotak pastikan ukuran pas.", 
        rekomendasi: "Kinsei (frame yang tidak terlalu kecil lebar lensanya)" 
    },
    "Meiro": {
        nama: "Meiro", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium ke lebar/kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-",
        rekomendasi: "Kasumi (versi lebih lebar)"
    },
    "Yume": {
        nama: "Yume", koleksi: "Beyond the Shades", bentuk: "Oval (pipih)", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Kurang cocok untuk wajah lebar besar.",
        rekomendasi: "Ukiyo (versi tidak terlalu oval dan lebih pipih)"
    },
    "Kasumi": {
        nama: "Kasumi", koleksi: "Beyond the Shades", bentuk: "Square", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium ke lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-",
        rekomendasi: "Meiro (versi tidak terlalu tebal)"
    },
    "Ukiyo": {
        nama: "Ukiyo", koleksi: "Beyond the Shades", bentuk: "Oval (pipih)", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Kurang cocok untuk wajah lebar besar.",
        rekomendasi: "Yume (bentuk lebih oval dan lebih lebar)"
    },
    "Kizuna": {
        nama: "Kizuna", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Kurang cocok untuk wajah lebar besar.",
        rekomendasi: "Meiro (bentuk lebih simple)"
    },
    "Hika": {
        nama: "Hika", koleksi: "Beyond the Shades", bentuk: "Cat Eye", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-",
        rekomendasi: "Shika & Noze (non sunglasses)"
    },
    "Miura": { 
        nama: "Miura", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate (plat besi)", per: "Tidak Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Hoshi (versi tidak terlalu bold), Najio (versi lebih rounded)" 
    },

    // === COLLECTION: CLAIR (Clip-On) ===
    "Yuna": { 
        nama: "Yuna", koleksi: "Clair", bentuk: "Oval Semi Cat Eye", bahanDepan: "Acetate", bahanGagang: "Besi", per: "Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cek tinggi kacamata jika pipi chubby.", 
        rekomendasi: "Rona (Versi tidak terlalu cat eye), Shuji (Versi bukan clip on)" 
    },
    "Jiyo": { 
        nama: "Jiyo", koleksi: "Clair", bentuk: "Square - Clubmaster", bahanDepan: "Acetate + Besi", bahanGagang: "Besi", per: "Sedikit Elastis", nosepad: "Nosepad menyatu (Acetate)", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Inabe (versi bukan clip on), Luna (versi full besi)" 
    },
    "Luna": { 
        nama: "Luna", koleksi: "Clair", bentuk: "Square semi cat eye", bahanDepan: "Full Besi/Metal", bahanGagang: "Full Besi/Metal", per: "Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Jiyo (versi bukan full besi), Inabe (versi non clip on)" 
    },
    "Rumi": { 
        nama: "Rumi", koleksi: "Clair", bentuk: "Square", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate (plat besi)", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", 
        rekomendasi: "Hoshi (versi non clip on dan lebih tebal)" 
    },
    "Rona": { 
        nama: "Rona", koleksi: "Clair", bentuk: "Oval", bahanDepan: "Acetate", bahanGagang: "Besi", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Sora (versi non nosepad), Amiko" 
    },

    // === COLLECTION: REFINE ===
    "Rikona": { 
        nama: "Rikona", koleksi: "Refine", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Besi Metal", per: "Tidak Ada Per", nosepad: "Nosepad menyatu (Acetate)", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Bagian ujung rounded, cocok untuk semua.", 
        rekomendasi: "-" 
    },
    "Meiso": { 
        nama: "Meiso", koleksi: "Refine", bentuk: "Round", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Kotak, Oval, Lonjong, Hati, Diamond", catatanWajah: "Wajah Bulat lebar kurang cocok.", 
        rekomendasi: "Bomi (versi elastis), Airi (versi nosepad dan bahan kombinasi)" 
    },
    "Naoya": { 
        nama: "Naoya", koleksi: "Refine", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Metal", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "Wajah Kotak tegas kurang disarankan.", 
        rekomendasi: "Yoka (versi lebih kecil), Hajime (versi dengan nosepad)" 
    },
    "Niji": { 
        nama: "Niji", koleksi: "Refine", bentuk: "Square", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "Wajah Kotak tegas kurang disarankan.", 
        rekomendasi: "Najio, Hoshi" 
    },
    "Reika": { 
        nama: "Reika", koleksi: "Refine", bentuk: "Cat Eye", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Perhatikan lebar wajah.", 
        rekomendasi: "Noze, Shika" 
    },
    "Rune": { 
        nama: "Rune", koleksi: "Refine", bentuk: "Round", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", 
        ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Hankai (versi dengan nosepad), Najio (versi lebih kotak), Kinsei" 
    },

    // === COLLECTION: FELINE ===
    "Piyo": { 
        nama: "Piyo", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90", bahanGagang: "TR90 (aksen metal)", per: "Tidak Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium (ke lebar)", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Miyu (Versi lebih oval)" 
    },
    "Geumi": { 
        nama: "Geumi", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "Metal", bahanGagang: "Metal", per: "Tidak Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium (ke lebar)", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Yuki (versi lebih kecil/diameter lensa lebih kecil)" 
    },
    "Yuki": { 
        nama: "Yuki", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90 + Metal", bahanGagang: "TR90 + Metal", per: "Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium (ke kecil)", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Geumi (versi untuk wajah lebar)" 
    },
    "Doci": { 
        nama: "Doci", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90", bahanGagang: "TR90", per: "Ada Per", nosepad: "Tanam", 
        ukuranWajah: "Medium (ke kecil/lebar)", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Shuji (versi lebih lebar)" 
    },
    "Nalla": { 
        nama: "Nalla", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90 + Metal", bahanGagang: "TR90 + Metal", per: "Ada Per", nosepad: "Ada Nosepad", 
        ukuranWajah: "Medium (ke kecil/lebar)", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", 
        rekomendasi: "Anya, Akika, Geumi, Yuki" 
    },

    // === GENERAL / NO SPECIFIC COLLECTION (Assigned to General) ===
    "Kira": { 
        nama: "Kira", koleksi: "General Series", info: "Info detail tidak ada di PDF." 
    },
    "Mori": { 
        nama: "Mori", koleksi: "General Series", info: "Info detail tidak ada di PDF." 
    },
    "Sena": { 
        nama: "Sena", koleksi: "General Series", info: "Info detail tidak ada di PDF." 
    },
    "Hana": { 
        nama: "Hana", koleksi: "General Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Ayumi." 
    },
    "Suwa": { 
        nama: "Suwa", koleksi: "General Series", info: "Info detail tidak ada di PDF." 
    },
    "Chami": { 
        nama: "Chami", koleksi: "General Series", info: "Info detail tidak ada di PDF." 
    },
    "Airi": { 
        nama: "Airi", koleksi: "General Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Meiso, Akashi."
    },
    "Haruna": { 
        nama: "Haruna", koleksi: "General Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Yoka, Okimi, Hiromi." 
    },
    "Bomi": { 
        nama: "Bomi", koleksi: "General Series", info: "Info detail tidak ada di PDF. Direkomendasikan sebagai frame mirip Amiko, Meiso." 
    },
    "Odate": {
        nama: "Odate", koleksi: "Basic Series", bentuk: "Oval", bahanDepan: "Plastik", bahanGagang: "Plastik + Metal", per: "Tidak Elastis", nosepad: "Tanam",
        ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-",
        rekomendasi: "Sora (versi tidak ber nosepad), Akashi (versi lebih bulat)"
    }
};

// ===== DATABASE LENSA (DIPERBARUI SESUAI GAMBAR PRODUK SHOPEE) =====
const lensesData = {
    "Clear": { 
        nama: "Clear Lens (Standar)", 
        deskripsi: "Lensa standar berkualitas optik tinggi yang jernih dan bening. Memberikan pandangan natural tanpa bias warna. Dilengkapi lapisan anti-gores dasar dan anti-pantul standar." 
    },
    "Blueray": { 
        nama: "Antiradiasi Blueray", 
        deskripsi: "Wajib untuk pengguna gadget! Lensa ini memblokir sinar biru berbahaya (Blue Light) dari layar HP, Laptop, dan TV LED. Membantu mengurangi mata lelah, sakit kepala, dan menjaga kualitas tidur." 
    },
    "Photochromic": { 
        nama: "Photochromic (Transisi)", 
        deskripsi: "Lensa pintar yang otomatis berubah menjadi gelap (seperti sunglasses) saat terkena sinar matahari (UV) dan kembali bening saat di dalam ruangan. Melindungi mata dari silau matahari." 
    },
    "Bluechromic": { 
        nama: "Bluechromic (2-in-1)", 
        deskripsi: "Lensa Paling Best Seller! Gabungan fitur 'Blueray' + 'Photochromic'. Melindungi mata dari radiasi gadget DI DALAM ruangan, sekaligus berubah gelap saat DI LUAR ruangan. Perlindungan total 24 jam." 
    },
    "Hi-Index": { 
        nama: "Lensa Tipis / Hi-Index (SPH/CYL)", 
        deskripsi: `
            <b>Solusi estetika untuk minus tinggi agar tidak tebal (botol).</b><br>
            Tersedia dalam opsi material:
            <ul class="list-disc list-inside mt-1 mb-1 pl-1 text-xs text-gray-500">
                <li><b>Clear:</b> Tipis Jernih</li>
                <li><b>Blueray:</b> Tipis + Antiradiasi Gadget</li>
                <li><b>Bluechromic:</b> Tipis + Antiradiasi + Berubah Gelap</li>
            </ul>
            <span class="text-xs text-indigo-600 font-bold">Tersedia opsi khusus Cylinder Tinggi (Max -2.00, -4.00, s/d -6.00). Index 1.60 & 1.67.</span>
        `
    },
    "Crizal Rock": { 
        nama: "Essilor Crizal Rock", 
        deskripsi: `
            <b>Lensa Paling Tahan Gores & Tangguh.</b><br>
            Teknologi High-Resistance, 3x lebih tahan gores dari lensa biasa dan sangat mudah dibersihkan dari noda/minyak.<br>
            <b>Opsi Material:</b> Blue Capture (Anti-Blueray) & Transitions Grey.<br>
            <b>Index Tersedia:</b> 1.50 & 1.56.
        `
    },
    "Crizal Sapphire": { 
        nama: "Essilor Crizal Sapphire", 
        deskripsi: `
            <b>Lensa "Invisible" (Hampir Tak Terlihat).</b><br>
            Teknologi anti-pantulan 360° terbaik. Lensa sangat jernih, tidak memantulkan cahaya saat difoto/video call.<br>
            <b>Opsi Material:</b> Blue UV Capture & Transitions Grey.<br>
            <b>Index Tersedia:</b> 1.59 (Polycarbonate) & 1.67 (Sangat Tipis).
        `
    },
    "Anti-Fatigue": { 
        nama: "Anti-Fatigue (Mata Lelah)", 
        deskripsi: `
            <b>Relaksasi untuk Mata Lelah / Pegal.</b><br>
            Desain khusus dengan 'boost zone' di bagian bawah lensa untuk mengistirahatkan otot mata saat fokus jarak dekat lama.<br>
            <b>Merk:</b> HKLens Eyecomfort & Stellify Digieye.<br>
            <b>Index Tersedia:</b> 1.56, 1.61, 1.67.
        `
    },
    "Drive": { 
        nama: "Drive Lenses (Night Vision)", 
        deskripsi: `
            <b>Anti-Silau Lampu Kendaraan (Malam Hari).</b><br>
            Coating khusus yang meminimalisir silau (glare) lampu jalan/mobil lawan. Menyetir malam jadi lebih aman & nyaman.<br>
            <b>Merk:</b> HKLens OptiDrive, Stellify Drive, Essilor Drive.<br>
            <b>Index Tersedia:</b> 1.5, 1.60, 1.67.
        `
    },
    "Optifog": { 
        nama: "Essilor Optifog", 
        deskripsi: `
            <b>Lensa Anti-Embun / Anti-Kabut Terbaik.</b><br>
            Lensa tetap jernih saat pakai masker, minum air panas, atau keluar masuk ruangan ber-AC/olahraga.<br>
            <b>Opsi:</b> Clear & Transitions (Grey/Brown/Green).<br>
            <b>Index Tersedia:</b> 1.5 & 1.59.
        `
    },
    "Progresif": { 
        nama: "Lensa Progresif", 
        deskripsi: "Lensa tanpa batas garis untuk penglihatan 3 zona sekaligus: Jauh (menyetir/jalan), Menengah (komputer), dan Dekat (membaca HP). Solusi estetis pengganti kacamata baca/bifokal tua." 
    },
    "PurePlus": { 
        nama: "Lensa Pure Plus", 
        deskripsi: "Lensa dengan kejernihan ekstra yang meminimalkan distorsi visual. Memberikan ketajaman warna dan kontras yang lebih baik dibandingkan lensa standar." 
    },
    "Sunglasses": { 
        nama: "Sunglasses (Hitam/Warna)", 
        deskripsi: "Lensa dengan warna permanen (Hitam/Coklat/Hijau) yang dilengkapi UV400 Protection. Khusus untuk aktivitas outdoor, liburan, atau fashion statement. Bisa request ukuran minus." 
    }
};
// ===== AKHIR DATABASE =====

// Daftar frame di denah
const allGlasses = [
    { name: 'Kyosi', type: 'table', area: 'A1' },
    { name: 'Kaizu', type: 'table', area: 'A1' },
    { name: 'Tamura', type: 'table', area: 'A1' },
    { name: 'Miyu', type: 'table', area: 'B1' },
    { name: 'Konan', type: 'table', area: 'C1' },
    { name: 'Karia', type: 'table', area: 'C1' },
    { name: 'Chowa', type: 'table', area: 'D1' },
    { name: 'Ima', type: 'table', area: 'D1' },
    { name: 'Rikona', type: 'table', area: 'E1' },
    { name: 'Niji', type: 'table', area: 'E1' },
    { name: 'Meiso', type: 'table', area: 'E1' },
    { name: 'Miso', type: 'table', area: 'F1' },
    { name: 'Anya', type: 'table', area: 'F1' },
    { name: 'Kaitou', type: 'table', area: 'G1' },
    { name: 'Najio', type: 'table', area: 'G1' }, 
    { name: 'Jine', type: 'table', area: 'G1' },
    { name: 'Riyuki', type: 'table', area: 'G1' }, 
    { name: 'Miki', type: 'table', area: 'H1' },
    { name: 'Mine', type: 'table', area: 'H1' },
    { name: 'Yukai', type: 'table', area: 'I1' },
    { name: 'Sora', type: 'table', area: 'I1' },
    { name: 'Siyo', type: 'table', area: 'J1' },
    { name: 'Tamada', type: 'table', area: 'A2' },
    { name: 'Hankai', type: 'table', area: 'A2' },
    { name: 'Yuna', type: 'table', area: 'B2' },
    { name: 'Rona', type: 'table', area: 'B2' },
    { name: 'Naoya', type: 'table', area: 'D2' },
    { name: 'Rune', type: 'table', area: 'D2' },
    { name: 'Reika', type: 'table', area: 'D2' },
    { name: 'Hajime', type: 'table', area: 'E2' },
    { name: 'Kaiho', type: 'table', area: 'E2' },
    { name: 'Hiro', type: 'table', area: 'I2' },
    { name: 'Chita', type: 'table', area: 'I2' },
    { name: 'Kosong', type: 'table', area: 'J2-Kosong' }, 
    { name: 'Okimi', type: 'stacked', area: 'J2' }, 
    { name: 'Kaori', type: 'stacked', area: 'J2' }, 
    { name: 'Shika', type: 'table', area: 'A3' },
    { name: 'Mizu', type: 'table', area: 'A3' },
    { name: 'Hiromi', type: 'table', area: 'A3' },
    { name: 'Kira', type: 'table', area: 'A4' },
    { name: 'Mori', type: 'table', area: 'A4' },
    { name: 'Sanmu', type: 'table', area: 'B3' },
    { name: 'Noze', type: 'table', area: 'C3' },
    { name: 'Shuji', type: 'table', area: 'C3' },
    { name: 'Hoshi', type: 'table', area: 'I3' },
    { name: 'Yoka', type: 'table', area: 'I3' },
    { name: 'Miura', type: 'table', area: 'I3' },
    { name: 'Akika', type: 'table', area: 'J3' },
    { name: 'Akame', type: 'table', area: 'J3' },
    { name: 'Airi', type: 'table', area: 'J4' }, 
    { name: 'Haruna', type: 'table', area: 'J4' },
    { name: 'Hitto', type: 'table', area: 'A5' },
    { name: 'Himee', type: 'table', area: 'A5' },
    { name: 'Jiyo', type: 'table', area: 'B5' },
    { name: 'Luna', type: 'table', area: 'B5' },
    { name: 'Geumi', type: 'stacked', area: 'C5' }, 
    { name: 'Nalla', type: 'stacked', area: 'C5' }, 
    { name: 'Arao', type: 'table', area: 'A6' },
    { name: 'Misawa', type: 'table', area: 'A6' },
    { name: 'Osaka', type: 'table', area: 'A6' },
    { name: 'Rumi', type: 'table', area: 'B6' },
    { name: 'Bomi', type: 'table', area: 'B6' },
    { name: 'Piyo', type: 'stacked', area: 'C6' }, 
    { name: 'Akita', type: 'table', area: 'A7' },
    { name: 'Inabe', type: 'table', area: 'A7' },
    { name: 'Hatsu', type: 'table', area: 'A7' }, 
    { name: 'Aisai', type: 'table', area: 'A7' }, 
    { name: 'Aozora', type: 'table', area: 'B7' },
    { name: 'Kinsei', type: 'table', area: 'B7' },
    { name: 'Hanami', type: 'table', area: 'B7' },
    { name: 'Doci', type: 'stacked', area: 'C7' }, 
    { name: 'Yuki', type: 'stacked', area: 'C7' }, 
    { name: 'Amiko', type: 'table', area: 'A8' }, 
    { name: 'Inari', type: 'table', area: 'A8' }, 
    { name: 'Shizu', type: 'table', area: 'A8' }, 
    { name: 'Yuji', type: 'table', area: 'B8' },
    { name: 'Ayumi', type: 'table', area: 'B8' },
    { name: 'Sena', type: 'stacked', area: 'C8' }, 
    { name: 'Hana', type: 'stacked', area: 'C8' }, 
    { name: 'Suwa', type: 'stacked', area: 'D8' }, 
    { name: 'Chami', type: 'stacked', area: 'D8' }  
];

// === AMBIL SEMUA ELEMEN ===
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const resultCount = document.getElementById('resultCount');
const resultList = document.getElementById('resultList');
const cells = document.querySelectorAll('.cell');

// Elemen Panel Info Frame
const selectedInfo = document.getElementById('selectedInfo');
const selectedArea = document.getElementById('selectedArea');
const selectedType = document.getElementById('selectedType');
const detailsContainer = document.getElementById('detailsContainer'); 
const closeBtn = document.getElementById('closeBtn');

// Elemen Modal Lensa
const modalLensOverlay = document.getElementById('modal-lens-overlay');
const modalLensTitle = document.getElementById('modal-lens-title');
const modalLensType = document.getElementById('modal-lens-type');
const modalLensDetails = document.getElementById('modal-lens-details');
const modalLensCloseBtn = document.getElementById('modal-lens-close-btn');
const lensInfoBtn = document.getElementById('lensInfoBtn'); 

// === FUNGSI MODAL LENSA ===
function openLensModal(title, type) {
    modalLensTitle.textContent = title;
    modalLensType.textContent = type;
    modalLensOverlay.classList.remove('hidden');
    modalLensOverlay.classList.add('flex'); // Tambahkan flex untuk memusatkan
}

function closeLensModal() {
    modalLensOverlay.classList.add('hidden');
    modalLensOverlay.classList.remove('flex'); // Hapus flex
    modalLensDetails.innerHTML = '';
}

// === EVENT LISTENER TOMBOL LENSA (Buka Popup) ===
lensInfoBtn.addEventListener('click', () => {
    cells.forEach(c => c.classList.remove('selected')); 
    selectedInfo.classList.add('hidden'); 
    modalLensDetails.innerHTML = ''; 
    
    const howToOrderHtml = `
        <div class="space-y-4 mb-6">
            
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r shadow-sm text-xs sm:text-sm">
                <div class="flex gap-3">
                    <span class="text-xl">📝</span>
                    <div>
                        <h3 class="font-bold text-yellow-800 mb-1">Cara Tulis Resep (Di Catatan/Chat)</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            <div class="bg-white p-2 rounded border border-yellow-200">
                                <span class="font-bold text-gray-700 block">Mata Normal:</span>
                                <span class="text-gray-500">Cukup tulis "Normal / Plano"</span>
                            </div>
                            <div class="bg-white p-2 rounded border border-yellow-200">
                                <span class="font-bold text-gray-700 block">Ada Minus/Silinder:</span>
                                <span class="text-gray-500">R: -2.00 Cyl -1.00 Ax 90<br>L: -1.50</span>
                                <div class="mt-1 text-[10px] text-red-500 font-bold">*Wajib sertakan AXIS (Ax) jika Silinder!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r shadow-sm text-xs sm:text-sm">
                <div class="flex gap-3">
                    <span class="text-xl">🔍</span>
                    <div>
                        <h3 class="font-bold text-blue-800 mb-2">Kamus "Index" (Penipisan Lensa)</h3>
                        <p class="text-gray-600 mb-3 leading-relaxed">
                            Bayangkan index itu seperti <b>"Kepadatan"</b>. Semakin tinggi angkanya, lensa semakin padat, tipis, dan ringan.
                        </p>
                        
                        <div class="grid grid-cols-1 gap-2">
                            <div class="flex items-center bg-white p-2 rounded border border-blue-100">
                                <div class="w-14 font-bold text-blue-600 text-center border-r border-gray-200 pr-2 mr-2 text-xs">Index<br>1.50 / 1.56</div>
                                <div>
                                    <span class="font-bold text-gray-700">Lensa Standar</span>
                                    <p class="text-gray-500 text-[11px]">Paling hemat. Aman & bagus untuk minus kecil (0 s/d -2.00).</p>
                                </div>
                            </div>

                            <div class="flex items-center bg-white p-2 rounded border border-blue-100">
                                <div class="w-14 font-bold text-blue-600 text-center border-r border-gray-200 pr-2 mr-2 text-xs">Index<br>1.59 / 1.60</div>
                                <div>
                                    <span class="font-bold text-gray-700">Lensa Tipis (High Index)</span>
                                    <p class="text-gray-500 text-[11px]">
                                        Lebih tipis ~20% dari standar. <span class="text-blue-600 font-semibold">Wajib buat frame Besi/Metal</span> biar lensa gak nongol (offside).
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center bg-white p-2 rounded border border-blue-100">
                                <div class="w-14 font-bold text-blue-600 text-center border-r border-gray-200 pr-2 mr-2 text-xs">Index<br>1.67</div>
                                <div>
                                    <span class="font-bold text-gray-700">Lensa Super Tipis</span>
                                    <p class="text-gray-500 text-[11px]">
                                        Paling tipis & ringan (~40% lebih tipis). Solusi "anti pantat botol" buat minus tinggi (-4.00 ke atas).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-green-50 border-l-4 border-green-400 p-3 rounded-r shadow-sm text-xs">
                 <div class="flex gap-2">
                    <span class="text-lg">💡</span>
                    <div>
                        <h3 class="font-bold text-green-800 mb-1">Rekomendasi Cepat:</h3>
                        <ul class="space-y-1 text-green-800">
                            <li>✅ <b>Minus 0 - 2.00:</b> Pakai Index 1.56 (Standar) sudah cukup.</li>
                            <li>✅ <b>Minus 2.00 - 4.00:</b> Disarankan Index 1.60 (Tipis) agar enteng.</li>
                            <li>✅ <b>Minus > 4.00:</b> Sangat disarankan Index 1.67 (Super Tipis) agar estetika terjaga.</li>
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
        
        <div class="border-b-2 border-gray-200 pb-2 mb-4 mt-8">
            <h3 class="font-bold text-xl text-gray-800">📖 Katalog Fitur Lensa</h3>
        </div>
    `;
    
    modalLensDetails.innerHTML += howToOrderHtml;

    // 2. LOOP DATABASE LENSA
    for (const key in lensesData) {
        const data = lensesData[key];
        const detailHtml = `
            <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3 hover:border-blue-400 transition group">
                <h3 class="font-bold text-base text-blue-700 mb-1 group-hover:text-blue-800">${data.nama}</h3>
                <div class="text-sm text-gray-600 leading-relaxed">${data.deskripsi}</div>
            </div>
        `;
        modalLensDetails.innerHTML += detailHtml;
    }
    
    openLensModal("💁‍♀️ Panduan Lengkap Lensa", "Cara order, panduan ketebalan, dan jenis lensa");
});

// === EVENT LISTENER DENAH (Buka Panel Biru) ===
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const names = cell.dataset.names;
        if (!names) return;

        const isStacked = cell.dataset.stacked === 'true';
        const namesList = names.split(',');
        
        cells.forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
        
        // Sembunyikan modal lensa jika terbuka
        modalLensOverlay.classList.add('hidden'); 
        modalLensOverlay.classList.remove('flex');

        selectedArea.textContent = `📍 Area: ${names}`;
        selectedType.textContent = isStacked ? '🟨 Display di atas box (ditumpuk)' : '⬜ Display di atas meja';
        
        detailsContainer.innerHTML = ''; 

        namesList.forEach(nameStr => {
            let name = nameStr.trim();
            if (name === 'Kosong') {
                detailsContainer.innerHTML += '<p class="text-gray-600">Box ini kosong.</p>';
                return;
            }
            const data = glassesData[name]; 
            
            if (data) {
                let detailHtml = '';
                if (data.info) {
                    // Data minim (hanya info dan nama) + KOLEKSI
                    const koleksiBadge = data.koleksi ? 
                        `<span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full mb-1 inline-block">${data.koleksi}</span>` : '';

                    detailHtml = `
                        <div class="p-2 bg-gray-100 rounded">
                            ${koleksiBadge}
                            <h3 class="font-bold text-base text-gray-900">${data.nama}</h3>
                            <p class="text-gray-600">${data.info}</p>
                        </div>
                    `;
                } else {
                    // Data lengkap + KOLEKSI
                    const koleksiBadge = data.koleksi ? 
                        `<span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full mb-1 inline-block border border-indigo-200 font-semibold">${data.koleksi}</span>` : '';

                    detailHtml = `
                        <div class="p-2 bg-blue-100 rounded">
                            <div class="flex justify-between items-start">
                                <div>
                                    ${koleksiBadge}
                                    <h3 class="font-bold text-base text-gray-900">${data.nama}</h3>
                                </div>
                            </div>
                            
                            <div class="mt-1">
                                <h4 class="font-semibold text-gray-800 mb-1 underline decoration-blue-300">Spesifikasi Fisik:</h4>
                                <dl class="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <dt class="font-semibold text-gray-700">Bentuk:</dt>
                                    <dd class="text-gray-800">${data.bentuk}</dd>
                                    
                                    <dt class="font-semibold text-gray-700">Per:</dt>
                                    <dd class="text-gray-800">${data.per}</dd>
                                    
                                    <dt class="font-semibold text-gray-700">Depan:</dt>
                                    <dd class="text-gray-800">${data.bahanDepan}</dd>

                                    <dt class="font-semibold text-gray-700">Nosepad:</dt>
                                    <dd class="text-gray-800">${data.nosepad}</dd>
                                    
                                    <dt class="font-semibold text-gray-700">Gagang:</dt>
                                    <dd class="text-gray-800">${data.bahanGagang}</dd>
                                </dl>
                            </div>
                            
                            <div class="mt-2 pt-2 border-t border-blue-200">
                                <h4 class="font-semibold text-gray-800 mb-1 underline decoration-blue-300">Rekomendasi Wajah:</h4>
                                <dl class="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <dt class="font-semibold text-gray-700">Ukuran Wajah:</dt>
                                    <dd class="text-gray-800 font-bold">${data.ukuranWajah}</dd>

                                    <dt class="font-semibold text-gray-700 col-span-2 mt-1">Cocok Untuk:</dt>
                                    <dd class="text-gray-800 col-span-2">${data.rekomendasiWajah}</dd>

                                    <dt class="font-semibold text-gray-700 col-span-2 mt-1">Catatan:</dt>
                                    <dd class="text-gray-800 col-span-2">${data.catatanWajah}</dd>
                                </dl>
                            </div>

                            <div class="mt-2 pt-2 border-t border-blue-200">
                                <h4 class="font-semibold text-gray-800 mb-1 underline decoration-blue-300">Rekomendasi Frame Mirip:</h4>
                                <p class="text-gray-800">${data.rekomendasi}</p>
                            </div>
                        </div>
                    `;
                }
                detailsContainer.innerHTML += detailHtml;
            } else {
                detailsContainer.innerHTML += `
                    <div class="p-2 bg-gray-100 rounded">
                        <h3 class="font-bold text-base text-gray-900">${name}</h3>
                        <p class="text-gray-600">Info detail untuk item ini tidak tersedia.</p>
                    </div>
                `;
            }
        });
        
        selectedInfo.classList.remove('hidden'); // Tampilkan panel biru
    });
});

// === EVENT LISTENER CLOSE BUTTONS ===

// Tombol close untuk panel biru (frame)
closeBtn.addEventListener('click', () => {
    selectedInfo.classList.add('hidden');
    cells.forEach(c => c.classList.remove('selected'));
    detailsContainer.innerHTML = ''; 
});

// Tombol close untuk modal popup (lensa)
modalLensCloseBtn.addEventListener('click', closeLensModal);
modalLensOverlay.addEventListener('click', (e) => {
    if (e.target === modalLensOverlay) {
        closeLensModal();
    }
});

// === EVENT LISTENER SEARCH ===
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    cells.forEach(cell => {
        cell.classList.remove('highlighted');
    });

    if (term) {
        const filteredNames = Object.keys(glassesData).filter(name => 
            name.toLowerCase().includes(term)
        );
        
        const filtered = filteredNames.map(name => {
            const glassInLayout = allGlasses.find(g => g.name === name);
            if (glassInLayout) {
                return glassInLayout;
            }
            return { name: name, type: 'database', area: 'N/A' };
        });

        if (filtered.length > 0) {
            searchResults.classList.remove('hidden');
            resultCount.textContent = `📍 Ditemukan: ${filtered.length} item`;
            
            let html = '';
            filtered.slice(0, 5).forEach(item => {
                let location = '⬜ Di Meja';
                if (item.type === 'stacked') {
                    location = '🟨 Ditumpuk';
                } else if (item.type === 'database') {
                    location = 'ℹ️ Database';
                }

                html += `
                    <div class="text-sm flex items-center gap-2">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span>${item.name}</span>
                        <span class="text-xs text-gray-600">- ${location}</span>
                    </div>
                `;
            });
            
            if (filtered.length > 5) {
                html += `<div class="text-xs text-gray-500 mt-1">+${filtered.length - 5} lainnya...</div>`;
            }
            
            resultList.innerHTML = html;

            cells.forEach(cell => {
                const names = cell.dataset.names?.split(',') || [];
                if (names.some(name => name.toLowerCase().includes(term))) {
                    cell.classList.add('highlighted');
                }
            });
        } else {
            searchResults.classList.add('hidden');
        }
    } else {
        searchResults.classList.add('hidden');
    }
});

// ===== LOGIKA FILTER KATEGORI =====
const filterShape = document.getElementById('filterShape');
const filterSize = document.getElementById('filterSize');
const filterCollection = document.getElementById('filterCollection'); // Tambahan
const applyFilterBtn = document.getElementById('applyFilterBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');

// --- POPULATE DROPDOWN KOLEKSI SECARA OTOMATIS ---
// Fungsi ini mencari semua jenis koleksi unik dari database dan memasukkannya ke dropdown
function populateCollectionDropdown() {
    const collections = new Set();
    
    // Ambil semua koleksi unik
    Object.values(glassesData).forEach(data => {
        if (data.koleksi) {
            collections.add(data.koleksi);
        }
    });

    // Ubah ke array dan sort biar rapi
    const sortedCollections = Array.from(collections).sort();

    // Masukkan ke dropdown
    sortedCollections.forEach(col => {
        const option = document.createElement('option');
        option.value = col;
        option.textContent = col;
        filterCollection.appendChild(option);
    });
}

// Jalankan fungsi populate saat load
populateCollectionDropdown();

// --- LOGIKA FILTER ---
applyFilterBtn.addEventListener('click', () => {
    const selectedShape = filterShape.value.toLowerCase();
    const selectedSize = filterSize.value.toLowerCase();
    const selectedCollection = filterCollection.value; // Ambil nilai koleksi (Case sensitive sesuai DB)

    // Reset highlight sebelumnya
    cells.forEach(c => c.classList.remove('highlighted'));
    searchInput.value = ''; // Kosongkan search bar biasa biar ga bingung

    if (!selectedShape && !selectedSize && !selectedCollection) {
        alert("Silakan pilih minimal satu filter (Bentuk, Ukuran, atau Koleksi)!");
        return;
    }

    const matches = [];

    // Loop semua data frame di database
    for (const [key, data] of Object.entries(glassesData)) {
        // Skip jika data tidak lengkap (hanya info dummy), kecuali jika kita hanya filter koleksi
        if (!data.rekomendasiWajah && !data.ukuranWajah && !data.koleksi) continue;

        let shapeMatch = true;
        let sizeMatch = true;
        let collectionMatch = true;

        // 1. Cek Kecocokan Bentuk Wajah
        if (selectedShape) {
            const recWajah = data.rekomendasiWajah ? data.rekomendasiWajah.toLowerCase() : "";
            const isUniversal = recWajah.includes('semua bentuk wajah');
            const isSpecific = recWajah.includes(selectedShape);
            
            if (!isUniversal && !isSpecific) {
                shapeMatch = false;
            }
        }

        // 2. Cek Kecocokan Ukuran Wajah
        if (selectedSize) {
            const ukWajah = data.ukuranWajah ? data.ukuranWajah.toLowerCase() : "";
            if (!ukWajah.includes(selectedSize)) {
                sizeMatch = false;
            }
        }

        // 3. Cek Kecocokan Koleksi (Baru)
        if (selectedCollection) {
            if (data.koleksi !== selectedCollection) {
                collectionMatch = false;
            }
        }

        if (shapeMatch && sizeMatch && collectionMatch) {
            matches.push(key);
        }
    }

    // Tampilkan Hasil
    if (matches.length > 0) {
        // Highlight sel di denah
        cells.forEach(cell => {
            const names = cell.dataset.names?.split(',') || [];
            if (names.some(name => matches.includes(name.trim()))) {
                cell.classList.add('highlighted');
            }
        });

        // Tampilkan list hasil text di bawah search bar
        searchResults.classList.remove('hidden');
        resultCount.textContent = `🎯 Rekomendasi: ${matches.length} Frame Cocok`;
        
        const listHtml = matches.map(name => 
            `<span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-1 mb-1 border border-indigo-200">${name}</span>`
        ).join('');
        
        resultList.innerHTML = `<div class="flex flex-wrap">${listHtml}</div>`;
        
    } else {
        searchResults.classList.remove('hidden');
        resultCount.textContent = "❌ Tidak ditemukan";
        resultList.innerHTML = "<p class='text-sm text-gray-600'>Tidak ada frame yang pas dengan kombinasi filter ini.</p>";
    }
});

// Tambahkan logika untuk menutup panel detail saat reset
resetFilterBtn.addEventListener('click', () => {
    filterShape.value = "";
    filterSize.value = "";
    filterCollection.value = ""; // Reset filter koleksi
    searchInput.value = ""; 
    
    cells.forEach(c => {
        c.classList.remove('highlighted');
        c.classList.remove('selected'); 
    });
    
    searchResults.classList.add('hidden');
    selectedInfo.classList.add('hidden'); 
    detailsContainer.innerHTML = ''; 
});