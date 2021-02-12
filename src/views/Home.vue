<template>
  <div class="home">
    <Map />
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'
import {useI18n} from "vue-i18n";

export default {
  name: 'Home',
  components: {
    Map
  },
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  },

  mounted() {
    this.title()
  },

  methods: {
    title() {
      document.title = this.t('index.title', {}, {locale: this.$store.state.lang})
    }
  }
}
</script>
