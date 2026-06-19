import PuppyImage from "./PuppyImage.jsx";
import RunawayButton from "./RunawayButton.jsx";

function LandingPage({ onYes }) {
  return (
    <section className="card landing-card">
      <PuppyImage />

      <p className="tiny-label">a very important question 💌</p>

      <h1>Will you go on a date with me?</h1>

      <div className="button-row">
        <button className="main-button yes-button" onClick={onYes}>
          Yes
        </button>

        <RunawayButton />
      </div>
    </section>
  );
}

export default LandingPage;