
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
  const currentTime = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, currentTime);
}
function insertTime() {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value) {
    const timeValue = JSON.parse(value);
    const { seconds } = timeValue;
    return seconds;
  }
}
player
  .setCurrentTime(insertTime())
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
  