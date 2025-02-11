import { data } from './data.js';

const gallery = document.getElementById('gallery');

for (let i = 0; i < 5; i++) {
  data.forEach(({ image, description, test }) => {
    const containerItem = document.createElement('div');
    containerItem.classList.add('gallery__item');

    const imageItem = document.createElement('img');
    imageItem.src = image;

    const innerBox = document.createElement('div');
    innerBox.classList.add('inner-box');
    innerBox.textContent = description;

    containerItem.appendChild(imageItem);
    containerItem.appendChild(innerBox);
    gallery.appendChild(containerItem);
  });
}

gallery.onmouseover = (event) => {
  const item = event?.target?.closest('.gallery__item');

  if (item) {
    const innerBox = item.lastChild;
    innerBox.style.opacity = '1';
  }
};

gallery.onmouseout = (event) => {
  const item = event?.target?.closest('.gallery__item');

  if (item) {
    const innerBox = item.lastChild;
    innerBox.style.opacity = '0';
  }
};
