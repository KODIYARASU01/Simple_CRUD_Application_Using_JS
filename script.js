let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.querySelector(".msg");
let posts = document.querySelector(".posts");

//Form Submition ;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button Clicked");
  validateForm();
  input.value = "";
});

//Validate Input :

function validateForm() {
  if (input.value === "") {
    msg.classList.add("msg-error");
    msg.classList.remove("msg");
    msg.innerHTML = "Post can't be blank";
    console.log("Failure");
  } else {
    msg.innerHTML = "";
    console.log("Success");
    acceptData();
  }
}

let data = {
  text: "",
};
let acceptData = () => {
  data.text = input.value;
  console.log(data);
  createPost();
};
//Create Post
let createPost = () => {
  console.log("Data pushed");
  posts.innerHTML += `
  <div class='post'>
    <p class="content">${data.text}</p>

            <div class="action">
                <i onClick='editPost(this)' class="uil uil-edit"></i>
                <i onClick='deletePost(this)' class="uil uil-trash"></i>
            </div>
            </div>
    `;
};
//Delete Post
let deletePost = (e) => {
  console.log(e);
  e.parentElement.parentElement.remove();
};

//Edit Post
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
