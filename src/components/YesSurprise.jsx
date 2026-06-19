function YesSurprise({ onOkay }) {
  return (
    <section className="card surprise-card">
      <div className="big-emoji">💘</div>

      <h1>WAIT YOU ACTUALLY SAID YES??</h1>

      <p>
        I was so ready for you to say no
      </p>

      <button className="main-button okay-button" onClick={onOkay}>
        Okay!
      </button>
    </section>
  );
}

export default YesSurprise;