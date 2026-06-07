import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-message`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-sent`,
        },
      ]}
    >
      <div>Send Email</div>
    </BaseNode>
  );
};