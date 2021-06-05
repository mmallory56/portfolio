document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item, i) => {
    item.classList.toggle("change");
  });
 
});

document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item, i) => {
      item.classList.remove("change");
    });
  });
});
function myFunction(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  massage = message?message:"";
  console.log(name,email,message);
  submitHandler({name,email,message});
 console.log("i love niggers")
}
const contactForm =document.getElementById("form-section-5")
contactForm.addEventListener("submit",(e)=>{console.log(e)});
submitHandler = (values) => {
 
  console.log(values);

  axios.post('https://sheet.best/api/sheets/454aa26c-83ee-4395-bd6c-aa8ab19f95fc', values)
  .then(response => {
    console.log(response);
  })
}
