document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("loadButton");
    const iframe = document.getElementById("webFrame");

    button.addEventListener("click", function() {
        const urlInput = document.getElementById("urlInput").value;
        
        if (urlInput) {
            iframe.src = urlInput;  
        } else {
            alert("Пожалуйста, введите URL.");
        }
    });

    const links = document.querySelectorAll(".sidebar a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            document.getElementById("urlInput").value = link.href;

            iframe.src = link.href;
        });
    });
});
