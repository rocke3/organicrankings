"use strict";

// Verify navbar blur on scroll
if (document.getElementById("navbarBlur")) {
	navbarBlurOnScroll("navbarBlur");
}

// initialization of Tooltips
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

// helper for adding on all elements multiple attributes
function setAttributes(el, options) {
	Object.keys(options).forEach(function (attr) {
		el.setAttribute(attr, options[attr]);
	});
}

// Navbar blur on scroll
function navbarBlurOnScroll(id) {
	const navbar = document.getElementById(id);
	let navbarScrollActive = navbar ? navbar.getAttribute("data-scroll") : false;
	let scrollDistance = 5;
	let classes = ["blur", "shadow-blur", "left-auto"];
	let toggleClasses = ["shadow-none"];

	if (navbarScrollActive == "true") {
		window.onscroll = debounce(function () {
			if (window.scrollY > scrollDistance) {
				blurNavbar();
			} else {
				transparentNavbar();
			}
		}, 10);
	} else {
		window.onscroll = debounce(function () {
			transparentNavbar();
		}, 10);
	}

	var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

	if (isWindows) {
		var content = document.querySelector(".main-content");
		if (navbarScrollActive == "true") {
			content.addEventListener(
				"ps-scroll-y",
				debounce(function () {
					if (content.scrollTop > scrollDistance) {
						blurNavbar();
					} else {
						transparentNavbar();
					}
				}, 10)
			);
		} else {
			content.addEventListener(
				"ps-scroll-y",
				debounce(function () {
					transparentNavbar();
				}, 10)
			);
		}
	}

	function blurNavbar() {
		navbar.classList.add(...classes);
		navbar.classList.remove(...toggleClasses);

		toggleNavLinksColor("blur");
	}

	function transparentNavbar() {
		navbar.classList.remove(...classes);
		navbar.classList.add(...toggleClasses);

		toggleNavLinksColor("transparent");
	}

	function toggleNavLinksColor(type) {
		let navLinks = document.querySelectorAll(".navbar-main .nav-link");
		let navLinksToggler = document.querySelectorAll(
			".navbar-main .sidenav-toggler-line"
		);

		if (type === "blur") {
			navLinks.forEach((element) => {
				element.classList.remove("text-body");
			});

			navLinksToggler.forEach((element) => {
				element.classList.add("bg-dark");
			});
		} else if (type === "transparent") {
			navLinks.forEach((element) => {
				element.classList.add("text-body");
			});

			navLinksToggler.forEach((element) => {
				element.classList.remove("bg-dark");
			});
		}
	}
}

// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// initialization of Toasts
document.addEventListener("DOMContentLoaded", function () {
	var toastElList = [].slice.call(document.querySelectorAll(".toast"));

	var toastList = toastElList.map(function (toastEl) {
		return new bootstrap.Toast(toastEl);
	});

	var toastButtonList = [].slice.call(document.querySelectorAll(".toast-btn"));

	toastButtonList.map(function (toastButtonEl) {
		toastButtonEl.addEventListener("click", function () {
			var toastToTrigger = document.getElementById(
				toastButtonEl.dataset.target
			);

			if (toastToTrigger) {
				var toast = bootstrap.Toast.getInstance(toastToTrigger);
				toast.show();
			}
		});
	});
});

// Tabs navigation

var total = document.querySelectorAll(".nav-pills");

function initNavs() {
	total.forEach(function (item, i) {
		var moving_div = document.createElement("div");
		var first_li = item.querySelector("li:first-child .nav-link");
		var tab = first_li.cloneNode();
		tab.innerHTML = "-";

		moving_div.classList.add("moving-tab", "position-absolute", "nav-link");
		moving_div.appendChild(tab);
		item.appendChild(moving_div);

		var list_length = item.getElementsByTagName("li").length;

		moving_div.style.padding = "0px";
		moving_div.style.width =
			item.querySelector("li:nth-child(1)").offsetWidth + "px";
		moving_div.style.transform = "translate3d(0px, 0px, 0px)";
		moving_div.style.transition = ".5s ease";

		item.onmouseover = function (event) {
			let target = getEventTarget(event);
			let li = target.closest("li"); // get reference
			if (li) {
				let nodes = Array.from(li.closest("ul").children); // get array
				let index = nodes.indexOf(li) + 1;
				item.querySelector("li:nth-child(" + index + ") .nav-link").onclick =
					function () {
						moving_div = item.querySelector(".moving-tab");
						let sum = 0;
						if (item.classList.contains("flex-column")) {
							for (var j = 1; j <= nodes.indexOf(li); j++) {
								sum += item.querySelector(
									"li:nth-child(" + j + ")"
								).offsetHeight;
							}
							moving_div.style.transform =
								"translate3d(0px," + sum + "px, 0px)";
							moving_div.style.height = item.querySelector(
								"li:nth-child(" + j + ")"
							).offsetHeight;
						} else {
							for (var j = 1; j <= nodes.indexOf(li); j++) {
								sum += item.querySelector(
									"li:nth-child(" + j + ")"
								).offsetWidth;
							}
							moving_div.style.transform =
								"translate3d(" + sum + "px, 0px, 0px)";
							moving_div.style.width =
								item.querySelector("li:nth-child(" + index + ")").offsetWidth +
								"px";
						}
					};
			}
		};
	});
}

