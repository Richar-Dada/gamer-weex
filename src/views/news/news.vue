<template>
  <div>
    
    <i-header></i-header>
    <wxc-tab-page ref="wxc-tab-page"
                  :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="text"
                  :needSlider="needSlider"
                  :is-tab-view="isTabView"
                  :tab-page-height="tabPageHeight"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
      <list v-for="(v,index) in tabList"
            :key="index"
            class="item-container"
            :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
        <cell class="border-cell"></cell>
        <cell v-for="(demo,key) in v"
              class="cell"
              :key="key">
          <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                        :url="demo.href"
                        @wxcPanItemPan="wxcPanItemPan">
          <div class="content">
              <text>{{demo.title}}</text>
          </div>
          </wxc-pan-item>
        </cell>
      </list>
    </wxc-tab-page>
  </div>
  
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }

  .border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }

  .cell {
    background-color: #ffffff;
  }
  
  .content{
    width:750px;
    height:300px;
    border-bottom-width:1px;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
  const dom = weex.requireModule('dom');
  import { WxcTabPage, WxcPanItem, Utils } from 'weex-ui'
  import { get, post } from '../../utils/stream'
  import IHeader from '../../components/header.vue'
  import Config from './config'

  export default {
    components: { WxcTabPage, WxcPanItem, IHeader },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles,
      tabList: [],
      needSlider: true,
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 1334
    }),
    created () {
      this.tabPageHeight = Utils.env.getPageHeight() - 88;
      this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
      Vue.set(this.tabList, 0, this.demoList);
      get('http://192.168.15.191:7001/api/v1/news')
        .then((res) => {
          console.log(res)
          Vue.set(this.tabList, 0, res.data);
        })
    },
    methods: {
      wxcTabPageCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        console.log(e.page)
        /* Unloaded tab analog data request */
        if (!Utils.isNonEmptyArray(self.tabList[index])) {
          post('http://192.168.15.191:7001/api/v1/news', JSON.stringify({tag: Config.titleTag[index], page: 1}))
            .then((res) => {
              setTimeout(() => {
                Vue.set(self.tabList, index, res.data);
              }, 100);
            })
          
        }
      },
      wxcPanItemPan (e) {
        if (Utils.env.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      }
    }
  };
</script>