import React, { useEffect, useRef, useState } from 'react';

// Dynamically load the Spline Viewer web component and render the 3D scene
export default function SplineCanvas({ url }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let canceled = false;

    async function ensureViewer() {
      if (window.SplineViewerElement) return true; // already loaded

      // If the script is already in the document, wait for it to load
      const existing = document.querySelector('script[data-spline-viewer]');
      if (existing) {
        if (existing.getAttribute('data-loaded') === 'true') return true;
        await new Promise((resolve) => existing.addEventListener('load', resolve, { once: true }));
        return true;
      }

      // Inject script
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
        script.async = true;
        script.defer = true;
        script.setAttribute('data-spline-viewer', '');
        script.addEventListener('load', () => {
          script.setAttribute('data-loaded', 'true');
          resolve();
        });
        script.addEventListener('error', reject);
        document.head.appendChild(script);
      });
      return true;
    }

    ensureViewer()
      .then(() => {
        if (canceled) return;
        setReady(true);
      })
      .catch(() => {
        if (canceled) return;
        setReady(false);
      });

    return () => {
      canceled = true;
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-red-500" />
        </div>
      )}
      {/* eslint-disable-next-line react/no-unknown-property */}
      {ready && <spline-viewer style={{ width: '100%', height: '100%' }} url={url} events="true" ar="false" background="#000000" />}
    </div>
  );
}
