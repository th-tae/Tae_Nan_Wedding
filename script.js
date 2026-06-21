const weddingDate = new Date("Nov 7, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
// SYSTEM: SCROLL REVEAL ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // เมื่อเนื้อหาโผล่มาเห็นในจอ 15% ให้เริ่มแสดงเอฟเฟกต์ทันที
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // ทำงานครั้งเดียวแล้วปล่อยผ่านเลย จะได้ไม่ลอยไปลอยมาซ้ำๆ
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    scrollObserver.observe(element);
  });
});
/* ==========================================================================
   SNOW & DUCK FALLING ANIMATION (ระบบสุ่มหิมะ + น้องเป็ดนำโชค ร่วงพร้อมกัน)
   ========================================================================== */
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  
  // รวมพลัง: เกล็ดหิมะ ❄️ 🌨️ และใส่ "ตุ๊กตาลูกเป็ด 🐥" ของคุณเต้กับแฟนเข้าไปด้วย!
  // (ระบบจะสุ่มหิมะเป็นหลัก และมีน้องเป็ดโผล่มาแจมเรื่อยๆ แบบน่ารักน่าเอ็นดูครับ)
  const elements = ["❄️", "🌨️", "🌷", "🌨️", "🤍"]; 
  flower.innerHTML = elements[Math.floor(Math.random() * elements.length)]; 
  
  // สุ่มตำแหน่ง ความเร็ว และขนาด
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (6 + Math.random() * 6) + "s"; 
  flower.style.fontSize = (14 + Math.random() * 14) + "px"; // สุ่มขนาดน้องเป็ดและหิมะให้มีตัวเล็กตัวใหญ่สลับกัน
  
  document.body.appendChild(flower);
  
  // ถึงพื้นแล้วลบทิ้ง
  setTimeout(() => flower.remove(), 12000);
}

// ปล่อยน้องเป็ดและหิมะร่วงลงมาเรื่อยๆ ทุก 700 มิลลิวินาที
setInterval(createFlower, 700);