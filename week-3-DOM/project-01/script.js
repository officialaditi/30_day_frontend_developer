let btn = document.querySelector(".btn");
let click = 0;
btn.addEventListener("click", function () {
    if (click === 0) {
        btn.innerHTML = "Following";
        btn.style.backgroundColor = "green";
        click = 1;
    } else {
        btn.innerHTML = "Follow";
        btn.style.backgroundColor = "red";
        click = 0;
    }
});

let icon = document.querySelector('.icon');
let like = 0;
icon.addEventListener('click', function () {
    if (like === 0) {
        icon.classList.remove("fa-regular", "fa-heart");
        icon.classList.add("fa-solid", "fa-heart");
        like = 1;
    } else {
        icon.classList.remove("fa-solid", "fa-heart");
        icon.classList.add("fa-regular", "fa-heart");
        like = 0;
    }
});
    