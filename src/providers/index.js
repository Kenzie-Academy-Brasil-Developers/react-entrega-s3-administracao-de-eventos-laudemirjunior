import { WeddingProvider } from "./wedding";
import { GraduationProvider } from "./graduation";
import { ConfraternizationProvider } from "./confraternization";
import { ProductsProvider } from "./products";

export default function Providers({ children }) {
  return (
    <ProductsProvider>
      <WeddingProvider>
        <GraduationProvider>
          <ConfraternizationProvider>{children}</ConfraternizationProvider>
        </GraduationProvider>
      </WeddingProvider>
    </ProductsProvider>
  );
}
