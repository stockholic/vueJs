export default [
  {path: "/board/list", name: "board-list", component: () => import("../views/board/BoardList.vue")}
  ,{path: "/board/list/:page", name: "board-list", component: () => import("../views/board/BoardList.vue")}
  ,{path: "/board/view/:seqNo", name: "board-view", component: () => import("../views/board/BoardView.vue")}
  ,{path: "/board/form/:seqNo", name: "board-form", component: () => import("../views/board/BoardForm.vue")}
];
