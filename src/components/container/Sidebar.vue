<template>
  <div class="c-sidebar c-sidebar-dark c-sidebar-fixed" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
      <img class="c-sidebar-brand-full"  height="46" src="../../assets/img/logo.png" />
      <img class="c-sidebar-brand-minimized" height="46" src="../../assets/img/logo.png" />
    </div>
    <ul class="c-sidebar-nav">
      <li class="c-sidebar-nav-item">
        <router-link to="/posts" tag="a" class="c-sidebar-nav-link">
          <span class="c-sidebar-nav-icon">
            <font-awesome-icon icon="train" />
          </span>
          Posts
        </router-link>
      </li>
      <li class="c-sidebar-nav-item">
        <router-link to="/about" tag="a" class="c-sidebar-nav-link">
          <span class="c-sidebar-nav-icon">
            <font-awesome-icon icon="info-circle" />
          </span>
          About
        </router-link>
      </li>
<!--      <li class="c-sidebar-nav-title">Users</li>-->
    </ul>
    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.c-sidebar-nav-icon {
  height: unset;
}
.router-link-exact-active.c-sidebar-nav-link {
  background: #321fdb;
}
</style>
