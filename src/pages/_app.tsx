import '../styles/globals.css';

import { ActivitiesProvider } from '../contexts/activities';

function MyApp({ Component, pageProps }) {
  return (
    <ActivitiesProvider>
      <Component {...pageProps} />;
    </ActivitiesProvider>
  );
}

export default MyApp;
