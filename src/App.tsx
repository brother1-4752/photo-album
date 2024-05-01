import CustomSuspense from "./components/common/CustomSuspense";
import Splash from "./components/splash/Splash";
import Onboarding from "./components/onboarding/Onboarding";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    const images = [
      // "/static/media/main-font.a170b64fc635d5db776e.ttf",
      "/static/media/p_9_1.5003ed035994f9bea7af.webp",
      "/static/media/p_8_3.d2aae149461eab9a6f98.webp",
      "/static/media/p_6_3.b79ae29e9a0347a41136.webp",
      "/static/media/p_1_1.499b0147f46fa3362bfb.webp",
      "/static/media/p_6_2.aefaa2409ab555b17641.webp",
      "/static/media/p_8_1.1fa9d2f70f5d0b33bdd6.webp",
      // "/static/media/Pretendard-Bold.4e72d46e664b88a6b5c8.otf",
      // "/static/media/Pretendard-Regular.57ca7a4b20797e3b9625.otf",
      "/static/media/p_1_2.09b9da206a3ee2a62a17.webp",
      "/static/media/p_1_3.4b9d851d954b4e09f37f.webp",
      "/static/media/carousel.aacabd1d4d31abc0c23e.webp",
      "/static/media/p_5_3.3cf314d0a92840ec4c30.webp",
      "/static/media/logo.ad723538933c76eeea5a.webp",
      "/static/media/p_5_1.f41bfa8a09af260942ed.webp",
      "/static/media/p_7_1.cabab35931802ff3ce9b.webp",
      "/static/media/p_7_2.d5d13632868ff02c814e.webp",
      "/static/media/p_3_1.00a6de018c278d5980f1.webp",
      "/static/media/p_8_2.8d6ec681df88c05e1bbe.webp",
      "/static/media/p_2_2.69db716ffe24ec6c3f7a.webp",
      "/static/media/p_5_2.646c4b96aa95ff341f16.webp",
      "/static/media/p_3_2.7dc4d35be49ee41db7d3.webp",
      "/static/media/p_2_1.17db52ac7ce62b221df4.webp",
      "/static/media/p_4_3.6942e8ac5df0ae123dc9.webp",
      "/static/media/p_4_2.ec1589cea34deb8bdcb2.webp",
      "/static/media/p_6_1.22e4f62f60a189375a32.webp",
      "/static/media/p_2_3.0fb12b5563f05f318722.webp",
      "/static/media/p_4_1.812d45773ebc955d130f.webp",
      "/static/media/p_9_2.7e5bedaaf3580adbd419.webp",
      "/static/media/ob_3.e3c3aebff4be3ba96218.webp",
      "/static/media/ob_1.7efcc53d010a93405723.webp",
      "/static/media/ob_2.c93cd76b634e67e7003c.webp",
      "/static/media/ob_4.650077e6c090c7a38715.webp",

      // "/src/images/carousel.webp",
      // "/src/images/logo.webp",
      // "/src/images/ob_1.webp",
      // "/src/images/ob_2.webp",
      // "/src/images/ob_3.webp",
      // "/src/images/ob_4.webp",
      // "/src/images/p_1_1.webp",
      // "/src/images/p_1_2.webp",
      // "/src/images/p_1_3.webp",
      // "/src/images/p_2_1.webp",
      // "/src/images/p_2_2.webp",
      // "/src/images/p_2_3.webp",
      // "/src/images/p_3_1.webp",
      // "/src/images/p_3_2.webp",
      // "/src/images/p_4_1.webp",
      // "/src/images/p_4_2.webp",
      // "/src/images/p_4_3.webp",
      // "/src/images/p_5_1.webp",
      // "/src/images/p_5_2.webp",
      // "/src/images/p_5_3.webp",
      // "/src/images/p_6_1.webp",
      // "/src/images/p_6_2.webp",
      // "/src/images/p_6_3.webp",
      // "/src/images/p_7_1.webp",
      // "/src/images/p_7_2.webp",
      // "/src/images/p_8_1.webp",
      // "/src/images/p_8_2.webp",
      // "/src/images/p_9_1.webp",
      // "/src/images/p_9_2.webp",
    ];

    images.forEach(function (image) {
      let img = new Image();
      img.src = image;

      // const link = document.createElement("link");
      // link.rel = "preload";
      // link.fetchpriority = "high";
      // link.as = "image";
      // link.href = image;
      // link.type = "image/webp";
      // document.head.appendChild(link);
    });
  }, []);

  return (
    <CustomSuspense fallback={<Splash />} maxDuration={3000}>
      <Onboarding />
    </CustomSuspense>
  );
}

export default App;
