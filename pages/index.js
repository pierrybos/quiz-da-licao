"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import logo from "../public/img/logo-minha-es.png";
import { useEffect, useState } from "react";
import { useQRCode } from "next-qrcode";

export default function QrCode() {
  const { Canvas } = useQRCode();
  const searchParams = useSearchParams();

  const [url, setUrl] = useState("https://es.minhaes.org/quizgeral/");

  function afterRender() {
    if (searchParams.get("url")) {
      setUrl("https://es.minhaes.org/quizgeral/1/" + searchParams.get("url"));
    }
  }

  useEffect(() => {
    afterRender();
  }, []);

  return (
    <>
      <div id="containter">
        <div class="row">
          <h3>Acesse o Quiz pelo QRCode</h3>
          <p>Use a câmera do seu celular</p>
        </div>
        <div class="row" id="displayRow">
          <div class="logo">
            <Image src={logo} width={272} height={153} alt="" />
          </div>
          <div class="qrcode">
            <Canvas
              text={url || "Defina a url"}
              options={{
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 300,
                color: {
                  dark: "#1e3666",
                  light: "#f4f4f6",
                },
              }}
            />
          </div>
        </div>
        <div class="row">
          <input
            type="text"
            id="targetUrl"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
