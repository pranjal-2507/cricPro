const vir = document.getElementById("vir");
const sach = document.getElementById("sach");
const gau = document.getElementById("gau");
const virat = document.getElementById("virat");
const msd = document.getElementById("msd");
const yuv = document.getElementById("yuv");
const sur = document.getElementById("sur");
const harb = document.getElementById("harb");
const zah = document.getElementById("zah");
const mun = document.getElementById("mun");
const sree = document.getElementById("sree");

const imageContainer = document.getElementById("image-container");

const virimg = document.createElement("img");
virimg.src = "./assests/sehwag.png";

const sachimg = document.createElement("img");
sachimg.src = "./assests/sachin.png";

const gauimg = document.createElement("img");
gauimg.src = "./assests/gambhir.png";

const viratimg = document.createElement("img");
viratimg.src = "./assests/virat-kohli.png";

const msdimg = document.createElement("img");
msdimg.src = "./assests/dhoni.png";

const yuvimg = document.createElement("img");
yuvimg.src = "./assests/yuvraj.png";

const surimg = document.createElement("img");
surimg.src = "./assests/suresh-raina.jpg";

const harbimg = document.createElement("img");
harbimg.src = "./assests/harbhajan.jpg";

const zahimg = document.createElement("img");
zahimg.src = "./assests/zaheer-khan.jpg";

const munimg = document.createElement("img");
munimg.src = "./assests/munaf-patel.jpg";

const sreeimg = document.createElement("img");
sreeimg.src = "./assests/sreeshanth.jpg";

vir.addEventListener("click", () => {
  displayImage(virimg.src);
});

sach.addEventListener("click", () => {
  displayImage(sachimg.src);
});

gau.addEventListener("click", () => {
  displayImage(gauimg.src);
});
virat.addEventListener("click", () => {
  displayImage(viratimg.src);
});
msd.addEventListener("click", () => {
  displayImage(msdimg.src);
});

yuv.addEventListener("click", () => {
  displayImage(yuvimg.src);
});
sur.addEventListener("click", () => {
  displayImage(surimg.src);
});
harb.addEventListener("click", () => {
  displayImage(harbimg.src);
});
zah.addEventListener("click", () => {
  displayImage(zahimg.src);
});
mun.addEventListener("click", () => {
  displayImage(munimg.src);
});
sree.addEventListener("click", () => {
  displayImage(sreeimg.src);
});

function displayImage(imagePath) {
  imageContainer.innerHTML = "";

  const image = document.createElement("img");
  image.src = imagePath;
  image.alt = "Cricketer Image";

  imageContainer.appendChild(image);
}
