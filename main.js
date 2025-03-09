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


function read(){
  products.map((obj, index) => {
    cards.innerHTML += `
        <div id="card${index}" class="card mx-auto w-full hover:shadow-2xl duration-[0.5s] group h-[550px]">
          <div class="img w-full h-[370px] overflow-hidden">
            <img class="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[0.5s]" src="https://picsum.photos/200/300?random=${getRandomNumber()}" alt="" >
          </div>
          <div class="p-[10px]">
            <p class = "text-[11.5px]">${obj.type}</p>
            <h2 class = "text-[15.5px]">${obj.title}</h2>
            <h3 class = "text-[11.5px]">${obj.author}</h3>
            <p class = "text-[var(--blue)]">${obj.price}$</p>
          </div>

          <div class="px-[15px]  flex justify-between items-center">
            <button  class = "px-[20px] py-[10px] bg-[var(--blue)] text-[var(--white)] rounded-[10px] font-bold] hover:bg-transparent border-[var(--blue)] border-[1px] border-solid] hover:text-[var(--black)]  duration-[0.5s]  scale-0 group-hover:scale-[1] " onclick="addToCard(${index} , '${obj.title.replace(/'/g, "\\'")}', '${obj.price}')">add to cart</button>
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
}

count = 0
let shop = []

let totalCount = 1
let rezalt = 0

function remove(price){

  if(totalCount > 1){
    totalCount -- 
    rezalt = totalCount* +price
    total.innerText = totalCount
    total.dataset.price = rezalt; 
  }
}
function add(price){
  if(totalCount >= 0){
    totalCount ++
    rezalt = totalCount* +price
    total.innerText = totalCount
    total.dataset.price = rezalt; 

  }
}

function addToCard(index, title, price) {
	let exists = shop.some(item => item.index === index)

	if (!exists) {
		shop.push({
			index: index,
			title: title,
			price: price,
		})
		count++
		cardBuy.innerHTML = ''
		shop.map(obj => {
			cardBuy.innerHTML += `
			<div class="flex gap-[10px] justify-between text-[20px]">
				<p class = "">${obj.title}</p>
				<p class = "">${obj.price}$</p>
        <div class="flex gap-[5px]">
            <button onclick = "remove(${obj.price})">-</button>
            <p id='total'>1</p>
            <button onclick = "add(${obj.price})">+</button>
        </div>
			</div>
			`
		})

	}
  let total = document.getElementById('total')
 
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



let products = [
  {
    id: 0,
    type: "modern",
    title: "big magic",
    author: "donna karan",
    image: "1.PNG",
    price: 20.0,
  },
  {
    id: 1,
    type: "classic",
    title: "i was born width music",
    author: "dolce & cabanna",
    image: "2.PNG",
    price: 200.0,
  },
  {
    id: 2,
    type: "biography",
    title: "i'm glad my mom died",
    author: "jennette mcCurdy",
    image: "3.PNG",
    price: 21.99,
  },
  {
    id: 3,
    type: "detective",
    title: "Warrior Soul: A Tye Caine Wilderness Mystery",
    author: "David Barbur",
    image: "4.PNG",
    price: 4.99,
  },
  {
    id: 4,
    type: "fantasy",
    title: "The Mountain in the Sea: A Novel",
    author: "Ray Nayler",
    image: "5.PNG",
    price: 18.0,
  },
  {
    id: 5,
    type: "cookbook",
    title: "Sweet Enough: A Dessert Cookbook",
    author: "Alison Roman",
    image: "6.PNG",
    price: 32.55,
  },
  {
    id: 6,
    type: "fairy tale",
    title: "Fairy Tale",
    author: "Stephen King",
    image: "7.PNG",
    price: 30.23,
  },
  {
    id: 7,
    type: "fiction",
    title: "Flash Fiction America: 73 Very Short Stories",
    author: "John DuFresne , et al.",
    image: "8.PNG",
    price: 15.76,
  },
  {
    id: 8,
    type: "horror",
    title: "Taaqtumi: An Anthology of Arctic Horror Stories",
    author: "Thomas Anguti Johnston , et al.",
    image: "9.PNG",
    price: 15.76,
  },
  {
    id: 9,
    type: "historical fiction",
    title:
      "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
    author: "Kelly Rimmer",
    image: "10.PNG",
    price: 15.8,
  },
  {
    id: 10,
    type: "history",
    title: "The Secret History",
    author: "Donna Tartt",
    image: "11.PNG",
    price: 16.74,
  },
  {
    id: 11,
    type: "romance",
    title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
    author: "Sue Lynn Tan",
    image: "12.PNG",
    price: 16.73,
  },
  {
    id: 12,
    type: "modern",
    title: "Women Without Men: A Novel of Modern Iran",
    author: "Shahrnush Parsipur , et al.",
    image: "13.PNG",
    price: 14.83,
  },
  {
    id: 13,
    type: "classic",
    title: "War and Peace",
    author: "Leo Tolstoy , et al.",
    image: "14.PNG",
    price: 20.46,
  },
  {
    id: 14,
    type: "biography",
    title: "Barkley: A Biography (Original)",
    author: "Timothy Bella",
    image: "15.PNG",
    price: 27.89,
  },
  {
    id: 15,
    type: "detective",
    title: "The Detective Up Late",
    author: "Adrian McKinty",
    image: "16.PNG",
    price: 25.1,
  },
  {
    id: 16,
    type: "fantasy",
    title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
    author: "Travis Baldree",
    image: "17.PNG",
    price: 16.73,
  },
  {
    id: 17,
    type: "cookbook",
    title: "The Everlasting Meal Cookbook: Leftovers A-Z",
    author: "Tamar Adler , et al.",
    image: "18.PNG",
    price: 32.55,
  },
  {
    id: 18,
    type: "fairy tale",
    title: "Fairy Tales for Fearless Girls",
    author: "Anita Ganeri , et al.",
    image: "19.PNG",
    price: 18.59,
  },
  {
    id: 19,
    type: "fiction",
    title: "Wonderbook (Revised and Expanded)",
    author: "Jeff VanderMeer",
    image: "20.PNG",
    price: 25.58,
  },
  {
    id: 20,
    type: "horror",
    title: "Nightmare Fuel: The Science of Horror Films",
    author: "Nina Nesseth",
    image: "21.PNG",
    price: 24.17,
  },
  {
    id: 21,
    type: "historical fiction",
    title: "Falconland: A Novel of Medieval",
    author: "Reggie Connell",
    image: "22.PNG",
    price: 14.99,
  },
  {
    id: 22,
    type: "history",
    title: "We Are the Land: A History of Native California",
    author: "Damon B. Akins , et al.",
    image: "23.PNG",
    price: 27.85,
  },
  {
    id: 23,
    type: "romance",
    title: "Rough Around the Hedges: an Uncanny Romance Novel",
    author: "Lish McBride",
    image: "24.PNG",
    price: 16.73,
  },
];







function filer(type){
  cards.innerHTML = ""
  let filerArr = []
  if(type == "all"){
    read() 
  }
  products.map((obj , index)=>{
   
    if(obj.type.toLowerCase().includes(type.toLowerCase())){
      
      if(!filerArr.includes(type.toLowerCase())){
        filerArr.push(
          {
            id: obj.id,
            type: obj.type,
            title: obj.title,
            author: obj.author,
            image: obj.image,
            price: obj.price,
          }
         
        )
        cards.innerHTML += `
        <div id="card${index}" class="card mx-auto w-full hover:shadow-2xl duration-[0.5s] group h-[550px]">
          <div class="img w-full h-[370px] overflow-hidden">
            <img class="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[0.5s]" src="https://picsum.photos/200/300?random=${getRandomNumber()}" alt="" >
          </div>
          <div class="p-[10px]">
            <p class = "text-[11.5px]">${obj.type}</p>
            <h2 class = "text-[15.5px]">${obj.title}</h2>
            <h3 class = "text-[11.5px]">${obj.author}</h3>
            <p class = "text-[var(--blue)]">${obj.price}$</p>
          </div>

          <div class="px-[15px]  flex justify-between items-center">
            <button  class = "px-[20px] py-[10px] bg-[var(--blue)] text-[var(--white)] rounded-[10px] font-bold] hover:bg-transparent border-[var(--blue)] border-[1px] border-solid] hover:text-[var(--black)]  duration-[0.5s]  scale-0 group-hover:scale-[1] " onclick="addToCard(${index} , '${obj.title}', '${obj.price}')">add to cart</button>
            <button class = "scale-0 duration-[1s] group-hover:scale-[1] "><i class="fa-regular fa-heart text-[20px] text-[var(--blue)]"></i></button>
            <button class = "scale-0 duration-[1s] group-hover:scale-[1]"><i class="fa-solid fa-ellipsis-vertical text-[20px] text-[var(--blue)]"></i></button>
          </div>
        </div>
      `
    
      }
    }
    

  })
  
}

read()


let categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {
  button.addEventListener("click", function () {
   
    categoryButtons.forEach(btn => btn.classList.remove("active1"));
    categoryButtons.forEach(btn => btn.classList.remove("after:hidden"));
    
    this.classList.add("active1");
    this.classList.add('after:hidden')

  });
});