setTimeout(function () {
	initNavs();
}, 100);

// Tabs navigation resize

window.addEventListener("resize", function (event) {
	total.forEach(function (item, i) {
		item.querySelector(".moving-tab").remove();
		var moving_div = document.createElement("div");
		var tab = item.querySelector(".nav-link.active").cloneNode();
		tab.innerHTML = "-";

		moving_div.classList.add("moving-tab", "position-absolute", "nav-link");
		moving_div.appendChild(tab);

		item.appendChild(moving_div);

		moving_div.style.padding = "0px";
		moving_div.style.transition = ".5s ease";

		let li = item.querySelector(".nav-link.active").parentElement;

		if (li) {
			let nodes = Array.from(li.closest("ul").children); // get array
			let index = nodes.indexOf(li) + 1;

			let sum = 0;
			if (item.classList.contains("flex-column")) {
				for (var j = 1; j <= nodes.indexOf(li); j++) {
					sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
				}
				moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
				moving_div.style.width =
					item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
				moving_div.style.height = item.querySelector(
					"li:nth-child(" + j + ")"
				).offsetHeight;
			} else {
				for (var j = 1; j <= nodes.indexOf(li); j++) {
					sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
				}
				moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
				moving_div.style.width =
					item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
			}
		}
	});

	if (window.innerWidth < 991) {
		total.forEach(function (item, i) {
			if (!item.classList.contains("flex-column")) {
				item.classList.remove("flex-row");
				item.classList.add("flex-column", "on-resize");
				let li = item.querySelector(".nav-link.active").parentElement;
				let nodes = Array.from(li.closest("ul").children); // get array
				let index = nodes.indexOf(li) + 1;
				let sum = 0;
				for (var j = 1; j <= nodes.indexOf(li); j++) {
					sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
				}
				var moving_div = document.querySelector(".moving-tab");
				moving_div.style.width =
					item.querySelector("li:nth-child(1)").offsetWidth + "px";
				moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
			}
		});
	} else {
		total.forEach(function (item, i) {
			if (item.classList.contains("on-resize")) {
				item.classList.remove("flex-column", "on-resize");
				item.classList.add("flex-row");
				let li = item.querySelector(".nav-link.active").parentElement;
				let nodes = Array.from(li.closest("ul").children); // get array
				let index = nodes.indexOf(li) + 1;
				let sum = 0;
				for (var j = 1; j <= nodes.indexOf(li); j++) {
					sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
				}
				var moving_div = document.querySelector(".moving-tab");
				moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
				moving_div.style.width =
					item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
			}
		});
	}
});

// Function to remove flex row on mobile devices
if (window.innerWidth < 991) {
	total.forEach(function (item, i) {
		if (item.classList.contains("flex-row")) {
			item.classList.remove("flex-row");
			item.classList.add("flex-column", "on-resize");
		}
	});
}

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

// End tabs navigation

window.onload = function () {
	// Ripple Effect
	var ripples = document.querySelectorAll(".btn");

	for (var i = 0; i < ripples.length; i++) {
		ripples[i].addEventListener(
			"click",
			function (e) {
				var targetEl = e.target;
				var rippleDiv = targetEl.querySelector(".ripple");

				rippleDiv = document.createElement("span");
				rippleDiv.classList.add("ripple");
				rippleDiv.style.width = rippleDiv.style.height =
					Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + "px";
				targetEl.appendChild(rippleDiv);

				rippleDiv.style.left = e.offsetX - rippleDiv.offsetWidth / 2 + "px";
				rippleDiv.style.top = e.offsetY - rippleDiv.offsetHeight / 2 + "px";
				rippleDiv.classList.add("ripple");
				setTimeout(function () {
					rippleDiv.parentElement.removeChild(rippleDiv);
				}, 600);
			},
			false
		);
	}
};

