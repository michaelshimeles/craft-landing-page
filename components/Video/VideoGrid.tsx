import React from 'react';
import { InstagramReel } from './InstagramReel';
import { TikTokVideo } from './TikTokVideo';
import type { Video } from './types';

type VideoGridProps = {
  videos: Video[];
  className?: string;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, className = '' }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video, index) => (
          <div 
            key={index}
            className="w-[340px] bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-medium text-blue-500 text-center mb-4">
                {video.title}
              </h3>
              {video.type === 'instagram' ? (
                <InstagramReel url={video.url} title={video.title} />
              ) : (
                <TikTokVideo url={video.url} title={video.title} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;