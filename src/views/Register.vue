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
              Hisobingizga ro'yxatdan o'ting
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
                  for="email"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Parol</label
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
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Secret key</label
                >
                <input
                  v-model="form.secret_key"
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="new-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
              >
              Ro'yxatdan o'tish
              </button>
              <p class="text-sm font-light text-gray-200 dark:text-gray-400">
                Hisobingiz bormi?
                <span
                  @click="$router.push('/login')"
                  href="#"
                  class="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
                  >Tizimga kirish</span
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
import { onBeforeMount, reactive } from "vue";
import { useOtpStore } from "../stores/otp";
import { useRouter } from "vue-router";
import axios from "../services/axios";
import { useNotificationStore } from "../stores/notification";

const otpStore = useOtpStore();
const router = useRouter();
const notification = useNotificationStore();
const store = reactive({
  checking: 1,
});

const form = reactive({
  username: "",
  email: "",
  password: "",
  secret_key: "",
});

// ----------------- axios --------------------

const Register = () => {
  const data = {
    phone: otpStore.phone,
    ...form,
  };
  axios
    .post("/admin/register", data)
    .then((res) => {
      notification.success("Successfully registered");
      router.push("/login");
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
    });
};

onBeforeMount(() => {
  console.log(otpStore.state.otp);
  if (otpStore.state.phone == "") {
    router.push("/check_phone");
  } else if (otpStore.state.is_true == false) {
    router.push("/otp_verification");
  }
});
</script>

<style lang="scss" scoped></style>
