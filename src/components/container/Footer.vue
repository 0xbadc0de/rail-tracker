<template>
  <footer class="c-footer">
    <div class="ml-auto">
      <span class="text-muted">
        v.{{ version }}
      </span>
      <a href="https://github.com/0xbadc0de">0xbadc0de</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      version: process.env.VUE_APP_VERSION
    }
  },
}
</script>

<style scoped>

</style>
