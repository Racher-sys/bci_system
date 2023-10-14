import { defineStore } from "pinia";
import { DeviceValue, ParadigmValue, rsvpInfo } from "../types/store";

// interface DeviceValue {
//   name: string;
//   IPSend: string;
//   portSend: string;
//   IPReceive: string;
//   protReceive: string;
//   description: string;
// }

// interface ParadigmValue {
//   name: string;
//   time: number;
//   description: string;
// }

// 需要全局状态管理的数据：设备

export const useStore = defineStore("user", {
  state: () => {
    const device: DeviceValue[] = [
      {
        name: "NeuroScan",
        IPSend: "10.1.1.1",
        portSend: "3000",
        IPReceive: "",
        protReceive: "",
        description: "64位电极帽",
      },
      {
        name: "iView X",
        IPSend: "10.1.1.1",
        portSend: "3000",
        IPReceive: "10.1.1.2",
        protReceive: "4000",
        description: "眼动仪",
      },
      {
        name: "DSI 24",
        IPSend: "10.1.1.1",
        portSend: "3000",
        IPReceive: "",
        protReceive: "",
        description: "干电极脑电帽",
      },
    ];

    const paradigm: ParadigmValue[] = [
      {
        name: "RSVP",
        time: 500,
        description: "快速序列呈现范式",
      },
      {
        name: "SSVEP",
        time: 100,
        description: "稳态视觉诱发电位",
      },
      {
        name: "MI",
        time: 1000,
        description: "运动想象",
      },
    ];
    return {
      device,
      paradigm,
    };
  },
  getters: {},
  actions: {
    // 编辑设备
    aditDevice(data: DeviceValue) {
      console.log("123", data);
      // 采用map的方法
      // this.device.map((element) => {
      //   if (data.name === element.name) {
      //     return data;
      //   } else {
      //     return this;
      //   }
      // });
      const new_dev: DeviceValue[] = [];
      this.device.forEach((item) => {
        if (item.name !== data.name) {
          new_dev.push(item);
        } else {
          new_dev.push(data);
        }
      });
      this.device = new_dev;
    },
    // 删除设备
    deleteDevice(name: string) {
      this.device.splice(
        this.device.findIndex((item) => item.name == name),
        1
      );
    },
    // 添加设备
    addDevice(data: any) {
      this.device.push(data);
    },
  },
});


export const rsvpStore = defineStore("rsvp", {
  state: () => {
    const currentDevice: String[] = [];
    const info: rsvpInfo = {
      targetType: "飞机",
      frequent: 500,
      algorithm: "EEGNet",
    };
    return {
      currentDevice,
      info,
    };
  },
  getters: {},
  actions: {},
});