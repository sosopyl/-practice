"use strict";
///327
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 	p.addEventListener('click', function(){
//         p.textContent = +p.textContent +1
//     })
// 	parent.appendChild(p);
// }

//328
//1
// let parent = document.querySelector('#elem')
// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr){
//     let li = document.createElement('li')
//     li.textContent = elem
//     parent.appendChild(li)
// }
//2
// let parent = document.querySelector('#elem')
// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr){
//     let li = document.createElement('li')
//     li.textContent = elem
//     li.addEventListener('click', function(){
//         console.log(li.textContent)
//     })
//     parent.appendChild(li)
// }
//3
// let parent = document.querySelector('#elem')
// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr){
//     let li = document.createElement('li')
//     li.textContent = elem
//     li.addEventListener('click', function(){
//         console.log(li.textContent)
//     })
//     li.addEventListener('click', function(){
//         li.textContent += '!'
//     })
//     parent.appendChild(li)
// }

// //4
// let parent = document.querySelector('#elem')
// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr){
//     let li = document.createElement('li')
//     li.textContent = elem
//     li.addEventListener('click', function(){
//         console.log(li.textContent)
//     })
//     li.addEventListener('click', function func(){
//         li.textContent += '!'
//         this.removeEventListener('click', func)
//     })
//     parent.appendChild(li)
// }

//329
//1
// let table = document.querySelector('#table');

// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//2
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//3
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent = 'x'
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//4
// let table = document.querySelector('#table');
// let elem1 = document.querySelector('#elem1')
// let elem2 = document.querySelector('#elem2')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     let weight = +elem1.value
//     let height = +elem2.value
//     for (let i = 0; i < weight; i++) {
//         let tr = document.createElement('tr');
//         for (let i = 0; i < height; i++) {
//             let td = document.createElement('td');
//             td.textContent = 'x'
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
    
// })


//330
//1
// let table = document.querySelector('#table');

// let k = 1; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.textContent = k; 
// 		k++; 
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
//2
// let table = document.querySelector('#table');

// let k = 1; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		if(k%2 == 1){
//             k++
//         }
//         td.textContent = k;
// 		k++; 
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
