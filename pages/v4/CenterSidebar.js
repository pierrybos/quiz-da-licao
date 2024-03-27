import Head from "next/head";

export default () => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
.centerSideBar {
  position: absolute;
  height: 100px; /* Ajuste conforme necessário */
  width: 100px; /* Ajuste conforme necessário */
}


.centerSideBar {
  left: 50%;
  transform: translateX(-50%);
  background-color: red; /* Altere a cor conforme desejado */
}

              `}
          </style>
        </Head>
      </div>
      <div className="centerSideBar"></div>
    </>
  );
};
