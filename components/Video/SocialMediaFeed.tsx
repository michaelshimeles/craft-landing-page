import React, { useEffect } from 'react';

export default function SocialMediaFeed() {
  useEffect(() => {
    // Load Instagram script
    const instaScript = document.createElement('script');
    instaScript.src = '//www.instagram.com/embed.js';
    instaScript.async = true;
    document.body.appendChild(instaScript);

    // Load TikTok script
    const tiktokScript = document.createElement('script');
    tiktokScript.src = 'https://www.tiktok.com/embed.js';
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (
          script.src.includes('instagram.com/embed.js') ||
          script.src.includes('tiktok.com/embed.js')
        ) {
          script.remove();
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Instagram Reel Container */}
        <div className="w-full max-w-[340px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/C4hvHoBuIT_/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '340px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          />
        </div>

        {/* TikTok Video Container */}
        <div className="w-full max-w-[340px]">
          <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@parmskitchen/video/7255959887979613482"
            data-video-id="7255959887979613482"
            style={{ maxWidth: '340px', minWidth: '325px' }}
          >
            <section />
          </blockquote>
        </div>
      </div>
    </div>
  );
}