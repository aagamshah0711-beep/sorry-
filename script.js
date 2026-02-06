let step = 0;
const text = document.getElementById("mainText");

document.body.addEventListener("click", () => {
    text.classList.remove("show");

    setTimeout(() => {
        step++;

        if (step === 1) {
            text.innerHTML = 'sorry baba <span class="emoji">🙏</span>';
            text.classList.add("show");
        } 
        else if (step === 2) {
            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=fRh_vgS2dFE";
            }, 1000);
        }
    }, 400);
});
