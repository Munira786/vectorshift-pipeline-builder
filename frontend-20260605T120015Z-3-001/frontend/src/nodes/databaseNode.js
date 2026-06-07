import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id }) => {
  return (
    <BaseNode
      title="Database"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-query`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-result`,
        },
      ]}
    >
      <div>Database Query</div>
    </BaseNode>
  );
};