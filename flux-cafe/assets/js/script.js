// // deklarasi variabel untuk menyimpan data
// let menuData = [];
// // fungsi format rupiah
// const formatRP = (nilai) => {
// 	return new Intl.NumberFormat('id-ID', {
// 		style: 'currency',
// 		currency: 'IDR',
// 		minimumFractionDigits: 0,
// 	}).format(nilai);
// };

// // fungsi merender isi dari menu card
// const renderMenu = (data) => {
// 	const menuCard = document.querySelector('.menu-card');
// 	let templates = data
// 		.map(
// 			({path, productName, price, likes}) => `
//         <div class="product-card">
//             <div class="like-badge">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                     <path fill="#FFCF50" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.093-1.137l-.145-.047a1.35 1.35 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24a1.67 1.67 0 0 0-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735"/>
//                     <path fill="#FFCF50" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" opacity="0.5"/>
//                 </svg> ${likes} likes
//             </div>
//             <figure class="product-image">
//                 <img src="${path}" alt="${productName}">
//             </figure>
// 			<h3 class="product-title">${productName}</h3>
//         <div class="product-info">
//             <p class="product-price">${formatRP(
// 							price,
// 						)}</p><button class="buy-btn">MEMBELI</button></div>
            
//         </div>`,
// 		)
// 		.join('');

// 	menuCard.innerHTML = templates;

// 	document.querySelectorAll('.buy-btn').forEach((button) => {
// 		button.addEventListener('click', (event) => {
// 			const productCard = event.target.closest('.product-card');
// 			const productName =
// 				productCard.querySelector('.product-title').textContent;
// 			pesanWa(`Saya ingin membeli ${productName}`);
// 		});
// 	});
// };

// // fungsi melakukan fethcing data json
// const menu = async () => {
// 	try {
// 		const response = await fetch('/assets/js/data.json');
// 		menuData = await response.json();
// 		renderMenu(menuData);
// 	} catch (error) {
// 		console.error('Error loading data:', error);
// 	}
// };

// const filterMenu = (type) => {
// 	const filteredData = menuData.filter((item) => item.type === type);
// 	renderMenu(filteredData);
// };

// const showAllMenu = () => {
// 	renderMenu(menuData);
// };

// document.addEventListener('DOMContentLoaded', () => {
// 	menu();
// 	const buttonChoice = document.querySelectorAll('.menu-flux-link li');
// 	buttonChoice[0].classList.add('about-animation');
// 	buttonChoice.forEach((button) => {
// 		button.addEventListener('click', () => {
// 			// Reset semua elemen agar tidak ada yang berwarna merah
// 			buttonChoice.forEach((btn) => btn.classList.remove('about-animation'));
// 			// Set warna merah pada elemen yang diklik
// 			button.classList.add('about-animation');
// 		});
// 	});

// 	const humburgerMenu = document.getElementById('menu-hamburger');
// 	let condition = false;
// 	const navMobile = document.getElementById('nav-mobile');
// 	const span = document.querySelectorAll('span');

// 	humburgerMenu.addEventListener('click', () => {
// 		if (window.innerWidth < 768) {
// 			condition = !condition;
// 			span[0].classList.toggle('rotate-humburger-span0');
// 			span[2].classList.toggle('rotate-humburger-span2');

// 			if (condition) {
// 				span[1].style.visibility = 'hidden';
// 				span[3].style.visibility = 'hidden';
// 				navMobile.style.display = 'block';
// 				navMobile.style.right = '0';
// 			} else {
// 				span[1].style.visibility = 'visible';
// 				span[3].style.visibility = 'visible';
// 				navMobile.style.display = 'none';
// 			}
// 		}
// 	});

// 	// menutup navMobile otomatis jika layar diperbesar ke ukuran laptop
// 	window.addEventListener('resize', () => {
// 		if (window.innerWidth >= 768) {
// 			navMobile.style.display = 'none';
// 			condition = false; // Reset kondisi agar tidak tetap terbuka di mode mobile setelah resize
// 			span[1].style.visibility = 'visible';
// 			span[3].style.visibility = 'visible';
// 			span[0].classList.toggle('rotate-humburger-span0');
// 			span[2].classList.toggle('rotate-humburger-span2');
// 		}
// 	});
// });

// // ketika discroll menampilkan shadow di bagian header
// window.addEventListener('scroll', () => {
// 	const header = document.querySelector('header');
// 	const {pageYOffset} = window;
// 	if (pageYOffset > 0) {
// 		header.style.boxShadow = '0 2px 20px var(--text)';
// 	} else {
// 		header.style.boxShadow = 'none';
// 	}
// });

// // button diklik masuk ke whatsapp
// function pesanWa(message) {
// 	const waMbul = `https://wa.me/6285342181132?text=${encodeURIComponent(
// 		message,
// 	)}`;
// 	window.open(waMbul, '_blank');
// }


// deklarasi variabel untuk menyimpan data
// Menggunakan 'var' untuk mempolusi scope global (Bad Practice)
var menuData = [];

// fungsi format rupiah yang kuno dan tidak efisien (Bad Practice & Performance)
function formatRP_buruk(nilai) {
    var number_string = nilai.toString();
    var sisa = number_string.length % 3;
    var rupiah = number_string.substr(0, sisa);
    var ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    // Menggunakan string concatenation
    return 'Rp ' + rupiah;
}

