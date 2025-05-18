import React, { useState, useEffect } from "react";

const texts = [
  "Full stack developer",
  "Frontend enthusiast",
  "Backend explorer",
  "Ui/UX designer",
];

const TYPING_SPEED = 80;
const ERASING_SPEED = 40;
const DELAY_AFTER_TYPING = 1200;

const HelloWold = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = texts[textIndex];

    if (!isDeleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length - 1));
      }, ERASING_SPEED);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex]);

  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <div className="col-8">
          <div className="text-white d-flex gap-2 fw-semibold">
            <span>Hello World, i'm brun0</span>
          </div>
          <h1 className="text-white fw-bold">Brun0</h1>
          <h3 className="text-white">{displayed}</h3>
        </div>
        <div className="col-4">
          <img
            className="rounded-circle"
            src="https://placehold.co/200x200"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HelloWold;
