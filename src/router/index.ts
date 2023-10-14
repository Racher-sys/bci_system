import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MIView from "@/views/MIView.vue";
import RsvpHomeView from "@/views/rsvp/RsvpHomeView.vue";
import SSVEPView from "@/views/SSVEPView.vue";
import ResultView from "@/views/ResultView.vue";
import TestView from "@/views/TestView.vue";
import DeviceSettingView from "@/views/setting/DeviceSettingView.vue";
import ParadigmSettingView from "@/views/setting/ParadigmSettingView.vue";
import AlgorithmSettingView from "@/views/setting/AlgorithmSettingView.vue";
import RsvpAddDevice from "@/views/rsvp/RsvpAddDevice.vue";
import RsvpSetExp from "@/views/rsvp/RsvpSetExp.vue";
import RsvpStartExp from "@/views/rsvp/RsvpStartExp.vue";
import RsvpExp from "@/views/rsvp/RsvpExp.vue";
import RsvpImageShow from "@/views/rsvp/RsvpImageShow.vue";
// RouteRecord 是路由组件对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home/",
    },
    {
      path: "/home/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rsvp/",
      name: "rsvp",
      component: RsvpHomeView,
      children: [
        {
          path: "/rsvp/",
          redirect: "/rsvp/device/",
        },
        {
          path: "/rsvp/device/",
          name: "rsvpDeviceSetting",
          component: RsvpAddDevice,
        },
        {
          path: "/rsvp/setExp/",
          name: "rsvpSetExp",
          component: RsvpSetExp,
        },
        {
          path: "/rsvp/RsvpStartExp/",
          name: "RsvpStartExp",
          component: RsvpStartExp,
        },
        {
          path: "/rsvp/RsvpExp/",
          name: "RsvpExp",
          component: RsvpExp,
        },
        {
          path: "/rsvp/RsvpImageShow/",
          name: "RsvpImageShow",
          component: RsvpImageShow,
        },
      ],
    },
    {
      path: "/mi/",
      name: "mi",
      component: MIView,
    },
    {
      path: "/ssvep/",
      name: "ssvep",
      component: SSVEPView,
    },
    {
      path: "/result/",
      name: "result",
      component: ResultView,
    },
    {
      path: "/test/",
      name: "test",
      component: TestView,
    },
    {
      path: "/setting/device/",
      name: "deviceSetting",
      component: DeviceSettingView,
    },
    {
      path: "/setting/paradigm/",
      name: "paradigmSetting",
      component: ParadigmSettingView,
      beforeEnter: (to, from, next)=>{
        next('/result/');
      }
    },
    {
      path: "/setting/algorithm/",
      name: "algorithmSetting",
      component: AlgorithmSettingView,
    },
  ],
});

export default router;
