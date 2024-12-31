import React from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const FileNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'file' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles} title="File Node">
      <div>
        <label>
          File Path:
          <input type="text" placeholder="Enter file path" />
        </label>
      </div>
    </BaseNode>
  );
};