import Head from "next/head";

export default () => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
 .rightSideBar {
  position: absolute;
  height: 100px; /* Ajuste conforme necessário */
  width: 100px; /* Ajuste conforme necessário */
}

.rightSideBar {
  right: 0;
  background-color: green; /* Altere a cor conforme desejado */
}

              `}
          </style>
        </Head>
      </div>
      <div className="rightSideBar"></div>
    </>
  );
};
