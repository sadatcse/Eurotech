import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

// Browser-tab / search-result icon: "E" monogram in the brand blue
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 112,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)',
          color: 'white',
          fontSize: 340,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        E
      </div>
    ),
    size
  );
}
