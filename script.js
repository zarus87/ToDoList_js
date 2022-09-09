let list = document.querySelector('ul'); // получаем доступ к тэгу ul

// LocalStorage

function toLocal() {
  let todos = list.innerHTML;
  localStorage.setItem('todos', todos);
}

 //

list.addEventListener('click', function (ev) {  // добавляем слушатель собыйтий  click к переменной list 
    if(ev.target.tagName === "LI") {  // если target это тэг li то...
       ev.target.classList.toggle('checked');  // ...приписываем тэгу classList checked
    } else if(ev.target.tagName === "SPAN") {    // если цель click это тэг span  то ...
       let div = ev.target.parentNode;    // ...в переменную помещаем родителя по кому юыло совершенно действие click 
       div.remove();
       toLocal()  // удаляем переменную
    }
});

function newElement() {    //функция создания нового элемента

    let li = document.createElement('li'); // создаём элемент с заданным тэгом

    let inputValue = document.getElementById('toDoEl').value;   //получаем ссылку на элемент toDoEl с его значением!

    let t = document.createTextNode(inputValue); // создаём текстовую заметку со значением inputValue, inputValue - введённый текст в поле input

    li.appendChild(t);  // добавляем к тэгу li переменную t в конец

    if(inputValue == "") {   //проверка! если поле ввода пустое, то выводитсья alert
       alert("Введите ваше дело!");
      } else {
       document.getElementById('list').appendChild(li);   // если поле ввода не пустое, то к элементу list добавляется новый элемен li
    }

    document.getElementById('toDoEl').value = ""; // устанавливаем значение поля ввода на пустое 

    let span = document.createElement('SPAN'); // создаём элемент с тэгом SPAN
    
  



    let txt = document.createTextNode("X"); // создаём текстовую заметку с текстом "Х"

    span.className = "close";  // Присваиваем переменной span css класс "close"

    span.appendChild(txt); // в конец тэга span добавляем переменную txt

    li.appendChild(span);  // в конец тэга li добавляем переменную span
    toLocal()
}



 //   поиск

document.querySelector("div.search input[type=\"text\"]") //выбираю тэг input запихнул в div c id так как слушается самый первый input который найдётся в верстве
        .addEventListener("input", (e) => {     // следим за изменением значений с помощью селектора input
        [...document.querySelectorAll("ul li")].forEach(item => {   // затем деструктуризация массива чтобы собрать все введёные буквы и с помощью forEach перебераю массив, каждый елемент которого попадает в item
         if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {   // для if else задаётся условие - выбирается весь текст из item c помощью textContent и  приравнивается к нижнему регистру. Затем с помощью метода .includes определяю содержит ли мой массив искомую комбинацию букв
             item.style.display = "block";    // если да, тэгу присваивается стиль display:block
         } else {
       item.style.display = "none";  // если нет, dispalay:none
     }
   });
 });

  // фильтр

function sortCheck () {
  [...document.querySelectorAll("ul li")].forEach(item => { 
    if (item.classList.contains('checked')) {   
        item.style.display = "block";    
    } else {
        item.style.display = "none"
   }
  }  )
}

function sortUnCheck () {
  [...document.querySelectorAll("ul li")].forEach(item => { 
    if (item.classList.contains('checked')) { 
        item.style.display = "none";
    } else {
        item.style.display = "block"
   }
  }  )
}

function allAffairs () {
  [...document.querySelectorAll("ul li")].forEach(item => {
    if (item.classList.contains('checked')) { 
        item.style.display = "block";
    } else {
        item.style.display = "block"
   }
  }  )
}

//

 if (localStorage.getItem('todos')) {
  list.innerHTML = localStorage.getItem('todos');
 }
 // Сортировка

 const re = ['б', 'г', 'а', 'д', 'в', 'е']

 let er = [...re].sort(function(a,b) {
  return b.localeCompare(a);
});

let we = [...re].sort(function(a,b) {
  return a.localeCompare(b);
});



// function protiv() {
//     let er = [...re].sort(function(a,b) {
//     return b.localeCompare(a);
//   });
//   console.log(er) 
// }


// function po() {
//     let we = [...re].sort(function(a,b) {
//     return a.localeCompare(b);
//   });
//   console.log(we)
  
// }



// console.log('оригинальный массив' + ' ' + re)

// let jk = [...re].sort();

// console.log('сортировка по алфавиту' + ' ' + jk) 

// let hj = [...jk].reverse();

// console.log('сортировка против алфавита' + ' ' + hj)