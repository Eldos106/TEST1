/// 1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

/// 2

setInterval(() => {
    console.log("Прошла секунда");
}, 1000);

/// 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}

count();

/// 4

const box = document.getElementById('box');
box.addEventListener('click', () => {
    box.classList.toggle('bg-color');
});

/// 5

const xhr = new XMLHttpRequest();
xhr.open('GET', './test.json');
xhr.setRequestHeader('Content-type', 'application/json')
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
};
xhr.send();
