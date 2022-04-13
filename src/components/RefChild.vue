<template>
  <div class="refChild">
    <h1>RefChild</h1>
    <div>{{ items }}</div>
    <div><button @click="addItem">+ items</button></div>
  </div>
</template>

<script>
export default {
  name: "RefChild",

  data() {
    return {
      items: [{ message: "ref child Foo" }, { message: "ref child Bar" }],
    };
  },
  methods: {
    addItem() {
      this.items.push({ message: `added item ${this.items?.length ?? 0}` });
      this.$emit("updateRefChildItems", "someValue");
    },
  },
};
</script>
