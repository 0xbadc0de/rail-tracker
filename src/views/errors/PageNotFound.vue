<template>
  <div class="c-app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Oops! You're lost.</h4>
            <p class="text-muted">The page you are looking for was not found.</p>
          </div>
          <router-link to="/" tag="a">
            <button class="btn btn-lg btn-primary">Home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'PageNotFound',

  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },

  mounted() {
    this.title()
  },

  methods: {
    title() {
      document.title = this.t('404.title', {}, {locale: this.$store.state.lang})
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/style.scss';
</style>
