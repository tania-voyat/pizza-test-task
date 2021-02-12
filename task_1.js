const menu = {
  cap: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    sausage: 2,
    mashroom: 3,
    cheese: 1,
  },
  onions: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    meat: 1,
    cheese: 1,
  },
  king_one: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    mayo: 1,
    mashroom: 3,
    tomato: 2,
    cheese: 3,
    dill: 2,
    parsley: 2,
  },
  gavay: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    ananas: 1,
    cheese: 2,
  },
  tonno: {
    dough: 1,
    tomato_sauce: 1,
    tuna: 2,
    kappers: 1,
    cheese: 1,
  },
  vegeterian: {
    dough: 1,
    tomato_sauce: 1,
    tomato: 2,
    kappers: 1,
    cucumber: 2,
    onion: 2,
    cheese: 1,
  },
};

function getPizzaInfo(lastPizzas) {
  const popular = [];
  const ingredients = [];
  const allIngredients = [];

  const reducer = function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  };

  const pizzas = lastPizzas.reduce(reducer, {});

  // Sorting most popular pizzas //
  Object.keys(pizzas)
    .sort((a, b) => {
      return pizzas[b] - pizzas[a];
    })
    .map((el) => {
      if (popular.length < 5) {
        popular.push(el);
      }
    });

  // Looking for ingredients of most popular pizzas //
  Object.entries(menu).map((item) => {
    const ingredient = Object.keys(item[1]);
    if (popular.includes(item[0])) {
      allIngredients.push(...ingredient);
    }
  });

  const pizzasIngredients = allIngredients.reduce(reducer, {});

  // Sorting ingredients //
  Object.keys(pizzasIngredients)
    .sort((a, b) => {
      return pizzasIngredients[b] - pizzasIngredients[a];
    })
    .map((el) => {
      ingredients.push(el);
    });

  // Inserting result into HTML //
  document
    .querySelector("#popular")
    .insertAdjacentHTML("beforeend", `Popular: ${popular}`);
  document
    .querySelector("#ingredients")
    .insertAdjacentHTML("beforeend", `Ingredients: ${ingredients}`);
}

getPizzaInfo([
  "cap",
  "cap",
  "onions",
  "gavay",
  "cap",
  "tonno",
  "vegeterian",
  "king_one",
  "tonno",
  "gavay",
  "gavay",
  "vegeterian",
  "gavay",
  "gavay",
]);
