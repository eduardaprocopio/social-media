let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("clicou");

  formValidation();
});

let formValidation = () => {
  if (input.value === ""){
    msg.innerHTML = "Publicação não pode ser em branco";
    console.log("falhou")
  } else {
    console.log("sucesso");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
};

let creatPost = () => {
  posts.innerHTML += ``;
};