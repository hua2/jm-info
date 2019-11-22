<template>
  <transition name="full-fade">
    <div class="jm-full">
      <button type="button" class="full-close" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-icon"
          viewBox="0 0 32 32"
        >
          <circle cx="16" cy="16" r="16"></circle>
          <path
            class="fore"
            d="M16 14.336l4.992-4.991a1.177 1.177 0 0 1 1.663 1.663L17.664 16l4.991 4.992a1.177 1.177 0 1 1-1.663 1.663L16 17.664l-4.992 4.991a1.177 1.177 0 1 1-1.663-1.663L14.336 16l-4.991-4.992a1.177 1.177 0 0 1 1.663-1.663L16 14.336z"
          ></path>
        </svg>
      </button>
      <div class="full-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "JmFullDialog",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.jm-full {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.98);
  color: #5b6b73;
  padding: 5rem 3rem;
  .full-close {
    position: fixed;
    top: 1em;
    left: 100vw;
    transform: translateX(calc(-100% - 1em));
    font-size: 3rem;
    color: #dedee4;
    opacity: 0.8;
    transition: all 0.2s ease-out;
    z-index: 999;
    .svg-icon {
      fill: currentColor;
      width: 1em;
    }
    .fore {
      fill: #8d9ea7;
      transition: all 0.2s ease-out;
      transition-duration: 0.3s;
    }
    &:hover {
      color: #eb5648;
      opacity: 1;
      .fore {
        fill: #fff;
        transition-duration: 0.1s;
      }
    }
  }
  .full-content {
    position: relative;
    margin: auto;
    padding: 0 3rem;
  }
}
.full-fade-enter-active,
.full-fade-lever-active {
  transition: opacity 0.3s;
}
.full-fade-enter,
.full-fade-leave-to {
  opacity: 0;
}
</style>
