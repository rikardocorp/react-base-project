import {route as routesPages} from '../views/_Pages/route'
import {route as routesVertical} from '../views/Vertical/route'

const appRoutes = [
    routesPages,
    routesVertical,
    { redirect: true, path:"/", to:"/auth"}
]

export default appRoutes