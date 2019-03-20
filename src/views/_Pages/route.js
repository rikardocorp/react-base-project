// Pages
import Login from './LoginPage'
import Pagina from './pagina2'
import Main from "./Pages";

const _base = {name: 'Authentication', path: '/auth'}

export const route = {
    path: _base.path,
    name: _base.name,
    component: Main,
    routes: [
        {
            path: _base.path +"/login",
            component: Login,
            name: 'Login',
            icon: "nc-icon nc-mobile",
            visible: true,
            meta: {requiredNoAuth:true},
            className: 'animation-page login-page'
        },
        {
            path: _base.path +"/alex",
            component: Pagina,
            name: 'Login',
            icon: "nc-icon nc-mobile",
            visible: true,
            meta: {requiredNoAuth:true},
            className: 'animation-page login-page'
        },
        {redirect: true, path: _base.path, to: _base.path + "/login"}
    ]

}
