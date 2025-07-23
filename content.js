
let allowedValues2 = ['С-ЗАП '];

const markdownBlocks = document.querySelectorAll('.markdown');

markdownBlocks.forEach(block => {
  const text = block.textContent || block.innerText;
  const isAllowed = allowedValues2.some(val => text.includes(val));
  const wrapper = document.createElement('div');

  wrapper.className = 'markdown-wrapper';
  block.parentNode.insertBefore(wrapper, block);
  wrapper.appendChild(block);

  if (!isAllowed) {
    block.style.display = 'none';
  
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Показать/Скрыть';
    toggleBtn.style.marginBottom = '4px';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.backgroundColor = '#eee';
    toggleBtn.style.border = '1px solid #ccc';
    
    toggleBtn.addEventListener('click', () => {
      block.style.display = (block.style.display === 'none') ? '' : 'none';
    });

    wrapper.insertBefore(toggleBtn, block);
  }
});