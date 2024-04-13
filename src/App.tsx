import CustomSuspense from "./components/common/CustomSuspense";
import Splash from "./components/splash/Splash";
import Onboarding from "./components/onboarding/Onboarding";

function App() {
  return (
    <CustomSuspense fallback={<Splash />} maxDuration={3000}>
      <Onboarding />
    </CustomSuspense>
  );
}

export default App;
