let body = document.getElementById('body');

let headerTag = `
      <div class="header">
        <a href="./index.html"><img src="./img/logo.png" alt="Logo Kochwelt" /></a>
        <nav>
          <a href="./index.html">Start</a>
          <a href="#menu_tag" class="active_item">Rezept des Tages</a>
          <a href="./kontakt.html">Kontakt</a>
          <a href="#">Impressum</a>
          <button class="burger" id="burger_open"><i class="fa-solid fa-bars"></i></button>
          <button class="burger" id="burger_close"><i class="fa-solid fa-bars"></i></button>
        </nav>
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




function renderHeader(){
  document.getElementById("header").innerHTML = headerTag;
}

function renderFooter(){
  document.getElementById("footer").innerHTML = footerTag;
}

let portion = 1;
let recipes = {
    "Hähnchen-Döner": {
        "Hähnchenbrust": { quantity: 150, unit: "g" },
        "Paprikapulver": { quantity: 1, unit: "EL" },
        "Salz": { quantity: "nach Geschmack", unit: "" },
        "Pfeffer": { quantity: "nach Geschmack", unit: "" },
        "Paprikaschote": { quantity: 1, unit: "Stück" },
        "Tomaten": { quantity: 2, unit: "Stück" },
        "Gurke": { quantity: 1, unit: "Stück" },
        "Zucker": { quantity: "nach Geschmack", unit: "" },
        "Zitronensaft": { quantity: 10, unit: "ml" },
        "Dill": { quantity: "nach Geschmack", unit: "" },
        "Petersilie": { quantity: "nach Geschmack", unit: "" },
        "Knoblauch": { quantity: 1, unit: "Zehe" },
        "Chilischote": { quantity: 1, unit: "Stück" },
        "Joghurt": { quantity: 1, unit: "EL" }
    },

};

let selectedRecipe = "Hähnchen-Döner"; 

document.addEventListener("DOMContentLoaded", function() {
    renderHeader();
    renderFooter();

    let tableBody = document.getElementById("ingredient_table");

    function updateIngredients(recipeName, portion) {
        tableBody.innerHTML = ""; 
        let ingredients = recipes[recipeName];

        for (const [ingredient, { quantity, unit }] of Object.entries(ingredients)) {
          if(!portion){
            const row = document.createElement("tr");
            row.innerHTML = `<td><span>${quantity} ${unit}</span> ${ingredient}</td>`;
            tableBody.appendChild(row);
          }else{
            let adjustedQuantity = (typeof quantity === "number") ? quantity * portion : quantity;
            const row = document.createElement("tr");
            row.innerHTML = `<td><span>${adjustedQuantity} ${unit}</span> ${ingredient}</td>`;
            tableBody.appendChild(row);
          }
            
        }
    }

    const calculate = document.getElementById("portion_calculateBtn");
    calculate.addEventListener('click', function() {
          let number_portion = document.getElementById('portion_number').value;
          portion = parseInt(number_portion);
          updateIngredients(selectedRecipe, portion);
      });

    updateIngredients(selectedRecipe, portion); 
});



let rezept_1Btn = document.getElementById('rezept_1');

rezept_1Btn.addEventListener('click', function(){
    window.open('./rezept_1.html');
}
);

