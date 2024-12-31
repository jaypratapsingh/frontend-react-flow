// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='audio' label='Audio' />
                <DraggableNode type='video' label='Video' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='customNode' label='Custom' />
                <DraggableNode type='file' label='File' />
            </div>
        </div>
    );
};
