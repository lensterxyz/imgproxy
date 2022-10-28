import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = express.Router();

const apiProxy = createProxyMiddleware({
  target: "https://ik.imagekit.io/lensterimg",
  changeOrigin: true,
  onProxyRes: (proxyRes) => {
    proxyRes.statusCode = 200;
    delete proxyRes.headers["x-server"];
    delete proxyRes.headers["x-cache"];
    delete proxyRes.headers["x-amz-cf-pop"];
    delete proxyRes.headers["x-amz-cf-id"];
    proxyRes.headers["x-server"] = "lenster imgproxy";
  },
});

router.get("/*", apiProxy);

export default router;
