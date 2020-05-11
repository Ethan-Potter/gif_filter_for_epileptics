/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chrome/scripts/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chrome/scripts/content.js":
/*!***********************************!*\
  !*** ./chrome/scripts/content.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/chrome/scripts/content.js: Unexpected token (18:10)\n\n\u001b[0m \u001b[90m 16 | \u001b[39m\u001b[36mfunction\u001b[39m chageGIF (image) {\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m  getPixels(image\u001b[33m.\u001b[39msrc\u001b[33m,\u001b[39m \u001b[36mfunction\u001b[39m(err\u001b[33m,\u001b[39m pixels) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 | \u001b[39m  \u001b[36mfunction\u001b[39m(err\u001b[33m,\u001b[39m pixels) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m    \u001b[36mif\u001b[39m(err) {\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m      console\u001b[33m.\u001b[39mlog(\u001b[32m\"bad image path\"\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m      \u001b[36mreturn\u001b[39m\u001b[0m\n    at Parser._raise (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:8779:16)\n    at Parser.parseIdentifierName (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10771:18)\n    at Parser.parseIdentifier (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10748:23)\n    at Parser.parseFunctionId (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11835:55)\n    at Parser.parseFunction (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11801:22)\n    at Parser.parseFunctionStatement (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11450:17)\n    at Parser.parseStatementContent (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11142:21)\n    at Parser.parseStatement (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11104:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11679:25)\n    at Parser.parseBlockBody (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11665:10)\n    at Parser.parseBlock (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11649:10)\n    at Parser.parseFunctionBody (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10656:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10639:10)\n    at /Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11819:12\n    at Parser.withTopicForbiddingContext (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10979:14)\n    at Parser.parseFunction (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:11818:10)\n    at Parser.parseFunctionExpression (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10115:17)\n    at Parser.parseExprAtom (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10023:21)\n    at Parser.parseExprSubscripts (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Parser.parseMaybeUnary (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Parser.parseExprOps (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Parser.parseMaybeConditional (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Parser.parseMaybeAssign (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Parser.parseExprListItem (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:10740:18)\n    at Parser.parseCallExpressionArguments (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9812:22)\n    at Parser.parseSubscript (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9718:31)\n    at Parser.parseSubscripts (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9647:19)\n    at Parser.parseExprSubscripts (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9630:17)\n    at Parser.parseMaybeUnary (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Parser.parseExprOps (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Parser.parseMaybeConditional (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Parser.parseMaybeAssign (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Parser.parseExpression (/Users/ethanrobertpotter/Projects/epilepsy_chrome_projects/gif_filter_for_epileptics/node_modules/@babel/parser/lib/index.js:9354:23)");

/***/ })

/******/ });
//# sourceMappingURL=content.js.map