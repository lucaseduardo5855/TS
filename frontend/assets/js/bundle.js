/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/0035-Exercicio-Video/0035-Exercicio-Video.ts"
/*!**********************************************************!*\
  !*** ./src/0035-Exercicio-Video/0035-Exercicio-Video.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//Classe com implements
class VideoPlay {
    constructor(VideoPlayerElements) {
        this.videoPlay = VideoPlayerElements.videoPlay;
        this.playButton = VideoPlayerElements.playButton;
        this.stopButton = VideoPlayerElements.stopButton;
    }
    iniciarVideo() {
        this.playButton.addEventListener('click', () => {
            this.playToogle();
        });
        this.stopButton.addEventListener('click', () => {
            this.videoPlay.pause();
            this.videoPlay.currentTime = 0;
        });
    }
    playToogle() {
        if (this.videoPlay.paused) {
            this.videoPlay.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlay.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        //
    }
}
exports["default"] = VideoPlay;
//Variaveis
const playVideo = new VideoPlay({
    videoPlay: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
playVideo.iniciarVideo();
//botoes tem q iniciar e pausar ao apertar, botao stop tem q


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/A0019-exercicio/A0019-exercicio.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
//import './form-control'
__webpack_require__(/*! ../0035-Exercicio-Video/0035-Exercicio-Video */ "./src/0035-Exercicio-Video/0035-Exercicio-Video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map