"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = createImage;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
async function createImage(prompt, outputPath) {
    try {
        const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&nologo=true`;
        const response = await axios_1.default.get(url, {
            responseType: "arraybuffer",
        });
        fs_1.default.writeFileSync(outputPath, response.data);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}
