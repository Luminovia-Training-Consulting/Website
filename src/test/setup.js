import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

function createStorageMock() {
  let store = {};
  return {
    getItem: (key) => store[key] ?? null,
    setItem: (key, value) => {
      store[key] = String(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
}

const storage = createStorageMock();

Object.defineProperty(window, "localStorage", {
  value: storage,
  configurable: true,
});

Object.defineProperty(globalThis, "localStorage", {
  value: storage,
  configurable: true,
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

Object.defineProperty(window, "scrollTo", {
  value: () => {},
  writable: true,
});
