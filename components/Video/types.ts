// components/video/types.ts

// Extend the Window interface to include Instagram embed properties
declare global {
    interface Window {
      instgrm?: {
        Embeds: {
          process(): void;
        };
      };
      TiktokEmbed?: {
        reload(): void;
      };
    }
  }
  
  // Video types for component props
  export type VideoType = 'instagram' | 'tiktok';
  
  export type Video = {
    type: VideoType;
    url: string;
    title: string;
  }
  
  export type VideoProps = {
    url: string;
    title: string;
  }