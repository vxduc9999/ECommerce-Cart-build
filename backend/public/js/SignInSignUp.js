const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
    //signup.style.left="400px";
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    //signin.style.left="0px";
    container.classList.remove("right-panel-active");
});