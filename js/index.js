$("#openlist").click(function(){
    $("#list").toggle(1000)
   })

   $(document).ready(() =>{
      $("#list").fadeOut(300)
   })

   const rowData = document.getElementById('rowData')
   const rowForInput = document.getElementById('rowForInput')
   async function getAllMovis( ){

      let mealsApi = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      let finalresult = (await mealsApi.json());
      disPlayMovis(finalresult.results)
      
   
   }
   getAllMovis()


   function disPlayMovis(x){
      rowData.innerHTML = ``
      let mealBox = ``;
      for(i=0;i< x.length;i++){
         mealBox+=`<div class="col-md-6 col-lg-4 my-3 myM  shadow">
                     <div class="movie shadow rounded position-relative">
                        <div class="post">
                           <img src="https://image.tmdb.org/t/p/w500${x[i].poster_path}" class="img-fluid rounded">
                           <div class="layer d-flex align-items-center ">
                              <div class="info p-0">
                                 <h2>${x[i].original_title}</h2>
                                 <p>${x[i].overview}</p>
                                 <p>${x[i].vote_average}</p>
                                 <p>${x[i].release_date}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>`
      }
      rowData.innerHTML = mealBox
   }


   async function getPopularMovis( ){

      let mealsApi = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      let finalresult = (await mealsApi.json());
      console.log(finalresult);
      disPlayMovis(finalresult.results)
      
   
   }


   async function getTopRatedMovis( ){

      let mealsApi = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      let finalresult = (await mealsApi.json());
      console.log(finalresult);
      disPlayMovis(finalresult.results)
      
   
   }
   async function getTrendingMovis( ){

      let mealsApi = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      let finalresult = (await mealsApi.json());
      console.log(finalresult);
      disPlayMovis(finalresult.results)
      
   
   }
   async function getUpcomingMovis( ){

      let mealsApi = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
      let finalresult = (await mealsApi.json());
      console.log(finalresult);
      disPlayMovis(finalresult.results)
      
   
   }


    let movis = [];
async function getBysearch()
{
 search = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
 result = await search.json()
    movis = result.results
   console.log(result.results)
   console.log(movis);
}

 getBysearch()


console.log(movis);


function searchMovieByName(string) {
   rowData.innerHTML = ``
   let mealBox = ``;

   for(i=0;i<movis.length;i++)
   {
      if(movis[i].original_title.includes(string)) {
         console.log(movis[i].original_title, string);
         mealBox+=`<div class="col-md-6 col-lg-4 my-3 myM  shadow">
         <div class="movie shadow rounded position-relative">
            <div class="post">
               <img src="https://image.tmdb.org/t/p/w500${movis[i].poster_path}" class="img-fluid rounded">
               <div class="layer d-flex align-items-center ">
                  <div class="info p-0">
                     <h2>${movis[i].original_title}</h2>
                     <p>${movis[i].overview}</p>
                     <p>${movis[i].vote_average}</p>
                     <p>${movis[i].release_date}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>`
      }
   }
   rowData.innerHTML = mealBox
  }


  function searchByFLetter(string) { 
   rowData.innerHTML = ``
   let mealBox = ``;

   for(i=0;i<movis.length;i++)
   {
      if(Array.from(movis[i].original_title)[0].toLowerCase() === string.toLowerCase()) {
      
         mealBox+=`<div class="col-md-6 col-lg-4 my-3 myM  shadow">
         <div class="movie shadow rounded position-relative">
            <div class="post">
               <img src="https://image.tmdb.org/t/p/w500${movis[i].poster_path}" class="img-fluid rounded">
               <div class="layer d-flex align-items-center ">
                  <div class="info p-0">
                     <h2>${movis[i].original_title}</h2>
                     <p>${movis[i].overview}</p>
                     <p>${movis[i].vote_average}</p>
                     <p>${movis[i].release_date}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>`
      }
      
   
   }
   rowData.innerHTML = mealBox
   }


   // conect
   contacName = document.getElementById("name")
   contacEmail = document.getElementById("email")
   contacPhone = document.getElementById("phone")
   contacAge = document.getElementById("age")
   contacPasswordalert = document.getElementById("passwordalert")
   contacRepasswordalert = document.getElementById("repasswordalert")

 

   const firstForm = document.getElementById('firstForm')
   firstForm.onsubmit = () => {
      document.querySelectorAll('.alerts').forEach(function(element) {
         element.classList.replace('d-block', 'd-none')
      }) // this for check all element have class Alert if have class d-block replace with d-none

      if(!validateInputName(firstForm.name.value)) { // this for check if given value  incorrect show error element
         document.getElementById('namealert').classList.replace('d-none', 'd-block')
         // return false
      }
      // console.log(firstForm.email.value, firstForm.email);
      if(!validateInputEmail(firstForm.email.value)) {
         document.getElementById('emailalert').classList.replace('d-none', 'd-block')
         // return false
      }
      console.log('incorrect');
      if(!validInputPhone(firstForm.phone.value)) {
         document.getElementById('phonealert').classList.replace('d-none', 'd-block')
         // return false
      }
      if(!validInputPhone(firstForm.phone.value)) {
         document.getElementById('phonealert').classList.replace('d-none', 'd-block')
         // return false
      }
      if(!validInputcontacAge(firstForm.age.value)) {
         document.getElementById('agealert').classList.replace('d-none', 'd-block')
         // return false
      }
      if(!validInputcontacPasswordalert(firstForm.password.value)) {
         document.getElementById('passwordalert').classList.replace('d-none', 'd-block')
         // return false
      }
      if(!validInputcontacRepasswordalert(firstForm.password.value)) {
         document.getElementById('repasswordalert').classList.replace('d-none', 'd-block')
         return false
      }
   }


   function validateInputName(value)
   {  let regex = /^[A-Za-z]{3,8}$/
      return regex.test(value) == true;}
   function validateInputEmail(value)
   {  let regex = /^[a-z]{3,12}@[a-z]{3,8}/
      return regex.test(value) == true}
   function validInputPhone(value)
   {  let regex = /01[0125][0-9]{8}$/
      return regex.test(value) == true}
   function validInputcontacAge(value)
   {  let regex = /^([1-7][0-9] | 80)/;
      return regex.test(value) == true}
   function validInputcontacPasswordalert(value)
   {  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return regex.test(value) == true}
   function validInputcontacRepasswordalert(value)
   {
      let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return regex.test(value) == true

   }




