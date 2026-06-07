import React from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({
  title,
  children,
  handles = [],
}) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: 100,
        border: '1px solid #d1d5db',
        borderRadius: '14px',
        padding: '16px',
        background: '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: 12,
            height: 12,
            background: '#2563eb',
            border: '2px solid white',
            ...handle.style,
          }}
        />
      ))}

      <div
        style={{
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '12px',
          color: '#111827',
        }}
      >
        {title}
      </div>

      <div>
        {children}
      </div>
    </div>
  );
};