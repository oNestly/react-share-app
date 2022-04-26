import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

function Spinner({ message, additional }) {
  return (
    <div className={`flex flex-col justify-center items-center w-full h-full ${additional}`}>
      <BallTriangle
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      />

      <p className="text-lg text-center px-2 p-5">{message}</p>
    </div>
  );
}

export default Spinner;