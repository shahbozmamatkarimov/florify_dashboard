<template>
  <div
    class="header flex justify-start sm:items-start items-center w-full rounded-2xl py-4 px-5 text-lg min-h-[95.5vh] overscroll-y-auto"
  >
    <div>
      <router-link to="/">
        <div class="h-10 cursor-pointer w-full border-b-2">
          <img
            class="h-10 mx-auto pb-2"
            src="../assets/florago.svg"
            alt="img"
          />
        </div>
      </router-link>
      <div class="mx-auto w-full mt-6 sm:leading-8 md:leading-8 lg:leading-10">
        <div @click="store.toggleNav = true">
          <router-link
            to="/"
            class="flex gap-3 w-[225px] items-center py-1 px-4 hover:bg-[#8080803f] rounded-lg"
          >
            <i class="bx bxs-dashboard"></i> Dashboard
          </router-link>
        </div>
        <div @click="store.toggleNav = true">
          <router-link
            to="/admin_profile"
            class="flex gap-3 w-[225px] items-center py-1 px-4 hover:bg-[#8080803f] duration-1000 rounded-lg"
          >
            <i class="bx bxs-user-rectangle"></i> Profile
          </router-link>
        </div>
        <div @click="store.toggleNav = true">
          <router-link
            to="/billing"
            class="flex gap-3 w-[225px] items-center py-1 px-4 hover:bg-[#8080803f] duration-1000 rounded-lg"
          >
            <i class="bx bxs-dollar-circle"></i> Billing
          </router-link>
        </div>
        <div @click="store.toggleNav = true">
          <router-link
            to="/admin_inbox"
            class="flex gap-3 w-[225px] items-center py-1 px-4 hover:bg-[#8080803f] duration-1000 rounded-lg"
          >
            <i class="bx bxs-envelope"></i> Inbox
          </router-link>
        </div>
        <div @click="store.toggleNav = true">
          <router-link
            to="/usersettings"
            class="flex gap-3 w-[225px] items-center py-1 px-4 hover:bg-[#8080803f] duration-1000 rounded-lg"
          >
            <i class="bx bxs-cog"></i> Settings
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAdminNavbar } from "../stores/AdminNav";
const store = useAdminNavbar();
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: rgb(70, 158, 231);
  border-radius: 7px;
  width: 225px;
  box-shadow: 1px 1px 8px rgb(70, 158, 231);
}

.router-link-exact-active:hover {
  box-shadow: 2px 2px 10px rgb(70, 158, 231);
}

.header {
  background: radial-gradient(
    circle,
    rgba(32, 56, 67, 1) 100%,
    rgba(40, 56, 63, 1) 100%
  );
}
</style>
