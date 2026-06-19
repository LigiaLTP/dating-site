import { useMemo, useState } from "react";

const timeOptions = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

function getTodayDateValue() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function DatePickerPage({ onDateConfirmed }) {
  const todayDateValue = getTodayDateValue();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("12:30 PM");

  const formattedDate = useMemo(() => {
    if (!selectedDate) return "";

    const date = new Date(`${selectedDate}T12:00:00`);

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, [selectedDate]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedDate || !selectedTime) {
      return;
    }

    onDateConfirmed({
      date: formattedDate,
      time: selectedTime,
    });
  }

  return (
    <section className="calendar-page-simple">
      <div className="date-card-simple">
        <div className="date-card-icon-row">
          <span className="date-card-icon">📅</span>
          <span className="date-card-paws">🐾</span>
        </div>

        <h1 className="date-card-title">So... when are you free?</h1>

        <form className="date-card-form" onSubmit={handleSubmit}>
          <label className="date-card-label" htmlFor="date-input">
            Pick a Day 📅
          </label>

          <input
            id="date-input"
            className="date-card-input"
            type="date"
            min={todayDateValue}
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />

          <label className="date-card-label" htmlFor="time-input">
            What Time? ⏰
          </label>

          <select
            id="time-input"
            className="date-card-select"
            value={selectedTime}
            onChange={(event) => setSelectedTime(event.target.value)}
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          <button className="date-card-button" type="submit">
            set the date! ♥
          </button>
        </form>
      </div>
    </section>
  );
}

export default DatePickerPage;