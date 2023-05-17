import { useQuery } from '@apollo/client';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { GetPatientsDataResponseType, GET_PATIENTS } from '../queries/Patient';

export default function Home() {
  const { loading, error, data } = useQuery(GET_PATIENTS, {
    onCompleted(data) {
      console.log('data: ', data.getPatients);
    },
  });

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>

        </div>
        <h2>My first Apollo app 🚀</h2>
        <br/>
        {loading ? <p>Loading...</p> : (
          <div>
            {data.getPatients.map(({ complainDescription, _id, firstName, lastName, order, status }: GetPatientsDataResponseType['getPatients'][number]) => (
              <div key={_id}>
                <h3>{`${firstName} ${lastName}`}</h3>
                <br />
                <b>About this client:</b>
                <p>{complainDescription}</p>
                <br />
                <p>Status:</p>
                <p>{status}</p>
                <br />
                <p>Order:</p>
                <h2>{order}</h2>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
