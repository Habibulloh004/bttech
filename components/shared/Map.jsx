import React from "react";

const Map = () => {
  const iframeStyle = {
    frameBorder: "1",
    style: { position: "relative", width: "100%", height: "400px" },
  };

  const aStyle = {
    color: "#eee",
    fontSize: "12px",
    position: "absolute",
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <a
        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
        style={aStyle}
      >
        Ташкент
      </a>
      <a
        href="https://yandex.uz/maps/10335/tashkent/house/YkAYdA5lT00FQFprfX9yeHVgZQ==/?ll=69.295682%2C41.339931&utm_medium=mapframe&utm_source=maps&z=16.61"
        style={aStyle}
      >
        Улица Богишамол, 110 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.295682%2C41.339931&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0Njc3NTk1NDQzEjNPyrt6YmVraXN0b24sIFRvc2hrZW50LCBCb2fKu2lzaGFtb2wga2_Ku2NoYXNpLCAxMTAiCg1kl4pCFRdcJUI%2C&z=16.61"
        allowFullScreen
        {...iframeStyle}
        dangerouslySetInnerHTML={{ __html: "" }}
      ></iframe>
    </div>
  );
};

export default Map;
