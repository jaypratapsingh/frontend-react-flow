import React from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const VideoNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'video' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles} title="Video">
      <div>
        <label>
          Video URL:
          <input type="text" placeholder="Enter video URL" />
        </label>
      </div>
    </BaseNode>
  );
};