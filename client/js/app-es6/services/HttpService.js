export class HttpService {
    _handleErrors(resposta) {
        if(resposta.ok){
            return resposta;
        } else {
            throw new Error(resposta.statusText);
        }
    }

    get(url) {
        return fetch(url)
            .then(resposta => 
                this._handleErrors(resposta))
            .then(resposta => 
                resposta.json()
            );
    }

    post(url, dado) {
        return fetch(url, {
            headers: {'Content-Type' : 'application/json'},
            method: 'post',
            body: JSON.stringify(dado)
        })
        .then(resposta => this._handleErrors(resposta))
        .then()
    }
}