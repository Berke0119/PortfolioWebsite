import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { dataEn } from "../data/data.en";
import { dataTr } from "../data/data.tr";

// 500ms gecikmeli mock oluştur
const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });

// API endpoint mock: /api/data?lang=en
mock.onGet("/api/data").reply((config) => {
  const lang = config.params?.lang || "en";
  if (lang === "tr") {
    return [200, dataTr];
  } else {
    return [200, dataEn];
  }
});
