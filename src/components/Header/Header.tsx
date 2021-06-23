import Link from 'next/link'
import SearchBox from '../Search/SearchBox';

const Header = () => <header className="flex flex-column flex-row-l justify-between items-center">
  <div>
  <Link prefetch href="/">
    <a className="brand flex items-center">
      Star Wars
    </a>
  </Link>
  </div>

  <nav className="mv2 flex flex-row flex-wrap justify-center">
    {/* <Link prefetch href="/people">
      <a>People</a>
    </Link> */}
    <SearchBox />
  </nav>


  <style jsx>{`
    header {
      padding: 15px 0;
    }
    .brand {
      font-family: 'starjedi';
      font-size: 35px;
      font-weight: 300;
    }
    .brand :global(svg) {
      height: 65px;
      display: flex;
      margin-right: 15px;
    }
    nav a {
      display: flex;
      padding: 0 10px;
      margin: 0.5rem 0;
      color: var(--secondary-fg-color);
      font-size: 18px;
    }
    nav a:last-child {
      margin-right: 0;
    }
    svg {
      height: 20px;
    }
    svg path {
      fill: #d95468;
    }
    @media only screen and (max-width: 60em){
      .gh-link {
        display:none !important;
      }
    }
  `}</style>
</header>;


export default Header;
