"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/style/main.scss");
var vue_1 = require("vue");
var App_vue_1 = __importDefault(require("./App.vue"));
(0, vue_1.createApp)(App_vue_1.default).mount('#app');
