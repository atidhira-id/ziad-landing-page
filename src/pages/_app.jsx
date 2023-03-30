/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/index.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
