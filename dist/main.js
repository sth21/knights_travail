/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ "./src/knight.js");


const gameBoard = (() => {
    const vertex = (xpos, ypos) => {
        return { 
            distance: Infinity, 
            previous: undefined, 
            position: [xpos, ypos], 
            adjacencyList: [] 
        };
    };

    const board = [];
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            const node = vertex(i, j);
            board.push(node);
        }
    }

    const makeGraph = (position) => {
        let source;
        for (const node of board) {
            if (node.position[0] === position[0] && node.position[1] === position[1]) {
                source = node;
                break;
            }
        }
        const queue = [source];
        while (queue.length > 0) {
            for (const move in _knight__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                let adjacentNode = _knight__WEBPACK_IMPORTED_MODULE_0__["default"][move](queue[0]);
                if (adjacentNode !== null) {
                    if (adjacentNode.previous === undefined && adjacentNode !== source) {
                        adjacentNode.previous = queue[0];
                        queue[0].adjacencyList.push(adjacentNode);
                        queue.push(adjacentNode);
                    }
                }
            }
            queue.shift();
        }
        return source;
    };

    const searchGraph = (graph, start, target) => {
        let source;
        for (const node of board) {
            if (node.position[0] === start[0] && node.position[1] === start[1]) source = node;
        }
        source.distance = 0;
        if (source.position[0] === target[0] && source.position[1] === target[1]) return source;
        const queue = [source];
        while (queue.length > 0) {
            for (const neighbor of queue[0].adjacencyList) {
                if (neighbor.distance === Infinity) {
                    neighbor.distance = queue[0].distance + 1;
                    if (neighbor.position[0] === target[0] && neighbor.position[1] === target[1]) return neighbor;
                    queue.push(neighbor);
                }
            }
            queue.shift();
        }
    };

    const printPath = (endNode) => {
        console.log(`You made it in ${endNode.distance} moves! Here's your path:`);
        const LENGTH = endNode.distance + 1;
        const path = [];
        for (let i = 0; i < LENGTH; ++i) {
            path.unshift(`[${endNode.position.join(', ')}]`);
            endNode = endNode.previous;
        }
        for (const step of path) {
            console.log(step);
        }
    };

    const knightMoves = (startpos, endpos) => {
        const graph = makeGraph(startpos);
        const path = searchGraph(graph, startpos, endpos);
        return printPath(path);
    };

    return { board, knightMoves }; 
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

gameBoard.knightMoves([0, 0], [0, 1]);

