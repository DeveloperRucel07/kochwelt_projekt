let rezeptBanner = document.getElementById("rezept_banner");
let instructionen = document.getElementById("instructionen");
let zeitZubereitung = document.getElementById("zeit_zubereitung");

let portion = 1;
let recipes = [
  {
    name: "Hähnchen-Döner",
    image: "./img/haehnchen-doener.webp",
    ingredients: {
      Hähnchenbrust: { quantity: 150, unit: "g" },
      Paprikapulver: { quantity: 1, unit: "EL" },
      Salz: { quantity: "nach Geschmack", unit: "" },
      Pfeffer: { quantity: "nach Geschmack", unit: "" },
      Paprikaschote: { quantity: 1, unit: "Stück" },
      Tomaten: { quantity: 2, unit: "Stück" },
      Gurke: { quantity: 1, unit: "Stück" },
      Zucker: { quantity: "nach Geschmack", unit: "" },
      Zitronensaft: { quantity: 10, unit: "ml" },
      Dill: { quantity: "nach Geschmack", unit: "" },
      Petersilie: { quantity: "nach Geschmack", unit: "" },
      Knoblauch: { quantity: 1, unit: "Zehe" },
      Chilischote: { quantity: 1, unit: "Stück" },
      Joghurt: { quantity: 1, unit: "EL" },
    },
    time: 15,
    difficulty: "simple",
    date: "20.03.2025",
    kalorie: 600,
    instruction:  [
      "Hähnchenbrust in Streifen schneiden und mit Paprikapulver, Salz und Pfeffer marinieren.",
      "Paprika, Tomaten und Gurke klein schneiden.",
      "Joghurt mit Zitronensaft, Knoblauch, Dill, Petersilie und Zucker zu einer Soße verrühren.",
      "Hähnchenstreifen in einer Pfanne anbraten, bis sie goldbraun sind.",
      "Dönerbrot aufschneiden, Soße auftragen, Fleisch und Gemüse einfüllen, mit Kräutern garnieren."
    ],
  },
  {
    name: "Falafel-Wrap",
    image: "./img/party-falafel-wraps.webp",
    ingredients: {
      Kichererbsen: { quantity: 200, unit: "g" },
      Zwiebel: { quantity: 1, unit: "Stück" },
      Knoblauch: { quantity: 2, unit: "Zehen" },
      Petersilie: { quantity: "1 Handvoll", unit: "" },
      Koriander: { quantity: "1 Handvoll", unit: "" },
      Kreuzkümmel: { quantity: 1, unit: "TL" },
      Salz: { quantity: "nach Geschmack", unit: "" },
      Pfeffer: { quantity: "nach Geschmack", unit: "" },
      Mehl: { quantity: 2, unit: "EL" },
      Backpulver: { quantity: 0.5, unit: "TL" },
      Joghurt: { quantity: 2, unit: "EL" },
      Zitronensaft: { quantity: 10, unit: "ml" },
      Tomate: { quantity: 1, unit: "Stück" },
      Gurke: { quantity: 0.5, unit: "Stück" },
      Fladenbrot: { quantity: 1, unit: "Stück" },
    },
    time: 15,
    difficulty: "simple",
    date: "03.06.2025",
    kalorie: 450,
    instruction:  [
      "Kichererbsen mit Zwiebel, Knoblauch, Kräutern, Gewürzen, Mehl und Backpulver zu einer dicken Masse pürieren.",
      "Kleine Bällchen formen und in heißem Öl goldbraun braten oder frittieren.",
      "Joghurt mit Zitronensaft, Knoblauch und Kräutern zu einer Soße verrühren.",
      "Tomate und Gurke in Scheiben schneiden.",
      "Fladenbrot mit Soße bestreichen, Falafel und Gemüse einrollen und servieren."
    ],
  },
  {
    name: "Lahmacun",
    image: "./img/lahmacun-selber-machen.webp",
    ingredients: {
      Rinderhackfleisch: { quantity: 200, unit: "g" },
      Zwiebel: { quantity: 1, unit: "Stück" },
      Knoblauch: { quantity: 1, unit: "Zehe" },
      Tomatenmark: { quantity: 1, unit: "EL" },
      Paprikamark: { quantity: 1, unit: "EL" },
      Tomate: { quantity: 1, unit: "Stück" },
      Petersilie: { quantity: "1 Handvoll", unit: "" },
      Paprikapulver: { quantity: 1, unit: "TL" },
      Kreuzkümmel: { quantity: 0.5, unit: "TL" },
      Salz: { quantity: "nach Geschmack", unit: "" },
      Pfeffer: { quantity: "nach Geschmack", unit: "" },
      Fladenbrot: { quantity: 1, unit: "Stück" },
      Zitronenspalten: { quantity: 2, unit: "Stück" },
      Salat: { quantity: "nach Belieben", unit: "" },
    },
    time: 15,
    difficulty: "simple",
    date: "20.05.2025",
    kalorie: 500,
    instruction: [
      "Zwiebel, Knoblauch, Tomate und Petersilie fein hacken oder mixen.",
      "Mit Hackfleisch, Tomatenmark, Paprikamark und Gewürzen gut vermengen.",
      "Die Masse gleichmäßig auf dem Fladenbrot verteilen.",
      "Im Ofen bei 220°C ca. 10–15 Minuten backen, bis alles gut gegart ist.",
      "Mit Zitronensaft, Salat und ggf. Soße belegen, einrollen oder flach servieren."
    ],
  },
];



