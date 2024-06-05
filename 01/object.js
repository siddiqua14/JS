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
    console.log(`Hello JS user, ${this.name}`); // string inter polation // this--> same object ke refer kore
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// -------------------------------//
// const tinderUser = new Object() // singleton
const tinderUser = {}              // nonsingleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "siddiqua",
            lastname: "mumu"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);  // ?---> jodi present na thake fullname

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in git",
    price: "999",
    courseInstructor: "abc"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {                              // json js object notation e[onetypeog
//     "name": "abc",
//     "coursename": "js in git",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
