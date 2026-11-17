import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Vitest no expone globales, así que Testing Library no limpia solo el DOM.
afterEach(() => cleanup());
