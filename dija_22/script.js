let submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", function addNumber(e) {
  e.preventDefault(); //to avoid reloading of page when form is submitted
  const form = e.target;
  let formData = new FormData(form);
  const X = formData.get("X");
  const Y = formData.get("Y");
  console.log(typeof(X));
  console.log(typeof(Y));
  const convertXToInt = parseInt(X);
  const convertYToInt = parseInt(Y);
  const Z = convertXToInt + convertYToInt;
  console.log(isNaN(Z));
  answer.innerHTML= Z;
  if (isNaN(Z)) {
    answer.innerHTML="error Integer Allowed Only";
    answer.style.backgroundColor="red";
     }
  else if(Z % 2 !==0){
    answer.style.backgroundColor="blue";
  }
  else if (Z % 2==0){
    answer.style.backgroundColor="green";
  }
    
  }
);
