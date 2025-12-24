import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Parent from "./24-12-2025/Props/unidirectional_flow/child_to_parent(callback)";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
