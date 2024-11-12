// Fungsi untuk membuka kado dan menampilkan foto
function openGift() {
    const lid = document.querySelector('.lid');
    const photoContainer = document.getElementById("photo-container");

    // Animasi membuka tutup kado menggunakan GSAP
    gsap.to(lid, { rotationX: -90, duration: 1, ease: "back.inOut(1.7)" });

    // Tampilkan foto setelah tutup terbuka
    setTimeout(() => {
        photoContainer.classList.remove("hidden");
        displayPhotos();
    }, 1000);

    // Arahkan ke isi.html setelah animasi selesai
    setTimeout(() => {
        window.location.href = "isi.html";
    }, 4000); // Sesuaikan waktu ini dengan durasi animasi
}

// Fungsi untuk menampilkan foto dari dalam kado
function displayPhotos() {
    const photoContainer = document.getElementById("photo-container");

    const photoUrls = [
        "nanad1.jpg",
        "nanad2.jpg",
        "nanad3.jpg",
        "nanad4.jpg",
        "nanad5.jpg",
        "nanad6.jpg",
        "nanad7.jpg",
        "nanad8.jpg",
        "nanad9.jpg",
        "nanad10.jpg"
    ];

    // Tambahkan foto kecil satu per satu dengan animasi
    photoUrls.forEach((url, i) => {
        const photo = document.createElement("div");
        photo.classList.add("photo");
        const img = document.createElement("img");
        img.src = url;
        photo.appendChild(img);
        photoContainer.appendChild(photo);

        // Animasi munculnya foto dengan GSAP
        gsap.fromTo(photo, 
            { scale: 0, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 0.5, delay: i * 0.2, ease: "elastic.out(1, 0.3)" }
        );
    });
}

// Tampilkan teks awal, lalu munculkan kado
window.onload = function() {
    const giftBox = document.getElementById("gift-box");
    const introText = document.getElementById("intro-text");

    // Setelah animasi teks selesai, tampilkan kado
    setTimeout(() => {
        introText.style.display = "none";
        giftBox.classList.add("appear");
        openGift();
    }, 3000); // Sesuaikan waktu ini dengan durasi animasi teks
};
