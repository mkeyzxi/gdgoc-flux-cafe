// deklarasi variabel untuk menyimpan data
let menuData = [];
// fungsi format rupiah
const formatRP = (nilai) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
	}).format(nilai);
};

// fungsi merender isi dari menu card
const renderMenu = (data) => {
	const menuCard = document.querySelector('.menu-card');
	let templates = data
		.map(
			({ path, productName, price, likes }) => `
    <div class="product-card">
    <div class="like-badge">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#FFCF50" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.093-1.137l-.145-.047a1.35 1.35 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24a1.67 1.67 0 0 0-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735"/>
        <path fill="#FFCF50" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" opacity="0.5"/>
        </svg> ${likes} likes
    </div>
    <figure class="product-image">
            <img src="${path}" alt="${productName}" loading="lazy"/>
    </figure>
    <h3 class="product-title">${productName}</h3>
    <div class="product-info">
    <p class="product-price">${formatRP(
				price,
			)}</p>
    <button class="buy-btn" aria-label="Membeli ${productName} dengan harga ${price}">MEMBELI</button></div>
    </div>`,
		)
		.join('');

	menuCard.innerHTML = templates;

	document.querySelectorAll('.buy-btn').forEach((button) => {
		button.addEventListener('click', (event) => {
			const productCard = event.target.closest('.product-card');
			const productName =
				productCard.querySelector('.product-title').textContent;
			pesanWa(`Saya ingin membeli ${productName}`);
		});
	});
};

// fungsi melakukan fethcing data json
const menu = async () => {
	try {
		const response = await fetch('/assets/js/products.json');
		menuData = await response.json();
		renderMenu(menuData);
	} catch (error) {
		console.error('Error loading data:', error);
	}
};

const filterMenu = (type) => {
	const filteredData = menuData.filter((item) => item.type === type);
	renderMenu(filteredData);
};

const showAllMenu = () => {
	renderMenu(menuData);
};

document.addEventListener('DOMContentLoaded', () => {
	menu();
	const buttonChoice = document.querySelectorAll('.menu-flux-link li');
	buttonChoice[0].classList.add('about-animation');
	buttonChoice.forEach((button) => {
		button.addEventListener('click', () => {
			buttonChoice.forEach((btn) => btn.classList.remove('about-animation'));
			button.classList.add('about-animation');
		});
	});

	const humburgerMenu = document.getElementById('menu-hamburger');
	let condition = false;
	const navMobile = document.getElementById('nav-mobile');
	const span = document.querySelectorAll('span');

	humburgerMenu.addEventListener('click', () => {
		if (window.innerWidth < 768) {
			condition = !condition;
			span[0].classList.toggle('rotate-humburger-span0');
			span[2].classList.toggle('rotate-humburger-span2');

			if (condition) {
				span[1].style.visibility = 'hidden';
				span[3].style.visibility = 'hidden';
				navMobile.style.display = 'block';
				navMobile.style.right = '0';
			} else {
				span[1].style.visibility = 'visible';
				span[3].style.visibility = 'visible';
				navMobile.style.display = 'none';
			}
		}
	});

	// menutup navMobile otomatis jika layar diperbesar ke ukuran laptop
	window.addEventListener('resize', () => {
		if (window.innerWidth >= 768) {
			navMobile.style.display = 'none';
			// reset kondisi agar tidak tetap terbuka di mode mobile setelah resize
			condition = false;
			span[1].style.visibility = 'visible';
			span[3].style.visibility = 'visible';
			span[0].classList.toggle('rotate-humburger-span0');
			span[2].classList.toggle('rotate-humburger-span2');
		}
	});
});

// ketika discroll menampilkan shadow di bagian header
window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const { pageYOffset } = window;
	if (pageYOffset > 0) {
		header.style.boxShadow = '0 2px 20px var(--text)';
	} else {
		header.style.boxShadow = 'none';
	}
});

// button diklik masuk ke whatsapp
function pesanWa(message) {
	const waMbul = `https://wa.me/6285342181132?text=${encodeURIComponent(
		message,
	)}`;
	window.open(waMbul, '_blank');
}
