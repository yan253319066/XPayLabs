# Pricing — XPay Labs

## Self-Hosted (Open Source)

- **Price:** Free (self-deploy on your infrastructure)
- **Transaction Fees:** 0% (only blockchain network gas fees)
- **Monthly Fees:** $0
- **License:** MIT
- **Requirements:** VPS or dedicated server with Docker support (Ubuntu 22.04+ recommended)
- **Minimum Server Specs:** 8GB RAM, 4 vCPU, 50GB SSD (~$20/month)
- **Recommended Specs:** 16GB RAM, 8 vCPU, 100GB+ SSD (for high-throughput production)
- **Supported Chains:** TRON (TRC20), 20+ EVM chains (Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Base, Avalanche, zkSync Era, Linea, Scroll, Celo, Mantle, Gnosis, Cronos, Fantom, opBNB, Polygon zkEVM, Metis, Blast, Boba), SUI
- **Supported Tokens:** USDT, USDC, ETH, BNB, MATIC, TRX, and any standard TRC20/ERC20 token
- **Features:** Non-custodial, white-label checkout, REST API, HMAC-SHA256 signed webhooks with retry queue, real-time mempool monitoring (1-6s detection), multi-chain concurrent scanning, Docker Compose deployment (single command)

## Support Plans

- **Docker Setup:** $1,500 one-time — Docker environment setup, blockchain RPC configuration, webhook endpoint integration, 30-day setup support
- **Business:** $3,000/year — Everything in Docker Setup, plus 12 months technical support, priority bug fixes, server health monitoring, 48-hour response SLA
- **Enterprise:** Custom pricing — Custom integrations, dedicated onboarding, 24-hour SLA, priority support

## Cost Comparison vs Alternatives

Figures below use public pricing as of August 2026. Coinbase Commerce’s merchant portal became inaccessible after March 31, 2026; the live Coinbase column uses Coinbase Business.

| Service | Transaction Fee | Monthly Fee | Annual Cost ($100k/mo volume) |
|---------|----------------|-------------|------------------------------|
| XPay Labs (self-hosted) | 0% | $0 | ~$240 (VPS) |
| BitPay | 2% + $0.25 (&lt;$500k/mo); 1.5% mid; 1% at ≥$1M | $0 (volume-tiered) | ~$24,000+ at entry tier |
| Coinbase Business | ~1% | $0 | ~$12,000 |
| NowPayments | 0.5% single-currency (higher with conversion); custodial or non-custodial modes | $0 | ~$6,000+ |
| OpenNode | ~1% | $0 | ~$12,000+ |
| CoinGate | ~1% | $0 | ~$12,000+ |
| BTCPay Server | 0% (self-hosted) | $0 | ~$240 (VPS) |

Sources: [BitPay Pricing](https://www.bitpay.com/pricing), [Coinbase Commerce → Business transition](https://help.coinbase.com/en/transitioning-from-coinbase-commerce-to-coinbase-business).

## Why XPay Labs Is Free

XPay Labs is open-source (MIT) and free because we believe payment infrastructure should be accessible to everyone. Revenue comes from optional support plans for enterprise users who need assistance with deployment, customization, and maintenance.
