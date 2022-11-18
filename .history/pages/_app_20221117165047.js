import Mainlayout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}

export default MyApp;
