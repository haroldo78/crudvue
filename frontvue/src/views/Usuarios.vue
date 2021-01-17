<template>
  <div>
    <h1>Listas de Usuarios</h1>
    <table id="users" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="users icon"></i>Nome</th>
          <th> <i class="phone icon"></i>Telefone</th>
          <th> <i class="envelope icon"></i>Email</th>
                    <th> <i class="lock open icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>



          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(user, i) in users" :key="i">
        <td>{{ user.name }}</td>
        <td>{{ user.telefone }}</td>
        <td>{{ user.email }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'lista-usuario', params: { id: user._id }}">Lista</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edita', params: { id: user._id }}">Edita</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(user._id)">
          <a :href="`/users/${user._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'users',
  data() {
    return {
      users: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Você tem certeza?');
      if (!sure) return;
      await api.deleteuser(id);
      this.flash('usuario excluída com sucesso!', 'success');
      const newUser = this.users.filter(user => user._id !== id);
      this.users = newUser;
    }
  },
  async mounted() {
    this.users = await api.getusers();
  }
};
</script>