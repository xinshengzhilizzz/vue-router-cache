<template>
  <div ref="page" class="vi-page">
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'vi-page'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      scrollTop: 0
    }
  },
  mounted() {
    this.setScreenHeight()
    this.addEventListenerResive()
  },
  activated() {
    this.scrollTo(0, this.scrollTop)
  },
  deactivated() {
    this.scrollTop = this.$refs.page.scrollTop
  },
  methods: {
    scrollTo() {
      this.$refs.page.scrollTo(...arguments)
    },
    setScreenHeight() {
      this.$refs.page.style.height = `${window.innerHeight}px`
    },
    addEventListenerResive() {
      window.addEventListener('resize', this.setScreenHeight)
    },
    removeEventListenerResive() {
      window.removeEventListener('resize', this.setScreenHeight)
    }
  },
  beforeDestroy() {
    this.removeEventListenerResive()
  }
}
</script>

<style lang="stylus">
.vi-page
  box-sizing: border-box
  position: absolute
  width: 100%
  height: 100%
  background: #f4f4f4
  overflow: scroll
  -webkit-overflow-scrolling: touch
  &::-webkit-scrollbar
    display: none
</style>
