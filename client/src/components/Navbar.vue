<template>
  <nav className="navbar">
    <div className="navbar-logo">
      <router-link to="/" class="link"><h2>WorkoutCRM</h2></router-link>
    </div>
    <div className="navbar-list">
      <ul>
        <li className="navbar-list-item active-link">Статистика</li>
        <li className="navbar-list-item">Профиль</li>
        <li className="navbar-list-item">Выход</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
</style>