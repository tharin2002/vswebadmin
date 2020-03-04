<template>
<div>
  <transition name="fade" appear>
    <main> <!-- a wrapper for slot is needed -->
      <slot /> <!-- the content -->
    </main>
  </transition>
</div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>