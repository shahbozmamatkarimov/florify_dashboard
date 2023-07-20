<template>
  <div class="flex">
    <header class="sm:bg-transparent bg-[#203843] sm:block flex justify-center items-center text-white p-3 sm:min-w-[18rem] sm:max-w-[18rem] w-full overflow-y-auto max-h-screen"
      :class="{ 'sm:block hidden': store.toggleNav }">
      <nav>
        <AdminNav />
      </nav>
    </header>
    <main
    :class="{ 'sm:block hidden': !store.toggleNav }"
     class="w-full overflow-y-auto overflow-hidden max-h-screen">
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script setup>
import { AdminNav } from '../components'
import { useAdminNavbar } from '../stores/AdminNav'

const store = useAdminNavbar()
</script>
  
  
<style scoped></style>