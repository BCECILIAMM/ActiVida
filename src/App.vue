
<template>
  <div id="app-layout">
    <AppHeader :isDark="isDark" @toggle-theme="isDark = !isDark" />

    <main class="min-h-screen">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import AppHeader from "./components/layout/AppHeader.vue";

const isDark = ref(localStorage.getItem("theme") === "dark");

watch(
  isDark,
  (v) => {
    document.documentElement.classList.toggle("my-app-dark", v); // html
    document.body.classList.toggle("my-app-dark", v); // body
    localStorage.setItem("theme", v ? "dark" : "light");
  },
  { immediate: true }
);
</script>
