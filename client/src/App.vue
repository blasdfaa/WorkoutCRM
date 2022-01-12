<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: { Navbar, Sidebar },
};
</script>

<style lang="scss">
.content{
  width: 75%;
  margin-left: 25%;
}
</style>
