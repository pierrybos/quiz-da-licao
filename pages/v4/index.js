import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Apresentacao from "./Apresentacao";
import Controlador from "./Controlador";

export default () => {
  const [controlls, setControlls] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const searchParams = useSearchParams();

  function afterRender() {
    if (searchParams.get("painel")) {
      setControlls(false);
      setIsVisible(false);
    } else {
      setControlls(true);
      setIsVisible(true);
    }
  }

  useEffect(() => {
    afterRender();
  }, [searchParams]);

  return (
    <>
      {controlls && <Controlador />}
      {!controlls && <Apresentacao />}
    </>
  );
};
