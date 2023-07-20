import { ref } from 'vue'
import { defineStore } from 'pinia'
import { h } from "vue";
import { ElNotification } from "element-plus";

export const useNotificationStore = defineStore('notification', () => {
    const success = (message) => {
        ElNotification({
            title: "Success",
            message: h("b", { style: "color: green;" }, message),
            customClass: "background: black;",
            type: "success",
        });
    };

    const warning = (message) => {
        ElNotification({
            title: "Warning",
            message: h("b", { style: "color: #e6a23c;" }, message),
            type: "warning",
        });
    };

    return { success, warning};
})
