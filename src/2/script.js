const wand = document.querySelector(".wand");
const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const boxes = document.querySelectorAll(".box");
const wandWidth = wand.offsetWidth;

container.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const wandLeft = containerWidth * -0.15 + x * 1.3 - 0.8 * wandWidth;
  const wandTop = containerHeight * 0.1 + y * 0.4;
  wand.animate(
    {
      left: wandLeft + "px",
      top: wandTop + "px",
    },
    {
      duration: 400,
      fill: "forwards",
    }
  );
  wand.style.transform = `rotate(${
    ((x - containerWidth / 2 - 1.6 * wandWidth) / containerWidth) * 20
  }deg) translateX(-300%)`;
  boxes.forEach((box) => {
    const dimensions = box.getBoundingClientRect();
    const boxLeft = dimensions.left;
    const relative = (wandLeft - boxLeft) / dimensions.width;
    box.style.setProperty("--opacity", relative);
    box.style.setProperty("--blur", 1 - relative);
  });
});
