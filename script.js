const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function switchTab(target) {
  tabButtons.forEach((button) => {
    const isSelected = button.dataset.target === target;
    button.classList.toggle('active', isSelected);
    button.setAttribute('aria-selected', String(isSelected));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === target;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => switchTab(button.dataset.target));
});
