<template>
  <div id="app">
    <a-progress 
      type="circle" 
      :width="360" 
      :percent="percentData" 
      :stroke-color="{
        '0%': '#9372f0',
        '100%': '#b29df3',
      }"
    >
      <template #format="percent">
        <div class="percent_box">
          <span class="number">{{ percent }}</span>
          <span class="unit">%</span>
        </div>
        <span class="percent_txt">异常分数</span>
      </template>
    </a-progress>
    <div class="status_wrap">
      <div class="status_box">
        <img :src="statusImg" alt>
        <div class="status_txt">
          <p>检测状态</p>
          <p :class="statusClass">{{status}}</p>
        </div>
      </div>
    </div>
    <div class="step">
      <a-slider v-model="percentData" :default-value="0" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      percentData: 0
    }
  },
  computed: {
    status() {
      if (this.percentData <= 50 && this.percentData > 0) return '正常'
      if (this.percentData > 50) return '报警'
      return '未知'
    },
    statusClass() {
      if (this.percentData <= 50 && this.percentData > 0) return 'normal'
      if (this.percentData > 50) return 'warn'
      return ''
    },
    statusImg() {
      if (this.percentData <= 50 && this.percentData > 0) return require('./assets/bk2.png')
      if (this.percentData > 50) return require('./assets/bk3.png')
      return require('./assets/bk1.png')
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.percent_box {
  display: flex;
  justify-content: center;
  color: #7467f5;
  .number {
    font-size: 60px;
    line-height: 60px;
  }
  .unit {
    font-size: 36px;
    line-height: 36px;
    margin-top: 18px;
  }
}
.percent_txt {
  font-size: 28px;
  line-height: 28px;
  color: #48487b;
  margin-top: 26px;
}
.status_wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  .status_box {
    display: flex;
    img {
      display: block;
      width: 90px;
      height: 90px;
    }
    .status_txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 18px;
      p {
        color: #9191b0;
        font-size: 24px;
        line-height: 32px;
        margin: 0;
        text-align: left;
      }
      .warn {
        color: #e1605b;
      }
      .normal {
        color: #80c6fa;
      }
    }
  }
}
.step {
  width: 300px;
  margin: 60px auto 0;
}
</style>
