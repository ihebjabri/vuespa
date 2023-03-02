import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

export default {
    mode: 'history',
    linkExactActiveClass: 'text-red-900',

    routes: [{
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        }
    ]
}