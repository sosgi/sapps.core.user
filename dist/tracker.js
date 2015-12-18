System.register(['sapps.core.api', './service', './repository'], function (_export) {
    'use strict';

    var IHttpConnection, IUserService, UserService, Repository, UserServiceTracker;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_sappsCoreApi) {
            IHttpConnection = _sappsCoreApi.IHttpConnection;
            IUserService = _sappsCoreApi.IUserService;
        }, function (_service) {
            UserService = _service['default'];
        }, function (_repository) {
            Repository = _repository['default'];
        }],
        execute: function () {
            UserServiceTracker = (function () {
                function UserServiceTracker(ctx, dispacher) {
                    _classCallCheck(this, UserServiceTracker);

                    this._ctx = ctx;
                    this._dispacher = dispacher;
                }

                _createClass(UserServiceTracker, [{
                    key: 'start',
                    value: function start() {
                        this._tracker = this._ctx.services.tracker(IHttpConnection, this).open();
                    }
                }, {
                    key: 'stop',
                    value: function stop() {
                        this._tracker.close();
                        this._reg = null;
                    }
                }, {
                    key: 'addingService',
                    value: function addingService(ref, connection) {
                        var service = new UserService(new Repository(connection), this._dispacher);
                        service.getUser().then(function (user) {
                            console.log(user);
                        });
                        this._reg = this._ctx.services.register(IUserService, service);
                    }
                }, {
                    key: 'removedService',
                    value: function removedService(ref) {
                        this._reg.unregister();
                        this._reg = null;
                    }
                }]);

                return UserServiceTracker;
            })();

            _export('default', UserServiceTracker);
        }
    };
});