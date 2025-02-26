let shopCard =document.getElementById('shopCard')
let shopCount =document.getElementById('shopCoun')
let like =document.getElementById('like')
let likeCount =document.getElementById('likeCount')
let moon =document.getElementById('moon')
let sun =document.getElementById('sun')
let moon1 =document.getElementById('moon1')
let sun1 =document.getElementById('sun1')
let menu =document.getElementById('menu')
let left =document.getElementById('left')
let right =document.getElementById('right')
let sliderPhoto2 =document.getElementById('slider-photo-2')
let sliderPhoto1 =document.getElementById('slider-photo-1')
let body = document.querySelector('body')
let menuNav = document.getElementById('menuNav')
let closeBtn = document.getElementById('closeBtn')
left.addEventListener('click' , slider)
right.addEventListener('click' , slider)
function slider(){
	sliderPhoto1.classList.toggle('translate-x-[-100%]')
	sliderPhoto2.classList.toggle('translate-x-full');
}

moon.addEventListener('click',openMoon )
sun.addEventListener('click',openSun )
moon1.addEventListener('click',openMoon1 )
sun1.addEventListener('click',openSun1 )

function openMoon(){
	moon.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')
	
	setTimeout(() => {
		moon.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')
		moon.classList.toggle('scale-0')
		sun.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000);
		

}

function openSun(){
	sun.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
	setTimeout(() => {
		sun.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
		moon.classList.toggle('scale-0')
		sun.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000);
	
	
}

function openMoon1(){
	moon1.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')
	
	setTimeout(() => {
		moon1.classList.toggle('animate-[linerTo_1s_ease-in-out_both]')
		moon1.classList.toggle('scale-0')
		sun1.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000);
		

}

function openSun1(){
	sun1.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
	setTimeout(() => {
		sun1.classList.toggle('animate-[linerOT_1s_ease-in-out_both]')
		moon1.classList.toggle('scale-0')
		sun1.classList.toggle('scale-0')
		body.classList.toggle('darkMode')
	}, 1000);
	
	
}

menu.addEventListener('click' , openCloseMenu )
closeBtn.addEventListener('click' , openCloseMenu )
function openCloseMenu(){
	menuNav.classList.toggle("translate-x-full")
}