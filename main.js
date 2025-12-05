        const themeBtn = document.getElementById("themeToggle");

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            themeBtn.textContent = 
                document.body.classList.contains("light-theme") 
                ? "Switch to Dark" 
                : "Switch to Light";
        });