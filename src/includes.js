document.querySelectorAll('[data-include]').forEach(async el => {
  const file = `src/components/${el.getAttribute('data-include')}.html`;

  try {
    const response = await fetch(file);
    const html = await response.text();
    el.innerHTML = html;
  } catch (e) {
    console.error(`Ошибка загрузки компонента: ${file}`);
  }
});
