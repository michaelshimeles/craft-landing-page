"use client";

import React, { useEffect, useState } from 'react';
import type { VideoProps } from './types';

export const TikTokVideo: React.FC<VideoProps> = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTikTokEmbed = () => {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      
      script.onload = () => {
        if (window.TiktokEmbed) {
          window.TiktokEmbed.reload();
        }
        setIsLoading(false);
      };

      script.onerror = () => {
        console.error('Failed to load TikTok embed script');
        setIsLoading(false);
      };

      document.body.appendChild(script);

      return () => {
        try {
          document.body.removeChild(script);
        } catch (e) {
          console.error('Error removing TikTok script:', e);
        }
      };
    };

    loadTikTokEmbed();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[600px] animate-pulse bg-gray-200 rounded-lg" />
    );
  }

  return (
    <div className="w-full h-full min-h-[600px] flex justify-center">
      <blockquote 
        className="tiktok-embed" 
        cite={url}
        data-video-id={url.split('video/')[1]}
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a target="_blank" href={url} rel="noreferrer">{title}</a>
        </section>
      </blockquote>
    </div>
  );
};