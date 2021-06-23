/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../client/public/yoda.png';

import Layout from '../client/src/components/Layout'
import Button from '../client/src/components/Button'

export default () => (
  <Layout>
      <div className="pa4 order-1 flex w-50-l flex-column justify-center items-start-l items-center">
      <Image src={profilePic} alt="Picture of the author" />
      </div>
      <div className="pa4-ns flex order-0 order-1-l flex-column w-50-l justify-center items-start-l items-center">
        <h1 className="text-primary choose">Star Wars Characters</h1>
        <div className="flex flex-row mv3">
          <Link prefetch href="/people">
            <a>
              <Button dashed className="button-link mr3">
                Explore People
              </Button>
            </a>
          </Link>
            {/* <a target="_blank" href={API_URL + 'playground/'} rel="noreferrer">
              <Button primary className="button-link">
                Playground
              </Button>
            </a> */}
        </div>
      </div>
    <style jsx>{`
      h1 {
        font-weight: 300;
        margin-top: 0;
      }
      .darth-vader {
        border-radius: 0 0 50%;
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
)