import React from "react";

function DownloadAds() {
  const downloadImgStyle =
    "border-[2px] border-[#232a4f] rounded-[13px] h-[3rem] w-[10rem] cursor-pointer";
  return (
    <section className="download">
      <section className="download-images flex ">
        <img
          className={`${downloadImgStyle} mr-[2rem]`}
          src={require("../image/App Store.png")}
          alt="AppStore"
        />
        <img
          className={downloadImgStyle}
          src={require("../image/Google Play.png")}
          alt="GooglePlay"
        />
      </section>
    </section>
  );
}

export default DownloadAds;
