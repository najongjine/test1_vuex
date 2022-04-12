<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>count : {{ $store.state.sampleModule.count }}</div>
    <div>
      <button @click="$store.commit('sampleModule/increment')">+</button>
    </div>
  </div>
</template>
