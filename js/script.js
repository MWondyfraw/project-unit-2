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
   let studentList = document.getElementByClassName('.student-list');
   
   studentList.innerHTML= '';

   for (let i = 0; i < list.length; i++) {
      if ( i >= startIndex && < endIndex) {

      let studentItem=  
      <li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i]. name. list}</h3>
      <span class="email">${list [i]. email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${list [i]. registered. date}</span>
    </div>
  </li>
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
   let linkList= document.getElementByClassName('.link-list');

   linkList.innerHTML = '';

   for (let i = 1; i <= numofPages; i++) {
      button = 
     <li> <button type="button">${i}</button></li>
      linkList.insertAdjacentHTML('beforeend',button);
      firstButton = document.querySelector('active');
      button.className = 'active';
      linkList.addEventListener('click', (e) => {
         if (e.target.tagName ==='Button') {
         document.querySelector('active').className = ''; 
         activeButton.className = 'active';
         showPage(list, e.target.textContent);

         }
      }
   }

}

// Call functions
showPage(data,1);
addPagination(data);