import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ children, router, href }) => {
  const isHome = router.pathname === "/";
  const isAbout = router.pathname === "/about";
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
              font-family: 'Montserrat Subrayada', sans-serif;
              color: #ffffff;
              text-decoration: none;
              font-size: 24px;
              padding: 2px;
              margin-right: 30px;
              border-radius: 2px;
            }
            a:hover {
              color: #000000;
              background-color: #ffffff;
            }
            #home {
              background-color: ${isHome ? "#ffffff" : ""};
              color: ${isHome ? "#000000" : ""};
            }
            #about {
              background-color: ${isAbout ? "#ffffff" : ""};
              color: ${isAbout ? "#000000" : ""};
            }
            div {
              margin-bottom: 80px;
            }
          `
        }</style>
    </div>
)}

export default withRouter(Header)
