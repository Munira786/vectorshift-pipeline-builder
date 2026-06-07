// textNode.js

import { useState, useEffect } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Extract variables like {{name}}
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const matches = [...currText.matchAll(regex)];

  // Remove duplicates
  const variables = [
    ...new Set(matches.map(match => match[1]))
  ];

  // Refresh ReactFlow when handles change
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  // Dynamic handles
  const variableHandles = variables.map((variable, index) => ({
    type: 'target',
    position: Position.Left,
    id: `${id}-${variable}`,
    style: {
      top: `${80 + index * 30}px`,
    },
  }));

  // Dynamic sizing
  const lines = currText.split('\n').length;

  const longestLine = Math.max(
    ...currText.split('\n').map(line => line.length)
  );

  const nodeWidth = Math.min(
    500,
    Math.max(250, longestLine * 8)
  );

  const nodeHeight = Math.max(
    120,
    80 + lines * 25
  );

  return (
    <BaseNode
      title="Text"
      width={nodeWidth}
      minHeight={nodeHeight}
      handles={[
        ...variableHandles,
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      
      <textarea
        value={currText}
        onChange={handleTextChange}
        style={{
          width: '100%',
          minHeight: '80px',
          resize: 'none',
          boxSizing: 'border-box',
        }}
      />
    </BaseNode>
  );
};