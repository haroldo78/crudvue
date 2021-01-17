<template>
  <div>
    <h1>Listas de usuario</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="user icon"></i> Nome
      </div>
      <input type="text" readonly  :value="user.name"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="phone icon"></i> Telefone
      </div>
      <input type="text" readonly  :value="user.telefone"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="envelope icon"></i> Email
      </div>
      <input type="text" readonly  :value="user.email"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edita', params: { id: this.$route.params.id }}">
        Edita Usuario
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'lista-usuario',
  data() {
    return {
      user: ''
    };
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>