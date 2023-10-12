
export default function Tabs({path}) {
  return (
    <div>
      <div className="flex items-center justify-between my-5">
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold">[Contoh] Sistem Restoran</h1>
          </div>
        </div>
        <div className="flex justify-around col-12 gap-5">
          <div className=" col-5" style={{ background: "#F1F5F9" }} >
            <ul className="flex m-1 rounded" >
              <li className="flex-1 mr-2">
                <a className="text-center block  rounded py-2 px-5 hover:bg-white " style={{background: path === 'menu' ? 'white': '', color: path === 'menu' ? 'black':'#64748B'}} href="/menu">Menu</a>
              </li>
              <li className="flex-1 mr-2">
                <a className="text-center block   rounded py-2 px-4 hover:bg-white " style={{background: path === 'order' ? 'white': '', color:  path === 'order' ? 'black': '#64748B'}} href="/order">Order</a>
              </li>
              <li className="flex-1 mr-2">
                <a className="text-center block   rounded py-2 px-4  hover:bg-white " style={{background: path === 'dapur' ? 'white': '', color:  path === 'dapur' ? 'black':'#64748B'}} href="/dapur">Dapur</a>
              </li>
              <li className="flex-1 mr-2">
                <a className="text-center block   rounded py-2 px-4  hover:bg-white " style={{background: path === 'kasir' ? 'white': '', color:  path === 'kasir' ? 'black':'#64748B'}} href="/kasir">Kasir</a>
              </li>
            </ul>
          </div>
          <div className="m-auto col">
            <button
              className="bg-white hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">

              Reset
            </button>
          </div>
        </div>
    </div>
  )
} 