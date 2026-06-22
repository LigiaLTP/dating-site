import { useEffect, useRef, useState } from "react";
import { saveDateRequest } from "../services/dateRequestService";

function FinalPage({ selectedDate, selectedTime, selectedFood }) {
  const hasSaved = useRef(false);
  const [saveStatus, setSaveStatus] = useState("saving");

  useEffect(() => {
    async function saveSelection() {
      if (hasSaved.current) return;

      hasSaved.current = true;

      try {
        await saveDateRequest({
          selectedDate,
          selectedTime,
          selectedFood,
        });

        setSaveStatus("saved");
      } catch (error) {
        console.error("Failed to save date request:", error);
        setSaveStatus("error");
      }
    }

    saveSelection();
  }, [selectedDate, selectedTime, selectedFood]);

  return (
    <section className="final-page">
      <div className="final-card">
        <h1 className="final-title">
          glad you didn&apos;t say no. be ready by {selectedTime}, I&apos;m
          coming to get you 🚗
        </h1>

        <p className="final-note">
          P.S. normal people text. I made a website, during lunch, for you.
          no big deal.
        </p>

        <div className="final-hearts">♥ ♥ ♥ ♥ ♥</div>

        <div className="final-summary">
          <p>
            Date: <strong>{selectedDate}</strong>
          </p>

           <p>
            Time: <strong>{selectedTime}</strong>
          </p>

          <p>
            Food mood: <strong>{selectedFood}</strong>
          </p>

          {saveStatus === "saving" && <p>Saving your answer...</p>}
          {saveStatus === "saved" && <p>Answer saved 💖</p>}
          {saveStatus === "error" && (
            <p>Could not save the answer. Please send me a screenshot.</p>
          )}
        </div>

        <button className="replit-button" type="button">
          🧡 Built with love
        </button>
      </div>
    </section>
  );
}

export default FinalPage;