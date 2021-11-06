<template>
  <div class="home">
    <div className="header-wrapper">
      <div className="heading-wrapper">
        <h2>一起做价值投资的日子</h2>
      </div>
      <p>稳健的报酬，更悠闲的生活</p>
    </div>
    <div class="search">
      <Input
        placeholder="输入股票关键字，查看公司价值"
        :loading="false"
        @change="handleChange"
      />
      <div>
        <a
          v-for="(item, index) in stocks"
          :key="index"
          @click="() => goToDetail(item)"
          >{{ item.Name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Options, Vue } from "vue-class-component";
import HelloWorld from "../components/HelloWorld.vue";
import { Input } from "ant-design-vue"; // @ is an alias to /src
import stock from "../service/stock";

export default {
  components: {
    Input,
  },
  setup() {
    const stocks = ref();
    const router = useRouter();
    const handleChange = async (e: any) => {
      const res = await stock.getStocks(e.target.value);
      stocks.value = res.data;
    };
    const goToDetail = (s: any) => {
      router.push("/about/" + s.Secucode);
    };
    return {
      stocks,
      goToDetail,
      handleChange,
      value: false,
    };
  },
};
</script>

<style lang="less" scoped>
.header-wrapper {
  // border: 1px solid;
  margin: 0 auto;
  // margin-top: 15vh;
  padding-top: 20vh;
  h2 {
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
  }
  p {
    text-align: center;
    overflow: hidden;
    > span {
      display: inline-block;
      color: #fff;
      padding: 0 6px;
      margin: 0 4px;
      background: #e62828;
      text-align: middle;
      height: 24px;
      line-height: 24px;
    }
  }
}
.search {
  ::v-deep(.ant-input) {
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    margin-bottom: 12px;
    max-width: 584px;
    padding: 0 28px;
    height: 44px;
    .ant-input {
      box-shadow: rgb(230 40 40 / 70%) 0px 0px 0px 2px;
      border: 0;
    }
    .ant-input {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.87);
    }
  }

  > div {
    // border: 1px solid;
    width: 80%;
    // height: 46px;
    a {
      display: inline-block;
      margin: 0 12px;
      font-size: 12px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
  }
  ::v-deep(.ant-row) {
    width: 100%;
    .ant-col {
      padding: 0 4px;
      box-sizing: border-box;
      height: 120px;
    }
  }
}
</style>
