import { useSelector } from "react-redux";
export default () => {
  const titleUrlVisitas = useSelector((state) => state.texto.titleUrlVisitas);
  const subTitleUrlVisitas = useSelector(
    (state) => state.texto.subTitleUrlVisitas
  );

  return (
    <>
      <h3>{titleUrlVisitas}</h3>
      <p>{subTitleUrlVisitas}</p>
    </>
  );
};
