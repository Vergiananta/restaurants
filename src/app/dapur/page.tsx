import Tabs from "@/components/tabBar/TabBar";
import React from 'react';

export default function Dapur() {
  return (
    <div  className='container m-auto' style={{ height: '100vh' }}>
      <Tabs path={'dapur'}/>
      <div style={{ background: "#F1F5F9" }} className="rounded mt-5">
        <p>dapur</p>
      </div>
    </div>
  )
}