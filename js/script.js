/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
Add the startIndex & endIndex to the function
*/


function showPage(list, page) {
   let startIndex = (page  * 9) - 9;
   let endIndex = (page * 9);
   let studentList = document.getElementsByClassName('student-list')[0];
   
   studentList.innerHTML= '';

   for (let i = 0; i < list.length; i++) {
      if ( i >= startIndex && i < endIndex) {

      let studentItem=  
      `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i]. name. last}</h3>
      <span class="email">${list [i]. email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${list [i]. registered. date}</span>
    </div>
  </li>`
      studentList.insertAdjacentHTML('beforeend',studentItem);
      
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numofPages = Math.ceil(list.length / 9);
   let linkList= document.querySelector('link-list');
   addPagination.innerHTML = "linkList"
   for (let i = 1; i <= numofPages; i++) {
      button = `<li><button type="button">${i}</button></li>`;
       linkList.insertAdjacentHTML ('beforeend',button);
      firstButton = document.querySelector('button');
      firstButton.className = 'active';
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName ==='Button') {
         activeButton = document.querySelector('active');
         activeButton.className = ''; 
         e.target.className = 'active';
         showPage(list, e.target.textContent);

         }
      });
   }

}

// Call functions
showPage(data,1);
addPagination(data);
