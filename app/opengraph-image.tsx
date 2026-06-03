import { ImageResponse } from 'next/og';

export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #060816 0%, #0A0D1F 50%, #060816 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(91,140,255,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,77,255,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #5B8CFF, #7C4DFF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            X
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            XPay Labs (xpay)
          </div>
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#9ea4c2',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.4,

          }}
        >
          Self-hosted Crypto Payment Infrastructure
        </div>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '30px',
          }}
        >
          {['TRON', 'EVM', 'SUI'].map((chain) => (
            <div
              key={chain}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                background: 'rgba(91,140,255,0.1)',
                border: '1px solid rgba(91,140,255,0.2)',
                fontSize: '16px',
                color: '#5B8CFF',
                fontWeight: 600,
  
              }}
            >
              {chain}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
