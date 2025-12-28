document.addEventListener("DOMContentLoaded", () => {
  const ratingCard = document.getElementById("ratingCard");
  const thanksCard = document.getElementById("thanksCard");
  const ratingButtons = document.getElementById("ratingButtons");
  const submitBtn = document.getElementById("submitBtn");
  const selectedText = document.getElementById("selectedText");

  let selectedRating = null;

  // 1) Click sur un chiffre
  ratingButtons.addEventListener("click", (e) => {
    const btn = e.target.closest(".number");
    if (!btn) return;

    // mémorise la note
    selectedRating = btn.textContent.trim();

    // reset visuel
    ratingButtons.querySelectorAll(".number").forEach((b) => {
      b.classList.remove("is-selected");
    });

    // applique le style au bouton cliqué
    btn.classList.add("is-selected");
  });

  // 2) Click Submit
  submitBtn.addEventListener("click", () => {
    if (!selectedRating) return; // option: afficher un message d’erreur

    selectedText.textContent = `You selected ${selectedRating} out of 5`;

    ratingCard.classList.add("is-hidden");
    thanksCard.classList.remove("is-hidden");
  });
});
