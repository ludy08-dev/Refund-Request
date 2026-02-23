document.getElementById("receiptInput").addEventListener("change", function () {
    const preview = document.getElementById("imagePreview");
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.style.backgroundImage = 'url(${e.target.result})';
            preview.style.backgroundSize = "cover";
            preview.style.backgroundPosition = "center";
            preview.textContent = "";
        };

        reader.readAsDataURL(file);
    }
});