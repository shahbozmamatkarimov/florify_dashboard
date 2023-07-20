<script>
import CanvasJSChart from "../assets/CanvasJSVueComponent.vue";

export default {
  components: {
    CanvasJSChart,
  },
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        backgroundColor: "#203843",
        title: {
          text: "Foydalanuvchilar reytingi",
          fontColor: "#FFFFFF",
        },
        axisY: {
          maximum: 1000,
          title: "New Customers",
          titleFontColor: "#da42a2",
          labelFontColor: "#da42a2",
          lineColor: "#da42a2",
          tickColor: "#da42a2",
          gridColor: "#da42a2",
        },
        axisX: {
          labelFontColor: "#da42a2",
        },
        data: [
          {
            type: "column",
            color: "#FFF",
            dataPoints: [
              { label: "jan", y: 100 },
              { label: "feb", y: 200 },
              { label: "march", y: 325 },
              { label: "april", y: 360 },
              { label: "may", y: 524 },
              { label: "may", y: 400 },
              { label: "may", y: 618 },
              { label: "may", y: 710 },
            ],
          },
        ],
      },
      styleOptions: {
        width: "100%",
        height: "360px",
      },
    };
  },
};
</script>
<template>
  <CanvasJSChart class="max-h-[330px] overflow-hidden" :options="options" />
</template>
