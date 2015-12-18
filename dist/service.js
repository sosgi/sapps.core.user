System.register(['./domain'], function (_export) {
    'use strict';

    var createUser, UserService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_domain) {
            createUser = _domain.createUser;
        }],
        execute: function () {
            UserService = (function () {
                function UserService(repository, dispacher) {
                    _classCallCheck(this, UserService);

                    this._repository = repository;
                    this._dispacher = dispacher;
                    this._user = null;
                }

                _createClass(UserService, [{
                    key: 'getUser',
                    value: function getUser() {
                        var self = this;
                        return new Promise(function (resolve, reject) {
                            if (self._user !== null) {
                                resolve(self._user);
                            } else {
                                self._repository.getUser().then(function (data) {
                                    self._user = createUser(data);
                                    resolve(self._user);
                                })['catch'](function (error) {
                                    console.log(error);
                                });
                            }
                        });
                    }
                }, {
                    key: 'login',
                    value: function login(_login, password) {
                        var self = this;
                        return new Promise(function (resolve, reject) {
                            self._repository.login(_login, password).then(function (data) {
                                var user = createUser(data);
                                if (!user.isAnonymous()) {
                                    self._user = user;
                                    self._dispacher.fire(LOGIN, user);
                                }
                            }, reject);
                        });
                    }
                }, {
                    key: 'logout',
                    value: function logout() {
                        var _this = this;

                        var self = this;
                        return new Promise(function (resolve, reject) {
                            _this._repository.logout().then(function () {
                                var user = self._user;
                                self._user = $user.createUser();
                                self._dispacher.fire(LOGOUT, user);
                            }, reject);
                        });
                    }
                }]);

                return UserService;
            })();

            _export('default', UserService);
        }
    };
});