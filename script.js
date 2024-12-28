// Fungsi untuk Membuat Safelink
document.getElementById('safelinkForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const originalUrl = document.getElementById('originalUrl').value;
    const baseUrl = "https://link.unduhyuk.my.id/interstitial.html?url="; // Halaman interstitial
    const encodedUrl = encodeURIComponent(originalUrl);

    const safeLink = baseUrl + encodedUrl;

    // Tampilkan hasil URL yang dihasilkan
    document.getElementById('safeLink').value = safeLink;
    document.getElementById('result').style.display = 'block';
});

// Fungsi untuk Menyalin URL
document.getElementById('copyButton').addEventListener('click', function() {
    const safeLinkInput = document.getElementById('safeLink');
    safeLinkInput.select();
    safeLinkInput.setSelectionRange(0, 99999); // Untuk perangkat mobile
    navigator.clipboard.writeText(safeLinkInput.value).then(() => {
        // Tampilkan pesan berhasil disalin
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'block';

        // Sembunyikan pesan setelah 2 detik
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    });
});
