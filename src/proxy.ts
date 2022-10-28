import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = express.Router();

const apiProxy = createProxyMiddleware({
  target: "https://ik.imagekit.io/lensterimg",
  changeOrigin: true,
});

router.get("/*", apiProxy);

export default router;
