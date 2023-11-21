<script setup>
import { FingerprintSpinner } from "epic-spinners";
</script>

<template>
  <div
    :class="
      'fixed z-[1] w-full h-full flex items-center justify-center'
    "
  >
    <fingerprint-spinner
      :animation-duration="500"
      :size="100"
      color="#efefef"
    />
  </div>
</template>

<style scoped>
</style>
