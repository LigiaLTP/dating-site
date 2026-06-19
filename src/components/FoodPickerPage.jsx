import { useState } from "react";

const foodOptions = [
  {
    name: "Pizza",
    emoji: "🍕",
  },
  {
    name: "Sushi",
    emoji: "🍣",
  },
  {
    name: "Burgers",
    emoji: "🍔",
  },
  {
    name: "Pasta",
    emoji: "🍝",
  },
  {
    name: "Tacos",
    emoji: "🌮",
  },
  {
    name: "Ramen",
    emoji: "🍜",
  },
];

function FoodPickerPage({ onFoodSelected }) {
  const [selectedFood, setSelectedFood] = useState("");

  function handleFoodClick(foodName) {
    setSelectedFood(foodName);

    setTimeout(() => {
      onFoodSelected(foodName);
    }, 450);
  }

  return (
    <section className="food-page">
      <div className="food-card">
        <h1 className="food-title">What are we feeling? 🍽️✨</h1>

        <p className="food-subtitle">pick your vibe</p>

        <div className="food-grid">
          {foodOptions.map((food) => {
            const isSelected = selectedFood === food.name;

            return (
              <button
                key={food.name}
                type="button"
                className={isSelected ? "food-option selected-food" : "food-option"}
                onClick={() => handleFoodClick(food.name)}
              >
                <span className="food-emoji">{food.emoji}</span>
                <span className="food-name">{food.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FoodPickerPage;