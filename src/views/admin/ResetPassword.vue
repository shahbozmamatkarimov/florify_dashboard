<template>
  <main>
    <section v-show="store.checking == 1">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-[#80808099] border shadow-md shadow-white backdrop-blur-sm rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              @submit.prevent="store.checking = 2"
              class="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  for="tel"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >Telefon raqam</label
                >
                <input type="text" placeholder="Your phone number">
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
              >
                Kodni jo'natish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center min-h-screen">
      <div
        class="flex flex-col items-center justify-center w-[30rem] py-5 rounded-xl shadow-lg border"
      >
        <h1 class="h-10 text-2xl">Kodni kiriting</h1>
        <p>Biz +998 99***4223 telefon raqamingizga kod yubordik</p>
        <div class="otp-field py-5">
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input class="space" type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useNotificationStore } from "../../stores/notification";

const notification = useNotificationStore();

const store = reactive({
  checking: 1,
  phone: "+998 ",
});

onMounted(() => {
  const inputs = document.querySelectorAll(".otp-field input");

  inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
  });

  function handleOtp(e) {
    /**
     * <input type="text" 👉 maxlength="1" />
     * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
     * So we to write our own logic to make it work. 🙂
     */
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
      input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
      input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1 && isValidInput) {
      submit();
    }
  }

  function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
      inputs.forEach((input, index) => (input.value = value[index]));
      submit();
    }
  }

  function submit() {
    console.log("Submitting...");
    // 👇 Entered OTP
    let otp = "";
    inputs.forEach((input) => {
      otp += input.value;
      input.disabled = true;
      input.classList.add("disabled");
    });
    notification.success("Kod tekshirilmoqda!");
    console.log(otp);
    // 👉 Call API below
  }

  // // phone--------- --------------------------------
  // el.addEventListener("focus", function (event) {
  //       event.preventDefault();
  //     });

  //     el.addEventListener("click", function (event) {
  //       event.preventDefault();
  //       let start = el.value.indexOf("_");

  //       if (start == -1) {
  //         start = el.value.length;
  //       }

  //       el.setSelectionRange(start, start);
  //     });

  //     el.addEventListener("paste", function (event) {
  //       let start = el.selectionStart;

  //       if (start < first) {
  //         el.value = "_" + el.value;
  //       }
  //     });

  //     el.addEventListener("input", function (event) {
  //       const start = el.selectionStart;
  //       maskIt(event, start);
  //     });
});
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #282a36;
  height: 100vh;
  color: #fff;
}

.otp-field {
  display: flex;
}

.otp-field input {
  width: 50px;
  font-size: 32px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: 2px;
  border: 2px solid #55525c;
  background: #21232d;
  font-weight: bold;
  color: #fff;
  outline: none;
  transition: all 0.1s;
}

.otp-field input:focus {
  border: 2px solid #a527ff;
  box-shadow: 0 0 2px 2px #a527ff6a;
}

.disabled {
  opacity: 0.5;
}

.space {
  margin-right: 1rem !important;
}

// phone
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

/*
#################################################
This is part of the UI framework being developed.
#################################################
*/

$gray0: #f6f8ff;
$primary0: #636983;

body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.wrapper {
  background-color: $gray0;
  width: 100%;
  min-height: 600px;
  height: 100vh;
  p {
    margin: 0;
  }
  .containers {
    padding-top: 40px;
  }
  .buttons {
    width: 600px;
    text-align: center;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    padding: 40px 0;
    font-size: 40px;
    font-weight: 300;
    color: $primary0;
  }

  .line {
    width: 50%;
    margin: 50px auto 0 auto;
    height: 1px;
    background-color: #c3d2e3;
  }
}

.container {
  width: 100%;
  padding: 10px 0;
  text-align: center;
  .card {
    max-width: 400px;
    background-color: white;
    padding: 60px 40px;
    border-radius: 10px;
    border: 1px solid #e3e3e3;
    margin: 0 auto;
  }
}

.phone-block {
  position: relative;

  .flag {
    float: left;
  }

  input[type="tel"] {
    padding: 5px;
    width: 100%;
    border: 1px solid #e3e3e3;
    outline: none;
    padding: 10px 10px 10px 100px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fbfcff;
    height: 40px;
    color: #777;
    transition: all 0.3s;

    &:focus {
      border: 1px solid #ccc;
      & ~ .phone {
        top: -4px;
        left: -4px;
        box-shadow: 2px 5px 10px -2px rgba(34, 60, 80, 0.2);
      }
    }
  }
  .phone {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 10px;
    height: 40px;
    width: 90px;
    box-sizing: border-box;
    background-color: #fbfcff;
    border-radius: 10px;
    border: 1px solid #e3e3e3;
    transition: all 0.3s;
    box-shadow: 0px 0px 0px -1px rgba(34, 60, 80, 0.2);

    &:hover {
      .list-code {
        visibility: visible;
        opacity: 1;
        box-shadow: 2px 5px 10px -2px rgba(34, 60, 80, 0.2);
      }
    }
  }

  .list-code {
    width: 200px;
    height: 150px;
    background-color: white;
    opacity: 0;
    transition: all 0.3s;
    padding: 5px;
    position: relative;
    left: -10px;
    top: 10px;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    visibility: hidden;

    .scroll-block {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      box-sizing: border-box;
    }

    .country-code,
    .country-name {
      font-size: 12px;
      text-align: left;
    }

    ul {
      margin: 0;
      padding: 0;
      li.line-country {
        width: calc(100% - 10px);
        padding-left: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
        cursor: pointer;
        color: #777;
        display: grid;
        grid-template-columns: 27px 35px 1fr;
        border-radius: 5px;

        &:hover {
          font-weight: 600;
          background-color: $gray0;
        }
      }
    }
  }
}
</style>
