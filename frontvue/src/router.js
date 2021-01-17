import Vue from 'vue';
import Router from 'vue-router';
import Usuarios from './views/Usuarios.vue';
import NovoUsuario from './views/NovoUsuario.vue';
import ListaUsuarios from './views/ListaUsuarios.vue';
import Edita from './views/Edita.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/users',
      name: 'users',
      component: Usuarios
    },
    {
      path: '/users/novo-usuario',
      name: 'novo-usuario',
      component: NovoUsuario
    },
    {
      path: '/users/:id',
      name: 'lista-usuario',
      component: ListaUsuarios
    },
    {
      path: '/users/:id/edita',
      name: 'edita',
      component: Edita
    }
   
  ]
});