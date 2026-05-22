<div align="center">
<img src="public/logo.png" alt="XPay Labs Logo — 自托管加密支付网关" width="80" />
</div>

# XPay Labs — 自托管加密支付基础设施

> **V1.0** — 私有化、容器化的自托管支付基础设施，支持 TRON、所有 EVM 链和 SUI。完全非托管、白标商户网关，专为开发者打造。

**XPay Labs** 是一款自托管加密支付网关，支持在 TRON（TRC20）、EVM 链（Ethereum、BSC、Polygon、Arbitrum、Optimism、Avalanche）和 SUI 上接受稳定币支付（USDT、USDC）——零网关费，私钥完全自持。

[官方网站](https://www.xpaylabs.com) · [开发文档](https://www.xpaylabs.com/docs) · [定价](https://www.xpaylabs.com/pricing.md) · [博客](https://www.xpaylabs.com/blog)

---

## 为什么选择自托管加密支付？

| 特性 | XPay Labs | BitPay | Coinbase Commerce | NowPayments |
|------|-----------|--------|-------------------|-------------|
| 手续费 | 零（仅链上 Gas） | 每笔 1% | 0.8% + $25/月 | 每笔 0.5% |
| 资产托管 | 非托管 | 托管 | 托管 | 托管 |
| 支持链 | TRON, EVM, SUI | BTC, ETH, LTC | ETH, Base 少量 | BTC, ETH, 50+ |
| 白标 | 是 | 否 | 有限 | 否 |
| 部署方式 | 自托管 (Docker) | 云托管 | 云托管 | 云托管 |
| Webhook | HMAC 签名 + 重试队列 | 有限 | 基础 | 基础 |

## 功能特性

- **多链支持** — TRON（TRC20 USDT）、EVM（Ethereum、BSC、Polygon、Arbitrum、Optimism、Avalanche）、SUI
- **非托管** — 密钥在您自己的服务器上生成和存储，绝不经过共享基础设施
- **自托管** — 通过 Docker Compose 在您的 VPS、裸金属或 Kubernetes 集群上部署
- **白标** — 完全品牌自定义，无第三方 iframe 或 Logo
- **REST API** — 全面的 Stripe 风格 API，支持 Node.js、Python、Go SDK
- **实时监控** — 实时网关仪表盘，支持商户节点追踪和内存池可视化
- **Webhook 系统** — 基于队列的 Webhook 通知，HMAC-SHA256 签名，指数退避重试

## 快速开始（网关）

```bash
# 在服务器上部署网关
docker pull ghcr.io/xpay-labs/gateway:latest
docker run -d \
  -p 3010:3010 \
  -e XPAY_SEED_PHRASE="your-24-word-mnemonic" \
  -e XPAY_MYSQL_DSN="user:pass@tcp(host:3306)/xpay" \
  -e XPAY_REDIS_ADDR="host:6379" \
  ghcr.io/xpay-labs/gateway:latest
```

完整的 Docker Compose 和 Kubernetes 部署指南请查看[开发文档](https://www.xpaylabs.com/docs)。

## 快速开始（官网开发）

```bash
npm install
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

## XPay Labs 网关 — 产品技术栈

- **核心运行时：** Java 8+, Spring Boot, MyBatis
- **数据库：** MySQL, Redis
- **部署：** Docker, Docker Compose
- **区块链：** TRON (TRC20), EVM 链 (Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche), SUI
- **API：** RESTful JSON API + HMAC-SHA256 签名 Webhook
- **签名算法：** BIP-39 / BIP-44 HD 钱包派生

## 官网技术栈（本仓库）

- **框架：** Next.js 15 (App Router)
- **语言：** TypeScript
- **样式：** Tailwind CSS 4
- **动画：** Motion (Framer Motion)
- **国际化：** next-intl (EN / ZH)

## 对比页面

- [BitPay 替代方案](https://www.xpaylabs.com/alternatives/bitpay) — 自托管 vs 云托管对比
- [Coinbase Commerce 替代方案](https://www.xpaylabs.com/alternatives/coinbase-commerce) — 商户为什么在迁移
- [NowPayments 替代方案](https://www.xpaylabs.com/alternatives/nowpayments) — 费用与安全对比

## 指南

- [如何接受加密货币支付](https://www.xpaylabs.com/guides/how-to-accept-crypto-payments) — 开发者部署指南
- [TRON 支付网关](https://www.xpaylabs.com/solutions/tron-payment-gateway) — 自托管 USDT TRC20 基础设施

## 联系方式

- Telegram：[@OS_Blockchain](https://t.me/OS_Blockchain)
- GitHub Issues：[报告问题](https://github.com/yan253319066/XPayLabs/issues)
