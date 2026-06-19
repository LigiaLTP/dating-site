import { useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import YesSurprise from "./components/YesSurprise.jsx";
import DatePickerPage from "./components/DatePickerPage.jsx";
import FoodPickerPage from "./components/FoodPickerPage.jsx";
import FinalPage from "./components/FinalPage.jsx";
import FloatingDecorations from "./components/FloatingDecorations.jsx";

function App() {
  const [page, setPage] = useState("landing");

  const [dateDetails, setDateDetails] = useState({
    date: "",
    time: "",
  });

  const [selectedFood, setSelectedFood] = useState("");

  function handleDateConfirmed(details) {
    setDateDetails(details);
    setPage("food");
  }

  function handleFoodSelected(food) {
    setSelectedFood(food);
    setPage("final");
  }

  return (
    <main className="app">
      <FloatingDecorations />

      {page === "landing" && (
        <LandingPage onYes={() => setPage("surprise")} />
      )}

      {page === "surprise" && (
        <YesSurprise onOkay={() => setPage("calendar")} />
      )}

      {page === "calendar" && (
        <DatePickerPage onDateConfirmed={handleDateConfirmed} />
      )}

      {page === "food" && (
        <FoodPickerPage onFoodSelected={handleFoodSelected} />
      )}

      {page === "final" && (
        <FinalPage
          selectedDate={dateDetails.date}
          selectedTime={dateDetails.time}
          selectedFood={selectedFood}
        />
      )}
    </main>
  );
}

export default App;