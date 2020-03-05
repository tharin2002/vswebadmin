<template>
  <section>
    <ClientOnly>
      <b-modal :active="true" has-modal-card full-screen :can-cancel="false">
        <LoginModal />
      </b-modal>
    </ClientOnly>
  </section>
</template>

<script>
export default {
  components: {
    LoginModal: () => import('~/components/loginmodal.vue')
  },
  data() {
    return {
      isComponentModalActive: false
    };
  }
};
</script>
