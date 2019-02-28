import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ children, router, href }) => {
  const isHome = router.pathname === "/";
  const isAbout = router.pathname === "/about";
  const linearGradient = "linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)";
  return (
    <div>
        <Link href="/">
          <a id="home">Timers</a>
        </Link>
        <Link href="/about">
          <a id="about">About</a>
        </Link>
        <style jsx>{
          `
            a {
              font-family: 'Josefin Sans', sans-serif;
              color: #ffffff;
              text-decoration: none;
              font-size: 24px;
              padding: 2px;
              margin-right: 30px;
              border-radius: 2px;
            }
            a:hover {
              background: ${linearGradient};
            }
            #home {
              background: ${isHome ? linearGradient : ""};
            }
            #about {
              background: ${isAbout ? linearGradient : ""};
            }
            div {
              margin-bottom: 80px;
            }
            @media only screen and (max-width: 360px) {
              div {
                display: flex;
                justify-content: space-between;
              }
              a {
                margin-right: 0;
              }
            }
          `
        }</style>
    </div>
)}

export default withRouter(Header)
