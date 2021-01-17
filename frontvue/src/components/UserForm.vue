<template>

 <form action="#" @submit.prevent="onSubmit">
    <!-- <p v-if="errorsPresent" class="error">Todos os campos são Obrigatorio!</p> -->

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i>Nome
      </div>
      <input type="text" placeholder="Digite seu nome" v-model="user.name" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="phone icon"></i> Telefone
      </div>
      <input type="text" placeholder="Digite seu telefone" v-model="user.telefone" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="envelope icon"></i> Email
      </div>
      <input type="text" placeholder="Digite seu email" v-model="user.email" />
    </div>

    

    <button class="btn btn-primary">
        <i class="user plus icon"></i> Registra
    </button>
  </form>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
          telefone: '',
          email: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {

    //   if (this.user.name === '' || this.user.telefone === '' || this.user.email) {
    //     this.errorsPresent = true;
    //   } else {
         this.$emit('createOrUpdate', this.user);
    //   }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>