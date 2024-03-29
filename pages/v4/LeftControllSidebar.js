import Head from "next/head";

export default () => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
              .leftSideBar {
  position: absolute;
  height: 100px; /* Ajuste conforme necessário */
  width: 100px; /* Ajuste conforme necessário */
}

.leftSideBar {
  left: 0;
  background-color: blue; /* Altere a cor conforme desejado */
}



              `}
          </style>
        </Head>
      </div>
      <div className="leftSideBar"></div>
    </>
  );
};
