<template>
  <div>
    <AdminMenu class="menu fixed z-50 sm:w-[calc(100%-19rem)] w-[94%] right-0">Dashboard</AdminMenu>
    <div class="fixed top-0 bg-white h-20 w-full z-40"></div>
    <div class="h-[5rem]"></div>
    
    <main class="mr-5 sm:ml-0 ml-5 mt-1 mb-5 text-white">
      <section>
        <div class="flex flex-wrap -mx-2">
          <!-- card1 -->
          <div
            class="max-w-full px-2 mb-4 md:w-1/2 sm:w-full w-1/2 xl:mb-0 xl:w-1/4"
            v-for="(i, index) in 4"
            :key="i"
          >
            <!-- card -->
            <div
              class="relative flex flex-col break-words bg-[#203843] shadow-soft-xl rounded-lg bg-clip-border"
            >
              <div class="flex-auto p-4">
                <div class="flex justify-between w-full -mx-3">
                  <div class="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p
                        class="mb-0 font-sans font-semibold leading-normal text-sm"
                      >
                        Users
                      </p>
                      <h5 class="mb-0 font-bold">
                        2,300
                        <span
                          class="leading-normal text-sm font-weight-bolder text-lime-500"
                          >+3%</span
                        >
                      </h5>
                    </div>
                  </div>
                  <div class="text-right">
                    <div
                      class="w-12 h-12 flex justify-center items-center rounded-lg"
                      :class="{
                        'bg-gradient-to-tl from-purple-700 to-pink-500':
                          index == 0,
                        'bg-gradient-to-tl from-blue-600 to-cyan-400':
                          index == 1,
                        'bg-gradient-to-tl from-red-500 to-yellow-400':
                          index == 2,
                        'bg-gradient-to-tl from-red-600 to-rose-400':
                          index == 3,
                      }"
                    >
                      <i
                        v-show="index == 0"
                        class="bx bx-user leading-none text-4xl"
                      ></i>
                      <i
                        v-show="index == 1"
                        class="bx bxs-hand-up leading-none text-4xl"
                      ></i>
                      <i
                        v-show="index == 2"
                        class="bx bxs-like leading-none text-4xl"
                      ></i>
                      <i
                        v-show="index == 3"
                        class="bx bxs-dislike leading-none text-4xl"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <div
              class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-lg border-0 border-solid bg-[#203843] bg-clip-border"
            >
              <div class="flex-auto p-4">
                <div class="pr-1 mb-4 rounded-xl">
                  <div>
                    <BasicColumnChart />
                  </div>
                </div>
                <h6 class="mt-6 mb-0 ml-2">Active Users</h6>
                <p class="ml-2 leading-normal text-sm">
                  (<span class="font-bold">+23%</span>) than last week
                </p>
                <div class="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
                  <div class="flex flex-wrap mt-0 -mx-3">
                    <div
                      class="flex-none sm:w-1/4 w-1/2 max-w-full py-4 pl-0 pr-3 mt-0"
                    >
                      <div class="flex mb-2">
                        <div
                          class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500"
                        >
                          <i class="bx bxs-user"></i>
                        </div>
                        <p
                          class="mt-1 mb-0 font-semibold leading-tight text-xs"
                        >
                          Userlar
                        </p>
                      </div>
                      <h4 class="font-bold">3621</h4>
                      <div
                        class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"
                      >
                        <div
                          class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-purple-700 text-center transition-all"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex-none sm:w-1/4 w-1/2 max-w-full py-4 pl-0 pr-3 mt-0"
                    >
                      <div class="flex mb-2">
                        <div
                          class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 900"
                        >
                          <i class="bx bxs-hand-up"></i>
                        </div>
                        <p
                          class="mt-1 mb-0 font-semibold leading-tight text-xs"
                        >
                          Bosilganlar
                        </p>
                      </div>
                      <h4 class="font-bold">3034</h4>
                      <div
                        class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"
                      >
                        <div
                          class="duration-600 ease-soft -mt-0.38 w-9/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center transition-all"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex-none sm:w-1/4 w-1/2 max-w-full py-4 pl-0 pr-3 mt-0"
                    >
                      <div class="flex mb-2">
                        <div
                          class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400"
                        >
                          <i class="bx bxs-like"></i>
                        </div>
                        <p
                          class="mt-1 mb-0 font-semibold leading-tight text-xs"
                        >
                          Likelar
                        </p>
                      </div>
                      <h4 class="font-bold">2032</h4>
                      <div
                        class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"
                      >
                        <div
                          class="duration-600 ease-soft -mt-0.38 w-3/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center transition-all"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="flex-none sm:w-1/4 w-1/2 max-w-full py-4 pl-0 pr-3 mt-0"
                    >
                      <div class="flex mb-2">
                        <div
                          class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-600 to-rose-400"
                        >
                          <i class="bx bxs-dislike"></i>
                        </div>
                        <p
                          class="mt-1 mb-0 font-semibold leading-tight text-xs"
                        >
                          Dislikelar
                        </p>
                      </div>
                      <h4 class="font-bold">431</h4>
                      <div
                        class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"
                      >
                        <div
                          class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-1/2 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center transition-all"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg bg-[#203843]"
          >
            <div
              class="shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-lg border-0 border-solid bg-clip-border"
            >
              <div class="p-4">
                <div>
                  <Users_SalesChart />
                </div>
              </div>
            </div>
            <div class="mb-0 border-b-0 border-solid px-6 pb-0">
              <h6>Sales overview</h6>
              <p class="leading-normal text-sm">
                <i class="fa fa-arrow-up text-lime-500"></i>
                <span class="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div class="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
              <div class="flex flex-wrap mt-3">
                <div class="flex-none w-1/2 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div class="flex mb-2">
                    <div
                      class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400"
                    >
                      <svg
                        width="10px"
                        height="10px"
                        viewBox="0 0 40 40"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>spaceship</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-1720.000000, -592.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(4.000000, 301.000000)">
                                <path
                                  class="color-background"
                                  d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                  opacity="0.598539807"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                  opacity="0.598539807"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                      Clicks
                    </p>
                  </div>
                  <h4 class="font-bold">2m</h4>
                  <div
                    class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"
                  >
                    <div
                      class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-blue-700 text-center transition-all"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="flex-none w-1/2 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div class="flex mb-2">
                    <div
                      class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-red-500 to-yellow-400"
                    >
                      <svg
                        width="10px"
                        height="10px"
                        viewBox="0 0 43 36"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>credit-card</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-2169.000000, -745.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                <path
                                  class="color-background"
                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                  opacity="0.593633743"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p class="mt-1 mb-0 font-semibold leading-tight text-xs">
                      Sales
                    </p>
                  </div>
                  <h4 class="font-bold">435$</h4>
                  <div
                    class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200"
                  >
                    <div
                      class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-yellow-400 text-center transition-all"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {
  AdminMenu,
  BasicColumnChart,
  Users_SalesChart,
} from "../../components";
</script>

<style lang="scss" scoped></style>
