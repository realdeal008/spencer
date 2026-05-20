"use client";

import { CheckIcon } from "./icons";

const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={`toast show`} role="status" aria-live="polite">
      <CheckIcon />
      {message}
    </div>
  );
};

export default Toast;

