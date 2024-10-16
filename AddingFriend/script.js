

var status1 = document.querySelector("#card h5");
var addFriend1 = document.querySelector("#card button");

var status2 = document.querySelector("#card1 h5");
var addFriend2 = document.querySelector("#card1 button");

var status3 = document.querySelector("#card2 h5");
var addFriend3 = document.querySelector("#card2 button");

var status4 = document.querySelector("#card3 h5");
var addFriend4 = document.querySelector("#card3 button");

var status5 = document.querySelector("#card4 h5");
var addFriend5 = document.querySelector("#card4 button");

var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;

addFriend1.addEventListener("click", function () {
    if (check1 == 0) {
        status1.innerHTML = "Friends";
        status1.style.color = "green";
        check1 = 1;
    } else {
        status1.innerHTML = "Stranger";
        status1.style.color = "red";
        check1 = 0;
    }
});

addFriend2.addEventListener("click", function () {
    if (check2 == 0) {
        status2.innerHTML = "Friends";
        status2.style.color = "green";
        check2 = 1;
    } else {
        status2.innerHTML = "Stranger";
        status2.style.color = "red";
        check2 = 0;
    }
});
addFriend3.addEventListener("click", function () {
    if (check3 == 0) {
        status3.innerHTML = "Friends";
        status3.style.color = "green";
        check3 = 1;
    } else {
        status3.innerHTML = "Stranger";
        status3.style.color = "red";
        check3 = 0;
    }
});
addFriend4.addEventListener("click", function () {
    if (check4 == 0) {
        status4.innerHTML = "Friends";
        status4.style.color = "green";
        check4 = 1;
    } else {
        status4.innerHTML = "Stranger";
        status4.style.color = "red";
        check4 = 0;
    }
});
addFriend5.addEventListener("click", function () {
    if (check5 == 0) {
        status5.innerHTML = "Friends";
        status5.style.color = "green";
        check5 = 1;
    } else {
        status5.innerHTML = "Stranger";
        status5.style.color = "red";
        check5 = 0;
    }
});