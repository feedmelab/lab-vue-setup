<template>
  <div class="caixa-form">
    <label for="todoitem">{{ title }}</label>
    <input v-model="todoitem" @input="onInput" placeholder="Sometext here..." />
    <input
      type="button"
      @click="consolame"
      :value="subtitle"
      v-if="this.todoitem !== ''"
    />
    <h3>{{ todoitem }}</h3>
    <p></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Mi Componente",
      todoitem: "",
      subtitle: "Length of Words in Console",
    };
  },
  methods: {
    onInput(e) {
      this.InputData = e.target.value;
    },
    consolame() {
      if (this.InputData)
        console.log(this.InputData.length.toString(), " letters introduced");
    },
  },
};
</script>
<style>
label {
  display: flex;
  font-weight: bold;
  align-items: center;
}
.caixa-form {
  display: flex;
  justify-content: space-around;
  margin: 3rem;
}
.boto {
  padding: 0.8rem;
  background-color: rgb(130, 250, 106);
  border-radius: 0.8rem;
}
</style>
