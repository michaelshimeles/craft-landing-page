import React, { useEffect, useState } from 'react';
import type { VideoProps } from './types';

export const InstagramReel: React.FC<VideoProps> = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const existingScript = document.getElementById('instagram-embed-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'instagram-embed-script';
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      const script = document.getElementById('instagram-embed-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-[320px] h-[400px] animate-pulse bg-gray-200 rounded-lg mx-auto" />
    );
  }

  return (
    <div className="instagram-embed-container flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: 'none',
          margin: '0',
          width: '320px',
          minWidth: '326px',
          padding: '0',
        }}
      />
    </div>
  );
};