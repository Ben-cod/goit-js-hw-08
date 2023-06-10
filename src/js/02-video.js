
import Player from '@vimeo/player';
import { throttle } from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player')
const player = new Player(iframeRef);

// Функція для збереження поточного часу відтворення у локальне сховище
const saveCurrentTime = throttle(async () => {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Помилка при збереженні поточного часу відтворення:', error);
  }
}, 1000); // Оновлення не частіше, ніж раз на секунду

// Функція для відновлення відтворення з збереженої позиції
const restorePlayback = async () => {
  try {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
      await player.setCurrentTime(currentTime);
    }
  } catch (error) {
    console.error('Помилка при відновленні відтворення:', error);
  }
};


player.on('timeupdate', saveCurrentTime);


window.addEventListener('load', restorePlayback);