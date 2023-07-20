<template>
  <nav class="flex items-center justify-center my-1 mr-4 py-2">
    <div
      class="flex w-full py-3 rounded-lg bg-[#203843] justify-between md:text-2xl text-lg text-white font-bold z-50"
    >
      <h1 class="flex px-5 sm:ml-0 ml-8">
        <slot></slot>
      </h1>
      <div class="flex">
        <div>
          <router-link to="/"
            ><i class="sm:mx-5 mx-2 bx bxs-dashboard cursor-pointer"></i
          ></router-link>
        </div>
        <div class="relative">
          <router-link to="/admin_inbox"
            ><i class="sm:mx-5 mx-3 bx bxs-bell cursor-pointer"></i>
            <span
              class="absolute bg-blue-400 sm:left-8 left-4 top-3 px-[7px] h-5 rounded-full inline-block text-[10px] text-white font-bold"
              ><b class="relative md:-top-1.5 -top-1 sm:left-[0.5px]"
                >9</b
              ></span
            ></router-link
          >
        </div>
        <div>
          <router-link to="/admin_profile"
            ><i class="sm:mr-5 mr-2 bx bxs-user cursor-pointer"></i
          ></router-link>
        </div>
      </div>
    </div>
    <div class="sm:h-10"></div>
    <div class="exit bg-gray-100 sm:hidden ml-6 fixed left-2 w z-50">
      <button>
        <i class="bx bx-log-in text-3xl" @click="store.toggleNav = false"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useAdminNavbar } from "../stores/AdminNav";
import { ref } from "vue";
const store = useAdminNavbar();
const dark = ref(false);

function toggleFunc(e) {
  console.log(e);
  if (e == "moon") {
    dark.value = false;
  } else {
    dark.value = true;
  }
  console.log(dark.value);
}
</script>

<style lang="scss" scoped></style>

<!-- <div class="relative">
          <b
            class="flex items-center sm:mr-5 mr-2 h-8 pb-2 cursor-pointer border-2 rounded-full"
            ><span class="rounded-full" @click="toggleFunc('moon')">🌙</span
            ><span @click="toggleFunc('sun')" class="rounded-full">☀️</span></b
          >
          <p
            class="w-8 h-8 rounded-full absolute top-0 ml-0.5 -z-10 duration-1000 bg-white"
            :class="{ 'translate-x-full': dark }"
          ></p>
        </div> -->
