import React from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const ImageNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'image' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles} title="Image">
      <div>
        <label>
          Image URL:
          <input type="text" placeholder="Enter image URL" />
        </label>
      </div>
    </BaseNode>
  );
};