// Only run if the elements exist (so this file can be reused on other pages)
const statusText = document.getElementById("statusText");
const proceedBtn = document.getElementById("proceedBtn");

// Simulate approval after 5 seconds
if (statusText && proceedBtn) {
    setTimeout(() => {
        statusText.textContent = "Approved";
        proceedBtn.disabled = false;
        proceedBtn.classList.add("enabled");
    }, 5000);

    proceedBtn.addEventListener("click", () => {
        if (!proceedBtn.disabled) {
            // Replace with actual redirect to next page
            alert("Proceeding to the next step…");
        }
    });
}