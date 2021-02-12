<template>
  <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
    <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
      <span class="c-icon c-icon-lg">
        <font-awesome-icon icon="bars" />
      </span>
    </button>
    <a class="c-header-brand d-lg-none" href="#">
      <img class="c-sidebar-brand-full" width="118" height="46" src="../../assets/img/logo.png" />
    </a>
    <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
      <span class="c-icon c-icon-lg">
        <font-awesome-icon icon="bars" />
      </span>
    </button>
    <ul class="c-header-nav d-md-down-none">
      <li class="c-header-nav-item px-3">
        <router-link to="/" tag="a" class="c-header-nav-link">Home</router-link>
      </li>
      <li class="c-header-nav-item px-3">
        <router-link to="/about" tag="a" class="c-header-nav-link">About</router-link>
      </li>
      <li class="c-header-nav-item px-3" v-if="user">
        <router-link to="/settings" tag="a" class="c-header-nav-link">Settings</router-link>
      </li>
    </ul>
    <ul class="c-header-nav ml-auto mr-4">
      <li class="c-header-nav-item d-md-down-none mx-2" v-if="!user">
        <a class="c-header-nav-link" href="/login">
          <font-awesome-icon icon="key" fixed-width="true" />
        </a>
      </li>
      <li class="c-header-nav-item dropdown" v-if="user">
        <a class="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <div class="c-avatar"><img class="c-avatar-img" src="../../assets/img/avatar.png" alt="{{ user?.email }}"></div>
          <span class="ml-2">{{ user?.email }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right pt-0">
<!--          <div class="dropdown-header bg-light py-2">-->
<!--            <strong>Settings</strong>-->
<!--          </div>-->
<!--          <a class="dropdown-item" href="#">-->
<!--          <svg class="c-icon mr-2">-->
<!--            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>-->
<!--          </svg> Profile</a><a class="dropdown-item" href="#">-->
<!--          <svg class="c-icon mr-2">-->
<!--            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-settings"></use>-->
<!--          </svg> Settings</a><a class="dropdown-item" href="#">-->
<!--          <svg class="c-icon mr-2">-->
<!--            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-credit-card"></use>-->
<!--          </svg> Payments<span class="badge badge-secondary ml-auto">42</span></a><a class="dropdown-item" href="#">-->
<!--          <svg class="c-icon mr-2">-->
<!--            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-file"></use>-->
<!--          </svg> Projects<span class="badge badge-primary ml-auto">42</span></a>-->
<!--          <div class="dropdown-divider"></div><a class="dropdown-item" href="#">-->
<!--          <svg class="c-icon mr-2">-->
<!--            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>-->
<!--          </svg> Lock Account</a>-->
          <a class="dropdown-item" href="#" @click="logout">
            <span class="c-icon mr-2">
              <font-awesome-icon icon="power-off" />
            </span>
            Logout
          </a>
        </div>
      </li>
    </ul>
<!--    <div class="c-subheader px-3">-->
<!--      &lt;!&ndash; Breadcrumb&ndash;&gt;-->
<!--      <ol class="breadcrumb border-0 m-0">-->
<!--        <li class="breadcrumb-item">Home</li>-->
<!--        <li class="breadcrumb-item"><a href="#">Admin</a></li>-->
<!--        <li class="breadcrumb-item active">Dashboard</li>-->
<!--        &lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->
<!--      </ol>-->
<!--    </div>-->
  </header>
</template>

<script>
import User from '@/models/User';
import store from '@/store';

export default {
  name: 'Header',
  data () {
    return {
      user: store.state.user
    }
  },
  methods: {
    logout() {
      console.log('[Header] logout()')
      localStorage.removeItem('token')
      this.$store.commit('setToken', null)
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    }
  },
  beforeMount() {
    // Get current logged user
    User.api().currentUser().then(r => {
      // console.log(r.response.data)
      this.$store.dispatch('setUser', r.response.data)
          .then(() => {
            this.user = store.state.user
            console.log('[Header] currentUser Loaded User=' + this.user.id)
          })
    }).catch(e => {
      console.error('[Header] beforeMount Error:', e)
    })
  }
}
</script>

<style scoped>

</style>
