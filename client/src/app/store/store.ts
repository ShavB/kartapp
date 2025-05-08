import { legacy_createStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/Contact/counterReducer";

export function configureTheStore() {
  return legacy_createStore(counterReducer);
}
