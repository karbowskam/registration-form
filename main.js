const button = document.querySelector(".agreement--submit");

const myClick = () => {
  const emptyParagraph = document.querySelector(".agreement__button--js");
  emptyParagraph.innerHTML = `Twoje dane zostały zapisane i wysłane. Dziękujemy za rejestrację. Teraz możesz się <a class="login--js" href="log-in.html"
    >zalogować</a>`;
  emptyParagraph.classList.toggle("klasa-z-js");
};

button.addEventListener("click", myClick);
