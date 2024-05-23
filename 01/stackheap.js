//stack---> premitive
// heap ----> non
let myname = "mumu"
let user = {
    email: "user@gmail"

}
let usertwo = user
usertwo.email = "mumu@gmail"
console.log(user.email);
console.log(usertwo.email);
