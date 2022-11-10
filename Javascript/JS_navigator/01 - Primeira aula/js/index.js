window.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        console.log("A tecla foi solta...");
        window.location.reload();
    }
});