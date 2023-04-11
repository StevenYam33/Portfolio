const headerLinkText = document.querySelectorAll(".header-link");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

headerLinkText.forEach((text) => {
    text.addEventListener("mouseover", random => {
        let iterations = 0;

        const interval = setInterval(() => {
            random.target.innerText = random.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return random.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

            if(iterations >= random.target.dataset.value){
                clearInterval(interval);
            }
            iterations += 1/2;
        }, 50)
    })

})

