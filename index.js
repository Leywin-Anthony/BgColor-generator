// const rgbP = document.getElementById("rgbP");
// function bgColor() {
//   let [x, y, z, r, g, b] = Array(6)
//     .fill()
//     .map(() => Math.floor(Math.random() * 255));
//   let [p, o] = Array(2)
//     .fill()
//     .map(() => Math.floor(Math.random() * 255));
//   rgbP.textContent = "rgb = ";
//   document.body.style.background = `linear-gradient(90deg, rgba(${x}, ${y}, ${z}, ${p}) 0%, rgba(${r}, ${g}, ${b}, ${o}) 100%)`;
//   rgbP.textContent = `background : linear-gradient(90deg, rgba(${x}, ${y}, ${z}, ${p}) 0%, rgba(${r}, ${g}, ${b}, ${o}) 100%);`;
// }
// setInterval(bgColor, 5000);

const rgbP = document.getElementById("rgbP");
function bgColor() {
  let [x, y, z, r, g, b] = Array(6)
    .fill()
    .map(() => Math.floor(Math.random() * 255));
  let [p, o] = Array(2)
    .fill()
    .map(() => Math.floor(Math.random() * 255));
  rgbP.textContent = "rgb = ";
  document.body.style.background = `linear-gradient(90deg, rgba(${x}, ${y}, ${z}, ${p}) 0%, rgba(${r}, ${g}, ${b}, ${o}) 100%)`;
  rgbP.textContent = `linear-gradient(90deg, rgba(${x}, ${y}, ${z}, ${p}) 0%, rgba(${r}, ${g}, ${b}, ${o}) 100%)`;
}
setInterval(bgColor, 5000);
