"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
var zod_1 = require("zod");
exports.authSchema = zod_1.z.object({
    email: zod_1.z.string().trim().email(),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters long"),
});
