/* ==========================================================================
   COUNTDOWN TIMER SYSTEM (ระบบนับถอยหลังวันงาน)
   ========================================================================== */
const weddingDate = new Date("Nov 7, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // ป้องกันกรณีที่ถึงวันงานแล้วค่าติดลบ
  if (distance < 0) {
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

/* ==========================================================================
   SCROLL REVEAL ANIMATION (ระบบตรวจจับการสกรอลล์เพื่อเฟดเนื้อหาขึ้น)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  // เปลี่ยนมาจับคลาส .fade-up ให้ทำงานร่วมกับ CSS ที่เราคลีนไว้ก่อนหน้านี้ได้อย่างแม่นยำ
  const revealElements = document.querySelectorAll(".fade-up, .reveal-on-scroll");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // เมื่อเนื้อหาโผล่มาเห็นในจอ 15% ให้เริ่มแสดงเอฟเฟกต์ทันที
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // แอดคลาส active สำหรับ .fade-up และคลาส visible สำหรับ .reveal-on-scroll
        if (entry.target.classList.contains("fade-up")) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.add("visible");
        }
        scrollObserver.unobserve(entry.target); // ทำงานครั้งเดียวแล้วปล่อยผ่านเลย
      }
    });
    }, observerOptions);

  revealElements.forEach(element => {
    scrollObserver.observe(element);
  });
});

/* ==========================================================================
   FALLING ANIMATION (ระบบสุ่มหิมะ + ดอกไม้ + น้องเป็ดนำโชค ร่วงละมุนๆ)
   ========================================================================== */
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  
  // เพิ่ม 🐥 และ 🐣 เข้าไปในระบบสุ่มตามคอนเซปต์ธีมเป็ดของคุณเต้กับคุณแนนเรียบร้อยครับ!
  const elements = ["❄️", "🌨️", "🌷", "🤍", "🐥", "🐣"]; 
  flower.innerHTML = elements[Math.floor(Math.random() * elements.length)]; 
  
  // สุ่มตำแหน่ง ความเร็ว และขนาด
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (6 + Math.random() * 6) + "s"; 
  flower.style.fontSize = (14 + Math.random() * 14) + "px"; 
  
  document.body.appendChild(flower);
  
  // ถึงพื้นแล้วลบทิ้งออกจากหน่วยความจำ (Memory)
  setTimeout(() => {
    flower.remove();
  }, 12000);
}

// ปล่อยน้องเป็ดและหิมะร่วงลงมาเรื่อยๆ ทุก 700 มิลลิวินาที
setInterval(createFlower, 700);
