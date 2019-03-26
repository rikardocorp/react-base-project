// Pages
import Main from "./Vertical";

import Home from './Home'
import VerticalPages from './VerticalPages'


export const _base = {name: 'Vertical', path: ''}

export const route = {
    path: _base.path,
    name: _base.name,
    component: Main,
    routes: [
        {
            path: _base.path +"/",
            component: VerticalPages,
            name: 'Vertical',
            rel: 'vertical',
            icon: "icon-home",
            className: 'link-home',
            visible: true,
            meta: {requiredNoAuth:true}
        },
        {redirect: true, path: _base.path, to: _base.path + "/"}
    ]

}
