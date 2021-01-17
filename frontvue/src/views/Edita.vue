<template>
  <div>
    <h1>Edita usuario</h1>
    <user-form @createOrUpdate="createOrUpdate" :user=this.user></user-form>
  </div>
</template>

<script>
import userForm from '../components/UserForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edita',
  components: {
    'user-form': userForm
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    createOrUpdate: async function(user) {
      await api.updateuser(user);
      this.flash('usuário atualizado com sucesso!', 'success');
      this.$router.push(`/users/${user._id}`);
    }
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>