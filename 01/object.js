// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "ab",
    "full name": "a b",
    [mySym]: "mykey1",
    age: 18,
    location: "dhaka",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abc@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abc@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());