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
      @import url('https://fonts.googleapis.com/css?family=Hind+Guntur|Josefin+Sans:700|Material+Icons');
      body {
        font-family: 'Hind Guntur', sans-serif;
        background-color: #000;
        font-size: 20px;
        line-height: 26px;
        color: #fff;
        margin: 110px 25%;
        box-sizing: border-box;
      }
      ul, li {
        list-style: none;
        padding-left: 0;
      }
      @media only screen and (max-width: 1600px) {
        body {
          margin: 80px 15%;
        }
      }
      @media only screen and (max-width: 1400px) {
        body {
          margin: 80px 200px;
        }
      }
      @media only screen and (max-width: 1200px) {
        body {
          margin: 80px 140px;
        }
      }
      @media only screen and (max-width: 1000px) {
        body {
          margin: 80px 80px;
        }
      }
      @media only screen and (max-width: 820px) {
        body {
          margin: 80px 32px;
          margin-right: 64px;
        }
        .task {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)

export default Layout
