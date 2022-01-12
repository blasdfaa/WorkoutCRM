<template>
  <aside className="sidebar">
    <ul className="sidebar-list">
      <li className="sidebar-list-item">
        <router-link to="/workout/create" class="link"
          >Создать тренировку</router-link
        >
      </li>
      <li className="sidebar-list-item">
        <router-link to="/workout/kinds" class="link"
          >Виды тренировок</router-link
        >
      </li>
      <li className="sidebar-list-item">
        <router-link to="/workout/readies" class="link"
          >Готовые тренировки</router-link
        >
      </li>
      <li className="sidebar-list-item">Расписание</li>
      <li className="sidebar-list-item">Антропометрия</li>
      <li className="sidebar-list-item">Цели</li>
      <li className="sidebar-list-item">Виды упражнений</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "sidebar",
};
</script>

<style lang="scss" scoped>
</style>