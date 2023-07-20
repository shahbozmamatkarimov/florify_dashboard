<template>
  <main
    class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200"
  >
  <AdminMenu class="menu fixed z-50 sm:w-[calc(100%-19rem)] w-[94%] right-0">Inbox</AdminMenu>
  <div class="fixed top-0 bg-white h-20 w-full z-40"></div>
  <div class="h-[5rem]"></div>
    <!-- Navbar -->

    <div class="flex items-center justify-between sm:ml-0 ml-3 mr-5">
      <div class="border inline-block px-1 rounded-lg">
        <label>
          <input class="h-4 w-4 cursor-pointer" type="checkbox" />
        </label>
        <select class="py-2 outline-none w-5">
          <option class="bg-[#203843] text-white" value="1">News</option>
          <option class="bg-[#203843] text-white" value="2">Todays</option>
          <option class="bg-[#203843] text-white" value="2">Old</option>
          <option class="bg-[#203843] text-white" value="2">All</option>
        </select>
      </div>
      <div>
        <div class="border inline-block px-1 rounded-lg">
          <i class="bx bx-show text-xl"></i>
          <select class="py-2 outline-none w-5">
            <option value="1">News</option>
            <option value="2">Todays</option>
            <option value="2">Online</option>
            <option value="2">Offline</option>
            <option value="2">Old</option>
            <option value="2">All</option>
          </select>
        </div>
        <i class="bx bx-trash cursor-pointer py-2 px-2 ml-5 border inline-block rounded-lg hover:bg-red-500 hover:text-white"></i>
      </div>
    </div>

    <div class="w-full sm:pl-0 pl-3 pr-5 py-6 mx-auto">
      <!-- table 1 -->

      <div class="flex flex-wrap -mx-3">
        <div class="flex-none w-full max-w-full px-3">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"
          >
            <div class="flex-auto px-0 pt-0 border overflow-hidden rounded-xl">
              <ul class="grid grid-cols-2">
                <li @click="store.type = 2" :class="{'bg-[#203843] text-white': store.type == 2}" class="py-2 md:text-lg sm:text-[0.9rem] text-xs whitespace-nowrap font-semibold px-4 cursor-pointer">Sotuvchilar</li>
                <li @click="store.type = 1" :class="{'bg-[#203843] text-white': store.type == 1}" class="py-2 md:text-lg sm:text-[0.9rem] text-xs whitespace-nowrap font-semibold px-4 cursor-pointer text-end">Sotilgan mahsulotlar</li>
              </ul>
              <div class="p-0 overflow-x-auto">
                <table class="items-center w-full lg:text-[1rem] text-sm text-slate-500">
                  <thead class="align-bottom">
                    <tr class="bg-gray-500">
                      <th></th>
                      <th
                        class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-50 opacity-70"
                      >
                        User
                      </th>
                      <th
                        class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-50 opacity-70"
                      >
                        Message
                      </th>
                      <th
                        class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-50 opacity-70"
                      >
                        Product
                      </th>
                      <th
                        class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-50 opacity-70"
                      >
                        Status
                      </th>
                      <th
                        class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-50 opacity-70"
                      >
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="border-b cursor-pointer hover:bg-slate-100"
                      v-for="i in 10"
                      :key="i"
                    >
                    <td class="pl-5">
                      <input class="w-4 h-4" type="checkbox" />
                    </td>
                      <td
                        class="p-2 align-middle bg-transparent whitespace-nowrap shadow-transparent"
                      >
                        <div class="flex px-2 py-1">
                          <div>
                            <img
                              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                              class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 min-w-[1rem] mr-7  min-h-9 rounded-xl"
                              alt="user1"
                            />
                          </div>
                          <div class="flex flex-col justify-center">
                            <h6 class="mb-0 text-sm leading-normal">
                              John Michael
                            </h6>
                            <p
                              class="mb-0 text-xs leading-tight text-slate-400"
                            >
                              john@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="p-2 align-middle bg-transparent whitespace-nowrap shadow-transparent"
                      >
                        <p class="mb-0 text-xs font-semibold leading-tight">
                          Mahsulot sotildi
                        </p>
                      </td>
                      <td
                        class="flex p-2 align-middle bg-transparent whitespace-nowrap shadow-transparent"
                      >
                        <img
                          class="h-14 min-w-[4rem] w-16 rounded-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7QbZ7Ps_hMspbECRCvLeT4GZC7h8HI2AIGrqbEKX&s"
                          alt="img"
                        />
                        <div
                          class="flex flex-col justify-between py-1 mb-0 text-xs px-2 leading-tight text-slate-400"
                        >
                          <h1 class="text-sm">Atirgul</h1>
                          <p>400 000 so'm</p>
                        </div>
                      </td>
                      <td
                        class="p-2 text-sm leading-normal text-center align-middle bg-transparent whitespace-nowrap shadow-transparent"
                      >
                        <span
                          class="bg-gradient-to-tl from-green-600 to-lime-400 px-3 text-xs rounded-lg pt-1.5 pb-2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"
                          >Online</span
                        >
                      </td>
                      <td
                        class="p-2 text-center align-middle bg-transparent whitespace-nowrap shadow-transparent"
                      >
                        <span
                          class="text-xs font-semibold leading-tight text-slate-400"
                          >23/04/18</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav class="lg:mt-0 -mt-5" aria-label="Page navigation example">
                <ul
                  class="flex items-center justify-center -space-x-px h-20 text-base"
                >
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >1</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >2</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >3</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >4</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >5</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { AdminMenu } from "../../components";

const store = reactive({
  type: 1,
})
</script>