// Toggle Sidenav
const iconNavbarSidenav = document.getElementById("iconNavbarSidenav");
const iconSidenav = document.getElementById("iconSidenav");
const sidenav = document.getElementById("sidenav-main");
let body = document.getElementsByTagName("body")[0];
let className = "g-sidenav-pinned";

if (iconNavbarSidenav) {
	iconNavbarSidenav.addEventListener("click", toggleSidenav);
}

if (iconSidenav) {
	iconSidenav.addEventListener("click", toggleSidenav);
}

function toggleSidenav() {
	if (body.classList.contains(className)) {
		body.classList.remove(className);
		setTimeout(function () {}, 100);
		sidenav.classList.remove("bg-transparent");
	} else {
		body.classList.add(className);
		sidenav.classList.remove("bg-transparent");
		iconSidenav.classList.remove("d-none");
	}
}

// Resize navbar color depends on configurator active type of sidenav

let referenceButtons = document.querySelector("[data-class]");

// Deactivate sidenav type buttons on resize and small screens
window.addEventListener("resize", sidenavTypeOnResize);
window.addEventListener("load", sidenavTypeOnResize);

function sidenavTypeOnResize() {
	let elements = document.querySelectorAll('[onclick="sidebarType(this)"]');
	if (window.innerWidth < 1200) {
		elements.forEach(function (el) {
			el.classList.add("disabled");
		});
	} else {
		elements.forEach(function (el) {
			el.classList.remove("disabled");
		});
	}
}

