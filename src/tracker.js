import {IHttpConnection, IUserService} from 'sapps.core.api';
import UserService from './service';
import Repository from './repository';

export default class UserServiceTracker{
    constructor(ctx, dispacher) {
        this._ctx = ctx;
        this._dispacher = dispacher;
    }
    start() {
        this._tracker = this._ctx.services.tracker(IHttpConnection, this).open();
    }
    stop() {
        this._tracker.close();
        this._reg = null;
    }
    addingService(ref, connection) {
        var service = new UserService(new Repository(connection), this._dispacher);
        service.getUser().then((user) => {
            console.log(user);
        })
        this._reg = this._ctx.services.register(IUserService, service);


    }
    removedService(ref) {
        this._reg.unregister();
        this._reg = null;
    }
}
