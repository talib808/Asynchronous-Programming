var usersdata = JSON.parse(localStorage.getItem('details'));

    console.log(usersdata)

    function login() {
        event.preventDefault();
        var logemail = document.querySelector("#email").value
        var logpswrd = document.querySelector("#password").value

        for(i=0;i<usersdata.length;i++){
            if(logemail == usersdata[i].email && logpswrd == usersdata[i].password){
            alert("success")
            window.location.href = "index.html";
          break;
        }
        else{
            alert("wrong")
        }
    }

    }