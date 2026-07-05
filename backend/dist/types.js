"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAvatarSchema = exports.SigninSchema = exports.CreateUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CreateUserSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string()
});
exports.SigninSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(6),
});
exports.CreateAvatarSchema = zod_1.default.object({
    name: zod_1.default.string(),
    prompt: zod_1.default.string()
});