// Light Mode / Dark Mode
function darkMode(el) {
	const body = document.getElementsByTagName("body")[0];
	const hr = document.querySelectorAll("div:not(.sidenav) > hr");
	const hr_card = document.querySelectorAll("div:not(.bg-gradient-dark) hr");
	const text_btn = document.querySelectorAll("button:not(.btn) > .text-dark");
	const text_span = document.querySelectorAll(
		"span.text-dark, .breadcrumb .text-dark"
	);
	const text_span_white = document.querySelectorAll(
		"span.text-white, .breadcrumb .text-white"
	);
	const text_strong = document.querySelectorAll("strong.text-dark");
	const text_strong_white = document.querySelectorAll("strong.text-white");
	const text_nav_link = document.querySelectorAll("a.nav-link.text-dark");
	const text_nav_link_white = document.querySelectorAll(
		"a.nav-link.text-white"
	);
	const secondary = document.querySelectorAll(".text-secondary");
	const bg_gray_100 = document.querySelectorAll(".bg-gray-100");
	const bg_gray_600 = document.querySelectorAll(".bg-gray-600");
	const btn_text_dark = document.querySelectorAll(
		".btn.btn-link.text-dark, .material-icons.text-dark"
	);
	const btn_text_white = document.querySelectorAll(
		".btn.btn-link.text-white, .material-icons.text-white"
	);
	const card_border = document.querySelectorAll(".card.border");
	const card_border_dark = document.querySelectorAll(
		".card.border.border-dark"
	);

	const svg = document.querySelectorAll("g");

	if (!el.getAttribute("checked")) {
		body.classList.add("dark-version");
		for (var i = 0; i < hr.length; i++) {
			if (hr[i].classList.contains("dark")) {
				hr[i].classList.remove("dark");
				hr[i].classList.add("light");
			}
		}

		for (var i = 0; i < hr_card.length; i++) {
			if (hr_card[i].classList.contains("dark")) {
				hr_card[i].classList.remove("dark");
				hr_card[i].classList.add("light");
			}
		}
		for (var i = 0; i < text_btn.length; i++) {
			if (text_btn[i].classList.contains("text-dark")) {
				text_btn[i].classList.remove("text-dark");
				text_btn[i].classList.add("text-white");
			}
		}
		for (var i = 0; i < text_span.length; i++) {
			if (text_span[i].classList.contains("text-dark")) {
				text_span[i].classList.remove("text-dark");
				text_span[i].classList.add("text-white");
			}
		}
		for (var i = 0; i < text_strong.length; i++) {
			if (text_strong[i].classList.contains("text-dark")) {
				text_strong[i].classList.remove("text-dark");
				text_strong[i].classList.add("text-white");
			}
		}
		for (var i = 0; i < text_nav_link.length; i++) {
			if (text_nav_link[i].classList.contains("text-dark")) {
				text_nav_link[i].classList.remove("text-dark");
				text_nav_link[i].classList.add("text-white");
			}
		}
		for (var i = 0; i < secondary.length; i++) {
			if (secondary[i].classList.contains("text-secondary")) {
				secondary[i].classList.remove("text-secondary");
				secondary[i].classList.add("text-white");
				secondary[i].classList.add("opacity-8");
			}
		}
		for (var i = 0; i < bg_gray_100.length; i++) {
			if (bg_gray_100[i].classList.contains("bg-gray-100")) {
				bg_gray_100[i].classList.remove("bg-gray-100");
				bg_gray_100[i].classList.add("bg-gray-600");
			}
		}
		for (var i = 0; i < btn_text_dark.length; i++) {
			btn_text_dark[i].classList.remove("text-dark");
			btn_text_dark[i].classList.add("text-white");
		}
		for (var i = 0; i < svg.length; i++) {
			if (svg[i].hasAttribute("fill")) {
				svg[i].setAttribute("fill", "#fff");
			}
		}
		for (var i = 0; i < card_border.length; i++) {
			card_border[i].classList.add("border-dark");
		}
		el.setAttribute("checked", "true");
	} else {
		body.classList.remove("dark-version");
		for (var i = 0; i < hr.length; i++) {
			if (hr[i].classList.contains("light")) {
				hr[i].classList.add("dark");
				hr[i].classList.remove("light");
			}
		}
		for (var i = 0; i < hr_card.length; i++) {
			if (hr_card[i].classList.contains("light")) {
				hr_card[i].classList.add("dark");
				hr_card[i].classList.remove("light");
			}
		}
		for (var i = 0; i < text_btn.length; i++) {
			if (text_btn[i].classList.contains("text-white")) {
				text_btn[i].classList.remove("text-white");
				text_btn[i].classList.add("text-dark");
			}
		}
		for (var i = 0; i < text_span_white.length; i++) {
			if (
				text_span_white[i].classList.contains("text-white") &&
				!text_span_white[i].closest(".sidenav") &&
				!text_span_white[i].closest(".card.bg-gradient-dark")
			) {
				text_span_white[i].classList.remove("text-white");
				text_span_white[i].classList.add("text-dark");
			}
		}
		for (var i = 0; i < text_strong_white.length; i++) {
			if (text_strong_white[i].classList.contains("text-white")) {
				text_strong_white[i].classList.remove("text-white");
				text_strong_white[i].classList.add("text-dark");
			}
		}
		for (var i = 0; i < text_nav_link_white.length; i++) {
			if (
				text_nav_link_white[i].classList.contains("text-white") &&
				!text_nav_link_white[i].closest(".sidenav")
			) {
				text_nav_link_white[i].classList.remove("text-white");
				text_nav_link_white[i].classList.add("text-dark");
			}
		}
		for (var i = 0; i < secondary.length; i++) {
			if (secondary[i].classList.contains("text-white")) {
				secondary[i].classList.remove("text-white");
				secondary[i].classList.remove("opacity-8");
				secondary[i].classList.add("text-dark");
			}
		}
		for (var i = 0; i < bg_gray_600.length; i++) {
			if (bg_gray_600[i].classList.contains("bg-gray-600")) {
				bg_gray_600[i].classList.remove("bg-gray-600");
				bg_gray_600[i].classList.add("bg-gray-100");
			}
		}
		for (var i = 0; i < svg.length; i++) {
			if (svg[i].hasAttribute("fill")) {
				svg[i].setAttribute("fill", "#252f40");
			}
		}
		for (var i = 0; i < btn_text_white.length; i++) {
			if (!btn_text_white[i].closest(".card.bg-gradient-dark")) {
				btn_text_white[i].classList.remove("text-white");
				btn_text_white[i].classList.add("text-dark");
			}
		}
		for (var i = 0; i < card_border_dark.length; i++) {
			card_border_dark[i].classList.remove("border-dark");
		}
		el.removeAttribute("checked");
	}
}
