System.register(['sosgi.framework', 'sapps.core.api'], function (_export) {
    'use strict';

    var ServiceTracker, UserEvent, IUserListener, EventDispatcher;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_sosgiFramework) {
            ServiceTracker = _sosgiFramework.ServiceTracker;
        }, function (_sappsCoreApi) {
            UserEvent = _sappsCoreApi.UserEvent;
            IUserListener = _sappsCoreApi.IUserListener;
        }],
        execute: function () {
            EventDispatcher = (function () {
                function EventDispatcher(ctx) {
                    _classCallCheck(this, EventDispatcher);

                    this._tracker = new ServiceTracker(ctx, IUserListener);
                    this._tracker.open();
                }

                _createClass(EventDispatcher, [{
                    key: 'fire',
                    value: function fire(type, user) {
                        var event = new UserEvent(type, user);
                        var services = this._tracker.services;
                        for (var i = 0, j = services.length; i < j; i++) {
                            services[i].userEvent(event);
                        }
                    }
                }]);

                return EventDispatcher;
            })();

            _export('default', EventDispatcher);
        }
    };
});