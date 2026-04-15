<template>
  <section class="hero">
    <picture class="hero__picture">
      <source
        media="(max-width: 768px)"
        srcset="/images/actiportadamovil.webp"
      />
      <img
        class="hero__image"
        :src="src"
        alt="ActiVida portada"
        fetchpriority="high"
        decoding="async"
      />
    </picture>

    <div class="hero__veil"></div>
    <div class="hero__lights" aria-hidden="true"></div>
    <div class="hero__bottom-glow" aria-hidden="true"></div>

    <div class="hero__content">
      <div class="hero__actions">
        <div class="hero__cta-group">
          <Button
            label="Empezar Ahora"
            icon="pi pi-arrow-right"
            @click="scrollToPlans"
            class="cta-primary"
          />
          <Button
            label="Ver Planes"
            severity="secondary"
            @click="goToPlans"
            class="cta-secondary"
          />
        </div>

        <div class="scroll-indicator" @click="scrollDown">
          <span class="arrow-icon">
            <i class="pi pi-chevron-down"></i>
          </span>
          <span class="scroll-text">Desliza hacia abajo</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "primevue/button";
import { useRouter } from "vue-router";

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const goToPlans = () => router.push("/planes");
const scrollToPlans = () => router.push("/planes");
const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight * 0.9,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: clamp(340px, 52vw, 640px);
  height: clamp(340px, 58vw, 640px);
  max-height: 80svh;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: linear-gradient(180deg, #091833 0%, #0d2245 100%);
  isolation: isolate;
}

.hero__picture,
.hero__image,
.hero__veil,
.hero__lights,
.hero__bottom-glow {
  position: absolute;
  inset: 0;
}

.hero__picture {
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  transform: scale(1.01);
  will-change: transform;
  animation: heroImageFloat 14s ease-in-out infinite alternate;
}

.hero__veil {
  z-index: 1;
  background: linear-gradient(
      to bottom,
      rgba(7, 18, 42, 0.06) 0%,
      rgba(7, 18, 42, 0.14) 28%,
      rgba(7, 18, 42, 0.42) 66%,
      rgba(7, 18, 42, 0.72) 100%
    ),
    linear-gradient(
      to right,
      rgba(7, 18, 42, 0.12) 0%,
      rgba(7, 18, 42, 0.04) 36%,
      rgba(7, 18, 42, 0.18) 100%
    );
}

.hero__lights {
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(
      circle at 14% 82%,
      rgba(46, 229, 111, 0.14),
      transparent 16%
    ),
    radial-gradient(circle at 84% 20%, rgba(99, 66, 255, 0.12), transparent 18%),
    radial-gradient(circle at 72% 76%, rgba(8, 152, 156, 0.14), transparent 18%);
  filter: blur(10px);
  animation: heroGlowMove 9s ease-in-out infinite alternate;
}

.hero__bottom-glow {
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(8, 152, 156, 0.16) 0%,
    rgba(8, 152, 156, 0.07) 12%,
    transparent 28%
  );
}

.hero__content {
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem 1rem max(22px, env(safe-area-inset-bottom));
}

