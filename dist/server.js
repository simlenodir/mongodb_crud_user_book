"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = __importDefault(require("./config/mongo"));
const routes_1 = __importDefault(require("./module/routes"));
dotenv_1.default.config();
const PORT = process.env.PORT || 7777;
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.set('strictQuery', true);
(0, mongo_1.default)()
    .then(() => {
    console.log('Connected');
})
    .catch((err) => {
    console.log(err);
});
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`Aplication is started ${PORT}`);
});
