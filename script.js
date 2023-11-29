'use stricts';

const btnSubmit = document.getElementsByClassName('submit')[0];
const number = document.getElementsByClassName('subNumber');
const rate_point = document.getElementById('rate');
const rating_section = document.querySelector('.rating_container');
const thank_section = document.querySelector('.thanks_container');


const [...numberArr] = number;
let rate = null;

numberArr.forEach(each=>{
	each.addEventListener('click',(e)=>{
		const active = document.querySelector('.checked');
		if(active){
			active.classList.remove('checked');
		}
		const card = e.target;
		card.classList.add('checked');
		rate = e.target.innerText;
	})
	
})
btnSubmit.addEventListener('click',()=>{
	if(rate){
		rate_point.innerHTML = rate;
		rating_section.classList.add('hidden');
		thank_section.classList.remove('hidden');
	}
})