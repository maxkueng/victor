var domready = require('domready');

exports = module.exports = johnson;

function johnson (el) {
	var style;
	var height = 0;
	var windowHeight = 0;
	var lastScrollTop = 0;

	var originalOffset = 0;

	var isStuckTop = false;
	var isStuckBottom = false;

	var bigMode = false;

	domready(initialize);

	function initialize () {
		lastScrollTop = getScrollTop();
		recalculate();
		onScroll();

		window.addEventListener('resize', recalculate);
	}

	function recalculate () {
		windowHeight = window.innerHeight;
		style = window.getComputedStyle(el);
		height = parseInt(style.getPropertyValue('height'));

		originalOffset = getOffsetTop(el.parentElement);

		bigMode = isBig();
	}

	function onScroll (e) {
		var scrollTop = getScrollTop();
		var direction = (scrollTop > lastScrollTop) ? 'down' : 'up';
		lastScrollTop = scrollTop;

		if (!bigMode && isTopAboveTopEdge()) {
			stickToTop();
		}

		if (!bigMode && isStuckTop && isOriginBelowTopEdge()) {
			restore();
		}

		if (bigMode && direction === 'down' && isBottomAboveBottomEdge()) {
			unabsolutize();
			stickToBottom();
		}

		if (bigMode && direction === 'up' && !isTopAboveTopEdge()) {
			unabsolutize();
			stickToTop();
		}

		if (bigMode && direction === 'down' && isStuckTop) {
			absolutize();
			unstickFromTop();
		}

		if (bigMode && direction === 'up' && isStuckBottom) {
			absolutize();
			unstickFromBottom();
		}

		if (bigMode && direction === 'up' && isStuckTop && isOriginBelowTopEdge()) {
			restore();
		}
	}

	function stickToTop () {
		isStuckTop = true;
		el.classList.add('stick-top');
	}

	function stickToBottom () {
		isStuckBottom = true;
		el.classList.add('stick-bottom');
	}

	function unstickFromBottom () {
		isStuckBottom = false;
		el.classList.remove('stick-bottom');
	}

	function unstickFromTop () {
		isStuckTop = false;
		el.classList.remove('stick-top');
	}

	function absolutize () {
		el.classList.add('absolute');
		el.style.marginTop = (getScrollTop() + getOffsets().top - originalOffset ) + 'px';
	}

	function unabsolutize () {
		el.classList.remove('absolute');
		el.style.marginTop = '0';
	}

	function restore () {
		unabsolutize();
		unstickFromTop();
		unstickFromBottom();
	}

	function isBig () {
		return (height > windowHeight);
	}

	function isTopAboveTopEdge () {
		return (getOffsets().top < 0);
	}

	function isBottomAboveBottomEdge () {
		return ((getOffsets().bottom - windowHeight) <= 0);
	}

	function isOriginBelowTopEdge () {
		return (getScrollTop() <= originalOffset);
	}

	function getOffsets () {
		return el.getBoundingClientRect();
	}

	function getOffsetTop (el) {
		var box = el.getBoundingClientRect()
		var scrollTop = getScrollTop();
		var clientTop = getClientTop();
		
		var top  = box.top +  scrollTop - clientTop
		
		return Math.round(top);
	}

	function getClientTop () {
		var body = document.body
		var docElem = document.documentElement
		return docElem.clientTop || body.clientTop || 0;
	}

	function getScrollTop () {
		var body = document.body
		var docElem = document.documentElement
		return window.pageYOffset || docElem.scrollTop || body.scrollTop;
	}

	window.addEventListener('scroll', onScroll);
}
