import { animate } from "framer-motion/dom";

function run() {
  const main = document.querySelector("main");
  if (!main) return;
  animate(
    main,
    { opacity: [0, 1], y: [12, 0] },
    { duration: 0.35, ease: "easeOut" },
  );
}

document.addEventListener("astro:page-load", run);
run();
