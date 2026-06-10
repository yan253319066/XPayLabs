<div align="center">
<img src="public/logo.png" alt="XPay Labs Logo — Self-hosted Crypto Payment Gateway" width="80" />
</div>

# XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure | Open Source Crypto Payment Gateway

> **V1.0** — XPay Labs (often called xpay) is a private, containerized, self-hosted payment infrastructure supporting TRON, all EVM chains, and SUI. Fully non-custodial, white-label merchant gateways engineered for optimal developer power.

**XPay Labs (xpay)** is an open source, self-hosted crypto payment gateway that lets you accept stablecoin payments (USDT, USDC) across TRON (TRC20), EVM chains (Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche), and SUI — with zero gateway fees and full control over your private keys. Multi-tenant by design — host unlimited merchants on a single deployment with isolated credentials and configurable fee structures. A non-custodial BitPay alternative for developers who want to own their payment infrastructure.

[Website](https://www.xpaylabs.com) · [Documentation](https://docs.xpaylabs.com) · [Pricing](https://www.xpaylabs.com/pricing) · [Blog](https://www.xpaylabs.com/blog)

---

## Why Self-Hosted Crypto Payment Gateway?

| Feature | XPay Labs | BitPay | Coinbase Commerce | NowPayments |
|---------|-----------|--------|-------------------|-------------|
| Fees | Zero (only gas) | 1% per tx | 0.8% + $25/mo | 0.5% per tx |
| Custody | Non-custodial | Custodial | Custodial | Custodial |
| Chains | TRON, EVM, SUI | BTC, ETH, LTC | ETH, Base, few | BTC, ETH, 50+ |
| White-label | Yes | No | Limited | No |
| Deployment | Self-hosted (Docker) | Hosted | Hosted | Hosted |
| Webhooks | HMAC-signed, retry queue | Limited | Basic | Basic |

## Features

- **Multi-chain support** — TRON (TRC20 USDT), EVM (Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche), SUI
- **Non-custodial** — Keys generated and stored entirely on your servers, never on shared infrastructure
- **Self-hosted** — Deploy via Docker Compose on your own VPS, bare metal, or Kubernetes cluster
- **White-label** — Full branding customization, no third-party iframes or logos
- **REST API** — Comprehensive Stripe-inspired API with SDK integration for Node.js and Java
- **Real-time monitoring** — Live gateway dashboard with merchant node tracking and mempool visualization
- **Webhook system** — Queue-backed webhook notifications with HMAC-SHA256 signing and exponential backoff retries
- **Multi-tenant** — Unlimited merchants per deployment, isolated API credentials, independent configuration, and per-merchant fee structure

## Quick Start (Gateway)

```bash
# Deploy the gateway on your server
docker pull ghcr.io/xpaylabs/gateway:latest
docker run -d \
  -p 3010:3010 \
  -e XPAY_SEED_PHRASE="your-24-word-mnemonic" \
  -e XPAY_MYSQL_DSN="user:pass@tcp(host:3306)/xpay" \
  -e XPAY_REDIS_ADDR="host:6379" \
  ghcr.io/xpaylabs/gateway:latest
```

See the [deployment documentation](https://docs.xpaylabs.com) for Docker Compose and Kubernetes guides.

## Quick Start (Website)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## XPay Labs Gateway — Product Stack

- **Core Runtime:** Java 8+, Spring Boot, MyBatis
- **Database:** MySQL, Redis
- **Deployment:** Docker, Docker Compose
- **Blockchain:** TRON (TRC20), EVM chains (Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche), SUI
- **API:** RESTful JSON API + HMAC-SHA256 signed webhooks
- **Signing:** BIP-39 / BIP-44 HD wallet derivation

## Website Stack (this repo)

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (Framer Motion)
- **Internationalization:** next-intl (EN / ZH)

## Compare

- [BitPay Alternative](https://www.xpaylabs.com/alternatives/bitpay) — Self-hosted vs hosted comparison
- [Coinbase Commerce Alternative](https://www.xpaylabs.com/alternatives/coinbase-commerce) — Why merchants are switching
- [NowPayments Alternative](https://www.xpaylabs.com/alternatives/nowpayments) — Cost and security comparison

## Guides

- [How to Accept Crypto Payments](https://www.xpaylabs.com/guides/how-to-accept-crypto-payments) — Developer's setup guide
- [TRON Payment Gateway](https://www.xpaylabs.com/solutions/tron-payment-gateway) — Self-hosted USDT TRC20 infrastructure

## Contact

- Telegram: [@OS_Blockchain](https://t.me/OS_Blockchain)
- GitHub Issues: [Report bugs](https://github.com/yan253319066/XPayLabs/issues)
