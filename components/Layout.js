import Header from './Header'
import Head from 'next/head'
const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    {props.children}
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Hind+Guntur|Montserrat+Subrayada|Material+Icons');
      body {
        font-family: 'Hind Guntur', sans-serif;
        background-color: #000;
        font-size: 20px;
        line-height: 26px;
        color: #fff;
        margin: 110px 25%;
        box-sizing: border-box;
      }
      @media only screen and (max-width: 790px) {
        body {
          margin: 80px 32px;
        }
      }
    `}</style>
  </div>
)

export default Layout
