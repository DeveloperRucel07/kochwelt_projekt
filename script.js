let body = document.getElementById("body");

let headerTag = `
      <div class="header">
        <a href="./index.html"><img src="./img/logo.png" alt="Logo Kochwelt" /></a>
        <nav class="burger_menu" id="burger_menu">
          <a href="./index.html" class="menu_item active_item">Start</a>
          <a href="./rezept.html" class="menu_item">Rezept des Tages</a>
          <a href="./kontakt.html" class="menu_item">Kontakt</a>
          <a href="./impressum.html" class="menu_item">Impressum</a>
        </nav>
          <button class="burger" id="burger_open"><i class="fa-solid fa-bars"></i></button>
          <button class="burger" id="burger_close"><i class="fa-solid fa-x"></i></button>
      </div>
`;

let footerTag = `

      <div class="footer">
        <img src="./img/logo.png" alt="Logo" />
        <div class="social_media">
          <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.tiktok.com" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://www.discord.com" target="_blank"><i class="fa-brands fa-discord"></i></a>
        </div>
      </div>
`;

function renderHeader() {
  document.getElementById("header").innerHTML = headerTag;
}

function renderFooter() {
  document.getElementById("footer").innerHTML = footerTag;
}


let randomrecipes = [
  {
    name: "Hähnchen-Döner",
    image: "./img/haehnchen-doener.webp",
  },
  {
    name: "Falafel-Wrap",
    image: "./img/party-falafel-wraps.webp",
  },
  {
    name: "Lahmacun",
    image: "./img/lahmacun-selber-machen.webp",
  }

];


document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  
  renderFooter();
  let rezeptTages = document.getElementById('rezept_tages');
  let randomIndex = Math.floor(Math.random() * randomrecipes.length);
  let randomRecipe = randomrecipes[randomIndex];
  rezeptTages.innerHTML = `
    <section class="rezept">
            <img src="${randomRecipe.image}" alt="${randomRecipe.name} image" />
            <div class="rezept-text">
              <div class="teil_1">
                  <h3 class="title3">${randomRecipe.name}</h3>
                  <p>
                    Schmackhafte ${randomRecipe.name} können auch zu Hause sehr einfach gebacken
                    werden. Mit circa 30 minuten Aufwand kannst du ein wundervolles
                    Frühstück zaubern.
                  </p>
              </div>
              
              <a href="./rezept.html" class="rezept_link">Rezept öffnen</a>
            </div>
    </section>

  `;

  let burger_open = document.getElementById("burger_open");
  let burger_close = document.getElementById("burger_close");
  let nav = document.getElementById('burger_menu');

  burger_open.addEventListener("click", function () {
    burger_open.style.display = "none";
    burger_close.style.display = "block";
    nav.classList.toggle('nav_active');
    
  });

  burger_close.addEventListener("click", function () {
    burger_close.style.display = "none";
    burger_open.style.display = "block";
    nav.classList.toggle('nav_active');
  });
  
  let menuItems = document.querySelectorAll(".menu_item");
  menuItems.forEach(item => {
      item.addEventListener("click", () => {
        // menuItems.forEach(element => element.classList.remove("active_item"));
        console.log(item.value);
        item.classList.add("active_item");
      });
  });

});
