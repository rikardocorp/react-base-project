import {route as routesPages} from '../views/_Pages/route'

const appRoutes = [
    routesPages,
    { redirect: true, path:"/", to:"/auth"}
]

export default appRoutes