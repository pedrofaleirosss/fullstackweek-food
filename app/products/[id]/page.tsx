import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";
import CartBanner from "@/app/_components/cart-banner";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product.restaurantId,
      },
    },
    include: {
      restaurant: true,
    },
  });

  return (
    <>
      <div className="mx-auto w-full max-w-7xl lg:flex lg:min-h-screen">
        {/* IMAGEM DO PRODUTO */}
        <ProductImage product={product} />

        {/* DETALHES DO PRODUTO */}
        <ProductDetails product={product} complementaryProducts={juices} />
      </div>
      <CartBanner restaurant={product.restaurant} />
    </>
  );
};

export default ProductPage;
