<div align="center">
<img src="public/logo.png" alt="XPay Labs Logo — Self-hosted Crypto Payment Gateway" width="80" />
</div>

# XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure | Open Source Crypto Payment Gateway

> **V1.0** — XPay Labs (often called xpay) is a private, containerized, self-hosted payment infrastructure supporting TRON, all EVM chains, and SUI. Fully non-custodial, white-label merchant gateways engineered for optimal developer power.

**XPay Labs (xpay)** is an open source, self-hosted crypto payment gateway that lets you accept stablecoin payments (USDT, USDC) across TRON (TRC20), EVM chains (Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche), and SUI — with zero gateway fees and full control over your private keys. Multi-tenant by design — host unlimited merchants on a single deployment with isolated credentials and configurable fee structures. A non-custodial BitPay alternative for developers who want to own their payment infrastructure.

[Website](https://www.xpaylabs.com) · [Documentation](https://docs.xpaylabs.com) · [Pricing](https://www.xpaylabs.com/pricing) · [Blog](https://www.xpaylabs.com/blog)

---

## Why Self-Hosted Crypto Payment Gateway?

### 💰 Cost Comparison: Self-Hosted vs Hosted Gateways

Processing **$100,000/month** in crypto payments (public rates as of Aug 2026):

| Gateway | Transaction Fee | Monthly Fee | **Annual Cost** | Savings vs XPay |
|---------|----------------|-------------|-----------------|-----------------|
| **XPay Labs** | **0%** | $0 | **~$240** (VPS) | — |
| NowPayments | 0.5%+ (single-currency base) | $0 | ~$6,000+ | **Save ~$5,760+** |
| Coinbase Business | ~1% | $0 | ~$12,000 | **Save ~$11,760** |
| BitPay | 2% + $0.25 (&lt;$500k/mo) | $0 (volume-tiered) | ~$24,000+ | **Save ~$23,760+** |

> Coinbase Commerce’s portal became inaccessible after March 31, 2026 (legacy Commerce was 1% and self-custodial). XPay Labs is free MIT-licensed software. You pay only blockchain gas costs (~$0.02-$0.50/tx) and your VPS bill.

### Feature Comparison

| Feature | XPay Labs | BitPay | Coinbase Business | NowPayments |
|---------|-----------|--------|-------------------|-------------|
| Fees | Zero (only gas) | 2%+$0.25 entry (&lt;$500k); 1% at ≥$1M | ~1% | 0.5%+ (higher w/ conversion) |
| Custody | Non-custodial | Custodial | Custodial | Custodial or non-custodial |
| Chains | TRON, EVM, SUI | BTC, ETH, LTC + tokens | Major EVM (USDC-focused) | BTC, ETH, 50+ |
| White-label | Yes | Limited | Limited | Yes |
| Deployment | Self-hosted (Docker) | Hosted | Hosted | Hosted |
| License | MIT | Closed | Closed | Closed |
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
# Clone the official deployment repo
git clone https://github.com/yan253319066/XPayLabs-docker.git
cd XPayLabs-docker

# Deploy the gateway
docker compose up -d
```

Edit `.env` to set `XPAY_SEED_PHRASE`, RPC endpoints, and your webhook URL. The gateway is available at `http://localhost:180` (controlled by `HOST_PORT_GATEWAY_HTTP` in `.env`).

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

## Related Projects

| Repository | Description |
|------------|-------------|
| [XPayLabs-docker](https://github.com/yan253319066/XPayLabs-docker) | Docker Compose deployment |
| [XPayLabs-java](https://github.com/yan253319066/XPayLabs-java) | Gateway core — Spring Boot |
| [XPayLabs-merchant-vue](https://github.com/yan253319066/XPayLabs-merchant-vue) | Merchant dashboard — Vue 3 |
| [XPayLabs-sui-node-service](https://github.com/yan253319066/XPayLabs-sui-node-service) | SUI RPC proxy — Express |
| [XPayLabs-checkout](https://github.com/yan253319066/XPayLabs-checkout) | Checkout page (Vue 3) |
| [XPayLabs-docs](https://github.com/yan253319066/XPayLabs-docs) | Documentation (Mintlify) |
| [XPayLabs-node-sdk](https://github.com/yan253319066/XPayLabs-node-sdk) | Node.js SDK |
| [XPayLabs-java-sdk](https://github.com/yan253319066/XPayLabs-java-sdk) | Java SDK |

## Contact

- Telegram: [@OS_Blockchain](https://t.me/OS_Blockchain)
- GitHub Issues: [Report bugs](https://github.com/yan253319066/XPayLabs/issues)

🌟 **Enjoying XPayLabs?** [Star this repo](https://github.com/yan253319066/XPayLabs) — it helps others discover self-hosted crypto payment infrastructure.

---

## Repository

**GitHub:** [yan253319066/XPayLabs](https://github.com/yan253319066/XPayLabs)
**Gitee (mirror):** [XPayLabs/XPayLabs](https://gitee.com/XPayLabs/XPayLabs)
