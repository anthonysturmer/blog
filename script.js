const changeFontButton = document.getElementById("change-font-button");


const FONTS = {
  PRIMARY: "Pixelify Sans",
  SECONDARY: "Baloo 2",
};

let currentFont = localStorage.getItem("font-family") || FONTS.PRIMARY;


function applyFont(font) {
  document.body.style.fontFamily = `'${font}', sans-serif`;
  localStorage.setItem("font-family", font);
  currentFont = font;
}

applyFont(currentFont);

if (changeFontButton) {

  changeFontButton.addEventListener("click", () => {

    const newFont = currentFont === FONTS.PRIMARY ? FONTS.SECONDARY : FONTS.PRIMARY;

    applyFont(newFont);
    
  });
}