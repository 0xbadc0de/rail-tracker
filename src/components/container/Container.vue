<template>
  <div class="c-app">
    <Sidebar/>
    <div class="c-wrapper c-fixed-components">
      <Header/>
      <div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <router-view v-slot="{ Component }" :key="$route.path">
              <transition>
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/container/Sidebar'
import Header from '@/components/container/Header'
import Footer from "@/components/container/Footer";
import ScriptLoader from '@/utils/script-loader';

export default {
  name: 'Container',
  components: {
    Footer,
    Header,
    Sidebar
  },
  mounted() {
    ScriptLoader.loadScript('/js/coreui.bundle.min.js', '')
  }
}
</script>

<style lang="scss">

</style>
