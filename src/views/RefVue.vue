<script>
import RefChild from "@/components/RefChild.vue";

export default {
  components: {
    RefChild,
  },
  async mounted() {
    // this.$refs.child will hold an instance of <Child />
    this.refChildItems = await this.$refs.refChild.items;
  },
  data() {
    return { refChildItems: [] };
  },
  methods: {
    async updateRefChildItems() {
      this.refChildItems = await this.$refs.refChild.items;
    },
  },
};
</script>

<template>
  <div class="RefVue">
    <h1>Ref Vue</h1>
    <div>부모컴포넌트와 자식컴포넌트끼리 통신하는 예제임</div>
    <div>ref child data: {{ refChildItems }}</div>
  </div>
  <div>
    <!-- ref="refChild" 키워드는 컴포넌트에 변수이름 같은걸 지어주는 코드이다. this.$refs.refChild.items 이런식으로 접근 가능하다
    자식 컴포넌트에서 updateRefChildItems 라는 메세지를 쏘면(왼쪽에 있는 updateRefChildItems), 현재 컴포넌트에서는 updateRefChildItems 함수를 실행시키라는 코드이다(오른쪽 updateRefChildItems)-->
    <RefChild ref="refChild" @updateRefChildItems="updateRefChildItems" />
  </div>
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
