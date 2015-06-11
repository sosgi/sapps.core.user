System.register([], function (_export) {
    'use strict';

    var Repository, IRepository;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            Repository = (function () {
                function Repository(http) {
                    _classCallCheck(this, Repository);

                    this._http = http;
                }

                _createClass(Repository, [{
                    key: 'getUser',
                    value: function getUser() {
                        return this._http.get('/user');
                    }
                }, {
                    key: 'login',
                    value: function login(_login, password) {
                        return this._http.post('/login', {
                            login: _login,
                            password: password
                        });
                    }
                }, {
                    key: 'logout',
                    value: function logout() {
                        return this._http.get('/logout');
                    }
                }]);

                return Repository;
            })();

            _export('default', Repository);

            IRepository = (function () {
                function IRepository() {
                    _classCallCheck(this, IRepository);
                }

                _createClass(IRepository, [{
                    key: 'loadUser',
                    value: function loadUser() {}
                }, {
                    key: 'login',
                    value: function login(_login2, password) {}
                }, {
                    key: 'logout',
                    value: function logout() {}
                }]);

                return IRepository;
            })();

            _export('IRepository', IRepository);
        }
    };
});