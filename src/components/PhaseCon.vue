<template>
  <div class="split-main">
    <Split v-model="split1">
      <div slot="left" class="split-pane-left">
        <Input
          class="split-left-name"
          placeholder="购票者姓名"
          v-model="username"
        />
        <Input
          class="split-left-tele"
          placeholder="购票者联系方式"
          v-model="usertele"
        />
        <RadioGroup class="split-left-single" v-model="ttype" size="large">
          <Radio label="old">老人票</Radio>
          <Radio label="young">成人票</Radio>
          <Radio label="children">儿童票</Radio>
        </RadioGroup>
        <br />
        <div class="split-left-piao">
          <span>张数</span><InputNumber :max="100" v-model="piao"></InputNumber>
        </div>
        <span>总价</span>
        <InputNumber
          v-model="money"
          :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
          :parser="value => value.replace(/$s?|(,*)/g, '')"
          >{{ calMoney }}</InputNumber
        >
        <br />
        <div class="split-left-foot">
          <Button
            class="split-left-foot-reset"
            shape="circle"
            icon="ios-arrow-back"
            v-on:click="resetData"
            >重置</Button
          >
          <Button
            class="split-left-foot-pharse"
            shape="circle"
            icon="ios-arrow-forward"
            >购买</Button
          >
        </div>
      </div>
      <div slot="right" class="split-pane-right">
        您的订单
        <div v-for="item in dingdandata">
          <dingdan :name="item.name" :tele="item."></dingdan>
        </div>
      </div>
    </Split>
  </div>
</template>

<script>
  import dingdan from "@/components/Dingdan.vue";
  export default {
    name: "phaseCon",
    data() {
      return {
        username: "",
        usertele: "",
        ttype: "",
        money: 0,
        piao: 1,
        split1: 0.5
      };
    },
    props: ["dingdandata"],
    components: {
      dingdan
    },
    computed: {
      calMoney: function() {
        console.log(this.piao);
        this.money = this.piao * 80;
      }
    },
    methods: {
      resetData: function(event) {
        // `this` 在方法里指向当前 Vue 实例
        (this.ttype = ""), (this.piao = 1);
        this.username = "";
        this.usertele = "";
      }
    }
  };
</script>

<style>
  .split-main {
    height: 700px;
    border: 1px solid #dcdee2;
  }
  .split-pane-left .split-pane-right {
    padding: 10px;
  }
  .split-left-name {
    width: 80%;
    margin: 20px;
  }
  .split-left-tele {
    width: 80%;
    margin: 20px;
  }
  .split-left-single {
    width: 80%;
    margin: 20px;
  }
  .split-left-piao {
    display: inline;
    padding: 10px 20px;
  }
  .split-left-foot {
    margin: 20px;
  }
  .split-left-foot-reset {
    margin-right: 60px;
  }
  .split-left-foot-pharse {
    margin-left: 60px;
  }
</style>
