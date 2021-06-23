import Head from 'next/head'
// import Router from 'next/router'
import globalStyles from '../../styles/global.styles'
import Header from '../Header'
import layoutStyles from './styles'
import 'tachyons'

type Props = {
  children?: JSX.Element|JSX.Element[];

}

const Layout = ({ children } : Props) => <div className="root mw9 ph3 ph4-l flex flex-column">
  <Head>
    <title>Star Wars</title>
  </Head>
  <Header />

  <div className="flex flex-column flex-row-l flex-auto">{children}</div>
  <style global jsx>
    {globalStyles}
  </style>
  <style jsx>{layoutStyles}</style>
</div>;

export default Layout;
