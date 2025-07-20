import styles from "@/styles/interactive/ImageSlider.module.scss";
import { useState, useRef, useEffect } from "react";

export function ImageSlider({ top, bottom }) {
  const container = useRef(null);
  const slider = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0.5);
  const buttonDown = useRef(false);

  const getRelativeMousePosition = (clientX) => {
    return clientX - container.current.getBoundingClientRect().x;
  };

  const getContainerWidth = () => {
    return (
      container.current.getBoundingClientRect().right -
      container.current.getBoundingClientRect().left
    );
  };

  const handleMouseUp = () => {
    updateButtonDown(false);
    slider.current.blur();
  };

  const handleMouseDown = () => {
    updateButtonDown(true);
  };

  const handleMouseMove = (e) => {
    if (!buttonDown.current) return;
    const relativeMousePosition = getRelativeMousePosition(e.clientX);
    updateSlider(1 - relativeMousePosition / getContainerWidth());
  };

  const handleTouchMove = (e) => {
    if (!buttonDown.current) return;
    const relativeTouchPosition = getRelativeMousePosition(e.touches[0].clientX);
    updateSlider(1 - relativeTouchPosition / getContainerWidth());;
  }

  const updateSlider = (position) => {
    setSliderPosition(Math.max(0, Math.min(1, position)));
  };

  const updateButtonDown = (isDown) => {
    buttonDown.current = isDown;
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={container}
      className={styles["image-slider"]}
      style={{ "--slider-position": sliderPosition }}
    >
      <img className={styles["top"]} src={top.src} alt={top.alt} />
      <img className={styles["bottom"]} src={bottom.src} alt={bottom.alt} />
      <button
        ref={slider}
        onTouchStart={handleMouseDown}
        onMouseDown={handleMouseDown}
        className={styles["slider"]}
        type="button"
      ></button>
    </div>
  );
}
