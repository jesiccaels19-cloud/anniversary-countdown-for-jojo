// Set target waktu: 24 Juni 2026 jam 10:00 AM
const targetDate = new Date("June 24, 2026 10:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    // Perhitungan waktu
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Tampilkan ke HTML dengan format 2 digit (misal: 05)
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    
    // Jika waktu sudah terlewati / sampai pada harinya
    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".timer-box").style.display = "none";
        document.querySelector(".title").innerText = "Happy Anniversary! 🥳🎉💕";
        document.querySelector(".footer-text").innerText = "Today is the day!";
    }
}, 1000);