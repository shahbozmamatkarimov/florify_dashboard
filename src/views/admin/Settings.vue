<template>
  <main class="mr-5 mb-5 sm:ml-0 ml-5">
    <AdminMenu class="menu fixed z-50 sm:w-[calc(100%-19rem)] w-[94%] right-0"
      >Settings</AdminMenu
    >
    <div class="fixed top-0 bg-white h-20 w-full z-40"></div>
    <div class="h-[5rem]"></div>

    <section>
      <div class="lg:flex gap-5">
        <div
          class="img relative w-full xl:h-[300px] lg:h-[250px] md:h-[200px] sm:h-[150px] h-[200px] rounded-xl overflow-hidden"
        >
          <img
            :class="store.step == 1 ? 'block' : 'hidden'"
            class="w-full h-full object-cover mySlides"
            src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"
          />
          <img
            :class="store.step == 2 ? 'block' : 'hidden'"
            class="w-full h-full object-cover mySlides"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZL6HjXEL3kxa7hM9c78i8CyqcIlS9g2mkutCcl0tE6BytivcW8HapXrdeq3uNQx_-fvQ&usqp=CAU"
          />
          <img
            :class="store.step == 3 ? 'block' : 'hidden'"
            class="w-full h-full object-cover mySlides"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRc65MZUx1Y15BWXpZC4at4X90hYvlkLOjU3CjnZ_yMQPlcpeIBnWp4ROxEikHNBcVtqc&usqp=CAU"
          />
          {{ store.step }}
          <button
            class="absolute left-0 top-0 bottom-0 bg-[#80808057] text-white text-lg px-1 backdrop-blur-sm"
            @click="plusDivs(-1)"
          >
            &#10094;
          </button>
          <button
            class="absolute right-0 top-0 bottom-0 bg-[#80808057] text-white text-lg px-1 backdrop-blur-sm"
            @click="plusDivs(1)"
          >
            &#10095;
          </button>
        </div>
        <div
          class="img2 relative lg:mt-0 mt-5 md:w-[320px] sm:w-[170px] w-[200px] xl:min-w-[320px] lg:min-w-[270px] md:min-w-[220px] sm:min-w-[170px] min-w-[200px] max-w-[220px] h-full"
        >
          <p
            class="absolute font-medium lg:text-lg text-sm right-0 px-4 py-2 bg-[#FFA500] rounded-es-xl rounded-se-xl"
          >
            -30%
          </p>
          <img
            class="img xl:h-[300px] lg:h-[250px] md:h-[200px] sm:h-[150px] h-[200px] w-full object-cover rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRc65MZUx1Y15BWXpZC4at4X90hYvlkLOjU3CjnZ_yMQPlcpeIBnWp4ROxEikHNBcVtqc&usqp=CAU"
            alt="img"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="relative overflow-x-auto border mt-5 shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead class="text-xs text-white uppercase bg-gray-500">
            <tr>
              <th scope="col" class="font-bold px-6 py-3">Title</th>
              <th scope="col" class="font-bold px-6 py-3">Url</th>
              <th scope="col" class="font-bold px-6 py-3">Time</th>
              <th scope="col" class="flex justify-center px-6 py-3">
                <i
                  @click="store.toggle = true"
                  class="bx bx-plus text-lg bg-[blue] font-[2rem] px-1 text-white cursor-pointer mx-auto rounded-md"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td
                class="flex gap-5 justify-center items-center text-lg px-6 py-4"
              >
                <i @click="editFunc" class="cursor-pointer bx bx-pencil"></i>
                <i class="cursor-pointer bx bx-trash text-red-500"></i>
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td
                class="flex gap-5 justify-center items-center text-lg px-6 py-4"
              >
                <i class="cursor-pointer bx bx-pencil"></i>
                <i class="cursor-pointer bx bx-trash text-red-500"></i>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td
                class="flex gap-5 justify-center items-center text-lg px-6 py-4"
              >
                <i class="cursor-pointer bx bx-pencil"></i>
                <i class="cursor-pointer bx bx-trash text-red-500"></i>
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Gray</td>
              <td class="px-6 py-4">Phone</td>
              <td
                class="flex gap-5 justify-center items-center text-lg px-6 py-4"
              >
                <i class="cursor-pointer bx bx-pencil"></i>
                <i class="cursor-pointer bx bx-trash text-red-500"></i>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">Red</td>
              <td class="px-6 py-4">Wearables</td>
              <td
                class="flex gap-5 justify-center items-center text-lg px-6 py-4"
              >
                <i class="cursor-pointer bx bx-pencil"></i>
                <i class="cursor-pointer bx bx-trash text-red-500"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <div class="relative overflow-x-auto border mt-5 shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead class="text-xs text-white uppercase bg-gray-500">
            <tr>
              <th scope="col" class="font-bold px-6 py-3">Title</th>
              <th scope="col" class="font-bold px-6 py-3">Url</th>
              <th scope="col" class="font-bold px-6 py-3">Time</th>
              <th scope="col" class="flex justify-center px-6 py-3">
                <i
                  @click="store.toggle = true"
                  class="bx bx-plus text-lg bg-[blue] font-[2rem] px-1 text-white cursor-pointer mx-auto rounded-md"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td
                class="flex gap-5 justify-center items-center text-lg px-6 py-4"
              >
                <i @click="editFunc" class="cursor-pointer bx bx-pencil"></i>
                <i class="cursor-pointer bx bx-trash text-red-500"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!---------------------  Modal -------------------------->
    <section>
      <!-- Main modal -->
      <div
        tabindex="-1"
        aria-hidden="true"
        v-show="store.toggle"
        class="absolute backdrop-blur-[2px] bg-[#80808032] flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Image upload
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <i @click="toggleFunc" class="bx bx-x text-3xl"></i>
              </button>
            </div>
            <!-- Modal body -->
            <div class="space-y-6">
              <!-- component -->
              <div
                class="relative min-h-screen flex justify-center bg-gray-50 bg-no-repeat bg-cover items-center"
              >
                <div class="absolute opacity-60 inset-0 z-0"></div>
                <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                  <form class="mt-8 space-y-3" action="#" method="POST">
                    <div class="grid grid-cols-1 space-y-2">
                      <label
                        class="text-sm font-bold text-gray-500 tracking-wide"
                        >Title</label
                      >
                      <input
                        class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        type=""
                        placeholder="Image title"
                      />
                    </div>
                    <div class="grid grid-cols-1 space-y-2">
                      <label
                        class="text-sm font-bold text-gray-500 tracking-wide"
                        >Attach Document</label
                      >
                      <div class="flex items-center justify-center w-full">
                        <label
                          class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
                        >
                          <div
                            class="h-full w-full text-center flex flex-col justify-center items-center"
                          >
                            <!---<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                  </svg>-->
                            <div
                              class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10"
                            >
                              <img
                                class="has-mask h-36 object-center"
                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                alt="freepik image"
                              />
                            </div>
                            <p class="pointer-none text-gray-500">
                              <span class="text-sm">Drag and drop</span> files
                              here <br />
                              or
                              <a
                                href=""
                                id=""
                                class="text-blue-600 hover:underline"
                                >select a file</a
                              >
                              from your computer
                            </p>
                          </div>
                          <input @change="uploadImage"
                            type="file"
                            accept="image/jpeg"
                            class="hidden"
                          />
                        </label>
                      </div>
                    </div>
                    <p class="text-sm text-gray-300">
                      <span>File type: doc,pdf,types of images</span>
                    </p>
                    <div>
                      <button
                        type="submit"
                        class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                @click="toggleFunc"
                data-modal-hide="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---------------------  Modal -------------------------->
  </main>
