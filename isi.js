// Array Pertanyaan dan Pesan berdasarkan Jawaban
const pertanyaan = [
    "Apakah kamu mencintaiku?",
    "Apakah kamu ingin bersama selamanya?",
    "Apakah kamu percaya padaku?",
    "Apakah kamu siap menjalani kehidupan bersama?",
    "Apakah kamu akan selalu mendukungku?"
];

const pesanIya = [
    "Terima kasih sudah mencintai ku, ku harap cintamu takkan pernah hilang.",
    "Aku senang kita akan selalu bersama selamanya, itu adalah impian terbesarku.",
    "Cinta kita adalah yang paling kuat, kita akan melaluinya bersama.",
    "Aku siap bersama menjalani masa depan denganmu, bersama kita lebih kuat.",
    "Aku berjanji akan selalu mendukungmu, apapun yang terjadi."
];

const pesanTidak = [
    "Mungkin saat ini kamu belum mencintaiku, tapi aku tidak akan menyerah untuk membuatmu jatuh cinta padaku.",
    "Aku berharap suatu hari kamu akan mencintaiku dan kita bisa bersama selamanya.",
    "Aku percaya kita akan sampai di sana, waktu akan membuat kita lebih dekat.",
    "Meski tidak mudah, aku percaya kita akan bisa bersama dan melangkah maju.",
    "Aku akan selalu ada untukmu, dan aku berharap kamu bisa mendukungku."
];

// Array untuk menyimpan jawaban
let jawaban = [];
let currentPertanyaan = 0;

// Fungsi untuk menampilkan pertanyaan
function tampilkanPertanyaan() {
    document.getElementById("container-utama").style.display = "none"; // Menyembunyikan konten utama
    document.getElementById("pertanyaan-container").classList.remove("hidden"); // Menampilkan pertanyaan

    // Menampilkan pertanyaan pertama dengan animasi zoom in dan bounce
    const questionText = document.getElementById("question-text");
    questionText.textContent = pertanyaan[currentPertanyaan];
    questionText.classList.add("animate-zoomIn");

    // Menambahkan animasi love jatuh
    setInterval(() => {
        const loveHeart = document.createElement('div');
        loveHeart.classList.add('love-heart');
        loveHeart.textContent = '❤️';
        document.body.appendChild(loveHeart);
        // Randomize start position and animation speed
        loveHeart.style.left = Math.random() * 100 + 'vw';
        loveHeart.style.animationDuration = Math.random() * 3 + 4 + 's';
        setTimeout(() => {
            loveHeart.remove();
        }, 5000);
    }, 500); // Hati jatuh setiap 500ms
}

// Fungsi untuk menangani jawaban
function jawabPertanyaan(jawabanTertentu) {
    // Menyimpan jawaban
    jawaban.push(jawabanTertentu ? "Iya" : "Tidak");

    // Menyembunyikan pertanyaan dan menampilkan pertanyaan berikutnya dengan animasi
    currentPertanyaan++;

    if (currentPertanyaan < pertanyaan.length) {
        const questionText = document.getElementById("question-text");
        questionText.textContent = pertanyaan[currentPertanyaan];
        questionText.classList.remove("animate-zoomIn");
        questionText.classList.add("animate-zoomIn"); // Memulai animasi lagi untuk pertanyaan baru
    } else {
        // Setelah semua pertanyaan dijawab, sembunyikan pertanyaan dan tampilkan pop-up
        tampilkanPopUp();
    }
}

// Fungsi untuk menampilkan pop-up dengan jawaban
function tampilkanPopUp() {
    document.getElementById("pertanyaan-container").classList.add("hidden"); // Menyembunyikan pertanyaan
    const popupContainer = document.getElementById("popup-container");
    popupContainer.classList.remove("hidden");

    // Tampilkan pop-up berdasarkan jawaban
    jawaban.forEach((jawaban, index) => {
        const popupPesan = document.createElement("div");
        popupPesan.className = "pesan-popup";
        popupPesan.textContent = jawaban === "Iya" ? pesanIya[index] : pesanTidak[index];
        popupContainer.querySelector(".popup-inner").appendChild(popupPesan);

        setTimeout(() => {
            popupPesan.style.transform = "scale(1)";
            popupPesan.style.opacity = "1";
        }, index * 1000);
    });

    // Setelah pop-up selesai, tampilkan halaman akhir
    setTimeout(() => {
        popupContainer.classList.add("hidden");
        tampilkanHalamanAkhir();
    }, jawaban.length * 1000 + 1000);
}

// Fungsi untuk menampilkan halaman akhir romantis
function tampilkanHalamanAkhir() {
    document.getElementById("halaman-akhir").classList.remove("hidden");

    // Animasi untuk halaman akhir
    gsap.fromTo("#halaman-akhir h1", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
    gsap.fromTo("#halaman-akhir p", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });
}

// Animasi saat halaman `isi.html` dimuat
window.onload = function() {
    const pageContent = document.getElementById("page-content");
    pageContent.classList.remove("hidden");
    gsap.fromTo(pageContent, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );
};