document.addEventListener("DOMContentLoaded", function () {
    let randomIndex = Math.floor(Math.random() * recipes.length);
    let randomRecipe = recipes[randomIndex];
    let recipeName = randomRecipe.name;

    let rezeptBannerHtml = `
    <h3 class="title3" id="title">${randomRecipe.name}</h3>
    <img src="${randomRecipe.image}" alt="${randomRecipe.name} image"/>
    <p class="icons_fa">
        <span><i class="fa-regular fa-clock"></i>${randomRecipe.time}min</span>
        <span><i class="fa-solid fa-brain"></i></i>${randomRecipe.difficulty}</span>
        <span><i class="fa-solid fa-calendar"></i>${randomRecipe.date}</span>
        <span><i class="fa-solid fa-chart-column"></i>${randomRecipe.kalorie}kcal</span>
    </p>
    `;

    let zeitZubereitungHtml = `
        <span><i class="fa-regular fa-clock"></i>ca. ${randomRecipe.time} minuten</span>
        <span id="gesamtzeit"><i class="fa-regular fa-clock"></i>gesamtzeit ca.${randomRecipe.time}  minuten</span>
    `;
    let instructions = `<ol>
            ${randomRecipe.instruction.map(step => `<li>${step}</li>`).join('')}
            </ol>`;


    rezeptBanner.innerHTML = rezeptBannerHtml;
    zeitZubereitung.innerHTML = zeitZubereitungHtml;
    instructionen.innerHTML = instructions;

    let tableBody = document.getElementById("ingredient_table");

    function updateIngredients(recipeName, portion) {
        tableBody.innerHTML = "";
        const recipe = recipes.find(r => r.name === recipeName);
        if (!recipe) return;

        const ingredients = recipe.ingredients;

        for (const [ingredientName, { quantity, unit }] of Object.entries(ingredients)) {
        if (!portion) {
            const row = document.createElement("tr");
            row.innerHTML = `<td><span>${quantity} ${unit}</span> ${ingredientName}</td>`;
            tableBody.appendChild(row);
        } else {
            let adjustedQuantity =typeof quantity === "number" ? quantity * portion : quantity;
            let gesammtzeit = document.getElementById('gesamtzeit');
            const row = document.createElement("tr");
            row.innerHTML = `<td><span>${adjustedQuantity} ${unit}</span> ${ingredientName}</td>`;

            gesammtzeit.innerHTML = `<i class="fa-regular fa-clock"></i>gesamtzeit ca. ${randomRecipe.time* portion}  minuten`;
            tableBody.appendChild(row);
        }
        }
    }

    const calculate = document.getElementById("portion_calculateBtn");
    calculate.addEventListener("click", function () {
        let number_portion = document.getElementById("portion_number").value;
        portion = parseInt(number_portion);
        updateIngredients(recipeName, portion);
    });

    updateIngredients(recipeName, portion);

});
