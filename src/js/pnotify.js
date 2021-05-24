import { Stack, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function noMatchesFound() {
  error({
    text: 'No matches found. Please enter another query!',
    delay: 2500,
    dir1: 'down',
    firstpos1: 200,
    firstpos2: 15,
    maxStrategy: 'close',
    maxClosureCausesWait: false,
    sticker: false,
  });
}

export default noMatchesFound;
