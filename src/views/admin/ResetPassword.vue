<template>
  <main>
    <section id="app">
      <!-- component -->
      <div
        class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12"
      >
        <div
          class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl"
        >
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div
              class="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div class="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div class="flex flex-col space-y-16">
                  <div
                    class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
                  >
                    <div class="w-16 h-16">
                      <input
                        @input="Otp(1)"
                        v-model="store.otp1"
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div class="w-16 h-16">
                      <input
                        @input="Otp(2)"
                        v-model="store.otp2"
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id="input2"
                      />
                    </div>
                    <div class="w-16 h-16">
                      <input
                        @input="Otp(3)"
                        v-model="store.otp3"
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div class="w-16 h-16">
                      <input
                        @input="Otp(4)"
                        v-model="store.otp4"
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                      <button
                        class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div
                      class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500"
                    >
                      <p>Didn't recieve code?</p>
                      <p class="flex flex-row items-center text-blue-600">
                        Resend
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";

const store = reactive({
  otp1: "",
  otp2: "",
  otp3: "",
  otp4: "",
});
function Otp(step) {
  if (step == 1) {
    store.otp1 = store.otp1.slice(0, 1);
  } else if (step == 2) {
    store.otp2 = store.otp2.slice(0, 1);
  } else if (step == 3) {
    store.otp3 = store.otp3.slice(0, 1);
  } else {
    store.otp4 = store.otp4.slice(0, 1);
  }
}
</script>

<style lang="scss" scoped></style>
