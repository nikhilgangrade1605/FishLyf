import React from 'react';

export default function LiveCamera({ title, src }) {
  return (
    <div className="bg-slate-panel p-2 rounded shadow flex flex-col items-center">
      <div className="font-semibold mb-1">{title}</div>
      <div className="w-full h-32 bg-black flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt="camera" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500">LIVE</span>
        )}
      </div>
      <div className="text-xs text-gray-400 mt-1">1080p Recording</div>
    </div>
  );
}
