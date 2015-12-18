

export default class Repository{

    constructor(http) {
        this._http = http;
    }
    getUser() {
        return this._http.get('/user');
    }
    login(login, password) {
        return this._http.post('/login', {
            login: login,
            password: password
        });
    }
    logout() {
        return this._http.get('/logout');
    }
}

export class IRepository{
    loadUser() {
    }
    login(login, password) {
    }
    logout() {
    }
}
