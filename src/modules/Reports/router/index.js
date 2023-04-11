export default {
  name: "reports",
  path: "/reports",
  component: () =>
    import(/* webpackChunkName: "ReportLayout" */ "../layout/ReportLayout.vue"),
  children: [
    {
      path: "payrolls",
      name: "payrolls-reports",
      component: () =>
        import(
          /* webpackChunkName: "PayrollsReport" */ "../views/Payrolls.vue"
        ),
    },
    {
      path: "bonuses",
      name: "bonuses-reports",
      component: () =>
        import(/* webpackChunkName: "BonusesReports" */ "../views/Bonuses.vue"),
    },
    // {
    //   path: ":id",
    //   name: "entry",
    //   component: () =>
    //     import(/* webpackChunkName: "EntryView" */ "../views/EntryView.vue"),
    //   props: (route) => {
    //     return {
    //       id: route.params.id,
    //     };
    //   },
    // },
  ],
};
