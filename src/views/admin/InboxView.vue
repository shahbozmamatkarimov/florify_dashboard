<template>
  <div class="overflow-hidden">
    <AdminMenu>Inbox</AdminMenu>
    <nav
      class="flex z-30 md:justify-center justify-between px-5 md:py-5 md:px-12 items-center rounded-b-2xl shadow-lg bg-[#32cdb1a8]"
    >
      <div>
        <form>
          <div class="relative">
            <label
              for="search"
              class="absolute text-2xl rounded-l-full z-10 bg-blue-500 inset-y-0 left-0 flex items-center p-3 cursor-pointer"
            >
              <i class="bx bx-search text-blue"></i>
            </label>
            <input
              type="search"
              id="search"
              class="block w-full pr-3 cursor-pointer py-2 pl-16 text-sm text-gray-900 border focus:shadow-md border-gray-300 rounded-full bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Qidirish..."
              required
            />
          </div>
        </form>
      </div>
      <div class="md:hidden block pl-5 -top-2">
        <i
          id="cog"
          @click="cog = !cog"
          class="bx bx-cog cursor-pointer text-xl mt-5 active:bg-gray-500 active:shadow-xl active:border rounded bg-gray-400 py-1 px-2"
        ></i>
      </div>
    </nav>
    <div class="flex items-center justify-between">
      <div class="px-12 pt-5 lg:max-w-[700px] items-center w-full flex justify-between">
        <div class="flex gap-12">
          <div
            class="flex items-center mb-5 pt-1 pl-3 active:bg-gray-500 active:shadow-xl active:border py-1 rounded-lg h-10 bg-gray-400"
          >
            <input type="checkbox" class="ml-4 w-5 h-5" />
            <select id="select" class="focus:outline-none bg-transparent mx-2 rounded-lg">
              <option value="0">All</option>
              <option value="1">None</option>
              <option value="2">Read</option>
              <option value="3">Unread</option>
            </select>
          </div>
          <div>
            <p>
              <i
                class="bx bx-refresh text-2xl p-2 active:bg-gray-500 active:shadow-xl active:border py-1 rounded-lg bg-gray-400"
              ></i>
            </p>
          </div>
        </div>
      </div>
      <div class="md:block hidden px-12 -top-2">
        <i
          @click="cog = !cog"
          class="bx bx-cog cursor-pointer text-xl mt-5 active:bg-gray-500 active:shadow-xl active:border rounded bg-gray-400 py-1 px-2"
        ></i>
      </div>
    </div>

    <div class="flex justify-between md:px-12">
      <div
        class="bg-white lg:mx-0 mx-auto max-w-[600px] overflow-y-auto max-h-[410px] w-full rounded-lg items-center"
      >
        <div
          class="flex p-2 border-t-2"
          v-for="el in 5"
          :key="el"
          :class="{ 'rounded-t-lg': el == 1 }"
        >
          <div class="flex px-5 items-center">
            <input type="checkbox" class="w-5 h-5 cursor-pointer" />
          </div>
          <div class="w-full pr-5">
            <div class="flex justify-between">
              <h1 class="font-bold truncate">Mahsulotingiz sotildi</h1>
              <p class="truncate">5:36 pm</p>
            </div>
            <div class="w-full max-w-lg dark:bg-gray-800 dark:border-gray-700">
              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li>
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://t3.ftcdn.net/jpg/01/80/58/26/360_F_180582645_OC9VCIHohTXPFKKas6TKVTQW8ltmHmtV.webp"
                          alt="Neil image"
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div
                        class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                      >
                        $320
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex items-center" :class="{ hidden: true }">
            <i class="bx bx-trash cursor-pointer pr-5 text-red-600 text-lg"></i>
          </div>
        </div>
      </div>

      <div
        class="lg:block lg:static absolute max-w-[280px] rounded-lg border bg-white p-5 lg:ml-5 z-10 md:right-10 md:-top-4 right-5 -top-20 lg:outline-none outline outline-[1000px] outline-[#80808044]"
        :class="{ hidden: cog }"
      >
        <div class="flex lg:justify-center justify-between items-center pb-2 pt-0">
          <h1 class="font-bold text-center text-lg">Sozlamalar</h1>
          <i @click="cog = !cog" class="bx bx-x-circle text-2xl lg:hidden"></i>
        </div>
        <div>
          <h1 class="font-bold">Ovoz</h1>
          <div class="py-1">
            <p class="p-1">
              <input id="default" class="cursor-pointer" type="radio" name="voice" />
              <label class="cursor-pointer px-2" for="default">Default</label>
            </p>
            <p class="p-1">
              <input id="baland" class="cursor-pointer" type="radio" name="voice" />
              <label class="cursor-pointer px-2" for="baland">Baland</label>
            </p>
            <p class="p-1">
              <input id="o'rta" class="cursor-pointer" type="radio" name="voice" />
              <label class="cursor-pointer px-2" for="o'rta">O'rta</label>
            </p>
            <p class="p-1">
              <input id="past" class="cursor-pointer" type="radio" name="voice" />
              <label class="cursor-pointer px-2" for="past">Past</label>
            </p>
            <p class="p-1">
              <input id="ovozsiz" class="cursor-pointer" type="radio" name="voice" />
              <label class="cursor-pointer px-2" for="ovozsiz">Ovozsiz</label>
            </p>
          </div>
        </div>
        <div>
          <h1 class="py-1 font-bold">Eslatma</h1>
          <select class="pb-2">
            <option value="0">15 min</option>
            <option value="1">30 min</option>
            <option value="2">45 min</option>
            <option value="3">1 soatda</option>
            <option value="4">2 soatda</option>
            <option value="5">3 soatda</option>
            <option value="6">4 soatda</option>
            <option value="7">5 soatda</option>
          </select>
        </div>
        <div>
          <h1 class="font-bold">Orqa fon</h1>
          <div class="flex flex-wrap">
            <div class="p-2" v-for="el in 6" :key="el">
              <img
                class="rounded-lg max-w-10 max-h-8 cursor-pointer"
                src="https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY="
                alt="img"
              />
            </div>
          </div>
        </div>
        <button
          @click="cog = !cog"
          class="lg:hidden float-right mt-2 py-1 px-5 rounded bg-blue-600"
        >
          close
        </button>
      </div>
    </div>

    <div class="flex items-center lg:px-12 lg:justify-start justify-center py-4">
      <p class="mx-2"><span>1</span>-<span>50</span> of <span>234</span></p>
      <p>
        <i
          class="bx bx-chevron-left p-2 active:bg-gray-500 active:shadow-xl active:border rounded bg-gray-400 mx-1"
        ></i>
        <i
          class="bx bx-chevron-right p-2 active:bg-gray-500 active:shadow-xl active:border rounded bg-gray-400 mx-1"
        ></i>
      </p>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from 'vue'
import { AdminMenu } from '../../components';
const cog = ref(true)
</script>