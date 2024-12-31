import React from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import Styles from './baseNode.module.css'; // Import the CSS file
import { FaRegTimesCircle } from 'react-icons/fa';

const BaseNode = ({ id, data, children, handles, title }) => {

  const { setNodes } = useReactFlow();

  const handleDelete = () => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  };

  return (
    <div className={Styles.baseNode}>
      <div className={Styles.nodeHeader}>
        <div className={Styles.nodeTitle}>{title}</div>
        <button className={Styles.deleteButton} onClick={handleDelete}>
          <FaRegTimesCircle />
        </button>
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div>
        <span>{data.label}</span>
      </div>
      <div className={Styles.nodeContent}>
        {children}
      </div>
    </div>
  );
};

export default BaseNode;