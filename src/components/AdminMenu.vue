<template>
  <nav class="flex items-center justify-center header my-4 mr-4 py-2 rounded-lg">
    <div
      class="flex fixed justify-between w-full md:px-36 md:text-2xl text-lg text-white font-bold z-50"
    >
      <h1 class="flex px-5">
        <slot></slot>
      </h1>
      <div class="flex">
        <div>
          <router-link to="/admin"
            ><i class="sm:mx-5 mx-2 bx bxs-dashboard cursor-pointer"></i
          ></router-link>
        </div>
        <div>
          <router-link to="/admin_inbox"
            ><i class="sm:mx-5 mx-2 bx bxs-bell cursor-pointer"></i>
            <span
              class="bg-blue-400 sm:-left-8 -left-4 top-1 px-[7px] h-5 rounded-full inline-block text-[10px] text-white font-bold"
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
    <div class="sm:h-10 h-10"></div>
    <div class="bg-gray-100 sm:hidden fixed w z-50">
      <button>
        <i class="bx bx-log-in text-3xl" @click="store.toggleNav = false"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useAdminNavbar } from "../stores/AdminNav";
const store = useAdminNavbar();
</script>

<style lang="scss" scoped>
.header {
  background: radial-gradient(
    circle,
    rgba(32, 56, 67, 1) 100%,
    rgba(40, 56, 63, 1) 100%
  );
}
</style>
