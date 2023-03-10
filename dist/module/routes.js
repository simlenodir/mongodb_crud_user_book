"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./users/routes"));
const routes_2 = __importDefault(require("./books/routes"));
const routes = (0, express_1.Router)();
exports.default = routes
    .use(routes_1.default)
    .use(routes_2.default);
