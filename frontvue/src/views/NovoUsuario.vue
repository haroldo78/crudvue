<template>
  <div>
    <h1>Novo Usuario</h1>
    <user-form @createOrUpdate="createOrUpdate"></user-form>
  </div>
</template>

<script>
import userForm from '../components/UserForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'novo-usuario',
  components: {
    'user-form': userForm
  },
  methods: {
    createOrUpdate: async function(user) {
      const res = await api.createuser(user);
      this.flash('Criado novo usuario', 'success');
      this.$router.push(`/users/${res._id}`);
    }
  }
};
</script>