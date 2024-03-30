import Head from "next/head";

export default () => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
              .sideBar {
                position: absolute;
                height: min-100px; /* Ajuste conforme necessário */
                width: min-100px; /* Ajuste conforme necessário */
                padding: 30px; 
              }
              .visitantesControll {
                background: grey;
                top: 30%;
                left: 80%;
              }
              `}
          </style>
        </Head>
      </div>
      <div className="sideBar visitantesControll"></div>
    </>
  );
};
