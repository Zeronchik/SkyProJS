let user = {
    name: "Albert",
    age: 32,
    isAdmin: true
}

user["city of residence"] = "Moscow";
user.age = 24;

let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);