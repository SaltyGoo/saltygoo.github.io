const tooltip = document.getElementById("tooltip");
const tooltipText = tooltip.getAttribute("data-tooltip");

tooltip.addEventListener("mouseover", () => {
  tooltip.innerHTML = tooltipText;
  tooltip.style.visibility = "visible";
});

tooltip.addEventListener("mouseout", () => {
  tooltip.style.visibility = "hidden";
});
