var a = []
var obj = {}
function signup() {
    event.preventDefault()
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var password = document.querySelector("#password").value
    var retypswd = document.querySelector("#retypswd").value
    var number = document.querySelector("#number").value
    console.log(name,email,password)

obj.name = name
obj.email = email
obj.password = password
obj.retypswd = retypswd
obj.number = number
    a.push(obj)
    console.log(a)
    localStorage.setItem("details", JSON.stringify(a))
    alert("signup successfull")
    window.location.href = "login.html";
}
