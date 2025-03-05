let shopCard = document.getElementById('shopCard')
let shopCount = document.getElementById('shopCount')
let like = document.getElementById('like')
let likeCount = document.getElementById('likeCount')
let moon = document.getElementById('moon')
let sun = document.getElementById('sun')
let moon1 = document.getElementById('moon1')
let sun1 = document.getElementById('sun1')
let menu = document.getElementById('menu')
let left = document.getElementById('left')
let right = document.getElementById('right')
let sliderPhoto2 = document.getElementById('slider-photo-2')
let sliderPhoto1 = document.getElementById('slider-photo-1')
let body = document.querySelector('body')
let menuNav = document.getElementById('menuNav')
let closeBtn = document.getElementById('closeBtn')
let categoriesOpen = document.getElementById('categoriesOpen')
let categoriesBody = document.getElementById('categoriesBody')
let arrowDown = document.getElementById('arrowDown')
let cards = document.getElementById('cards')
let inputSearh = document.getElementById('inputSearh')
let cardBuy = document.getElementById('cardBuy')
let cardBody = document.getElementById('cardBody')
let cardBodyClose =document.getElementById('cardBodyClose')

categoriesOpen.addEventListener('click', function () {
	categoriesBody.classList.toggle('max-h-[800px]')
	
	arrowDown.classList.toggle('rotate-180')
})

left.addEventListener('click', slider)
right.addEventListener('click', slider)

function slider() {
	sliderPhoto1.classList.toggle('translate-x-[-100%]')
	sliderPhoto2.classList.toggle('translate-x-full')
}

moon.addEventListener('click', openMoon)
sun.addEventListener('click', openSun)
moon1.addEventListener('click', openMoon1)
sun1.addEventListener('click', openSun1)

function openMoon() {
	moon.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')

	setTimeout(() => {
		moon.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')
		moon.classList.toggle('scale-0')
		sun.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000)
}

function openSun() {
	sun.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
	setTimeout(() => {
		sun.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
		moon.classList.toggle('scale-0')
		sun.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000)
}

function openMoon1() {
	moon1.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')

	setTimeout(() => {
		moon1.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')
		moon1.classList.toggle('scale-0')
		sun1.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000)
}

function openSun1() {
	sun1.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
	setTimeout(() => {
		sun1.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
		moon1.classList.toggle('scale-0')
		sun1.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000)
}

menu.addEventListener('click', openCloseMenu)
closeBtn.addEventListener('click', openCloseMenu)
function openCloseMenu() {
	menuNav.classList.toggle('translate-x-full')
}

function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1
}
fetch('https://fakerapi.it/api/v2/books?_quantity=24')
	.then(rev => {
		return rev.json()
	})
	.then(data1 => {
		data1.data.map((obj, index) => {
			cards.innerHTML += `
          <div id="card${index}" class="card mx-auto w-full hover:shadow-2xl duration-[0.5s] group h-[550px]">
						<div class="img w-full h-[370px] overflow-hidden">
							<img class="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[0.5s]" src="https://picsum.photos/200/300?random=${getRandomNumber()}" alt="" >
						</div>
						<div class="p-[10px]">
							<p>${obj.genre}</p>
							<h2>${obj.title}</h2>
							<h3>${obj.author}</h3>
							<p>${obj.published}</p>
						</div>

						<div class="px-[15px]  flex justify-between items-center">
							<button  class = "px-[20px] py-[10px] bg-[var(--blue)] text-[var(--white)] rounded-[10px] font-bold] hover:bg-transparent border-[var(--blue)] border-[1px] border-solid] hover:text-[var(--black)]  duration-[0.5s]  scale-0 group-hover:scale-[1] " onclick="addToCard(${index} , '${obj.title.replace(
				/'/g,
				"\\'"
			)}', '${obj.published.replace(/'/g, "\\'")}')">add to cart</button>
							<button class = "scale-0 duration-[1s] group-hover:scale-[1] "><i class="fa-regular fa-heart text-[20px] text-[var(--blue)]"></i></button>
							<button class = "scale-0 duration-[1s] group-hover:scale-[1]"><i class="fa-solid fa-ellipsis-vertical text-[20px] text-[var(--blue)]"></i></button>
						</div>
					</div>
        `

			inputSearh.addEventListener('keyup', function () {
				let card = document.getElementById(`card${index}`)

				if (obj.title.toUpperCase().includes(inputSearh.value.toUpperCase())) {
					card.style.display = 'block'
				} else {
					card.style.display = 'none'
				}
			})
		})
	})
count = 0
let shop = []

function addToCard(index, title, published) {
	let exists = shop.some(item => item.index === index)

	if (!exists) {
		shop.push({
			index: index,
			title: title,
			published: published,
		})
		count++
		cardBuy.innerHTML = ''
		shop.map(obj => {
			cardBuy.innerHTML += `
			<div class="flex gap-[10px]">
				<p class = "text-[15px]">${obj.index}</p>
				<p class = "text-[15px]">${obj.title}</p>
				<p class = "text-[15px]">${obj.published}</p>
			</div>
			`
		})
	}

	shopCount.innerText = count
	navbar.classList.remove('-translate-y-full')
}

function openCardBody() {
	cardBody.classList.toggle('translate-x-full')
}
function closeCardBody() {
	cardBody.classList.add('translate-x-full')
}

cards.addEventListener('scroll', closeCardBody)

window.addEventListener('scroll', closeCardBody)

shopCard.addEventListener('click', openCardBody)

let navbar = document.getElementById('navbar')
let lastScrollTop = 0
window.addEventListener('scroll', function () {
	let scrollTop = window.scrollY

	if (scrollTop > lastScrollTop) {
		navbar.classList.add('-translate-y-full')
	} else {
		navbar.classList.remove('-translate-y-full')
	}

	lastScrollTop = scrollTop
})

cardBodyClose.addEventListener('click' , openCardBody)