/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../pages/client/public/yoda.png';
import Layout from '../src/components/Layout'
import Button from '../src/components/Button'
import QueryPage from '../src/components/QueryPage';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://swapi.dev/api/',
});

export default () => (

  <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>

    <Layout>

<QueryPage />
      <div className="pa4 order-1 flex w-50-l flex-column justify-center items-start-l items-center">
      <Image className="yoda" src={profilePic} alt="Picture of Yoda" />
      </div>
      <div className="pa4-ns flex order-0 order-1-l flex-column w-50-l justify-center items-start-l items-center">
        <h1 className="text-primary choose">Star Wars Characters</h1>
        <div className="flex flex-row mv3">
          <Link prefetch href="/peoples">
            <a>
              <Button dashed className="button-link mr3">
                Explore Characters
                <QueryPage />
              </Button>

            </a>
          </Link>
        </div>
      </div>


    <style jsx>{`
      h1 {
        font-weight: 300;
        margin-top: 0;
      }
      .yoda {
        max-width: 100%;
        opacity: 0.25;
      }
      .choose {
        font-size: 2.4rem
      }

      @media only screen and (min-width: 500px){
        .choose{
          font-size: 3rem
        }
      }
    `}</style>
  </Layout>
  </ApolloHooksProvider>
  </ApolloProvider>
)