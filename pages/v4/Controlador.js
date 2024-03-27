import Head from "next/head";
import LeftControllSidebar from "./LeftControllSidebar";
import CenterControllSidebar from "./CenterControllSidebar";
import RightControllSidebar from "./RightControllSidebar";

export default () => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
              body {
                margin: 0 !important;
                padding: 0 !important;
                background-color: #cdcdcd !important;
                background-size: cover !important;
                background-position: center !important;
                background-attachment: fixed !important;
              }
              .container {
                  position: relative;
                  width: 100%;
                  height: 100vh;  
              }

              `}
          </style>
        </Head>
      </div>
      <div className="container">
        <LeftControllSidebar />
        <CenterControllSidebar />
        <RightControllSidebar />
      </div>
    </>
  );
};
