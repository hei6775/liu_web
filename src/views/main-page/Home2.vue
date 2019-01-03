<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
        >
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <!-- <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            
            </MenuItem> -->
            <MenuItem
              name="4"
              style="{align='left'}"
            >
            <Icon type="ios-paper"></Icon>
            个人中心
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 0px'}">
        <div :style="{background:'#2d8cf0'}">
          <Breadcrumb :style="{margin: '16px 0',background:'#2d8cf0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Content :style="{padding: '0px 0', minHeight: '280px', background: 'blue'}">
          <Layout>
            <Sider
              hide-trigger
              :style="{background: '#fff'}"
            >
              <Menu
                active-name="1-2"
                theme="dark"
                width="auto"
                :open-names="['1']"
              >
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    景区详情
                  </template>
                  <MenuItem name="1-1">景区简介</MenuItem>
                  <MenuItem name="1-2">景区公告</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    景区导航
                  </template>
                  <MenuItem name="2-1">景区一览</MenuItem>
                  <MenuItem name="2-2">景区地图</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    景区服务
                  </template>
                  <MenuItem name="3-1">门票购买</MenuItem>
                  <MenuItem name="3-2">景区公告</MenuItem>
                  <MenuItem name="3-2">景区帮助</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '0px', minHeight: '280px', background: '#fff'}">
              <carousel-con />
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
import CarouselCon from "@/components/CarouselCon.vue";
export default {
  name: "home2",
  components: {
    CarouselCon
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-sider {
  width: 100%;
}
.layout-footer-center {
  text-align: center;
}
</style>