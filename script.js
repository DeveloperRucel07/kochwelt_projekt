let headerTag = `
    <header>
      <div class="header">
        <img src="./img/logo.png" alt="Logo Kochwelt" />
        <nav>
          <a href="#">Start</a>
          <a href="#menu_tag" class="active_item">Rezept des Tages</a>
          <a href="#">Kontakt</a>
          <a href="#">Impressum</a>
        </nav>
      </div>
    </header>
`;

let footerTag = `
    <footer>
      <div class="footer">
        <img src="./img/logo.png" alt="Logo" />
        <div class="social_media">
          <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.tiktok.com" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://www.discord.com" target="_blank"><i class="fa-brands fa-discord"></i></a>
        </div>
      </div>
    </footer>
`;




let mainTag = `
    <main class="main_rezept">
      <div class="banner">
        <h3 class="title3">Hähnchen-Döner</h3>
        <img src="./img/haehnchen-doener.webp" alt="haehnchen-doener" />
        <p>
          <span><i class="fa-regular fa-clock"></i>15min</span>
          <span><i class="fa-solid fa-signal"></i>simple</span>
          <span><i class="fa-solid fa-calendar"></i>31.05.2025</span>
          <span><i class="fa-solid fa-chart-column"></i>393kcal</span>
        </p>
      </div>
      <div class="form">
        Zutaten für
        <input
          type="number"
          name="portion"
          id="portion_number"
          value="1"
          min="1"
        />
        <button>Portionen</button>
      </div>
      <table>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td><span>1</span> Alfreds Futterkiste</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
        </tr>
        <tr>
          <td>Island Trading</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
        </tr>
      </table>

        <div class="zubereitung">
            <h3 class="title3">Zubereitung</h3>
            <p>
                <span><i class="fa-regular fa-clock"></i>ca. 15 minuten</span>
                <span><i class="fa-regular fa-clock"></i>gesamtzeit ca. 15 minuten</span>
            </p>
            <p class="zutate">
                Die Hähnchenbrust in Würfel schneiden, mit 1 EL Paprikapulver bestreuen, mit Salz und Pfeffer würzen und in einer Pfanne braten. Die Paprikaschote würfeln, in eine separate Pfanne geben und ebenfalls braten.
                Die Tomaten entkernen und in Streifen schneiden. Die Tomaten- und Paprikastreifen zum Hähnchen geben und warmhalten (Achtung, die Tomaten sollen knackig bleiben, nur leicht drin aufwärmen!).
                Die Gurke würfeln. Mit etwas Öl, Salz, Pfeffer, Zucker, etwas Zitronensaft, Dill und Petersilie vermengen.
                Den Knoblauch pressen, die Chilischote sehr fein schneiden. Beides in den Joghurt geben. Mit Salz, Pfeffer und einem Spritzer Zitronensaft abschmecken.
                Das Fladenbrot vierteln und im Backofen aufbacken. Das Fladenbrot mit dem Dip, dem Gurkensalat und der Hähnchenmischung füllen.
            </p>
        </div>

        <div class="ersteller">
            <h4>Rezept erstellt von</h4>
            <div class="profile">
                <img src="./img/profile.png" alt="profile">
                <p>Rucel Dev</p>
            </div>
        </div>
    </main>

`;

let body = document.getElementById('body');
function render(){
    return body.innerHTML = headerTag + mainTag + footerTag;
}

let rezept_1Btn = document.getElementById('rezept_1');

rezept_1Btn.addEventListener('click', function(){
    window.open('./rezept_1.html');
}
);