</template>

<script setup>
import { reactive } from "vue";
import {
  AdminMenu,
} from "../../components";

const store = reactive({
  step: 1,
  toggle: false,
  edit: false,
  editId: "",
});

// --------------- upload image ---------------

async function uploadImage(event) {
      const file = event.target.files[0];
      const fileName = file.name;
      const contentType = file.type;

      // Google Cloud Storage bucket nomi
      const bucketName = 'florify';

      // Upload uchun endpoint URL
      const url = `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${fileName}`;

      const accessToken = 'AIzaSyDC771hXT9gkf5InDadqTLIeOJU__oUG4Y';

      // Faylni yuborish uchun HTTP so'rov yaratish
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': contentType,
        },
        body: file,
      });
      console.log(response);
      if (response.ok) {
        console.log('Rasm yuklandi');
      } else {
        console.error('Xatolik yuz berdi');
      }
    }


function plusDivs(n) {
  if (n > 0) {
    if (store.step < 3) {
      store.step += 1;
    } else {
      store.step = 1;
    }
  } else {
    if (store.step > 1) {
      store.step -= 1;
    } else {
      store.step = 3;
    }
  }
}

function editFunc(id) {
  store.editId = id;
  store.edit = true;
  store.toggle = true;
}

function toggleFunc() {
  store.edit = false;
  store.toggle = false;
}
</script>

<style lang="scss" scoped>
.has-mask {
  position: absolute;
  clip: rect(10px, 150px, 130px, 10px);
}

@media (max-width: 450px) {
  .img {
    height: 150px;
  }

  .img2 {
    width: 160px;
    min-width: 160px;
  }
}
</style>
