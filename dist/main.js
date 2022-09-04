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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFNO0FBQ3JDLG1DQUFtQywrQ0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQyw2QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGTzs7QUFFaEM7QUFDQTtBQUNBLDJCQUEyQixvREFBZTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7O1VDcER0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvLi9zcmMva25pZ2h0LmpzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2tuaWdodHNfdHJhdmFpbC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va25pZ2h0c190cmF2YWlsL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga25pZ2h0IGZyb20gJy4va25pZ2h0JztcblxuY29uc3QgZ2FtZUJvYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXggPSAoeHBvcywgeXBvcykgPT4ge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIGRpc3RhbmNlOiBJbmZpbml0eSwgXG4gICAgICAgICAgICBwcmV2aW91czogdW5kZWZpbmVkLCBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbeHBvcywgeXBvc10sIFxuICAgICAgICAgICAgYWRqYWNlbmN5TGlzdDogW10gXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB2ZXJ0ZXgoaSwgaik7XG4gICAgICAgICAgICBib2FyZC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUdyYXBoID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGxldCBzb3VyY2U7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBib2FyZCkge1xuICAgICAgICAgICAgaWYgKG5vZGUucG9zaXRpb25bMF0gPT09IHBvc2l0aW9uWzBdICYmIG5vZGUucG9zaXRpb25bMV0gPT09IHBvc2l0aW9uWzFdKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxdWV1ZSA9IFtzb3VyY2VdO1xuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtb3ZlIGluIGtuaWdodCkge1xuICAgICAgICAgICAgICAgIGxldCBhZGphY2VudE5vZGUgPSBrbmlnaHRbbW92ZV0ocXVldWVbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChhZGphY2VudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkamFjZW50Tm9kZS5wcmV2aW91cyA9PT0gdW5kZWZpbmVkICYmIGFkamFjZW50Tm9kZSAhPT0gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGphY2VudE5vZGUucHJldmlvdXMgPSBxdWV1ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlWzBdLmFkamFjZW5jeUxpc3QucHVzaChhZGphY2VudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChhZGphY2VudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWFyY2hHcmFwaCA9IChncmFwaCwgc3RhcnQsIHRhcmdldCkgPT4ge1xuICAgICAgICBsZXQgc291cmNlO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID09PSBzdGFydFswXSAmJiBub2RlLnBvc2l0aW9uWzFdID09PSBzdGFydFsxXSkgc291cmNlID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2UuZGlzdGFuY2UgPSAwO1xuICAgICAgICBpZiAoc291cmNlLnBvc2l0aW9uWzBdID09PSB0YXJnZXRbMF0gJiYgc291cmNlLnBvc2l0aW9uWzFdID09PSB0YXJnZXRbMV0pIHJldHVybiBzb3VyY2U7XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gW3NvdXJjZV07XG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIHF1ZXVlWzBdLmFkamFjZW5jeUxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3IuZGlzdGFuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm9yLmRpc3RhbmNlID0gcXVldWVbMF0uZGlzdGFuY2UgKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3IucG9zaXRpb25bMF0gPT09IHRhcmdldFswXSAmJiBuZWlnaGJvci5wb3NpdGlvblsxXSA9PT0gdGFyZ2V0WzFdKSByZXR1cm4gbmVpZ2hib3I7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJpbnRQYXRoID0gKGVuZE5vZGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFlvdSBtYWRlIGl0IGluICR7ZW5kTm9kZS5kaXN0YW5jZX0gbW92ZXMhIEhlcmUncyB5b3VyIHBhdGg6YCk7XG4gICAgICAgIGNvbnN0IExFTkdUSCA9IGVuZE5vZGUuZGlzdGFuY2UgKyAxO1xuICAgICAgICBjb25zdCBwYXRoID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTEVOR1RIOyArK2kpIHtcbiAgICAgICAgICAgIHBhdGgudW5zaGlmdChgWyR7ZW5kTm9kZS5wb3NpdGlvbi5qb2luKCcsICcpfV1gKTtcbiAgICAgICAgICAgIGVuZE5vZGUgPSBlbmROb2RlLnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc3RlcCBvZiBwYXRoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGVwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBrbmlnaHRNb3ZlcyA9IChzdGFydHBvcywgZW5kcG9zKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyYXBoID0gbWFrZUdyYXBoKHN0YXJ0cG9zKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHNlYXJjaEdyYXBoKGdyYXBoLCBzdGFydHBvcywgZW5kcG9zKTtcbiAgICAgICAgcmV0dXJuIHByaW50UGF0aChwYXRoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgYm9hcmQsIGtuaWdodE1vdmVzIH07IFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tICcuL2luZGV4JztcblxuY29uc3Qga25pZ2h0ID0gKCgpID0+IHtcbiAgICBjb25zdCBmaW5kTm9kZSA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZ2FtZUJvYXJkLmJvYXJkKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA9PT0gcG9zaXRpb25bMF0gJiYgbm9kZS5wb3NpdGlvblsxXSA9PT0gcG9zaXRpb25bMV0pIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVPbmUgPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA9PT0gMCB8fCBub2RlLnBvc2l0aW9uWzFdID4gNSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShbbm9kZS5wb3NpdGlvblswXSAtIDEsIG5vZGUucG9zaXRpb25bMV0gKyAyXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVUd28gPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA9PT0gNyB8fCBub2RlLnBvc2l0aW9uWzFdID4gNSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShbbm9kZS5wb3NpdGlvblswXSArIDEsIG5vZGUucG9zaXRpb25bMV0gKyAyXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVUaHJlZSA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdID4gNSB8fCBub2RlLnBvc2l0aW9uWzFdID09PSA3KSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKFtub2RlLnBvc2l0aW9uWzBdICsgMiwgbm9kZS5wb3NpdGlvblsxXSArIDFdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbW92ZUZvdXIgPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA+IDUgfHwgbm9kZS5wb3NpdGlvblsxXSA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShbbm9kZS5wb3NpdGlvblswXSArIDIsIG5vZGUucG9zaXRpb25bMV0gLSAxXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVGaXZlID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb25bMF0gPT09IDcgfHwgbm9kZS5wb3NpdGlvblsxXSA8IDIpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gZmluZE5vZGUoW25vZGUucG9zaXRpb25bMF0gKyAxLCBub2RlLnBvc2l0aW9uWzFdIC0gMl0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtb3ZlU2l4ID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUucG9zaXRpb25bMF0gPT09IDAgfHwgbm9kZS5wb3NpdGlvblsxXSA8IDIpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gZmluZE5vZGUoW25vZGUucG9zaXRpb25bMF0gLSAxLCBub2RlLnBvc2l0aW9uWzFdIC0gMl0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtb3ZlU2V2ZW4gPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5wb3NpdGlvblswXSA8IDIgfHwgbm9kZS5wb3NpdGlvblsxXSA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBmaW5kTm9kZShbbm9kZS5wb3NpdGlvblswXSAtIDIsIG5vZGUucG9zaXRpb25bMV0gLSAxXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVFaWdodCA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnBvc2l0aW9uWzBdIDwgMiB8fCBub2RlLnBvc2l0aW9uWzFdID09PSA3KSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZpbmROb2RlKFtub2RlLnBvc2l0aW9uWzBdIC0gMiwgbm9kZS5wb3NpdGlvblsxXSArIDFdKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbW92ZU9uZSwgbW92ZVR3bywgbW92ZVRocmVlLCBtb3ZlRm91ciwgbW92ZUZpdmUsIG1vdmVTaXgsIG1vdmVTZXZlbiwgbW92ZUVpZ2h0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBrbmlnaHQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9