import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useOtpStore = defineStore('otp', () => {
    const state = reactive({
        // otp: "",
        // phone: "",
        // is_true: false,
        otp: "12354",
        phone: "465465",
        is_true: true,
    })

    return { state }
})