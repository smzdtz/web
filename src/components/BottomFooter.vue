<template>
  <footer class="footer">
    <div class="left">
      <div class="link">
        <a href="/">什么值得投资</a>
        <!-- <span>
          <a target="blank" href="/article/2" data-scroll>关于</a>
        </span> -->
      </div>
      <span class="ipc"
        >Copyright © 2021 All rights reserved. 辽ICP备20001776号-2</span
      >
    </div>
    <!-- <div class="right">
      <span>
        <a target="blank" href="/archive" data-scroll>设置</a>
      </span>
    </div> -->
  </footer>
</template>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 42px;
  display: flex;
  bottom: 0;
  font-size: 12px;
  height: 80px;
  justify-content: space-between;
  > div.left {
    width: 480px;
    height: 100%;
    padding-left: 52px;
    text-align: left;
    .link {
      height: calc(100% - 32px);
      > a {
        cursor: pointer;
        font-size: 20px;
        line-height: 48px;
        margin-right: 16px;
        color: #2c3e50;
      }
      > span {
        font-size: 14px;
        line-height: 48px;
        vertical-align: top;
        > a {
          margin: 0 8px;
        }
      }
    }
    .ipc {
      line-height: 32px;
    }
  }
  > div.right {
    display: inline-block;
    width: 100px;
    height: 100%;
    padding-left: 24px;
    vertical-align: top;
    > span {
      line-height: 80px;
      font-size: 14px;
    }
  }
}
</style>
