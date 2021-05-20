<template>
  <div style="height: auto;width: 250px;">
    <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'Chart',
  components: {
    Vue3ChartJs,
  },
  props:{
    quotation: Array
  },
  data() {
    return{
      doughnutChart:{
        id: 'line',
        type: 'line',
        data: {
          labels: ['open', 'high', 'low'],
          datasets: [
            {
              label: '',
              backgroundColor: [
                '#5341b8',
                '#fc7b08',
              ],
              data: this.quotation
            }
          ]
        },
        beforeRenderLogic : (event) => {
          //...
          //if(a === b) {
          //  event.preventDefault()
          //}
        }
      }
    }
  },
  setup(){
    const beforeRenderLogic = (event) => {
      //...
      //if(a === b) {
      //  event.preventDefault()
      //}
    }
    return{
      beforeRenderLogic
    }
  }
}
</script>