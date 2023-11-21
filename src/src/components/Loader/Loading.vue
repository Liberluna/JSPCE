<script setup>
import { HalfCircleSpinner } from "epic-spinners";
import { isIn } from "../../utils/isIn";

function removeLoader() {
  if (document.getElementById("loading")) {
    document.getElementById("loading").remove();
  }
}

if (isIn("client")) {
  if (localStorage.getItem("loaded") === "loaded") {
    removeLoader();
  }

  setTimeout(() => {
    removeLoader();
    localStorage.setItem("loaded", "loaded");
  }, 1000);
}
</script>

<template>
  <div
    :class="'fixed z-[1] w-full h-full flex items-center justify-center'"
    id="loading"
  >
    <half-circle-spinner
      :animation-duration="500"
      :size="100"
      :color="'#efefef'"
    />
  </div>
</template>

<style scoped></style>
