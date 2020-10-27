/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boardDrawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDrawing */ \"./js/boardDrawing.js\");\n\r\n\r\nconst chessGame = _boardDrawing__WEBPACK_IMPORTED_MODULE_0__.chessGameDemo ;\n\n//# sourceURL=webpack://chessgame-nativejs/./js/app.js?");

/***/ }),

/***/ "./js/boardDrawing.js":
/*!****************************!*\
  !*** ./js/boardDrawing.js ***!
  \****************************/
/*! namespace exports */
/*! export chessGameDemo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chessGameDemo\": () => /* binding */ chessGameDemo\n/* harmony export */ });\nconst chessGameDemo = document.addEventListener(\"DOMContentLoaded\", () => {\r\n    const chessBoard = document.createElement(\"div\");\r\n    chessBoard.id = \"chessboard\";\r\n    document.body.appendChild(chessBoard);\r\n    \r\n    //function to draw the chess board\r\n    (async () => {\r\n\r\n     let chessItem = document.createElement('div');\r\n     chessItem.classList.add('item');\r\n     chessItem.setAttribute('draggable',\"true\");\r\n\r\n      let idAttr=0, currTileId, possibleDistanceMoves, tiles=[], starterId;\r\n      //get allowed moves distance from server\r\n      await fetch('http://localhost:3000/possible_distance_moves').then(res=>res.json()).then(data => possibleDistanceMoves =data.possibleDistanceMoves)\r\n      for (let i = 1; i <= 8; i++) {//rows\r\n        let colorClass, tile;\r\n        for (let j = 1; j <= 8; j++) {//columns\r\n          (i+j) %2 == 0 ? colorClass =\"black\" : colorClass =\"white\";\r\n          tile = document.createElement(\"div\");\r\n          tile.classList.add(colorClass);\r\n         \r\n          if(i==4 && j ==4){\r\n            currClass = colorClass;\r\n            tile.appendChild(chessItem);\r\n\r\n          document.getElementById(\"chessboard\").appendChild(tile);\r\n          currTileId=idAttr;\r\n          const itemMove = document.querySelector('.item')\r\n       \r\n          itemMove.addEventListener('dragstart', dragStart)\r\n          itemMove.addEventListener('dragend', dragEnd)\r\n          }\r\n          tiles.push({id: idAttr, class: colorClass})\r\n          tile.setAttribute(\"id\", idAttr++);\r\n          document.getElementById(\"chessboard\").appendChild(tile);\r\n          tileId = document.querySelector('id')\r\n          tile.addEventListener('drop', dragDrop);\r\n          tile.addEventListener('dragover', dragOver);\r\n          tile.addEventListener('dragenter', dragEnter);\r\n          tile.addEventListener('dragleave', dragLeave);\r\n\r\n        }\r\n      }\r\n\r\n      const getAvailabeMovesIds = ()=>{\r\n        let AvMoves = possibleDistanceMoves.map(dis => starterId - dis).filter(id => id > 0);\r\n        AvMoves= AvMoves.concat(possibleDistanceMoves.map(dis => starterId + dis).filter(id => id < 64));\r\n        return AvMoves;\r\n      }\r\n\r\n      let AvMovesId=[];\r\n      function dragStart(){\r\n        setTimeout(() => this.className = 'invisible', 0);\r\n        starterId = parseInt(this.parentElement.id);\r\n        AvMovesId  = getAvailabeMovesIds()\r\n        AvMovesId.forEach((avTile)=> {\r\n         document.getElementById(avTile).className='hovered'\r\n        })\r\n\r\n      }\r\n\r\n      function dragEnd(e){\r\n        this.className='item';\r\n        AvMovesId.forEach((avTile)=> {\r\n         document.getElementById(avTile).className=tiles.filter(tile => tile.id == avTile)[0].class;\r\n        })\r\n      }\r\n\r\n      function dragDrop(e){\r\n        currTileId=parseInt(this.id);\r\n        if(AvMovesId.includes(currTileId)){\r\n          this.append(chessItem);\r\n        }\r\n      }\r\n       \r\n      function dragOver(e){\r\n        e.preventDefault();\r\n        \r\n       } \r\n        function dragEnter(e){\r\n        e.preventDefault();\r\n       }  \r\n       function dragLeave(e){\r\n        e.preventDefault();\r\n       }\r\n      \r\n    })();\r\n\r\n\r\n  });\r\n\r\n\n\n//# sourceURL=webpack://chessgame-nativejs/./js/boardDrawing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;