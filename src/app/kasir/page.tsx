import Tabs from "@/components/tabBar/TabBar";
import React from 'react';


export default function Kasir() {
  return (
    <div className='container m-auto' style={{ height: '100vh' }}>
      <Tabs path={'kasir'} />
      <div style={{ background: "#F1F5F9" }} className="mt-5 rounded">
        <p>kasir</p>
      </div>
    </div>
  )
}