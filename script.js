const value = 1;
const minValue = 0;
const twentyfive_value = 25;
const fifty_value = 50;
const seventyfive_value = 75;
const maxValue = 100;

const progress = 30;

const barHeight = 16;
const pointerWidth = 16;
const indicatorWidth = value === 100 ? 50 : value >= 10 ? 40 : 30;

const root = document.documentElement;

root.style.setProperty("--bar-height", barHeight + "px");
root.style.setProperty("--indicator-width", indicatorWidth + "px");
root.style.setProperty("--pointer-width", pointerWidth + "px");
root.style.setProperty("--progress", progress);
root.style.setProperty("--progress-percentage", progress + "%");

document.getElementById("indicator").textContent = progress + "%";
document.getElementById("min-value").textContent = minValue;
document.getElementById("twentyfive-value").textContent = twentyfive_value;
document.getElementById("fifty-value").textContent = fifty_value;
document.getElementById("seventyfive-value").textContent = seventyfive_value;
document.getElementById("max-value").textContent = maxValue;
