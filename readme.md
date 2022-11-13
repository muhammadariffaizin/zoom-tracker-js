# Zoom Tracker using Javascript
using the console feature in the browser, we can track participant while joining the zoom

## How to Use
- Join zoom from browser
- Open the Participants Section
- Copy the code from the file `index.js` to the console, and run the code
- run the code below, you can change the `TITLE` with the string that you want
```js
let track = new ZoomTracker("TITLE", 3000);
```
- Wait a second, and the tracker will running and will print the number of current tracked participant

## Features
- Auto-detect Duplicated Participant, the list was updated using the name of the participants
- LocalStorage Based data, you can continue tracking although the page was closed
