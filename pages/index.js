import Head from 'next/head'
import FormModal from './FormModal';
import { useEffect, useState } from 'react';

export default function Home() {
  const [id, setId] = useState(7756);
  const [lootObject, setLootObject] = useState({});
  
  useEffect(() => {
    checkLoot(id);
  }, []);
  
  const checkLoot = async (id) => {
    const settings = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
    try {
      const fetchResponse = await fetch(`/api/loot/${id}`, settings);
      const data = await fetchResponse.json();
      console.log(data);
      setLootObject(data);
    } catch {
      console.error('Error fetching loot information');
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Loot Query 🔎</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <span>Loot Query 🔎</span>
        </h1>
        <div className="grid">
          <FormModal
            lootObject={lootObject}
            lootId={id}
            checkLoot={checkLoot}
          />

          <a href="https://www.lootproject.com/resources" className="card">
            <h3>Derivatives &rarr;</h3>
            <p>See what the community is building for $LOOT!</p>
          </a>

          <a
            href="https://thegrand.exchange/"
            className="card"
          >
            <h3>The Grand Exchange &rarr;</h3>
            <p>Discover loots, realms, ability scores, and more.</p>
          </a>

          <a
            href="https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7"
            className="card"
          >
            <h3>$LOOT Smart Contract &rarr;</h3>
            <p>
              Learn more by seeing exploring the deployed smart contract
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://twitter.com/mehranhydary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with love by {' @mehranhydary 🤍 🖤'}
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
