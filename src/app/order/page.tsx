import Tabs from "@/components/tabBar/TabBar";
import React from 'react';

export default function Order() {
  return (
    <div  className='container m-auto col-12' style={{ height: '100vh' }}>
      <Tabs path={'order'}/>
      <div style={{ background: "#F1F5F9" }} className="mt-5 rounded p-5 w-1/2">
        <p>order</p>
      </div>
    </div>
  )
}