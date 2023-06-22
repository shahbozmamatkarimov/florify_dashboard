<template>
  <div>
    <main
      class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200"
    >
      <!-- Navbar -->
      <AdminMenu>Billing</AdminMenu>

      <div class="w-full px-6 py-6 mx-auto">
        <!--- content --->

        <div class="flex flex-wrap -mx-3">
          <div class="max-w-full px-3 lg:w-2/3 lg:flex-none">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 mb-4 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border"
                >
                  <div
                    class="relative overflow-hidden rounded-2xl"
                  >
                    <span
                      class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"
                    ></span>
                    <div class="relative z-10 flex-auto p-4">
                      <i class="py-2 text-white">Humo</i>
                      <h5 class="pb-2 mt-6 mb-12 text-white">
                        4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                      </h5>
                      <div class="flex">
                        <div class="flex">
                          <div class="mr-6">
                            <p class="mb-0 leading-normal text-white text-sm opacity-80">
                              Card Holder
                            </p>
                            <h6 class="mb-0 text-white">Jack Peterson</h6>
                          </div>
                          <div>
                            <p class="mb-0 leading-normal text-white text-sm opacity-80">Expires</p>
                            <h6 class="mb-0 text-white">11/22</h6>
                          </div>
                        </div>
                        <div class="flex items-end justify-end w-1/5 ml-auto">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                    <div
                      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"
                    >
                      <div
                        class="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
                      >
                        <div
                          class="flex justify-center items-center w-16 h-16 mx-auto text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl"
                        >
                          <i
                            class="bx bx-dollar-circle text-white opacity-100 text-5xl top-31/100"
                          ></i>
                        </div>
                      </div>
                      <div class="flex-auto p-4 pt-0 text-center">
                        <h6 class="mb-0 text-center">Salary</h6>
                        <span class="leading-tight text-xs">Belong Interactive</span>
                        <hr
                          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
                        />
                        <h5 class="mb-0">+$2000</h5>
                      </div>
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                    <div
                      class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"
                    >
                      <div
                        class="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
                      >
                        <div
                          class="flex justify-center items-center w-16 h-16 mx-auto text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl"
                        >
                          <i
                            class="relative text-white opacity-100 bx bx-dollar text-5xl top-31/100"
                          ></i>
                        </div>
                      </div>
                      <div class="flex-auto p-4 pt-0 text-center">
                        <h6 class="mb-0 text-center">Paypal</h6>
                        <span class="leading-tight text-xs">Freelance Payment</span>
                        <hr
                          class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"
                        />
                        <h5 class="mb-0">$455.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- payment -->
              <div class="w-full mx-auto p-3">
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <h2 class="text-lg font-medium mb-6">Payment Information</h2>
                  <form>
                    <div class="grid grid-cols-2 gap-6">
                      <div class="col-span-2 sm:col-span-1">
                        <label
                          for="card-number"
                          class="block text-sm font-medium text-gray-700 mb-2"
                          >Card Number</label
                        >
                        <input
                          type="text"
                          name="card-number"
                          id="card-number"
                          placeholder="0000 0000 0000 0000"
                          class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div class="col-span-2 sm:col-span-1">
                        <label
                          for="expiration-date"
                          class="block text-sm font-medium text-gray-700 mb-2"
                          >Expiration Date</label
                        >
                        <input
                          type="text"
                          name="expiration-date"
                          id="expiration-date"
                          placeholder="MM / YY"
                          class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div class="col-span-2 sm:col-span-1">
                        <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2"
                          >CVV</label
                        >
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          placeholder="000"
                          class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div class="col-span-2 sm:col-span-1">
                        <label
                          for="card-holder"
                          class="block text-sm font-medium text-gray-700 mb-2"
                          >Card Holder</label
                        >
                        <input
                          type="text"
                          name="card-holder"
                          id="card-holder"
                          placeholder="Full Name"
                          class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div class="mt-8">
                      <button
                        type="submit"
                        class="w-full bg-center icon bg-gradient-to-tl from-purple-600 to-pink-500 text-white font-medium py-3 rounded-lg focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <!-- payment end -->
            </div>
          </div>
          <div class="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
            <color:div
              class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"
            >
              <div
                class="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent"
              >
                <div class="flex flex-wrap -mx-3">
                  <div class="flex items-center flex-none w-1/2 max-w-full px-3">
                    <h6 class="mb-0">Invoices</h6>
                  </div>
                  <div class="flex-none w-1/2 max-w-full px-3 text-right">
                    <button
                      class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75"
                    >
                      View All
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-4 pb-0">
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                        March, 01, 2020
                      </h6>
                      <span class="leading-tight text-xs">#MS-415646</span>
                    </div>
                    <div class="flex items-center leading-normal text-sm">
                      $180
                      <button
                        class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"
                      >
                        <i class="mr-1 fas fa-file-pdf text-lg"></i> PDF
                      </button>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                        February, 10, 2021
                      </h6>
                      <span class="leading-tight text-xs">#RV-126749</span>
                    </div>
                    <div class="flex items-center leading-normal text-sm">
                      $250
                      <button
                        class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"
                      >
                        <i class="mr-1 fas fa-file-pdf text-lg"></i> PDF
                      </button>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                        April, 05, 2020
                      </h6>
                      <span class="leading-tight text-xs">#FB-212562</span>
                    </div>
                    <div class="flex items-center leading-normal text-sm">
                      $560
                      <button
                        class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"
                      >
                        <i class="mr-1 fas fa-file-pdf text-lg"></i> PDF
                      </button>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                        June, 25, 2019
                      </h6>
                      <span class="leading-tight text-xs">#QW-103578</span>
                    </div>
                    <div class="flex items-center leading-normal text-sm">
                      $120
                      <button
                        class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"
                      >
                        <i class="mr-1 fas fa-file-pdf text-lg"></i> PDF
                      </button>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 bg-white border-0 rounded-b-inherit rounded-xl text-inherit"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                        March, 01, 2019
                      </h6>
                      <span class="leading-tight text-xs">#AR-803481</span>
                    </div>
                    <div class="flex items-center leading-normal text-sm">
                      $300
                      <button
                        class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"
                      >
                        <i class="mr-1 fas fa-file-pdf text-lg"></i> PDF
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </color:div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3">
          <div class="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
            >
              <div class="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 class="mb-0">Billing Information</h6>
              </div>
              <div class="flex-auto p-4 pt-6">
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li
                    class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-4 leading-normal text-sm">Oliver Liam</h6>
                      <span class="mb-2 leading-tight text-xs"
                        >Company Name:
                        <span class="font-semibold text-slate-700 sm:ml-2"
                          >Viking Burrito</span
                        ></span
                      >
                      <span class="mb-2 leading-tight text-xs"
                        >Email Address:
                        <span class="font-semibold text-slate-700 sm:ml-2"
                          >oliver@burrito.com</span
                        ></span
                      >
                      <span class="leading-tight text-xs"
                        >VAT Number:
                        <span class="font-semibold text-slate-700 sm:ml-2">FRB1235476</span></span
                      >
                    </div>
                    <div class="ml-auto text-right">
                      <a
                        class="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                        href="javascript:;"
                        ><i
                          class="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"
                        ></i
                        >Delete</a
                      >
                      <a
                        class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                        href="javascript:;"
                        ><i class="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i
                        >Edit</a
                      >
                    </div>
                  </li>
                  <li class="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-50">
                    <div class="flex flex-col">
                      <h6 class="mb-4 leading-normal text-sm">Lucas Harper</h6>
                      <span class="mb-2 leading-tight text-xs"
                        >Company Name:
                        <span class="font-semibold text-slate-700 sm:ml-2"
                          >Stone Tech Zone</span
                        ></span
                      >
                      <span class="mb-2 leading-tight text-xs"
                        >Email Address:
                        <span class="font-semibold text-slate-700 sm:ml-2"
                          >lucas@stone-tech.com</span
                        ></span
                      >
                      <span class="leading-tight text-xs"
                        >VAT Number:
                        <span class="font-semibold text-slate-700 sm:ml-2">FRB1235476</span></span
                      >
                    </div>
                    <div class="ml-auto text-right">
                      <a
                        class="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                        href="javascript:;"
                        ><i
                          class="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"
                        ></i
                        >Delete</a
                      >
                      <a
                        class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                        href="javascript:;"
                        ><i class="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i
                        >Edit</a
                      >
                    </div>
                  </li>
                  <li
                    class="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50"
                  >
                    <div class="flex flex-col">
                      <h6 class="mb-4 leading-normal text-sm">Ethan James</h6>
                      <span class="mb-2 leading-tight text-xs"
                        >Company Name:
                        <span class="font-semibold text-slate-700 sm:ml-2">Fiber Notion</span></span
                      >
                      <span class="mb-2 leading-tight text-xs"
                        >Email Address:
                        <span class="font-semibold text-slate-700 sm:ml-2"
                          >ethan@fiber.com</span
                        ></span
                      >
                      <span class="leading-tight text-xs"
                        >VAT Number:
                        <span class="font-semibold text-slate-700 sm:ml-2">FRB1235476</span></span
                      >
                    </div>
                    <div class="ml-auto text-right">
                      <a
                        class="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                        href="javascript:;"
                        ><i
                          class="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"
                        ></i
                        >Delete</a
                      >
                      <a
                        class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                        href="javascript:;"
                        ><i class="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i
                        >Edit</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
            <div
              class="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border"
            >
              <div class="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div class="flex flex-wrap -mx-3">
                  <div class="max-w-full px-3 md:w-1/2 md:flex-none">
                    <h6 class="mb-0">Your Transactions</h6>
                  </div>
                  <div class="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
                    <i class="mr-2 far fa-calendar-alt"></i>
                    <small>23 - 30 March 2020</small>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-4 pt-6">
                <h6 class="mb-4 font-bold leading-tight uppercase text-xs text-slate-500">
                  Newest
                </h6>
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl"
                  >
                    <div class="flex items-center">
                      <button
                        class="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75"
                      >
                        <i class="fas fa-arrow-down text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Netflix</h6>
                        <span class="leading-tight text-xs">27 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p
                        class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text"
                      >
                        - $ 2,500
                      </p>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl"
                  >
                    <div class="flex items-center">
                      <button
                        class="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75"
                      >
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Apple</h6>
                        <span class="leading-tight text-xs">27 March 2020, at 04:30 AM</span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p
                        class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text"
                      >
                        + $ 2,000
                      </p>
                    </div>
                  </li>
                </ul>
                <h6 class="my-4 font-bold leading-tight uppercase text-xs text-slate-500">
                  Yesterday
                </h6>
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl"
                  >
                    <div class="flex items-center">
                      <button
                        class="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75"
                      >
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Stripe</h6>
                        <span class="leading-tight text-xs">26 March 2020, at 13:45 PM</span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p
                        class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text"
                      >
                        + $ 750
                      </p>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl"
                  >
                    <div class="flex items-center">
                      <button
                        class="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75"
                      >
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">HubSpot</h6>
                        <span class="leading-tight text-xs">26 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p
                        class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text"
                      >
                        + $ 1,000
                      </p>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl"
                  >
                    <div class="flex items-center">
                      <button
                        class="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75"
                      >
                        <i class="fas fa-arrow-up text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Creative Tim</h6>
                        <span class="leading-tight text-xs">26 March 2020, at 08:30 AM</span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p
                        class="relative z-10 items-center inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text"
                      >
                        + $ 2,500
                      </p>
                    </div>
                  </li>
                  <li
                    class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl"
                  >
                    <div class="flex items-center">
                      <button
                        class="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75"
                      >
                        <i class="fas fa-exclamation text-3xs"></i>
                      </button>
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Webflow</h6>
                        <span class="leading-tight text-xs">26 March 2020, at 05:00 AM</span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p
                        class="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700"
                      >
                        Pending
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { AdminMenu } from '../../components';

</script>

<style lang="scss" scoped>
</style>