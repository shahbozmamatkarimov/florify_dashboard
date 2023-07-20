<template>
  <main>
    <!-- component -->
    <AdminMenu class="fixed z-50 sm:w-[calc(100%-19rem)] w-[94%] right-0"
      >Profile</AdminMenu
    >
    <div class="fixed top-0 bg-white h-20 w-full z-40"></div>
    <div class="h-[5rem]"></div>
    <section
      class="p-5 mt-1 mb-5 sm:ml-0 ml-5 mr-5 overflow-hidden overflow-y-auto rounded-xl bg-[#203843] text-white"
    >
      <form>
        <div>
          <div class="border-b border-gray-900/10">
            <p class="mt-1 text-lg text-gray-200">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="colspan col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="colspan col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="lg:col-span-full md:col-span-3 col-span-6">
                <label
                  for="street-address"
                  class="block text-sm font-medium leading-6"
                  >Street address</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="lg:col-span-2 md:col-span-3 col-span-6">
                <label for="city" class="block text-sm font-medium leading-6"
                  >City</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="colspan lg:col-span-2 col-span-3">
                <label for="region" class="block text-sm font-medium leading-6"
                  >State / Province</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="colspan lg:col-span-2 col-span-3">
                <label
                  for="postal-code"
                  class="block text-sm font-medium leading-6"
                  >ZIP / Postal code</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <hr class="col-span-6" />

              <div class="md:col-span-3 col-span-6">
                <label for="tel" class="block text-sm font-medium leading-6"
                  >Phone number</label
                >
                <div class="mt-2">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    autocomplete="tel"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="md:col-span-3 col-span-6">
                <label for="email" class="block text-sm font-medium leading-6"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="md:col-span-3 col-span-6">
                <label for="email" class="block text-sm font-medium leading-6"
                  >Telegram</label
                >
                <div class="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="username"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="md:col-span-3 col-span-6">
                <label for="email" class="block text-sm font-medium leading-6"
                  >Instagram</label
                >
                <div class="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="username"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="md:col-span-3 col-span-6">
                <label for="email" class="block text-sm font-medium leading-6"
                  >Twitter</label
                >
                <div class="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="username"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="md:col-span-3 col-span-6">
                <label for="email" class="block text-sm font-medium leading-6"
                  >Facebook</label
                >
                <div class="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autocomplete="username"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6">
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { AdminMenu } from "../../components";
</script>

<style scoped>
input {
  box-shadow: 3px 3px 8px white;
  padding: 10px;
  color: black;
}

input:focus {
  outline: none !important;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
    var(--tw-ring-color) !important;
}

@media (max-width: 500px) {
  .colspan {
    grid-column: span 6 / span 6;
  }
}
</style>
