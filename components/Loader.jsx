import React from 'react';
import Image from 'next/image';
import Pulse from 'react-reveal/Pulse';

const Loader = () => {
  return (
    <>
      <div id="ftco-loader" className="show fullscreen">
        <Pulse forever={true}>
          <Image src="/assets/images/logo.jpg" alt="" height={50} width={100} />
        </Pulse>
      </div>
    </>
  );
};

export default Loader;