.hero__actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__cta-group {
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: fit-content;
  max-width: calc(100% - 24px);
  margin-bottom: 12px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(7, 18, 42, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

:deep(.cta-primary) {
  background: linear-gradient(135deg, #39e58b 0%, #1dcf79 100%);
  border: none !important;
  padding: 14px 38px !important;
  font-weight: 700;
  font-size: 16px !important;
  border-radius: 999px !important;
  transition: transform 0.28s ease, box-shadow 0.28s ease, filter 0.28s ease;
  box-shadow: 0 10px 28px rgba(46, 229, 111, 0.24);
}

:deep(.cta-primary:hover) {
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 16px 34px rgba(46, 229, 111, 0.34);
  filter: brightness(1.03);
}

:deep(.cta-secondary) {
  color: #ffffff !important;
  border: 1.5px solid rgba(255, 255, 255, 0.78) !important;
  padding: 12px 34px !important;
  font-weight: 700;
  font-size: 16px !important;
  border-radius: 999px !important;
  background: rgba(8, 17, 35, 0.22) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.28s ease;
}

:deep(.cta-secondary:hover) {
  background: rgba(8, 17, 35, 0.42) !important;
  border-color: #39e58b !important;
  color: #39e58b !important;
  box-shadow: 0 10px 22px rgba(46, 229, 111, 0.14);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
  opacity: 0.92;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateY(1px);
}

.arrow-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1.5px solid rgba(57, 229, 139, 0.95);
  border-radius: 50%;
  color: #39e58b;
  font-size: 18px;
  background: rgba(8, 17, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 0 0 0 rgba(57, 229, 139, 0.24);
  animation: bounce 2s infinite, pulseRing 2.6s infinite;
}

.scroll-text {
  font-size: 12px;
  color: #effff5;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@keyframes pulseRing {
  0% {
    box-shadow: 0 0 0 0 rgba(57, 229, 139, 0.22);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(57, 229, 139, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(57, 229, 139, 0);
  }
}

@keyframes heroGlowMove {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(0, -8px, 0) scale(1.03);
  }
}

@keyframes heroImageFloat {
  from {
    transform: scale(1.01) translateY(0);
  }
  to {
    transform: scale(1.025) translateY(-4px);
  }
}

@media (min-width: 769px) {
  .hero__image {
    object-position: center center;
  }
}

@media (max-width: 1024px) {
  .hero {
    min-height: clamp(300px, 58vw, 520px);
    height: clamp(300px, 58vw, 520px);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 340px;
    height: 58vh;
    max-height: 560px;
  }

  .hero__image {
    object-fit: cover;
    object-position: center top;
    transform: scale(1.01);
    animation: none;
  }

  .hero__veil {
    background: linear-gradient(
        to bottom,
        rgba(7, 18, 42, 0.08) 0%,
        rgba(7, 18, 42, 0.14) 26%,
        rgba(7, 18, 42, 0.34) 56%,
        rgba(7, 18, 42, 0.68) 82%,
        rgba(7, 18, 42, 0.84) 100%
      ),
      linear-gradient(
        to right,
        rgba(7, 18, 42, 0.1) 0%,
        rgba(7, 18, 42, 0.04) 36%,
        rgba(7, 18, 42, 0.12) 100%
      );
  }

  .hero__content {
    align-items: flex-end;
    justify-content: center;
    padding: 0 1rem 20px;
  }

  .hero__actions {
    width: 100%;
    align-items: center;
    transform: translateY(12px);
  }

  .hero__cta-group {
    gap: 10px;
    margin-bottom: 10px;
    padding: 9px 10px;
  }

  .arrow-icon {
    width: 36px;
    height: 36px;
    font-size: 15px;
  }

  .scroll-text {
    font-size: 11px;
  }

  :deep(.cta-primary) {
    padding: 10px 20px !important;
    font-size: 13px !important;
  }

  :deep(.cta-secondary) {
    padding: 9px 18px !important;
    font-size: 13px !important;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 360px;
    height: 62vh;
    max-height: 620px;
  }

  .hero__image {
    object-fit: cover;
   object-position: center 50%;
    transform: scale(1);
  }

  .hero__content {
    position: relative;
    align-items: stretch;
    justify-content: flex-end;
    padding: 0 0.85rem 16px;
  }

  .hero__actions {
    position: absolute;
    left: 50%;
    bottom: 6px;
    transform: translateX(-50%);
    width: min(250px, calc(100% - 1.7rem));
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__cta-group {
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 18px;
    background: rgba(7, 18, 42, 0.18);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  :deep(.cta-primary),
  :deep(.cta-secondary) {
    width: 100%;
    justify-content: center;
    min-width: 0;
    font-size: 12px !important;
  }

  :deep(.cta-primary) {
    padding: 10px 14px !important;
  }

  :deep(.cta-secondary) {
    padding: 9px 14px !important;
  }

  .scroll-indicator {
    gap: 0.3rem;
  }

  .arrow-icon {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .scroll-text {
    font-size: 10px;
  }
}
</style>