<template>
  <main class="bg-[#203843]">
    <section class="overflow-hidden overflow-y-auto max-h-screen">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-[#80808099] border shadow-md shadow-white backdrop-blur-sm rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white"
            >
              Register to your account
            </h1>
            <form
              @submit.prevent="Register"
              class="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Username</label
                >
                <input
                  v-model="form.username"
                  type="text"
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="admin"
                  required=""
                />
              </div>
              <div>
                <label
                  for="tel"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Phone number</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  name="tel"
                  id="tel"
                  autocomplete="tel"
                  class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="admin"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Your email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Password</label
                >
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="new-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <a
                href="#"
                class="text-sm inline-block font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Forgot password?</a
              >
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
              >
                Register
              </button>
              <p class="text-sm font-light text-gray-200 dark:text-gray-400">
                Do you have an account?
                <span
                  @click="$router.push('/login')"
                  href="#"
                  class="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
                  >Log in</span
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import {useRouter} from "vue-router"
import axios from "../services/axios";
import { useNotificationStore } from "../stores/notification";

const router = useRouter();
const notification = useNotificationStore();
const form = reactive({
  username: "",
  phone: "",
  email: "",
  password: "",
});

// ----------------- axios --------------------

const Register = () => {
  axios
    .post("/admin", form)
    .then((res) => {
      notification.success("Successfully registered");
      router.push("/login")
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
    });
};
</script>

<style lang="scss" scoped></style>
