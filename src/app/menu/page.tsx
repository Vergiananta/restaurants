import Tabs from '@/components/tabBar/TabBar';
import React from 'react';

export default function Menu({ data, callbackParent }) {

  return (
    <div className='container m-auto' style={{ height: '100vh' }}>
      <Tabs path={'menu'} />
      <div style={{ background: "#F1F5F9" }} className="mt-5 rounded p-5 w-1/2">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className='text-left font-medium' style={{color: '#64748B'}}>ID</th>
              <th className='text-left font-medium' style={{color: '#64748B'}}>Menu</th>
              <th className='text-left font-medium' style={{color: '#64748B'}}>Hapus?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>996756</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>996753</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}