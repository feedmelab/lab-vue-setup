<template>
  <div class="home">
    <h1>This is My Component Page</h1>
    <ToDoItem />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  name: "MyComponentView",
  components: {
    ToDoItem,
  },
};
</script>
