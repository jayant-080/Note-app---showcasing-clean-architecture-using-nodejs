"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const startServer = () => {
    const PORT = process.env.PORT || 2000;
    app_1.default.listen(PORT, () => {
        console.log(`app is running on port ${PORT}`);
    });
};
startServer();
