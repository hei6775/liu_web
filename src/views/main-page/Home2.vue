<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="light"
          active-name="1"
        >
          <div class="layout-logo">
            <router-link to="/info">首页</router-link>
          </div>
          <div class="layout-title"><a>同性交友平台</a></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <div>
              <img src="@/assets/picture.png">
              <p>个人中心</p>
            </div>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 0px'}">
        <div class="breamenu">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>小姐姐</BreadcrumbItem>
            <BreadcrumbItem>到你的心</BreadcrumbItem>
            <BreadcrumbItem>怎么走</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Content :style="{padding: '0px 0', minHeight: '280px', background: 'yellow'}">
          <Layout>
            <Sider
              hide-trigger
              :style="{background: '#f5f7f9'}"
            >
              <Menu
                active-name="1-2"
                width="auto"
                :open-names="['1']"
              >
                <Submenu
                  name="1"
                  class="sub-title"
                >
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    景区详情
                  </template>
                  <MenuItem
                    name="1-1"
                    class="sub-con"
                  >
                  <router-link to="/introduce">景区简介</router-link>
                  </MenuItem>
                </Submenu>
                <Submenu
                  name="2"
                  class="sub-title"
                >
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    景区导航
                  </template>
                  <MenuItem
                    name="2-1"
                    class="sub-con"
                  >
                  <router-link to="/show">景区一览</router-link>
                  </MenuItem>
                  <MenuItem
                    name="2-2"
                    class="sub-con"
                  >
                  <router-link to="/guide">景区地图</router-link>
                  </MenuItem>
                </Submenu>
                <Submenu
                  name="3"
                  class="sub-title"
                >
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    景区服务
                  </template>
                  <MenuItem
                    name="3-1"
                    class="sub-con"
                  >
                  <router-link to="/phase">门票购买</router-link>
                  </MenuItem>
                  <MenuItem
                    name="3-2"
                    class="sub-con"
                  >
                  <router-link to="/tells">景区公告</router-link>
                  </MenuItem>
                  <MenuItem
                    name="3-2"
                    class="sub-con"
                  >
                  <router-link to="/help">景区帮助</router-link>
                  </MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '0px', minHeight: '280px', background: '#fff'}">
              <!-- <carousel-con /> -->
              <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2018-2019 &copy; your hei。</Footer>
    </Layout>
  </div>
</template>
<script>
// import CarouselCon from "@/components/CarouselCon.vue";
export default {
  name: "home2",
  components: {}
};
</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background-color: rgba(245, 247, 249, 0.4);
  /* background: #f5f7f9; */
  position: relative;
  border-radius: 4px;
  overflow: hidden; /*隐藏溢出部分*/
}
.ivu-menu-vertical {
  height: 700px;
}
.ivu-layout-header {
  padding: 0 20px;
  background: #f5f7f9;
  min-width: 1200px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  line-height: 30px; /*让黄色div中的文字内容垂直居中*/
  text-align: center; /*让文字水平居中*/
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  font-size: 20px;
  font-family: "YouYuan", "KaiTi";
}
.layout-logo > a {
  color: #f5f7f9;
}
.layout-title {
  float: left;
  margin-left: 30%;
  margin-top: 14px;
  line-height: 26px;
  font-family: "YouYuan", "KaiTi";
  font-size: 45px;
  text-align: center;
}

.layout-nav {
  width: 150px;
  margin-right: 10px;
  float: right;
  font-family: "YouYuan", "KaiTi";
  .ivu-menu-item > div {
    width: 70px;
    height: 60px;
    padding: 5px 10px;
    box-sizing: border-box;
    overflow: hidden;
    img {
      border-radius: 50%;
      width: 100%;
    }
  }
}

.breamenu {
  background: "#2d8cf0";
}
.ivu-layout-content {
  min-height: 700px;
  min-width: 1000px;
}
.layout-sider {
  width: 100%;
}

.layout-footer-center {
  text-align: center;
}
.sub-title {
  font-family: "YouYuan", "KaiTi";
  font-size: 18px;
}
.sub-con {
  font-size: 17px;
}
</style>
