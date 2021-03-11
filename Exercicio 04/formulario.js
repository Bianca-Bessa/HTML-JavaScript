function enviar(){
    var xhr = new XMLHttpRequest();
    var url = "http://52.91.139.190/fsapi/users/login"

    var user = { 
        "email": "fschorles@teste.com", 
        "password": "123456" 
    }

    xhr.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var res = document.getElementById('res');
            var response = JSON.parse(this.responseText);
            res.innerHTML += response.user['email'];
            console.log(response)
        }
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(user));
}
