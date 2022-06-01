'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const date = document.querySelector('#date');
	date.textContent = new Date().getFullYear();

	const toggleBtn = document.querySelector('.burger');
	const linksContainer = document.querySelector('.nav__container');
	const links = document.querySelector('.links');
	toggleBtn.addEventListener('click', () => {
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const linksHeight = links.getBoundingClientRect().height;

		if (containerHeight === 0) {
			linksContainer.style.height = `${linksHeight}px`;
		} else {
			linksContainer.style.height = 0;
		}
	});

	const nav = document.querySelector('.nav');
	const topLink = document.querySelector('.top-link');
	const menuLinks = document.querySelectorAll('.nav__link');

	window.addEventListener('scroll', () => {
		const navHeight = nav.getBoundingClientRect().height;
		if (window.scrollY !== 0) {
			nav.classList.add('nav_fixed');
			menuLinks.forEach((item) => {
				item.classList.add('nav__link_default');
			});
		} else {
			nav.classList.remove('nav_fixed');
			menuLinks.forEach((item) => {
				item.classList.remove('nav__link_default');
			});
		}

		if (window.scrollY > 500) {
			topLink.classList.add('top-link_show');
		} else {
			topLink.classList.remove('top-link_show');
		}
	});

	const scrollLinks = document.querySelectorAll('.scroll-link');
	scrollLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const id = e.currentTarget.getAttribute('href').slice(1);
			const element = document.getElementById(id);

			const navHeight = nav.getBoundingClientRect().height;
			const containerHeight = linksContainer.getBoundingClientRect().height;

			let position = element.offsetTop - navHeight;

			if (navHeight - containerHeight === 80) {
				position += containerHeight;
			}

			window.scrollTo({ left: 0, top: position });
			linksContainer.style.height = 0;
		});
	});
});
