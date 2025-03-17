document.addEventListener("DOMContentLoaded", function () {
    const text = "🚀 AI Enthusiast | Startup Founder | TechAddict";
    const typingElement = document.getElementById("typing-text");
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typeWriter, 50);
        } else {
            document.querySelector(".cursor").classList.add("blink");
        }
    }

    typeWriter();
});
