<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 5px">
      <el-card shadow="hover" class="one">
        <div class="tup">
          <img src="../../src/assets/liu.png" />
          <div class="userinfo">
            <p class="name">老刘</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2021-7-19</span></p>
          <p>上次登录地点:<span>重庆</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 470px">
        <el-table :data="tableDate" style="width: 100%">
          <el-table-column
            v-for="(val, key, index) in tableLabel"
            :key="index"
            :prop="key"
            :label="val"
            width="width"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 5px">
      <div class="num">
        <el-card
          v-for="(val, index) in countDate"
          :key="index"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${val.icon}`"
            :style="{ background: val.color }"
          ></i>
          <div class="detail">
            <p class="nums">￥{{ val.value }}</p>
            <p class="txt">
              {{ val.name }}
            </p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px; margin-top: 10px">
        <div style="height: 280px" ref="echarts"></div>
      </el-card>
      <div
        class="graph"
        style="display: flex; justify-content: space-between; margin-top: 10px"
      >
        <el-card style="height: 280px; width: 410px">
          <div ref="zhu" style="height: 280px"></div>
        </el-card>
        <el-card style="height: 280px; width: 410px">
          <div ref="bing" style="height: 280px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts'
import { getData } from '../../api/requests'
export default {
  name: 'Home',
  data() {
    return {
      tableDate: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总共购买'
      },
      countDate: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单',
          value: 1235,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日支付订单',
          value: 1236,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '今日支付订单',
          value: 1237,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
      ]
    }
  },
  async mounted() {
    try {
      let result = await getData()
      if (result.code == 20000) {
        this.tableDate = result.data.tableDate
        const order = result.data.orderData
        const keyArray = Object.keys(order.data[0])
        const myChart = echarts.init(this.$refs.echarts);
        const series = []
        const zhux = result.data.videoData.map(val => val.name)
        const zhuy = result.data.videoData.map(val => val.value)
        keyArray.forEach(key => {
          series.push({
            type: 'line',
            name: key,
            data: order.data.map(val => val[key])
          })
        })
        // 绘制图表
        myChart.setOption({
          xAxis: {
            data: result.data.orderData.date
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        });
        var myCharts = echarts.init(this.$refs.bing, null, {
          height: 250
        });
        // 绘制图表
        myCharts.setOption({
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              data: result.data.videoData,
              type: 'pie',
            }
          ]
        });
        var myChartes = echarts.init(this.$refs.zhu);
        // 绘制图表
        myChartes.setOption({
          title: {
            text: '销量'
          },
          xAxis: {
            data: zhux
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: zhuy
            }
          ]
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style lang="less" scoped>
.one {
  height: 250px;
  .tup {
    border-bottom: 1.5px solid #c1c1c1;
  }
  .userinfo {
    float: right;
    margin-right: 150px;
    margin-top: 30px;
    .name {
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  .login-info {
    p {
      margin-top: 20px;
      font-size: 14px;
    }
    span {
      margin-left: 50px;
    }
  }
}
.num {
  display: flex;
  height: 160px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  .el-card {
    width: 250px;
    height: 70px;
    i {
      height: 72px;
      width: 72px;
      font-size: 30px;
      line-height: 72px;
      text-align: center;
    }
    .detail {
      margin-left: 10px;
      .nums {
        font-size: 20px;
        margin-top: 5px;
      }
      .txt {
        font-size: 5px;
        margin-top: 10px;
        margin-left: 5px;
      }
    }
  }
}
</style>