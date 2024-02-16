import "../styles/global.css";
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
