<template>
<div class="loading-overlay" v-if="loading">
  <font-awesome-icon icon="spinner" spin size="6x" />
</div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.loading-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.3);
  border-radius: 4px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    z-index: 11;
  }

}
</style>
