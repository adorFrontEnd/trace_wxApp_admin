import { getCacheFrnId } from '../api/localStorage/login.js';
const AppConfig = {
  // 1.8日修改发货时不不进行单号长度验证 并新增查询按钮
  version: "3.0.1 200302",
  // 爱朵
  // appId: "wx35be43bf20700d13",
  // aS: "58b586a258d40603d8e08eb63bab57cb",
  // beaba
  appId: "wx46ce80b10d5b2330",
  aS: "b648768929723a42980d2b46db45e480",
  frnId: getCacheFrnId(),
  defaultLocation: {
    longitude: "104.06041306375",
    latitude: "30.57432537404"
  }
};

module.exports = AppConfig;
