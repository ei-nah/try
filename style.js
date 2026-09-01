const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
    modal.classList.remove("hidden");
    modalImg.src = src;
}

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});



function Menu(e){
    let list = document.querySelector('ul');
        if (window.innerWidth < 640) {
            if(e.name === 'menu'){
                e.name = "close";
                list.classList.add('top-[80px]', 'opacity-100');
                list.classList.remove('pointer-events-none');
        } else {
            e.name = "menu";
            list.classList.remove('top-[80px]', 'opacity-100');
            list.classList.add('pointer-events-none');
        }
    }
}

window.chtlConfig = {
    chatbotId: "1982572524"};

const chatlingScript = document.createElement("script");

chatlingScript.async = true;
chatlingScript.id = "chtl-script";
chatlingScript.type = "text/javascript";
chatlingScript.src = "https://chatling.ai/js/embed.js";
chatlingScript.setAttribute("data-id", "1982572524");

document.body.appendChild(chatlingScript);
