function FinalPage({ selectedDate, selectedTime, selectedFood }) {
  return (
    <section className="final-page">
      <div className="final-card">
        <h1 className="final-title">
          glad you didn&apos;t say no. be ready by {selectedTime}, I&apos;m
          coming to get you 🚗
        </h1>

            <div className="final-hearts">♥ ♥ ♥ ♥ ♥</div>

        <div className="final-summary">
          <p>
            Date: <strong>{selectedDate}</strong>
          </p>

          <p>
            Food mood: <strong>{selectedFood}</strong>
          </p>
        </div>

        <button className="replit-button" type="button">
          🧡 Built with love
        </button>
      </div>
    </section>
  );
}

export default FinalPage;