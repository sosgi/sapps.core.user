import {createUser} from './domain';

export default class UserService{
    constructor(repository, dispacher) {
        this._repository = repository;
        this._dispacher = dispacher;
        this._user = null;
    }
    getUser(){
        var self = this;
        return new Promise((resolve, reject) => {
            if(self._user !== null){
              resolve(self._user);
            }else{
              self._repository.getUser()
                  .then((data) => {
                    self._user = createUser(data);
                    resolve(self._user);
                  });
            }
        });
    }
    login(login, password) {
        var self = this;
        return new Promise((resolve, reject) => {
            self._repository.login(login, password)
                .then(function(data) {
                var user = createUser(data);
                if (!user.isAnonymous()) {
                    self._user = user;
                    self._dispacher.fire(LOGIN, user);
                }
              }, reject);
        })
    }
    logout(){
        var self = this;
        return new Promise((resolve, reject) => {
            this._repository.logout().then(() => {
                var user = self._user;
                self._user = $user.createUser();
                self._dispacher.fire(LOGOUT, user);
            }, reject);
        });
    }
}
