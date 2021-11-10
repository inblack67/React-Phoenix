import { Socket } from 'phoenixjs';
import React, { useEffect } from 'react';

const index = () => {
  useEffect(() => {
    const socket = new Socket('ws://localhost:4000/socket');
    socket.connect();
    console.log('socket connected...');
    const channel = socket.channel('room:1');
    channel.join();
    channel.on('new_message', (res) => {
      console.log('res = ', res);
    });
    channel.push('new_message', {
      payload: {
        content: 'NEXT REACT oh fuck ya',
      },
    });
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default index;
