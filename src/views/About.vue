<template>
  <div class="main">
    <Card :bordered="false">
      <div class="info">
        <div>
          <span> {{ profile.SecurityName }} </span>
          <span> {{ profile.Name }} </span>
        </div>
        <div>
          <div class="tag">
            <span> {{ profile.Secucode }} </span>
            <span>{{ profile.Industry }}</span>
            <span>{{ profile.Province }}</span>
            <span>{{ zsxgInfo.ListTime }}</span>
          </div>
          <div class="detail">
            <div>
              <span>{{ zsxgInfo.Close }}</span>
              <span>最新收盘价</span>
            </div>
            <div>
              <div>
                <!-- {{ profile.Profile }} -->
                <span>
                  <span>主营业务</span>
                  <span> {{ profile.MainBusiness }}</span>
                </span>
                <span>
                  <span>概念</span>
                  <span> {{ profile.Concept }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
    <Card :bordered="false" class="positive">
      <div class="item">
        <img
          src="data:image/png;base64,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"
          alt=""
          style="width: 79px; height: 24px; margin-right: 5px"
        />
        <span class="risk-title"
          >({{ profile.UnPositiveNew?.length || 0 }})</span
        >
        <div v-for="(item, index) in profile.UnPositiveNew" :key="index">
          <span class="risk-tag">{{ item.Tag }}</span>
          <span>{{ item.Value }}</span>
        </div>
      </div>
      <div class="item">
        <img
          src="data:image/png;base64,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"
          alt=""
          style="width: 79px; height: 24px; margin-right: 5px"
        />
        <span class="value-title"
          >({{ zsxgInfo.PositiveNew?.length || 0 }})</span
        >
        <div v-for="(item, index) in zsxgInfo.PositiveNew" :key="index">
          <span class="value-tag">{{ item.Tag }}</span>
          <span>{{ item.Value }}</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Card } from "ant-design-vue";
import stockApi from "../service/stock";

export default {
  components: { Card },
  setup() {
    const route = useRoute();
    const profile = ref({});
    const zsxgInfo = ref({});
    onMounted(async () => {
      const res = await stockApi.getProfile({
        code: String(route.params.code),
      });
      const res1 = await stockApi.getZsxgInfo({
        code: String(route.params.code),
      });
      profile.value = res;
      zsxgInfo.value = res1;
    });
    return {
      profile,
      zsxgInfo,
    };
  },
};
</script>

<style lang="less" scoped>
// @import "../assets/styles/variables.scss";
.main {
  // border: 1px solid red;
  background: #f2f5f7;
  // border: 1px solid;
  width: 100vw;
  // min-height: 100vh;
  height: calc(100vh - 80px);
  margin-bottom: 12rem;
  padding: 24px;
  :global(.ant-card) {
    margin-bottom: 10px;
  }
  :global(.ant-card-head) {
    border: none;
  }
  :global(.ant-card-body) {
    border: none;
  }
}

.info {
  width: 100%;
  min-width: 760px;
  display: flex;

  > div {
    &:first-of-type {
      // border: 1px solid;
      max-width: 400px;
      border-right: 1px solid #eff3f9;
      padding-right: 20px;
      > span {
        display: inline-block;
        width: 100%;
        text-align: center;
        &:first-of-type {
          font-size: 28px;
          font-weight: 600;
        }
      }
    }
    &:last-of-type {
      flex: 1;
      color: #a0a5b3;
      // border: 1px solid;
      padding-left: 24px;
      > div {
        &:last-of-type {
          // border: 1px solid;
          margin-top: 12px;
          display: flex;
        }
      }
    }
  }
}
.tag {
  text-align: left;
  > span {
    font-size: 12px;
    // font-family: PingFangSC-Regular,PingFang SC;
    // font-weight: 400;
    color: #333;
    // line-height: 20px;
    // height: 20px;
    background: #f4f7fc;
    border-radius: 2px;
    margin-right: 12px;
    padding: 0 6px;
  }
}
.detail {
  > div {
    &:first-of-type {
      > span {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-weight: 400;

        &:first-of-type {
          font-size: 30px;
          font-weight: 500;
          color: rgb(245, 67, 70);
          display: inline-block;
          line-height: 36px;
        }
      }
    }
    &:last-of-type {
      flex: 1;
      padding-left: 24px;
      > div {
        text-align: left;
        &:first-of-type {
          > span {
            display: block;
            // border: 1px solid;
            margin: 0 8px;
            > span:last-of-type {
              font-weight: 500;
              color: #333;
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
}
.positive {
  // border: 1px solid;
  text-align: left;
  div.item {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    img {
      margin-bottom: 8px;
    }
    > span {
      font-size: 20px;
      font-weight: 600;
    }
    .risk-title {
      color: #14ba71;
    }
    .value-title {
      color: #f54346;
    }
    > div {
      // border: 1px solid;
      display: flex;
      margin: 6px 0;
      span {
        font-size: 12px;
        &:first-of-type {
          width: 80px;
          height: 20px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          margin-right: 13px;
          padding: 0 10px;
        }
        &:last-of-type {
          flex: 1;
        }
        &.value-tag {
          color: #f54346;
          background: rgba(245, 67, 70, 0.1);
        }
        &.risk-tag {
          background: rgba(20, 186, 113, 0.1);
          color: #14ba71;
        }
      }
    }
  }
}
</style>
