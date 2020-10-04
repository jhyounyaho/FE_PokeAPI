import PocketmonManager from "./PocketmonManager.js";
import Pocketmon from "./Pocketmon.js";
let pocketmonManager;
let pocketmon;

document.addEventListener("DOMContentLoaded", () => {
  pocketmonManager = new PocketmonManager();
  pocketmon = new Pocketmon();
  pocketmon.getPocketmon(1);
});