/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const knight = (() => {
    const findNode = (position) => {
        for (const node of _index__WEBPACK_IMPORTED_MODULE_0__["default"].board) {
            if (node.position[0] === position[0] && node.position[1] === position[1]) return node;
        }
    };

    const moveOne = (node) => {
        if (node.position[0] === 0 || node.position[1] > 5) return null;
        return findNode([node.position[0] - 1, node.position[1] + 2]);
    };

    const moveTwo = (node) => {
        if (node.position[0] === 7 || node.position[1] > 5) return null;
        return findNode([node.position[0] + 1, node.position[1] + 2]);
    };

    const moveThree = (node) => {
        if (node.position[0] > 5 || node.position[1] === 7) return null;
        return findNode([node.position[0] + 2, node.position[1] + 1]);
    };

    const moveFour = (node) => {
        if (node.position[0] > 5 || node.position[1] === 0) return null;
        return findNode([node.position[0] + 2, node.position[1] - 1]);
    };

    const moveFive = (node) => {
        if (node.position[0] === 7 || node.position[1] < 2) return null;
        return findNode([node.position[0] + 1, node.position[1] - 2]);
    };

    const moveSix = (node) => {
        if (node.position[0] === 0 || node.position[1] < 2) return null;
        return findNode([node.position[0] - 1, node.position[1] - 2]);
    };

    const moveSeven = (node) => {
        if (node.position[0] < 2 || node.position[1] === 0) return null;
        return findNode([node.position[0] - 2, node.position[1] - 1]);
    };

    const moveEight = (node) => {
        if (node.position[0] < 2 || node.position[1] === 7) return null;
        return findNode([node.position[0] - 2, node.position[1] + 1]);
    };

    return { moveOne, moveTwo, moveThree, moveFour, moveFive, moveSix, moveSeven, moveEight };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knight);


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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFNO0FBQ3JDLG1DQUFtQywrQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyw2QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLFNBQVMsRUFBQzs7QUFFekI7Ozs7Ozs7Ozs7Ozs7OztBQ3pGZ0M7O0FBRWhDO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQWU7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3BEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsLy4vc3JjL2tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtuaWdodCBmcm9tICcuL2tuaWdodCc7XG5cbmNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgdmVydGV4ID0gKHhwb3MsIHlwb3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBkaXN0YW5jZTogSW5maW5pdHksIFxuICAgICAgICAgICAgcHJldmlvdXM6IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICBwb3NpdGlvbjogW3hwb3MsIHlwb3NdLCBcbiAgICAgICAgICAgIGFkamFjZW5jeUxpc3Q6IFtdIFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdmVydGV4KGksIGopO1xuICAgICAgICAgICAgYm9hcmQucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VHcmFwaCA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgICBsZXQgc291cmNlO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID09PSBwb3NpdGlvblswXSAmJiBub2RlLnBvc2l0aW9uWzFdID09PSBwb3NpdGlvblsxXSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVldWUgPSBbc291cmNlXTtcbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbW92ZSBpbiBrbmlnaHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnROb2RlID0ga25pZ2h0W21vdmVdKHF1ZXVlWzBdKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRqYWNlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGphY2VudE5vZGUucHJldmlvdXMgPT09IHVuZGVmaW5lZCAmJiBhZGphY2VudE5vZGUgIT09IHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqYWNlbnROb2RlLnByZXZpb3VzID0gcXVldWVbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZVswXS5hZGphY2VuY3lMaXN0LnB1c2goYWRqYWNlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goYWRqYWNlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VhcmNoR3JhcGggPSAoZ3JhcGgsIHN0YXJ0LCB0YXJnZXQpID0+IHtcbiAgICAgICAgbGV0IHNvdXJjZTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA9PT0gc3RhcnRbMF0gJiYgbm9kZS5wb3NpdGlvblsxXSA9PT0gc3RhcnRbMV0pIHNvdXJjZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlLmRpc3RhbmNlID0gMDtcbiAgICAgICAgaWYgKHNvdXJjZS5wb3NpdGlvblswXSA9PT0gdGFyZ2V0WzBdICYmIHNvdXJjZS5wb3NpdGlvblsxXSA9PT0gdGFyZ2V0WzFdKSByZXR1cm4gc291cmNlO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IFtzb3VyY2VdO1xuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBxdWV1ZVswXS5hZGphY2VuY3lMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yLmRpc3RhbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvci5kaXN0YW5jZSA9IHF1ZXVlWzBdLmRpc3RhbmNlICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yLnBvc2l0aW9uWzBdID09PSB0YXJnZXRbMF0gJiYgbmVpZ2hib3IucG9zaXRpb25bMV0gPT09IHRhcmdldFsxXSkgcmV0dXJuIG5laWdoYm9yO1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW50UGF0aCA9IChlbmROb2RlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBZb3UgbWFkZSBpdCBpbiAke2VuZE5vZGUuZGlzdGFuY2V9IG1vdmVzISBIZXJlJ3MgeW91ciBwYXRoOmApO1xuICAgICAgICBjb25zdCBMRU5HVEggPSBlbmROb2RlLmRpc3RhbmNlICsgMTtcbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IExFTkdUSDsgKytpKSB7XG4gICAgICAgICAgICBwYXRoLnVuc2hpZnQoYFske2VuZE5vZGUucG9zaXRpb24uam9pbignLCAnKX1dYCk7XG4gICAgICAgICAgICBlbmROb2RlID0gZW5kTm9kZS5wcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgcGF0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RlcCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qga25pZ2h0TW92ZXMgPSAoc3RhcnRwb3MsIGVuZHBvcykgPT4ge1xuICAgICAgICBjb25zdCBncmFwaCA9IG1ha2VHcmFwaChzdGFydHBvcyk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBzZWFyY2hHcmFwaChncmFwaCwgc3RhcnRwb3MsIGVuZHBvcyk7XG4gICAgICAgIHJldHVybiBwcmludFBhdGgocGF0aCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGJvYXJkLCBrbmlnaHRNb3ZlcyB9OyBcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcblxuZ2FtZUJvYXJkLmtuaWdodE1vdmVzKFswLCAwXSwgWzAsIDFdKTsiLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBrbmlnaHQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGZpbmROb2RlID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBnYW1lQm9hcmQuYm9hcmQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID09PSBwb3NpdGlvblswXSAmJiBub2RlLnBvc2l0aW9uWzFdID09PSBwb3NpdGlvblsxXSkgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZU9uZSA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID09PSAwIHx8IG5vZGUucG9zaXRpb25bMV0gPiA1KSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKFtub2RlLnBvc2l0aW9uWzBdIC0gMSwgbm9kZS5wb3NpdGlvblsxXSArIDJdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZVR3byA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID09PSA3IHx8IG5vZGUucG9zaXRpb25bMV0gPiA1KSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKFtub2RlLnBvc2l0aW9uWzBdICsgMSwgbm9kZS5wb3NpdGlvblsxXSArIDJdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZVRocmVlID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb25bMF0gPiA1IHx8IG5vZGUucG9zaXRpb25bMV0gPT09IDcpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gZmluZE5vZGUoW25vZGUucG9zaXRpb25bMF0gKyAyLCBub2RlLnBvc2l0aW9uWzFdICsgMV0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtb3ZlRm91ciA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID4gNSB8fCBub2RlLnBvc2l0aW9uWzFdID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKFtub2RlLnBvc2l0aW9uWzBdICsgMiwgbm9kZS5wb3NpdGlvblsxXSAtIDFdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZUZpdmUgPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA9PT0gNyB8fCBub2RlLnBvc2l0aW9uWzFdIDwgMikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShbbm9kZS5wb3NpdGlvblswXSArIDEsIG5vZGUucG9zaXRpb25bMV0gLSAyXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVTaXggPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA9PT0gMCB8fCBub2RlLnBvc2l0aW9uWzFdIDwgMikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShbbm9kZS5wb3NpdGlvblswXSAtIDEsIG5vZGUucG9zaXRpb25bMV0gLSAyXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVTZXZlbiA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdIDwgMiB8fCBub2RlLnBvc2l0aW9uWzFdID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKFtub2RlLnBvc2l0aW9uWzBdIC0gMiwgbm9kZS5wb3NpdGlvblsxXSAtIDFdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZUVpZ2h0ID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb25bMF0gPCAyIHx8IG5vZGUucG9zaXRpb25bMV0gPT09IDcpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gZmluZE5vZGUoW25vZGUucG9zaXRpb25bMF0gLSAyLCBub2RlLnBvc2l0aW9uWzFdICsgMV0pO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBtb3ZlT25lLCBtb3ZlVHdvLCBtb3ZlVGhyZWUsIG1vdmVGb3VyLCBtb3ZlRml2ZSwgbW92ZVNpeCwgbW92ZVNldmVuLCBtb3ZlRWlnaHQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGtuaWdodDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=