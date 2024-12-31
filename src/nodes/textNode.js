import React, { useRef, useState } from 'react';
import BaseNode from './baseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {

  const textareaRef = useRef(null);

  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handles = [
    { type: 'source', position: Position.Right, id: 'value' },
    { type: 'target', position: Position.Left, id: 'input' }
  ];

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <BaseNode id={id} data={data} handles={handles} title="Text">
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              minHeight: '40px',
              resize: 'none',
              overflow: 'hidden',
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};