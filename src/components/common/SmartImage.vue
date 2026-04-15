<template>
  <div
    class="smart-image"
    :class="{ 'is-loaded': isLoaded, 'is-error': hasError }"
    :style="wrapperStyle"
  >
    <div class="smart-image__backdrop"></div>
    <div class="smart-image__shimmer" aria-hidden="true"></div>

    <img
      class="smart-image__img"
      :src="safeSrc"
      :alt="alt"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      decoding="async"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  src: { type: String, default: "" },
  fallback: { type: String, default: "/images/placeholder-event.webp" },
  alt: { type: String, default: "" },
  ratio: { type: String, default: "16 / 9" },
  priority: { type: Boolean, default: false },
  position: { type: String, default: "center center" },
  radius: { type: String, default: "0px" },
});

const isLoaded = ref(false);
const hasError = ref(false);
const safeSrc = ref(props.src || props.fallback);

watch(
  () => props.src,
  (newValue) => {
    isLoaded.value = false;
    hasError.value = false;
    safeSrc.value = newValue || props.fallback;
  }
);

const wrapperStyle = computed(() => ({
  "--smart-image-ratio": props.ratio,
  "--smart-image-position": props.position,
  "--smart-image-radius": props.radius,
}));

function handleLoad() {
  isLoaded.value = true;
}

function handleError() {
  if (safeSrc.value !== props.fallback) {
    hasError.value = true;
    safeSrc.value = props.fallback;
    return;
  }

  isLoaded.value = true;
}
</script>

<style scoped>
.smart-image {
  position: relative;
  width: 100%;
  aspect-ratio: var(--smart-image-ratio);
  overflow: hidden;
  border-radius: var(--smart-image-radius);
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(46, 229, 111, 0.22), transparent 32%),
    linear-gradient(135deg, #0b1220 0%, #132238 100%);
}

.smart-image__backdrop,
.smart-image__shimmer,
.smart-image__img {
  position: absolute;
  inset: 0;
}

.smart-image__backdrop {
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.12), transparent 20%),
    radial-gradient(circle at 80% 0%, rgba(46, 229, 111, 0.18), transparent 26%);
  filter: blur(6px);
  transform: scale(1.05);
}

.smart-image__shimmer {
  background: linear-gradient(
    110deg,
    transparent 15%,
    rgba(255, 255, 255, 0.16) 35%,
    transparent 55%
  );
  transform: translateX(-120%);
  animation: shimmer 1.5s ease-in-out infinite;
  z-index: 1;
}

.smart-image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--smart-image-position);
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 0.45s ease, transform 0.85s ease;
  z-index: 2;
}

.smart-image.is-loaded .smart-image__img {
  opacity: 1;
  transform: scale(1);
}

.smart-image.is-loaded .smart-image__shimmer {
  animation: none;
  opacity: 0;
}

@keyframes shimmer {
  to {
    transform: translateX(120%);
  }
}
</style>