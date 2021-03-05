const URL = 'http://localhost:8080/'


function postRequest(email, pass){
    console.log('culo')
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body:JSON.stringify({
            indentifier:email,
            password:pass
        }),
    };
    return fetch(URL+'auth/local', options)
        .then(response => {
            if(response.status !== 200){
                alert('Email o contraseña incorrectos');
            }else{
                response.json()
                .then(data => {
                    alert('Te has logeado correctamente')
                })
                .catch(error => {
                    alert('Email o contraseña incorrectos');
                })
            }
        })
        .catch(error => {
            alert('Email o contrseña incorrectos')
        })
}