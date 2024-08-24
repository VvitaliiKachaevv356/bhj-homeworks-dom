document.querySelectorAll(".has-tooltip").forEach((tooltip) => {
  const elem = document.createElement("div");
  elem.textContent = tooltip.title;
  elem.className = "tooltip";
  tooltip.insertAdjacentElement("beforeBegin", elem);
  tooltip.addEventListener("click", (e) => {
    e.preventDefault();
    const activeTooltip = document.querySelector(".tooltip_active");
    if (activeTooltip && activeTooltip !== elem) {
      activeTooltip.classList.remove("tooltip_active");
    }
    elem.style.cssText = `position: absolute; left: ${ tooltip.getBoundingClientRect().left}px; top: ${tooltip.getBoundingClientRect().bottom}px;`;
    elem.classList.toggle("tooltip_active");
  });
});
