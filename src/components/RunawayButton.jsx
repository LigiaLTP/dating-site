import { useEffect, useRef, useState } from "react";

function RunawayButton() {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function moveButtonAwayFromPointer(pointerX, pointerY) {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distanceX = buttonCenterX - pointerX;
    const distanceY = buttonCenterY - pointerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const dangerZone = 170;

    if (distance > dangerZone) return;

    const safeDistance = distance || 1;
    const movePower = window.innerWidth <= 640 ? 85 : 115;

    const moveX = (distanceX / safeDistance) * movePower;
    const moveY = (distanceY / safeDistance) * movePower;

    setPosition((currentPosition) => {
      const maxX = Math.min(window.innerWidth * 0.28, 250);
      const maxY = Math.min(window.innerHeight * 0.22, 190);

      const nextX = currentPosition.x + moveX;
      const nextY = currentPosition.y + moveY;

      return {
        x: Math.max(-maxX, Math.min(maxX, nextX)),
        y: Math.max(-maxY, Math.min(maxY, nextY)),
      };
    });
  }

  function moveRandomly() {
    const maxX = Math.min(window.innerWidth * 0.28, 230);
    const maxY = Math.min(window.innerHeight * 0.22, 180);

    setPosition({
      x: Math.random() * maxX * 2 - maxX,
      y: Math.random() * maxY * 2 - maxY,
    });
  }

  useEffect(() => {
    function handlePointerMove(event) {
      moveButtonAwayFromPointer(event.clientX, event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="main-button no-button"
      type="button"
      onClick={moveRandomly}
      onPointerDown={moveRandomly}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      No
    </button>
  );
}

export default RunawayButton;