// llmNode.js

import React from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: `${100 / 3}%` } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200 / 3}%` } },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  return (
    <BaseNode id={id} data={data} handles={handles} title="LLM">
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};