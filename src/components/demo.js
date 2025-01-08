import React from 'react'


const Layout = () => {
  return (
    <div className="container">
      <header className="header">HEADER</header>
      <main className="main">
        <h1>Big Title</h1>
        <section>
          <h2>Title 01</h2>
          <p>Git là tên gọi của một Hệ thống quản lý phiên bản phân tán</p>
        </section>
        <section>
          <h2>Title 02</h2>
          <p>Git là tên gọi của một Hệ thống quản lý phiên bản phân tán</p>
        </section>
        <section>
          <h2>Title 03</h2>
          <p>Git là tên gọi của một Hệ thống quản lý phiên bản phân tán</p>
        </section>
      </main>
      <aside className="aside">ASIDE</aside>
      <div className="boxes">
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
        <div className="box">Box 4</div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  )
}

export default Layout;
