"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("./users");
const userRoutes = (0, express_1.Router)();
exports.default = userRoutes
    .get('/readers', users_1.Readers.GET_readers)
    .post('/createReader', users_1.Readers.Post_readers);
