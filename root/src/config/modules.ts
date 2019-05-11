interface AppModule {
    name: String,
    path: String,
    prefix: String,
    storeUrl: String,
    routesUrl: String,
}

let modules: AppModule[] = [
    {
        name: "app1",
        path: "/app1/main.js",
        prefix: "/app1",
        storeUrl: null,
        routesUrl: "/app1/assets/routes.js"
    }
]

export default modules;