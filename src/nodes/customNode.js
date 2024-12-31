import React from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const CustomNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'custom' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles} title="Custom">
      <div>
        <label>
          Custom Data:
          <input type="text" placeholder="Enter custom data" />
        </label>
      </div>
    </BaseNode>
  );
};