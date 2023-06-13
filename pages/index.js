
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";

export default function HomePage() {
  return(
    <div>
      <Header/>
      <Featured/>
    </div>
  );
}

export function getServerSideProps() {
  const featuredProductId = "";
  const product = Product.findById(featuredProductId);
}