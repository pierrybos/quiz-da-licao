import { useSelector } from "react-redux";
export default () => {
  const titleUrlQuiz = useSelector((state) => state.texto.titleUrlQuiz);
  const subTitleUrlQuiz = useSelector((state) => state.texto.subTitleUrlQuiz);

  return (
    <>
      <h3>{titleUrlQuiz}</h3>
      <p>{subTitleUrlQuiz}</p>
    </>
  );
};
