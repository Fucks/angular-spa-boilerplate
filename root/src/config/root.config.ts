
export class GlobalConfig {
    routes: any[] = [];
    subscribers: any[] = [];

    addRoutes = (_routes) => {
        this.routes = this.routes.concat(_routes);
        this.dispatch();
    };

    dispatch = () => this.subscribers.forEach(e => e(this.routes))

    subscribe = (callback) => this.subscribers.push(callback);

}

export default new GlobalConfig();

// module Config {
//     let _routes = [];
//     let subscribers = [];

//     export function addRoutes(routes) {
//         _routes = _routes.concat(routes);

//         subscribers.forEach(e => e.fn.call(e.ctx, routes));
//     }

//     export function getRoutes() {
//         return _routes
//     };

//     export function subscribe(fn, ctx) {
//         subscribers.push({fn: fn, ctx: ctx});
//         fn.call(ctx, _routes);
//     }
// }

// export { Config };