const h1 = document.querySelector("h1");
const text1 = h1.innerText;
const random = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

h1.classList.add("visible");

h1.addEventListener("mouseover", () => {
  let count = 0;
  let timer = setInterval(() => {
    if (count >= text1.length) clearInterval(timer);
    let text2 = "";
    for (let i = 0; i < text1.length; i++) {
      if (i === 7) text2 += " ";
      else if (i >= count)
        text2 += random[Math.floor(Math.random() * random.length)];
      else text2 += text1[i];
    }
    h1.innerText = text2;
    count += 1 / 3;
  }, 30);
});
