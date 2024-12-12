import { Circle } from 'lucide-react';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Circle color="primary" />
      <p style={{ marginLeft: '10px', color: '#3f51b5' }}>Loading...</p>
    </div>
  );
};

export default Loading;
