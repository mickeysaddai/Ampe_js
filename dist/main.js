/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas'); //canvas setup\n\n  const ctx = canvas.getContext('2d'); //allow us to use built in canvas methods\n\n  canvas.width = 600;\n  canvas.height = 400; // const main = document.getElementById('main')\n\n  console.log('Ampe!!!');\n  document.getElementById('start-button').addEventListener('click', function () {\n    console.log('clicked');\n    const numberOfPlayers = prompt('Please enter your number of players');\n    const game = new Game(ctx, numberOfPlayers);\n    game.drawGame(); // console.log('You entered ', numberOfPlayers)\n    // setUpGameBoard(numberOfPlayers)\n\n    disabled = document.getElementById('start-button').disabled = true;\n    const chooseButton = document.createElement('button');\n    chooseButton.innerText = 'Choose Color';\n    document.getElementById('color-selector').append(chooseButton);\n    chooseButton.addEventListener('click', function () {\n      game.makeMove();\n    });\n  });\n});\n\nfunction setUpGameBoard(players = 1) {\n  createPlayers(players, 75);\n  createPlayers(players, 185);\n}\n\nfunction createPlayer(xCoord = 100, yCoord = 75) {\n  //for a single player\n  // ctx.clearRect(0, 0, canvas.width, canvas.height)\n  ctx.strokeRect(0, 0, canvas.width, canvas.height); // ctx.fillRect(20, 200, 100, 100)\n\n  ctx.beginPath();\n  ctx.arc(xCoord, yCoord, 20, 0, 2 * Math.PI);\n  ctx.stroke(); // requestAnimationFrame(animate)\n} // function createPlayers(numberOfPlayers, yCoord) { //for multiple players\n//     let startingXCoord = 100\n//     const startingYCoord = yCoord || 75;\n//     for (let i = 0; i < numberOfPlayers; i++) {\n//         createPlayer(startingXCoord, startingYCoord);\n//         startingXCoord += 75;\n//     }\n// }\n// let player = {\n//     x: 300,\n//     y: 300,\n//     width: 20,\n//     height: 20\n//     // x_vel: 0,\n//     // y_vel: 0\n// }\n// ctx.strokeRect(100, 100, 100, -100);\n// ctx.fillStyle = 'rgb(200, 0, 0)';\n// ctx.fillRect(10, 10, 50, 50);\n// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n// ctx.fillRect(30, 30, 50, 50);\n// function draw() {\n//     var canvas = document.getElementById('canvas');\n//     if (canvas.getContext) {\n//         var ctx = canvas.getContext('2d');\n//         ctx.fillRect(25, 25, 100, 100);\n//         ctx.clearRect(45, 45, 60, 60);\n//         ctx.strokeRect(50, 50, 50, 50);\n//     }\n// }\n//who currently won adn who currenlty lost\n//pass the current winner and the other team.getnextplayer\n//get round winner//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQUtBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ2hELFFBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWYsQ0FEZ0QsQ0FDRTs7QUFDbEQsUUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDQUZnRCxDQUVYOztBQUNyQ0gsRUFBQUEsTUFBTSxDQUFDSSxLQUFQLEdBQWUsR0FBZjtBQUNBSixFQUFBQSxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsR0FBaEIsQ0FKZ0QsQ0FLaEQ7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFQVQsRUFBQUEsUUFBUSxDQUFDRyxjQUFULENBQXdCLGNBQXhCLEVBQXdDRixnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0UsWUFBVTtBQUMxRU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNFLFVBQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUFDLHFDQUFELENBQTlCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlkLElBQUosQ0FBU00sR0FBVCxFQUFjTSxlQUFkLENBQWI7QUFDQUUsSUFBQUEsSUFBSSxDQUFDQyxRQUFMLEdBSndFLENBS3hFO0FBQ0E7O0FBQ0FDLElBQUFBLFFBQVEsR0FBR2QsUUFBUSxDQUFDRyxjQUFULENBQXdCLGNBQXhCLEVBQXdDVyxRQUF4QyxHQUFtRCxJQUE5RDtBQUtBLFVBQU1DLFlBQVksR0FBR2YsUUFBUSxDQUFDZ0IsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBRCxJQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUIsY0FBekI7QUFDQ2pCLElBQUFBLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixnQkFBeEIsRUFBMENlLE1BQTFDLENBQWlESCxZQUFqRDtBQUVEQSxJQUFBQSxZQUFZLENBQUNkLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQVU7QUFFN0NXLE1BQUFBLElBQUksQ0FBQ08sUUFBTDtBQUNILEtBSEQ7QUFLSCxHQXJCRDtBQXVCSCxDQS9CRDs7QUFvQ0EsU0FBU0MsY0FBVCxDQUF3QkMsT0FBTyxHQUFHLENBQWxDLEVBQXFDO0FBRWpDQyxFQUFBQSxhQUFhLENBQUNELE9BQUQsRUFBVSxFQUFWLENBQWI7QUFDQUMsRUFBQUEsYUFBYSxDQUFDRCxPQUFELEVBQVUsR0FBVixDQUFiO0FBQ0g7O0FBRUQsU0FBU0UsWUFBVCxDQUFzQkMsTUFBTSxHQUFHLEdBQS9CLEVBQW9DQyxNQUFNLEdBQUcsRUFBN0MsRUFBZ0Q7QUFBRTtBQUM5QztBQUNBckIsRUFBQUEsR0FBRyxDQUFDc0IsVUFBSixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJ4QixNQUFNLENBQUNJLEtBQTVCLEVBQW1DSixNQUFNLENBQUNLLE1BQTFDLEVBRjRDLENBRzVDOztBQUVBSCxFQUFBQSxHQUFHLENBQUN1QixTQUFKO0FBQ0F2QixFQUFBQSxHQUFHLENBQUN3QixHQUFKLENBQVFKLE1BQVIsRUFBZ0JDLE1BQWhCLEVBQXdCLEVBQXhCLEVBQTRCLENBQTVCLEVBQStCLElBQUlJLElBQUksQ0FBQ0MsRUFBeEM7QUFDQTFCLEVBQUFBLEdBQUcsQ0FBQzJCLE1BQUosR0FQNEMsQ0FTNUM7QUFDSCxDLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1wZV9qcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL3NjcmlwdHMvZ2FtZS5qcycpO1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyAvL2NhbnZhcyBzZXR1cFxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAvL2FsbG93IHVzIHRvIHVzZSBidWlsdCBpbiBjYW52YXMgbWV0aG9kc1xuICAgIGNhbnZhcy53aWR0aCA9IDYwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNDAwO1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgY29uc29sZS5sb2coJ0FtcGUhISEnKVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgeW91ciBudW1iZXIgb2YgcGxheWVycycpXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgsIG51bWJlck9mUGxheWVycyk7XG4gICAgICAgIGdhbWUuZHJhd0dhbWUoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1lvdSBlbnRlcmVkICcsIG51bWJlck9mUGxheWVycylcbiAgICAgICAgLy8gc2V0VXBHYW1lQm9hcmQobnVtYmVyT2ZQbGF5ZXJzKVxuICAgICAgICBkaXNhYmxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG5cblxuXG5cbiAgICAgICAgY29uc3QgY2hvb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNob29zZUJ1dHRvbi5pbm5lclRleHQgPSAnQ2hvb3NlIENvbG9yJztcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zZWxlY3RvcicpLmFwcGVuZChjaG9vc2VCdXR0b24pO1xuXG4gICAgICAgIGNob29zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIGdhbWUubWFrZU1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgIH0pXG4gICAgXG59KVxuXG5cblxuXG5mdW5jdGlvbiBzZXRVcEdhbWVCb2FyZChwbGF5ZXJzID0gMSkge1xuXG4gICAgY3JlYXRlUGxheWVycyhwbGF5ZXJzLCA3NSlcbiAgICBjcmVhdGVQbGF5ZXJzKHBsYXllcnMsIDE4NSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHhDb29yZCA9IDEwMCwgeUNvb3JkID0gNzUpeyAvL2ZvciBhIHNpbmdsZSBwbGF5ZXJcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgLy8gY3R4LmZpbGxSZWN0KDIwLCAyMDAsIDEwMCwgMTAwKVxuICAgIFxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHhDb29yZCwgeUNvb3JkLCAyMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJzKG51bWJlck9mUGxheWVycywgeUNvb3JkKSB7IC8vZm9yIG11bHRpcGxlIHBsYXllcnNcbi8vICAgICBsZXQgc3RhcnRpbmdYQ29vcmQgPSAxMDBcbi8vICAgICBjb25zdCBzdGFydGluZ1lDb29yZCA9IHlDb29yZCB8fCA3NTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQbGF5ZXJzOyBpKyspIHtcbi8vICAgICAgICAgY3JlYXRlUGxheWVyKHN0YXJ0aW5nWENvb3JkLCBzdGFydGluZ1lDb29yZCk7XG4vLyAgICAgICAgIHN0YXJ0aW5nWENvb3JkICs9IDc1O1xuLy8gICAgIH1cbi8vIH1cblxuXG5cblxuXG5cblxuLy8gbGV0IHBsYXllciA9IHtcbi8vICAgICB4OiAzMDAsXG4vLyAgICAgeTogMzAwLFxuLy8gICAgIHdpZHRoOiAyMCxcbi8vICAgICBoZWlnaHQ6IDIwXG5cbi8vICAgICAvLyB4X3ZlbDogMCxcbi8vICAgICAvLyB5X3ZlbDogMFxuXG4vLyB9XG5cblxuXG5cblxuXG4vLyBjdHguc3Ryb2tlUmVjdCgxMDAsIDEwMCwgMTAwLCAtMTAwKTtcbi8vIGN0eC5maWxsU3R5bGUgPSAncmdiKDIwMCwgMCwgMCknO1xuLy8gY3R4LmZpbGxSZWN0KDEwLCAxMCwgNTAsIDUwKTtcblxuLy8gY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDIwMCwgMC41KSc7XG4vLyBjdHguZmlsbFJlY3QoMzAsIDMwLCA1MCwgNTApO1xuXG4vLyBmdW5jdGlvbiBkcmF3KCkge1xuLy8gICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4vLyAgICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XG4vLyAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuLy8gICAgICAgICBjdHguZmlsbFJlY3QoMjUsIDI1LCAxMDAsIDEwMCk7XG4vLyAgICAgICAgIGN0eC5jbGVhclJlY3QoNDUsIDQ1LCA2MCwgNjApO1xuLy8gICAgICAgICBjdHguc3Ryb2tlUmVjdCg1MCwgNTAsIDUwLCA1MCk7XG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vd2hvIGN1cnJlbnRseSB3b24gYWRuIHdobyBjdXJyZW5sdHkgbG9zdFxuLy9wYXNzIHRoZSBjdXJyZW50IHdpbm5lciBhbmQgdGhlIG90aGVyIHRlYW0uZ2V0bmV4dHBsYXllclxuLy9nZXQgcm91bmQgd2lubmVyIl0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwibnVtYmVyT2ZQbGF5ZXJzIiwicHJvbXB0IiwiZ2FtZSIsImRyYXdHYW1lIiwiZGlzYWJsZWQiLCJjaG9vc2VCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwibWFrZU1vdmUiLCJzZXRVcEdhbWVCb2FyZCIsInBsYXllcnMiLCJjcmVhdGVQbGF5ZXJzIiwiY3JlYXRlUGxheWVyIiwieENvb3JkIiwieUNvb3JkIiwic3Ryb2tlUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Team = __webpack_require__(/*! ./team */ \"./src/scripts/team.js\");\n\nclass Game {\n  ctx;\n  numberOfPlayers;\n  teamMatch;\n  teamUnmatch;\n  COLORS = [\"red\", \"blue\", \"yellow\"];\n\n  constructor(ctx, numberOfPlayers) {\n    this.ctx = ctx;\n    this.numberOfPlayers = numberOfPlayers;\n  }\n\n  startGame() {}\n\n  drawGame() {\n    this.teamUnmatch = new Team(this.numberOfPlayers, 'TEAM_UNMATCH', this.ctx);\n    this.teamMatch = new Team(this.numberOfPlayers, 'TEAM_MATCH', this.ctx);\n    this.ctx.strokeRect(0, 0, 500, 300);\n    this.teamUnmatch.createPlayers();\n    this.teamMatch.createPlayers();\n  }\n\n  promptUser() {//privides an option of two colors for using to choose one\n    //once user chooses color //prompts user to pick \"Match\" or \"Unmatched\"\n  }\n\n  randomColorGenerator() {//generates a pair of random colors for user to choose from\n  }\n\n  makeMove() {\n    const winnerEle = window.document.getElementById('winner-container');\n    this.teamUnmatch.activateCurrentPlayer();\n    this.teamMatch.activateCurrentPlayer();\n    const winner = this.getCurrentRoundWinner();\n    console.log(\"current winner is\", winner.teamType);\n    winnerEle.innerText = `Current winner is ${winner.teamType}`;\n  }\n\n  getCurrentRoundWinner() {\n    if (this.teamMatch.getCurrentPlayer().color === this.teamUnmatch.getCurrentPlayer().color) {\n      //incremenet scoreboard for tema match\n      this.teamUnmatch.getNextPlayer();\n      return this.teamMatch.getCurrentPlayer();\n    } else {\n      //increment score board for unmatch\n      this.teamMatch.getNextPlayer();\n      return this.teamUnmatch.getCurrentPlayer();\n    }\n  }\n\n} //Random color generator\n//Startgame - prompt user to eneter number of players -> class team\n//Round # --> choose color for active player --> disable color --> start countdonw --> bounce? -- > reveeal --> print score\n//timer\n//gameOver --> when dead player === teamSize\n//puts Player #{name} wins\n//\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxJQUFOLENBQVc7QUFDUEMsRUFBQUEsR0FBRztBQUNIQyxFQUFBQSxlQUFlO0FBQ2ZDLEVBQUFBLFNBQVM7QUFDVEMsRUFBQUEsV0FBVztBQUVWQyxFQUFBQSxNQUFNLEdBQUcsQ0FBRSxLQUFGLEVBQVMsTUFBVCxFQUFpQixRQUFqQixDQUFIOztBQUNQQyxFQUFBQSxXQUFXLENBQUNMLEdBQUQsRUFBTUMsZUFBTixFQUFzQjtBQUM3QixTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNIOztBQUVESyxFQUFBQSxTQUFTLEdBQUUsQ0FFVjs7QUFHREMsRUFBQUEsUUFBUSxHQUFFO0FBQ1YsU0FBS0osV0FBTCxHQUFtQixJQUFJTixJQUFKLENBQVMsS0FBS0ksZUFBZCxFQUErQixjQUEvQixFQUErQyxLQUFLRCxHQUFwRCxDQUFuQjtBQUNDLFNBQUtFLFNBQUwsR0FBaUIsSUFBSUwsSUFBSixDQUFTLEtBQUtJLGVBQWQsRUFBK0IsWUFBL0IsRUFBNkMsS0FBS0QsR0FBbEQsQ0FBakI7QUFDQSxTQUFLQSxHQUFMLENBQVNRLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0I7QUFFQSxTQUFLTCxXQUFMLENBQWlCTSxhQUFqQjtBQUNBLFNBQUtQLFNBQUwsQ0FBZU8sYUFBZjtBQUNBOztBQUVEQyxFQUFBQSxVQUFVLEdBQUUsQ0FDUjtBQUNBO0FBQ0g7O0FBRURDLEVBQUFBLG9CQUFvQixHQUFFLENBQ2xCO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsR0FBRTtBQUNQLFVBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxjQUFoQixDQUErQixrQkFBL0IsQ0FBbEI7QUFFQyxTQUFLYixXQUFMLENBQWlCYyxxQkFBakI7QUFDQSxTQUFLZixTQUFMLENBQWVlLHFCQUFmO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLHFCQUFMLEVBQWY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNILE1BQU0sQ0FBQ0ksUUFBeEM7QUFDQVQsSUFBQUEsU0FBUyxDQUFDVSxTQUFWLEdBQXVCLHFCQUFvQkwsTUFBTSxDQUFDSSxRQUFTLEVBQTNEO0FBR0g7O0FBRURILEVBQUFBLHFCQUFxQixHQUFFO0FBRW5CLFFBQUksS0FBS2pCLFNBQUwsQ0FBZXNCLGdCQUFmLEdBQWtDQyxLQUFsQyxLQUE0QyxLQUFLdEIsV0FBTCxDQUFpQnFCLGdCQUFqQixHQUFvQ0MsS0FBcEYsRUFBMkY7QUFDdkY7QUFDQSxXQUFLdEIsV0FBTCxDQUFpQnVCLGFBQWpCO0FBQ0EsYUFBTyxLQUFLeEIsU0FBTCxDQUFlc0IsZ0JBQWYsRUFBUDtBQUVILEtBTEQsTUFLTztBQUNIO0FBQ0EsV0FBS3RCLFNBQUwsQ0FBZXdCLGFBQWY7QUFDQSxhQUFPLEtBQUt2QixXQUFMLENBQWlCcUIsZ0JBQWpCLEVBQVA7QUFDSDtBQUNKOztBQTNETSxDLENBK0RYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWtCN0IsSUFBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRlYW0gPSByZXF1aXJlKCcuL3RlYW0nKSBcbmNsYXNzIEdhbWUge1xuICAgIGN0eDtcbiAgICBudW1iZXJPZlBsYXllcnM7XG4gICAgdGVhbU1hdGNoO1xuICAgIHRlYW1Vbm1hdGNoO1xuXG4gICAgIENPTE9SUyA9IFsgXCJyZWRcIiwgXCJibHVlXCIsIFwieWVsbG93XCJdXG4gICAgY29uc3RydWN0b3IoY3R4LCBudW1iZXJPZlBsYXllcnMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5udW1iZXJPZlBsYXllcnMgPSBudW1iZXJPZlBsYXllcnM7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCl7XG5cbiAgICB9O1xuXG5cbiAgICBkcmF3R2FtZSgpe1xuICAgIHRoaXMudGVhbVVubWF0Y2ggPSBuZXcgVGVhbSh0aGlzLm51bWJlck9mUGxheWVycywgJ1RFQU1fVU5NQVRDSCcsIHRoaXMuY3R4KTtcbiAgICAgdGhpcy50ZWFtTWF0Y2ggPSBuZXcgVGVhbSh0aGlzLm51bWJlck9mUGxheWVycywgJ1RFQU1fTUFUQ0gnLCB0aGlzLmN0eCApO1xuICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KDAsIDAsIDUwMCwgMzAwKVxuICAgICBcbiAgICAgdGhpcy50ZWFtVW5tYXRjaC5jcmVhdGVQbGF5ZXJzKCk7XG4gICAgIHRoaXMudGVhbU1hdGNoLmNyZWF0ZVBsYXllcnMoKTtcbiAgICB9XG4gICAgXG4gICAgcHJvbXB0VXNlcigpe1xuICAgICAgICAvL3ByaXZpZGVzIGFuIG9wdGlvbiBvZiB0d28gY29sb3JzIGZvciB1c2luZyB0byBjaG9vc2Ugb25lXG4gICAgICAgIC8vb25jZSB1c2VyIGNob29zZXMgY29sb3IgLy9wcm9tcHRzIHVzZXIgdG8gcGljayBcIk1hdGNoXCIgb3IgXCJVbm1hdGNoZWRcIlxuICAgIH1cblxuICAgIHJhbmRvbUNvbG9yR2VuZXJhdG9yKCl7XG4gICAgICAgIC8vZ2VuZXJhdGVzIGEgcGFpciBvZiByYW5kb20gY29sb3JzIGZvciB1c2VyIHRvIGNob29zZSBmcm9tXG4gICAgfVxuXG4gICAgbWFrZU1vdmUoKXtcbiAgICAgICBjb25zdCB3aW5uZXJFbGUgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLnRlYW1Vbm1hdGNoLmFjdGl2YXRlQ3VycmVudFBsYXllcigpO1xuICAgICAgICB0aGlzLnRlYW1NYXRjaC5hY3RpdmF0ZUN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5nZXRDdXJyZW50Um91bmRXaW5uZXIoKVxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgd2lubmVyIGlzXCIsIHdpbm5lci50ZWFtVHlwZSk7XG4gICAgICAgIHdpbm5lckVsZS5pbm5lclRleHQgPSBgQ3VycmVudCB3aW5uZXIgaXMgJHt3aW5uZXIudGVhbVR5cGV9YCBcbiAgICAgICBcblxuICAgIH1cblxuICAgIGdldEN1cnJlbnRSb3VuZFdpbm5lcigpe1xuICAgICAgIFxuICAgICAgICBpZiAodGhpcy50ZWFtTWF0Y2guZ2V0Q3VycmVudFBsYXllcigpLmNvbG9yID09PSB0aGlzLnRlYW1Vbm1hdGNoLmdldEN1cnJlbnRQbGF5ZXIoKS5jb2xvciApe1xuICAgICAgICAgICAgLy9pbmNyZW1lbmV0IHNjb3JlYm9hcmQgZm9yIHRlbWEgbWF0Y2hcbiAgICAgICAgICAgIHRoaXMudGVhbVVubWF0Y2guZ2V0TmV4dFBsYXllcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVhbU1hdGNoLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2luY3JlbWVudCBzY29yZSBib2FyZCBmb3IgdW5tYXRjaFxuICAgICAgICAgICAgdGhpcy50ZWFtTWF0Y2guZ2V0TmV4dFBsYXllcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVhbVVubWF0Y2guZ2V0Q3VycmVudFBsYXllcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbi8vUmFuZG9tIGNvbG9yIGdlbmVyYXRvclxuLy9TdGFydGdhbWUgLSBwcm9tcHQgdXNlciB0byBlbmV0ZXIgbnVtYmVyIG9mIHBsYXllcnMgLT4gY2xhc3MgdGVhbVxuLy9Sb3VuZCAjIC0tPiBjaG9vc2UgY29sb3IgZm9yIGFjdGl2ZSBwbGF5ZXIgLS0+IGRpc2FibGUgY29sb3IgLS0+IHN0YXJ0IGNvdW50ZG9udyAtLT4gYm91bmNlPyAtLSA+IHJldmVlYWwgLS0+IHByaW50IHNjb3JlXG4vL3RpbWVyXG4vL2dhbWVPdmVyIC0tPiB3aGVuIGRlYWQgcGxheWVyID09PSB0ZWFtU2l6ZVxuLy9wdXRzIFBsYXllciAje25hbWV9IHdpbnNcbi8vXG5cbm1vZHVsZS5leHBvcnRzICA9IEdhbWU7Il0sIm5hbWVzIjpbIlRlYW0iLCJyZXF1aXJlIiwiR2FtZSIsImN0eCIsIm51bWJlck9mUGxheWVycyIsInRlYW1NYXRjaCIsInRlYW1Vbm1hdGNoIiwiQ09MT1JTIiwiY29uc3RydWN0b3IiLCJzdGFydEdhbWUiLCJkcmF3R2FtZSIsInN0cm9rZVJlY3QiLCJjcmVhdGVQbGF5ZXJzIiwicHJvbXB0VXNlciIsInJhbmRvbUNvbG9yR2VuZXJhdG9yIiwibWFrZU1vdmUiLCJ3aW5uZXJFbGUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZhdGVDdXJyZW50UGxheWVyIiwid2lubmVyIiwiZ2V0Q3VycmVudFJvdW5kV2lubmVyIiwiY29uc29sZSIsImxvZyIsInRlYW1UeXBlIiwiaW5uZXJUZXh0IiwiZ2V0Q3VycmVudFBsYXllciIsImNvbG9yIiwiZ2V0TmV4dFBsYXllciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("const STATUS_TYPES = {\n  //enum\n  ACTIVE: 'ACTIVE',\n  INACTIVE: 'INACTIVE',\n  DEAD: 'DEAD'\n};\n\nclass Player {\n  pos;\n  color;\n  status;\n  ctx; // tie this canvas to the window instead of passing it down each time \n\n  xCoord; // xpositionm\n\n  yCoord; // y position\n\n  teamType;\n\n  constructor(pos, ctx, xCoord, yCoord, teamType) {\n    this.pos = pos, this.color = \"color\", this.status = STATUS_TYPES.INACTIVE;\n    this.xCoord = xCoord;\n    this.yCoord = yCoord;\n    this.ctx = ctx;\n    this.teamType = teamType;\n  }\n\n  isDead() {\n    return this.status === STATUS_TYPES.DEAD;\n  }\n\n  renderMove() {\n    return this.color;\n  }\n\n  setStatus(status) {\n    this.status = STATUS_TYPES[status];\n  }\n\n  drawPlayer() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.xCoord, this.yCoord, 20, 0, 2 * Math.PI);\n\n    if (this.teamType === 'TEAM_MATCH') {\n      this.ctx.fillStyle = \"pink\";\n    } else {\n      let rand = Math.random();\n      this.ctx.fillStyle = \"black\";\n    }\n\n    this.ctx.closePath();\n    this.ctx.fill(); // this.ctx.addEventListener('click', () =>{\n    //     console.log('you clicked me', this)\n    //     this.ctx.fillStyle = \"blue\";\n    //     this.ctx.fill();\n    // })\n  }\n\n  clearColor() {\n    this.color = '';\n  }\n\n  activatePlayer(color = \"blue\") {\n    let that = this;\n    setTimeout(function () {\n      that.drawPlayer();\n      that.clearColor();\n      that.color = that.teamType === 'TEAM_MATCH' ? color : that.generateRandomColor();\n      that.ctx.fillStyle = that.color;\n      that.ctx.fill();\n      that.ctx.closePath();\n    }, 2000);\n  }\n\n  deactivatePlayer() {\n    this.clearColor();\n    console.log(\"deactivating player\", this.pos, this.teamType);\n    this.drawPlayer();\n    this.status = STATUS_TYPES.INACTIVE;\n  }\n\n  generateRandomColor() {\n    const rand = Math.random();\n\n    if (rand < 0.5) {\n      return \"blue\";\n    } else {\n      return \"red\";\n    }\n  }\n\n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwibmFtZXMiOlsiU1RBVFVTX1RZUEVTIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJERUFEIiwiUGxheWVyIiwicG9zIiwiY29sb3IiLCJzdGF0dXMiLCJjdHgiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJ0ZWFtVHlwZSIsImNvbnN0cnVjdG9yIiwiaXNEZWFkIiwicmVuZGVyTW92ZSIsInNldFN0YXR1cyIsImRyYXdQbGF5ZXIiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJyYW5kIiwicmFuZG9tIiwiY2xvc2VQYXRoIiwiZmlsbCIsImNsZWFyQ29sb3IiLCJhY3RpdmF0ZVBsYXllciIsInRoYXQiLCJzZXRUaW1lb3V0IiwiZ2VuZXJhdGVSYW5kb21Db2xvciIsImRlYWN0aXZhdGVQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsWUFBWSxHQUFHO0FBQUU7QUFDbkJDLEVBQUFBLE1BQU0sRUFBRyxRQURRO0FBRWpCQyxFQUFBQSxRQUFRLEVBQUUsVUFGTztBQUdqQkMsRUFBQUEsSUFBSSxFQUFFO0FBSFcsQ0FBckI7O0FBTUEsTUFBTUMsTUFBTixDQUFhO0FBQ1RDLEVBQUFBLEdBQUc7QUFDSEMsRUFBQUEsS0FBSztBQUNMQyxFQUFBQSxNQUFNO0FBQ05DLEVBQUFBLEdBQUcsQ0FKTSxDQUlKOztBQUNMQyxFQUFBQSxNQUFNLENBTEcsQ0FLRjs7QUFDUEMsRUFBQUEsTUFBTSxDQU5HLENBTUY7O0FBQ1BDLEVBQUFBLFFBQVE7O0FBRVJDLEVBQUFBLFdBQVcsQ0FBQ1AsR0FBRCxFQUFLRyxHQUFMLEVBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCQyxRQUExQixFQUFtQztBQUMxQyxTQUFLTixHQUFMLEdBQVdBLEdBQVgsRUFDQSxLQUFLQyxLQUFMLEdBQWEsT0FEYixFQUVBLEtBQUtDLE1BQUwsR0FBY1AsWUFBWSxDQUFDRSxRQUYzQjtBQUdBLFNBQUtPLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7O0FBRURFLEVBQUFBLE1BQU0sR0FBRTtBQUNKLFdBQU8sS0FBS04sTUFBTCxLQUFnQlAsWUFBWSxDQUFDRyxJQUFwQztBQUNIOztBQUNEVyxFQUFBQSxVQUFVLEdBQUU7QUFDUixXQUFPLEtBQUtSLEtBQVo7QUFFSDs7QUFFRFMsRUFBQUEsU0FBUyxDQUFDUixNQUFELEVBQVE7QUFDYixTQUFLQSxNQUFMLEdBQWNQLFlBQVksQ0FBQ08sTUFBRCxDQUExQjtBQUNIOztBQUVEUyxFQUFBQSxVQUFVLEdBQUc7QUFDVCxTQUFLUixHQUFMLENBQVNTLFNBQVQ7QUFDQSxTQUFLVCxHQUFMLENBQVNVLEdBQVQsQ0FBYSxLQUFLVCxNQUFsQixFQUEwQixLQUFLQyxNQUEvQixFQUF1QyxFQUF2QyxFQUEyQyxDQUEzQyxFQUE4QyxJQUFJUyxJQUFJLENBQUNDLEVBQXZEOztBQUNBLFFBQUcsS0FBS1QsUUFBTCxLQUFrQixZQUFyQixFQUFrQztBQUM5QixXQUFLSCxHQUFMLENBQVNhLFNBQVQsR0FBcUIsTUFBckI7QUFFSCxLQUhELE1BR087QUFDSCxVQUFJQyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksTUFBTCxFQUFYO0FBQ0EsV0FBS2YsR0FBTCxDQUFTYSxTQUFULEdBQXFCLE9BQXJCO0FBQ0g7O0FBQ0QsU0FBS2IsR0FBTCxDQUFTZ0IsU0FBVDtBQUNBLFNBQUtoQixHQUFMLENBQVNpQixJQUFULEdBWFMsQ0FhVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsR0FBRTtBQUNQLFNBQUtwQixLQUFMLEdBQWEsRUFBYjtBQUVKOztBQUVEcUIsRUFBQUEsY0FBYyxDQUFDckIsS0FBSyxHQUFHLE1BQVQsRUFBZ0I7QUFDMUIsUUFBSXNCLElBQUksR0FBRyxJQUFYO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CRCxNQUFBQSxJQUFJLENBQUNaLFVBQUw7QUFDQVksTUFBQUEsSUFBSSxDQUFDRixVQUFMO0FBQ0FFLE1BQUFBLElBQUksQ0FBQ3RCLEtBQUwsR0FBYXNCLElBQUksQ0FBQ2pCLFFBQUwsS0FBa0IsWUFBbEIsR0FBaUNMLEtBQWpDLEdBQXlDc0IsSUFBSSxDQUFDRSxtQkFBTCxFQUF0RDtBQUNBRixNQUFBQSxJQUFJLENBQUNwQixHQUFMLENBQVNhLFNBQVQsR0FBcUJPLElBQUksQ0FBQ3RCLEtBQTFCO0FBQ0FzQixNQUFBQSxJQUFJLENBQUNwQixHQUFMLENBQVNpQixJQUFUO0FBQ0FHLE1BQUFBLElBQUksQ0FBQ3BCLEdBQUwsQ0FBU2dCLFNBQVQ7QUFBc0IsS0FOaEIsRUFNa0IsSUFObEIsQ0FBVjtBQVFIOztBQUVETyxFQUFBQSxnQkFBZ0IsR0FBRTtBQUNkLFNBQUtMLFVBQUw7QUFDQU0sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUMsS0FBSzVCLEdBQXhDLEVBQTZDLEtBQUtNLFFBQWxEO0FBQ0EsU0FBS0ssVUFBTDtBQUNBLFNBQUtULE1BQUwsR0FBY1AsWUFBWSxDQUFDRSxRQUEzQjtBQUVIOztBQUNENEIsRUFBQUEsbUJBQW1CLEdBQUU7QUFDakIsVUFBTVIsSUFBSSxHQUFHSCxJQUFJLENBQUNJLE1BQUwsRUFBYjs7QUFFQSxRQUFJRCxJQUFJLEdBQUcsR0FBWCxFQUFlO0FBQ1gsYUFBTyxNQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFuRlE7O0FBMEZiWSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgU1RBVFVTX1RZUEVTID0geyAvL2VudW1cbiAgICBBQ1RJVkUgOiAnQUNUSVZFJyxcbiAgICBJTkFDVElWRTogJ0lOQUNUSVZFJyxcbiAgICBERUFEOiAnREVBRCdcbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgICBwb3M7XG4gICAgY29sb3I7XG4gICAgc3RhdHVzO1xuICAgIGN0eDsgLy8gdGllIHRoaXMgY2FudmFzIHRvIHRoZSB3aW5kb3cgaW5zdGVhZCBvZiBwYXNzaW5nIGl0IGRvd24gZWFjaCB0aW1lIFxuICAgIHhDb29yZCAvLyB4cG9zaXRpb25tXG4gICAgeUNvb3JkIC8vIHkgcG9zaXRpb25cbiAgICB0ZWFtVHlwZTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwb3MsY3R4LCB4Q29vcmQsIHlDb29yZCwgdGVhbVR5cGUpe1xuICAgICAgICB0aGlzLnBvcyA9IHBvcyxcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiY29sb3JcIixcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBTVEFUVVNfVFlQRVMuSU5BQ1RJVkU7XG4gICAgICAgIHRoaXMueENvb3JkID0geENvb3JkO1xuICAgICAgICB0aGlzLnlDb29yZCA9IHlDb29yZDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudGVhbVR5cGUgPSB0ZWFtVHlwZTtcbiAgICB9XG4gICAgXG4gICAgaXNEZWFkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gU1RBVFVTX1RZUEVTLkRFQUQ7XG4gICAgfVxuICAgIHJlbmRlck1vdmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XG5cbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoc3RhdHVzKXtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBTVEFUVVNfVFlQRVNbc3RhdHVzXTtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCwgMjAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgaWYodGhpcy50ZWFtVHlwZSA9PT0gJ1RFQU1fTUFUQ0gnKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicGlua1wiOyBcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgIC8vIHRoaXMuY3R4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgbWUnLCB0aGlzKVxuICAgICAgICAvLyAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgY2xlYXJDb2xvcigpe1xuICAgICAgICAgdGhpcy5jb2xvciA9ICcnO1xuXG4gICAgfVxuXG4gICAgYWN0aXZhdGVQbGF5ZXIoY29sb3IgPSBcImJsdWVcIil7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IFxuICAgICAgICAgICAgdGhhdC5kcmF3UGxheWVyKClcbiAgICAgICAgICAgIHRoYXQuY2xlYXJDb2xvcigpO1xuICAgICAgICAgICAgdGhhdC5jb2xvciA9IHRoYXQudGVhbVR5cGUgPT09ICdURUFNX01BVENIJyA/IGNvbG9yIDogdGhhdC5nZW5lcmF0ZVJhbmRvbUNvbG9yKCk7XG4gICAgICAgICAgICB0aGF0LmN0eC5maWxsU3R5bGUgPSB0aGF0LmNvbG9yO1xuICAgICAgICAgICAgdGhhdC5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhhdC5jdHguY2xvc2VQYXRoKCkgfSwgMjAwMCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRlYWN0aXZhdGVQbGF5ZXIoKXtcbiAgICAgICAgdGhpcy5jbGVhckNvbG9yKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVhY3RpdmF0aW5nIHBsYXllclwiLCB0aGlzLnBvcywgdGhpcy50ZWFtVHlwZSlcbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gU1RBVFVTX1RZUEVTLklOQUNUSVZFO1xuXG4gICAgfVxuICAgIGdlbmVyYXRlUmFuZG9tQ29sb3IoKXtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaWYgKHJhbmQgPCAwLjUpe1xuICAgICAgICAgICAgcmV0dXJuIFwiYmx1ZVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgICAgICAgICBcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/team.js":
/*!*****************************!*\
  !*** ./src/scripts/team.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nconst TEAM_TYPE = {\n  TEAM_MATCH: 'TEAM_MATCH',\n  TEAM_UNMATCH: 'TEAM_UNMATCH'\n};\n\nclass Team {\n  //list of players\n  //type of string - match adn unamtch\n  //isDead?()\n  //two teams : Team A, Team B\n  players;\n  teamType;\n  numberOfPlayers;\n  ctx;\n  currentPlayerPosition;\n\n  constructor(numberOfPlayers, teamType, ctx) {\n    this.numberOfPlayers = numberOfPlayers;\n    this.teamType = teamType;\n    this.ctx = ctx;\n    this.currentPlayerPosition = 0;\n  }\n\n  getTeamYCoord() {\n    const startingMatchYCoord = 185;\n    const startingUnmatchYCoord = 75;\n    return this.teamType === TEAM_TYPE.TEAM_MATCH ? startingMatchYCoord : startingUnmatchYCoord;\n  }\n\n  createPlayers() {\n    let startingXCoord = 100;\n    let playerList = [];\n\n    for (let i = 0; i < this.numberOfPlayers; i++) {\n      console.log(startingXCoord, this.getTeamYCoord());\n      const currentPlayer = new Player(i, this.ctx, startingXCoord, this.getTeamYCoord(), this.teamType);\n      currentPlayer.drawPlayer();\n      playerList.push(currentPlayer);\n      startingXCoord += 75; // currentPlayer.setPlayerColor(color);\n    }\n\n    this.players = playerList;\n    return playerList;\n  }\n\n  activateCurrentPlayer() {\n    const currentPlayer = this.getCurrentPlayer();\n\n    if (this.teamType === TEAM_TYPE.TEAM_MATCH) {\n      currentPlayer.activatePlayer(\"red\");\n    } else {\n      currentPlayer.activatePlayer();\n    }\n  }\n\n  getCurrentPlayer() {\n    return this.players[this.currentPlayerPosition];\n  }\n\n  getNextPlayer() {\n    //change to set next player\n    const currentPlayer = this.getCurrentPlayer();\n    currentPlayer.deactivatePlayer();\n    this.currentPlayerPosition++;\n    return this.players[this.currentPlayerPosition];\n  }\n\n}\n\nmodule.exports = Team;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZWFtLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyx5Q0FBRCxDQUF0Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUc7QUFDZEMsRUFBQUEsVUFBVSxFQUFFLFlBREU7QUFFZEMsRUFBQUEsWUFBWSxFQUFFO0FBRkEsQ0FBbEI7O0FBS0EsTUFBTUMsSUFBTixDQUFXO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsRUFBQUEsT0FBTztBQUNQQyxFQUFBQSxRQUFRO0FBQ1JDLEVBQUFBLGVBQWU7QUFDZkMsRUFBQUEsR0FBRztBQUNIQyxFQUFBQSxxQkFBcUI7O0FBRXJCQyxFQUFBQSxXQUFXLENBQUNILGVBQUQsRUFBa0JELFFBQWxCLEVBQTRCRSxHQUE1QixFQUFpQztBQUN4QyxTQUFLRCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0UsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsQ0FBN0I7QUFFSDs7QUFFREUsRUFBQUEsYUFBYSxHQUFHO0FBQ1osVUFBTUMsbUJBQW1CLEdBQUcsR0FBNUI7QUFDQSxVQUFNQyxxQkFBcUIsR0FBRyxFQUE5QjtBQUNBLFdBQU8sS0FBS1AsUUFBTCxLQUFrQkwsU0FBUyxDQUFDQyxVQUE1QixHQUF5Q1UsbUJBQXpDLEdBQStEQyxxQkFBdEU7QUFDSDs7QUFFREMsRUFBQUEsYUFBYSxHQUFHO0FBQ1osUUFBSUMsY0FBYyxHQUFHLEdBQXJCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVixlQUF6QixFQUEwQ1UsQ0FBQyxFQUEzQyxFQUErQztBQUMzQ0MsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLGNBQVosRUFBNEIsS0FBS0osYUFBTCxFQUE1QjtBQUNBLFlBQU1TLGFBQWEsR0FBRyxJQUFJckIsTUFBSixDQUFXa0IsQ0FBWCxFQUFjLEtBQUtULEdBQW5CLEVBQXdCTyxjQUF4QixFQUF3QyxLQUFLSixhQUFMLEVBQXhDLEVBQTZELEtBQUtMLFFBQWxFLENBQXRCO0FBQ0FjLE1BQUFBLGFBQWEsQ0FBQ0MsVUFBZDtBQUNBTCxNQUFBQSxVQUFVLENBQUNNLElBQVgsQ0FBZ0JGLGFBQWhCO0FBQ0FMLE1BQUFBLGNBQWMsSUFBSSxFQUFsQixDQUwyQyxDQU0zQztBQUVIOztBQUNELFNBQUtWLE9BQUwsR0FBZVcsVUFBZjtBQUNBLFdBQU9BLFVBQVA7QUFDSDs7QUFHRE8sRUFBQUEscUJBQXFCLEdBQUU7QUFDbkIsVUFBTUgsYUFBYSxHQUFHLEtBQUtJLGdCQUFMLEVBQXRCOztBQUVBLFFBQUksS0FBS2xCLFFBQUwsS0FBa0JMLFNBQVMsQ0FBQ0MsVUFBaEMsRUFBMkM7QUFDdkNrQixNQUFBQSxhQUFhLENBQUNLLGNBQWQsQ0FBNkIsS0FBN0I7QUFDSCxLQUZELE1BRU87QUFFSEwsTUFBQUEsYUFBYSxDQUFDSyxjQUFkO0FBQ0g7QUFDSjs7QUFFREQsRUFBQUEsZ0JBQWdCLEdBQUU7QUFDZCxXQUFPLEtBQUtuQixPQUFMLENBQWEsS0FBS0kscUJBQWxCLENBQVA7QUFFSDs7QUFFRGlCLEVBQUFBLGFBQWEsR0FBRTtBQUFFO0FBQ2QsVUFBTU4sYUFBYSxHQUFHLEtBQUtJLGdCQUFMLEVBQXRCO0FBQ0FKLElBQUFBLGFBQWEsQ0FBQ08sZ0JBQWQ7QUFDQSxTQUFLbEIscUJBQUw7QUFDQyxXQUFPLEtBQUtKLE9BQUwsQ0FBYSxLQUFLSSxxQkFBbEIsQ0FBUDtBQUNIOztBQWhFTTs7QUF3RVhtQixNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixJQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FtcGVfanMvLi9zcmMvc2NyaXB0cy90ZWFtLmpzP2I0YzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IFRFQU1fVFlQRSA9IHtcbiAgICBURUFNX01BVENIOiAnVEVBTV9NQVRDSCcsXG4gICAgVEVBTV9VTk1BVENIOiAnVEVBTV9VTk1BVENIJ1xufTtcblxuY2xhc3MgVGVhbSB7XG4gICAgLy9saXN0IG9mIHBsYXllcnNcbiAgICAvL3R5cGUgb2Ygc3RyaW5nIC0gbWF0Y2ggYWRuIHVuYW10Y2hcbiAgICAvL2lzRGVhZD8oKVxuICAgIC8vdHdvIHRlYW1zIDogVGVhbSBBLCBUZWFtIEJcblxuICAgIHBsYXllcnM7XG4gICAgdGVhbVR5cGU7XG4gICAgbnVtYmVyT2ZQbGF5ZXJzO1xuICAgIGN0eDsgICBcbiAgICBjdXJyZW50UGxheWVyUG9zaXRpb247XG4gICAgIFxuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mUGxheWVycywgdGVhbVR5cGUsIGN0eCkge1xuICAgICAgICB0aGlzLm51bWJlck9mUGxheWVycyA9IG51bWJlck9mUGxheWVycztcbiAgICAgICAgdGhpcy50ZWFtVHlwZSA9IHRlYW1UeXBlO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb24gPSAwO1xuXG4gICAgfVxuXG4gICAgZ2V0VGVhbVlDb29yZCgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdNYXRjaFlDb29yZCA9IDE4NTtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdVbm1hdGNoWUNvb3JkID0gNzU7XG4gICAgICAgIHJldHVybiB0aGlzLnRlYW1UeXBlID09PSBURUFNX1RZUEUuVEVBTV9NQVRDSCA/IHN0YXJ0aW5nTWF0Y2hZQ29vcmQgOiBzdGFydGluZ1VubWF0Y2hZQ29vcmQ7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVycygpIHtcbiAgICAgICAgbGV0IHN0YXJ0aW5nWENvb3JkID0gMTAwO1xuICAgICAgICBsZXQgcGxheWVyTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZQbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0aW5nWENvb3JkLCB0aGlzLmdldFRlYW1ZQ29vcmQoKSlcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBuZXcgUGxheWVyKGksIHRoaXMuY3R4LCBzdGFydGluZ1hDb29yZCwgdGhpcy5nZXRUZWFtWUNvb3JkKCksdGhpcy50ZWFtVHlwZSk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLmRyYXdQbGF5ZXIoKTtcbiAgICAgICAgICAgIHBsYXllckxpc3QucHVzaChjdXJyZW50UGxheWVyKTtcbiAgICAgICAgICAgIHN0YXJ0aW5nWENvb3JkICs9IDc1O1xuICAgICAgICAgICAgLy8gY3VycmVudFBsYXllci5zZXRQbGF5ZXJDb2xvcihjb2xvcik7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJMaXN0O1xuICAgICAgICByZXR1cm4gcGxheWVyTGlzdDtcbiAgICB9XG5cbiAgICBcbiAgICBhY3RpdmF0ZUN1cnJlbnRQbGF5ZXIoKXtcbiAgICAgICAgY29uc3QgY3VycmVudFBsYXllciA9IHRoaXMuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMudGVhbVR5cGUgPT09IFRFQU1fVFlQRS5URUFNX01BVENIKXtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIuYWN0aXZhdGVQbGF5ZXIoXCJyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFBsYXllci5hY3RpdmF0ZVBsYXllcigpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0Q3VycmVudFBsYXllcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllclBvc2l0aW9uXTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0TmV4dFBsYXllcigpeyAvL2NoYW5nZSB0byBzZXQgbmV4dCBwbGF5ZXJcbiAgICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKClcbiAgICAgICBjdXJyZW50UGxheWVyLmRlYWN0aXZhdGVQbGF5ZXIoKTtcbiAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbiArKztcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbl07XG4gICAgfVxuXG5cblxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBUZWFtOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiVEVBTV9UWVBFIiwiVEVBTV9NQVRDSCIsIlRFQU1fVU5NQVRDSCIsIlRlYW0iLCJwbGF5ZXJzIiwidGVhbVR5cGUiLCJudW1iZXJPZlBsYXllcnMiLCJjdHgiLCJjdXJyZW50UGxheWVyUG9zaXRpb24iLCJjb25zdHJ1Y3RvciIsImdldFRlYW1ZQ29vcmQiLCJzdGFydGluZ01hdGNoWUNvb3JkIiwic3RhcnRpbmdVbm1hdGNoWUNvb3JkIiwiY3JlYXRlUGxheWVycyIsInN0YXJ0aW5nWENvb3JkIiwicGxheWVyTGlzdCIsImkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFBsYXllciIsImRyYXdQbGF5ZXIiLCJwdXNoIiwiYWN0aXZhdGVDdXJyZW50UGxheWVyIiwiZ2V0Q3VycmVudFBsYXllciIsImFjdGl2YXRlUGxheWVyIiwiZ2V0TmV4dFBsYXllciIsImRlYWN0aXZhdGVQbGF5ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/team.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;