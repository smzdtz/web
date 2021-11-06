/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from "axios";
import moment from "moment";
import Axios from "./http";

/**
 * @interface loginParams -登录参数
 * @property {string} username -用户名
 * @property {string} password -用户密码
 */
interface stockProfileParams {
  code: string;
}

export interface StockProfile {
  Secucode: string;
  Name: string;
  SecurityName: string;
  Industry: string;
  Concept: string;
  Profile: string;
  MainBusiness: string;
  Keywords: string[];
  MainForms: {
    Type: string;
    MainForm: string;
    MainIncomeRatio: string;
    MainIncome: string;
    MainIncomeRatioChart: string;
  }[];
  Province: string;
}

export default class Stock {
  /**
   * @description 查询股票基本信息
   * @param {number} code - 股票编码：600905.sh
   * @return {HttpResponse} result
   */
  static async getProfile(params: stockProfileParams): Promise<AxiosResponse> {
    return Axios("/v1/stock/profile", {
      method: "get",
      responseType: "json",
      params: {
        ...params,
      },
    });
  }

  static async getZsxgInfo(params: stockProfileParams) {
    const res: any = await Axios("/v1/stock/zsxg/info", {
      method: "get",
      responseType: "json",
      params: {
        ...params,
      },
    });
    return { ...res, ListTime: moment(res.ListTime).format("YYYY-MM-DD") };
  }

  static async getStocks(keyword: string) {
    const res = await Axios("/v1/stock/search", {
      method: "get",
      responseType: "json",
      params: { keyword },
    });
    return res;
  }
}