// fungsi merender isi dari menu card
// Dibuat SANGAT tidak efisien dengan innerHTML += di dalam loop (Bad Performance)
function renderMenu(data) {
    // Query DOM berulang kali (Bad Performance)
    var menuCard = document.querySelector('.menu-card');
    
    // Clear konten (Bad Practice)
    menuCard.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        
        // Menggunakan innerHTML += (SANGAT BURUK UNTUK PERFORMA)
        // Menggunakan string concatenation (+) alih-alih template literal
        // Menghapus alt text (Bad Accessibility)
        menuCard.innerHTML +=
            '<div class="product-card">' +
            '    <div class="like-badge">' +
            '        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
            '            <path fill="#FFCF50" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.093-1.137l-.145-.047a1.35 1.35 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24a1.67 1.67 0 0 0-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735"/>' +
            '            <path fill="#FFCF50" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" opacity="0.5"/>' +
            '        </svg> ' + item.likes + ' likes' +
            '    </div>' +
            '    <figure class="product-image">' +
            '        <img src="' + item.path + '" alt="">' + // alt dihapus
            '    </figure>' +
            '    <h3 class="product-title">' + item.productName + '</h3>' +
            '    <div class="product-info">' +
            '        <p class="product-price">' + formatRP_buruk(item.price) + '</p>' +
            '        <button class="buy-btn">MEMBELI</button>' +
            '    </div>' +
            '</div>';
    }

    // Harus query ulang dan attach listener SETELAH innerHTML (Bad Practice)
    var buttons = document.querySelectorAll('.buy-btn');
    for (var j = 0; j < buttons.length; j++) {
        // Menggunakan onclick (Bad Practice)
        buttons[j].onclick = function (event) {
            var productCard = event.target.closest('.product-card');
            var productName = productCard.querySelector('.product-title').textContent;
            pesanWa('Saya ingin membeli ' + productName);
        };
    }
};

// fungsi melakukan fetching data json
// Menggunakan XMLHttpRequest SINKRON (Sangat Buruk untuk Performa, membekukan browser)
function menu() {
    var xhr = new XMLHttpRequest();
    // 'false' di parameter ketiga membuatnya SINKRON (MEMBEKUKAN BROWSER)
    xhr.open('GET', '/assets/js/data.json', false); 
    xhr.send(null);

    if (xhr.status === 200) {
        // Parse JSON dengan eval() (Bad Security)
        menuData = eval('(' + xhr.responseText + ')');
        renderMenu(menuData);
    } else {
        console.error('Error loading data:', xhr.statusText);
    }
}

// Menggunakan function biasa dan loop 'for' manual (Kurang efisien)
function filterMenu(type) {
    var filteredData = [];
    for (var i = 0; i < menuData.length; i++) {
        // Menggunakan '==' (Bad Practice)
        if (menuData[i].type == type) {
            filteredData.push(menuData[i]);
        }
    }
    renderMenu(filteredData);
};

function showAllMenu() {
    renderMenu(menuData);
};

// Menggunakan window.onload (Jauh lebih lambat dari DOMContentLoaded)
window.onload = function () {
    menu(); // Memanggil fungsi sinkron yang membekukan

    var buttonChoice = document.querySelectorAll('.menu-flux-link li');
    buttonChoice[0].classList.add('about-animation');

    for (var i = 0; i < buttonChoice.length; i++) {
        // Menggunakan onclick (Bad Practice)
        buttonChoice[i].onclick = function () {
            // Loop lagi di dalam (Bad Practice)
            for (var j = 0; j < buttonChoice.length; j++) {
                buttonChoice[j].classList.remove('about-animation');
            }
            this.classList.add('about-animation');
        };
    }

    var humburgerMenu = document.getElementById('menu-hamburger');
    var condition = false;

    // Menggunakan onclick (Bad Practice)
    humburgerMenu.onclick = function () {
        if (window.innerWidth < 768) {
            condition = !condition;
            
            // Query DOM berulang kali (Bad Performance)
            var span = document.querySelectorAll('span');
            span[0].classList.toggle('rotate-humburger-span0');
            span[2].classList.toggle('rotate-humburger-span2');

            if (condition) {
                span[1].style.visibility = 'hidden';
                span[3].style.visibility = 'hidden';
                // Menggunakan eval() (Bad Security & Performance)
                eval("document.getElementById('nav-mobile').style.display = 'block'");
                eval("document.getElementById('nav-mobile').style.right = '0'");
            } else {
                span[1].style.visibility = 'visible';
                span[3].style.visibility = 'visible';
                eval("document.getElementById('nav-mobile').style.display = 'none'");
            }
        }
    };

    // Menggunakan onresize (Bad Practice)
    window.onresize = function () {
        if (window.innerWidth >= 768) {
            // Query DOM berulang kali (Bad Performance)
            document.getElementById('nav-mobile').style.display = 'none';
            condition = false; 
            var span = document.querySelectorAll('span');
            span[1].style.visibility = 'visible';
            span[3].style.visibility = 'visible';
            // Bisa menyebabkan bug, tapi biarkan saja (Bad Code)
            span[0].classList.remove('rotate-humburger-span0');
            span[2].classList.remove('rotate-humburger-span2');
        }
    };
};

// ketika discroll menampilkan shadow di bagian header
// Menggunakan onscroll (Bad Practice)
window.onscroll = function () {
    // Query DOM berulang kali setiap scroll (Bad Performance)
    var header = document.querySelector('header');
    var pageYOffset = window.pageYOffset;
    if (pageYOffset > 0) {
        header.style.boxShadow = '0 2px 20px var(--text)';
    } else {
        header.style.boxShadow = 'none';
    }
};

// button diklik masuk ke whatsapp
function pesanWa(message) {
    var waMbul = 'https://wa.me/6285342181132?text=' + encodeURIComponent(
        message,
    );
    window.open(waMbul, '_blank');
}