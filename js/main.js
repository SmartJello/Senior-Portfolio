const label = document.getElementById('hover-label');
const items = document.querySelectorAll('.emoji-item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    label.textContent = item.getAttribute('data-label');
  });
  item.addEventListener('mouseout', () => {
    label.textContent = '\u00A0';
  });
});
