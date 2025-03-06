let nameUser = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let ege = document.getElementById('ege')
let fake = document.getElementById('fake')
let password = document.getElementById('password')
let btnSent = document.getElementById('btnSent')

let arr = JSON.parse(localStorage.getItem('user'))


arr.map(obj =>{
	nameUser.value = obj.fullName
	email.value = obj.email
	number.value = obj.number
	password.value = obj.password
	ege.value = obj.ege
})

btnSent.addEventListener('click' , function(){
	let count = 0;
		
	 if(nameUser.value.trim() == ""){
			 nameUser.classList.add('text-red-500')
			 nameUser.classList.add('border-red-500')
			 nameUser.value = "You must light this field" 
			 count--
			 nameUser.addEventListener('focus' , function(){
					 nameUser.value = ""
					 email.value = ""
					 number.value = "" 
					 password.value = ""
					 ege.value = ""
					 nameUser.classList.remove('text-red-500')
					 nameUser.classList.remove('border-red-500')
					 email.classList.remove('text-red-500')
					 email.classList.remove('border-red-500')
					 number.classList.remove('text-red-500')
					 number.classList.remove('border-red-500')  
					 ege.classList.remove('text-red-500')
					 ege.classList.remove('border-red-500')
					 password.classList.remove('text-red-500')
					 password.classList.remove('border-red-500')
			 })
				
	 }

	 if(email.value.trim() == ""){
			 email.classList.add('text-red-500')
			 email.classList.add('border-red-500')
			 email.value = "You must light this field"  
			 count-- 
			 email.addEventListener('focus' , function(){
					 nameUser.value = ""
					 email.value = ""
					 number.value = "" 
					 password.value = ""
					 ege.value = ""
					 nameUser.classList.remove('text-red-500')
					 nameUser.classList.remove('border-red-500')
					 email.classList.remove('text-red-500')
					 email.classList.remove('border-red-500')
					 number.classList.remove('text-red-500')
					 number.classList.remove('border-red-500')  
					 ege.classList.remove('text-red-500')
					 ege.classList.remove('border-red-500')
					 password.classList.remove('text-red-500')
					 password.classList.remove('border-red-500')
			 })    
	 }

	 if(number.value.trim() == ""){
			 number.classList.add('text-red-500')
			 number.classList.add('border-red-500')
			 number.value = "You must light this field"   
			 count--
			 number.addEventListener('focus' , function(){
					 nameUser.value = ""
					 email.value = ""
					 number.value = "" 
					 password.value = ""
					 ege.value = ""
					 nameUser.classList.remove('text-red-500')
					 nameUser.classList.remove('border-red-500')
					 email.classList.remove('text-red-500')
					 email.classList.remove('border-red-500')
					 number.classList.remove('text-red-500')
					 number.classList.remove('border-red-500')  
					 ege.classList.remove('text-red-500')
					 ege.classList.remove('border-red-500')
					 password.classList.remove('text-red-500')
					 password.classList.remove('border-red-500') 
			 })
			 
	 }

	 if(ege.value.trim() == ""){
			 ege.classList.add('text-red-500')
			 ege.classList.add('border-red-500')
			 ege.value = "You must light this field"   
			 count--
			 ege.addEventListener('focus' , function(){
					 nameUser.value = ""
					 email.value = ""
					 number.value = "" 
					 password.value = ""
					 ege.value = ""
					 nameUser.classList.remove('text-red-500')
					 nameUser.classList.remove('border-red-500')
					 email.classList.remove('text-red-500')
					 email.classList.remove('border-red-500')
					 number.classList.remove('text-red-500')
					 number.classList.remove('border-red-500')  
					 ege.classList.remove('text-red-500')
					 ege.classList.remove('border-red-500')
					 password.classList.remove('text-red-500')
					 password.classList.remove('border-red-500')
			 })    
	 }

	 if(password.value.trim() == ""){
			 password.classList.add('text-red-500')
			 password.classList.add('border-red-500')
			 password.value = "You must light this field" 
			 count--    
			 password.addEventListener('focus' , function(){
					 nameUser.value = ""
					 email.value = ""
					 number.value = "" 
					 password.value = ""
					 ege.value = ""
					 nameUser.classList.remove('text-red-500')
					 nameUser.classList.remove('border-red-500')
					 email.classList.remove('text-red-500')
					 email.classList.remove('border-red-500')
					 number.classList.remove('text-red-500')
					 number.classList.remove('border-red-500')  
					 ege.classList.remove('text-red-500')
					 ege.classList.remove('border-red-500')
					 password.classList.remove('text-red-500')
					 password.classList.remove('border-red-500')
			 })  
	 }

	 if(count==0){

			 userData = [{
					 fullName:nameUser.value,
					 email:email.value,
					 ege:ege.value,
					 password:password.value,
					 number:number.value,
			 }]

			 localStorage.setItem('user' , JSON.stringify(userData))
			 location.reload()
	 }
	 
	 
})
