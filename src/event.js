import {ServiceTracker} from 'sosgi.framework';
import {UserEvent, IUserListener} from 'sapps.core.api';

export default class EventDispatcher{
    constructor(ctx) {
        this._tracker = new ServiceTracker(ctx, IUserListener);
        this._tracker.open();
    }
    fire(type, user) {
        var event = new UserEvent(type, user);
        var services = this._tracker.services;
        for (var i = 0, j = services.length; i < j; i++) {
            services[i].userEvent(event);
        }
    }
}
