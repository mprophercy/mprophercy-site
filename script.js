// Add glitch effect on hover for the "Enter the Prophecy" button
const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('mouseenter', () => {
    enterBtn.classList.add('glitch');
});

enterBtn.addEventListener('mouseleave', () => {
    enterBtn.classList.remove('glitch');
});

// Placeholder for future interactive features
console.log("₥PROPHECY website loaded - Welcome to the prophecy");

// Adding background stars animation (Optional)
function createStars() {
    const starsCount = 100;
    const heroSection = document.getElementById('hero');
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Set random size for each star
        const size = Math.random() * 4 + 2; // Between 2px and 6px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        
        heroSection.appendChild(star);
    }
}

createStars();

// Initialize particles.js in the #particles-container div
particlesJS("particles-container", {
    particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        }
    }
});


// Apply a theme based on time of day (night theme after 6pm and before 6am)
const hours = new Date().getHours();
document.body.classList.add(hours >= 18 || hours < 6 ? "night-theme" : "day-theme");

// Countdown Timer
function startCountdown(targetDate) {
    const countdown = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            countdown.innerHTML = "The Awakening Has Begun!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Apply flip animation on each change
        updateUnit("days", days);
        updateUnit("hours", hours);
        updateUnit("minutes", minutes);
        updateUnit("seconds", seconds);
    }

    function updateUnit(id, value) {
        const element = document.getElementById(id);
        if (element.textContent !== value.toString().padStart(2, "0")) {
            element.classList.add("flip");
            setTimeout(() => {
                element.textContent = value.toString().padStart(2, "0");
                element.classList.remove("flip");
            }, 300);
        }
    }

    const interval = setInterval(updateCountdown, 1000);
}

const launchDate = new Date("2024-12-31T00:00:00").getTime();
startCountdown(launchDate);

function revealMessage() {
    const message = document.getElementById("message");
    
    // Toggle the visibility of the message
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}


function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("visible");
        } else {
            reveal.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
