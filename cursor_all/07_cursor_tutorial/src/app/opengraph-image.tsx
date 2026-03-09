import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Cursor Tutorial - Master AI-Powered Development'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Cursor Tutorial
        </div>
        <div
          style={{
            fontSize: 36,
            marginBottom: 40,
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          Master AI-Powered Development
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            opacity: 0.8,
          }}
        >
          Cursor 1.7.33 • Claude 4.5 Sonnet • Latest Features
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
