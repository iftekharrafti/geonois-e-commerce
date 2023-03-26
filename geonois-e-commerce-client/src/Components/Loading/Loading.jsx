import React from "react";
import loading from "../../assets/loading.gif";
const Loading = () => {
  const style = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
    width: '100%',
    height: '100%'
  };

  return (
    <div className='position-relative d-flex justify-content-center align-items-center' style={{width: '100%', height: '100%'}}>
      <div style={style} className='position-absolute top-0'></div>
      <img src={loading} alt='' />
    </div>
  );
};

export default Loading;
