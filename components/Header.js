import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ children, router, href }) => {
  const isHome = router.pathname === "/";
  const isAbout = router.pathname === "/about";
  const isContact = router.pathname === "/contact";
  const linearGradient = "linear-gradient(180deg, rgb(255,255,255,0) 80%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)";
  //#72512a golden brown
  return (
    <header>
        <nav>
          <Link href="/">
            <a id="home">Timers</a>
          </Link>
          <Link href="/about">
            <a id="about">About</a>
          </Link>
          <Link href="/contact">
            <a id="contact">Contact</a>
          </Link>
        </nav>
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
            #contact {
              background: ${isContact ? linearGradient : ""};
            }
            nav {
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
    </header>
)}

export default withRouter(Header)
