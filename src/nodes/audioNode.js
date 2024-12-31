import React from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const AudioNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'audio' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles} title="Audio">
      <div>
        <label>
          Audio URL:
          <input type="text" placeholder="Enter audio URL" />
        </label>
      </div>
    </BaseNode>
  );
};