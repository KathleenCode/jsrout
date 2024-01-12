document.addEventListener("DOMContentLoaded", function(e){
   
    const list = document.querySelector("ul");
    const panels = document.querySelectorAll(".panel");

    list.addEventListener("click", function(e) {

    if(e.target.tagName == "LI") {
        
        const targetPanel = document.querySelector(e.target.dataset.list);
       
        Array.from(panels).forEach((panel) => {
            if(panel == targetPanel) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        })
    }
})
});

