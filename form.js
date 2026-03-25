let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let cards = document.querySelector(".cards");

form.addEventListener("submit", function (dets) {
        dets.preventDefault();

       
        if (
                inputs[0].value.trim() === "" ||
                inputs[1].value.trim() === "" ||
                inputs[2].value.trim() === "" ||
                inputs[3].value.trim() === ""
        ) {
                alert("Please fill all fields!");
                return;
        }
        cards.innerHTML = "";

        
        let card = document.createElement("div");
        card.classList.add("card");

        let profile = document.createElement("div");
        profile.classList.add("profile");
        card.appendChild(profile);

        let img = document.createElement("img");
        img.setAttribute("src", inputs[0].value);

       
        img.onerror = function () {
                img.src = "https://via.placeholder.com/60";
        };

        profile.appendChild(img);

        let h3 = document.createElement("h3");
        h3.textContent = inputs[1].value;

        let h5 = document.createElement("h5");
        h5.textContent = inputs[2].value;

        let p = document.createElement("p");
        p.textContent = inputs[3].value;

        card.appendChild(h3);
        card.appendChild(h5);
        card.appendChild(p);

      
        cards.appendChild(card);

       
        inputs.forEach(function (inp) {
                if (inp.type !== "submit") {
                        inp.value = "";
                }
        });
});