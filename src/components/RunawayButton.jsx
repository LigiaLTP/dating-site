import { useEffect, useRef, useState } from "react";

function RunawayButton() {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      const button = buttonRef.current;

      if (!button) return;

      const rect = button.getBoundingClientRect();

      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distanceX = buttonCenterX - event.clientX;
      const distanceY = buttonCenterY - event.clientY;

      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const dangerZone = 150;

      if (distance < dangerZone) {
        const movePower = 95;
        const safeDistance = distance || 1;

        const moveX = (distanceX / safeDistance) * movePower;
        const moveY = (distanceY / safeDistance) * movePower;

        setPosition((currentPosition) => {
          const nextX = currentPosition.x + moveX;
          const nextY = currentPosition.y + moveY;

          return {
            x: Math.max(-230, Math.min(230, nextX)),
            y: Math.max(-180, Math.min(180, nextY)),
          };
        });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleNoClick(event) {
    event.preventDefault();

    setPosition({
      x: Math.random() * 360 - 180,
      y: Math.random() * 260 - 130,
    });
  }

  return (
    <button
      ref={buttonRef}
      className="main-button no-button"
      onClick={handleNoClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      No
    </button>
  );
}

export default RunawayButton;