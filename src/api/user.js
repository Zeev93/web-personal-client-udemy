const HOST = process.env.REACT_APP_HOST

export function signUpApi(data){
    const URL = `${HOST}/sign-up`
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }

    return fetch(URL, params)
        .then(response => {
            return response.json()
        }).then( result => {
            if(result.user){
                return {
                    status: 200,
                    message: "Usuario creado correctamente"
                }
            }else {
                return {
                    status: 400,
                    message: result.message
                    }
                }
        })
        .catch(err => {
            return {
                status: 400,
                message: err.message
            }
        })
}