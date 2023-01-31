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
 //331
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 
// 	[10, 11, 12]]; 
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//2
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 
// 	[10, 11, 12]]; 
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem * elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//332
// let table = document.getElementById('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

//2
// let table = document.getElementById('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
//     td2.addEventListener('click', function(){
//         td2.textContent = +td2.textContent +1
//     })
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

//3

// let table = document.getElementById('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
    
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
//     td2.addEventListener('click', function(){
//         td2.textContent = +td2.textContent +1
//     })
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
//     td3.addEventListener('click', function(){
//         td3.textContent = (+td3.textContent * 1.1).toFixed(0)
//     })
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

//333
// let table = document.querySelector('#table')
// let btn = document.querySelector('input')


// btn.addEventListener('click', function(){

//     let tr = document.createElement('tr');
//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');
//         td.textContent = i
//         i
//         tr.appendChild(td);
//     }
    
//     table.appendChild(tr);
// })

//2

// let table = document.querySelector('#table')
// let btn = document.querySelector('input')


// btn.addEventListener('click', function(){
//     let trs = document.querySelectorAll('#table tr');

//     for (let tr of trs) {
//         for (let i = 1; i <= 1; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//         }
//     }


//     let tr = document.createElement('tr');
//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');

//         tr.appendChild(td);
//     }
    
//     table.appendChild(tr);
// })

//334
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
// let btn = document.querySelector('input')
// btn.addEventListener('click', function(){
//     let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.textContent = +td.textContent * +td.textContent
// }
// })

//335
// let parent = document.querySelector('#parent');
// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
//     let elem = document.createElement('li')
//     elem.textContent = "elem"
//     elem.addEventListener('click', function(){
//         this.remove()
//     })
//     parent.appendChild(elem)
// }
// )
// let elems = document.querySelectorAll('#parent li');
// for(let list of elems){
//     list.addEventListener('click', function(){
//         this.remove()
//     })
// }
