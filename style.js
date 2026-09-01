const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
    modal.classList.remove("hidden");
    modalImg.src = src;
}

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});


function Menu(e) {
    let list = document.querySelector("ul");

    if (window.innerWidth < 640) {

        if (e.name === "menu") {

            e.name = "close";

            list.classList.add(
                "top-[80px]",
                "opacity-100"
            );

            list.classList.remove(
                "pointer-events-none"
            );

        } else {

            e.name = "menu";

            list.classList.remove(
                "top-[80px]",
                "opacity-100"
            );

            list.classList.add(
                "pointer-events-none"
            );
        }
    }
}
