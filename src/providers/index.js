import { WeddingProvider } from "./wedding";
import { GraduationProvider } from "./graduation";
import { ConfraternizationProvider } from "./confraternization";

function Providers({ children }) {
  return (
    <WeddingProvider>
      <GraduationProvider>
        <ConfraternizationProvider>{children}</ConfraternizationProvider>
      </GraduationProvider>
    </WeddingProvider>
  );
}
export default Providers;
