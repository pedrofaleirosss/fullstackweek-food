import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import DeliveryDetails from "@/app/_components/delivery-details";
import ProductList from "@/app/_components/product-list";
import CartBanner from "./_components/cart-banner";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    include: {
      categories: {
        orderBy: {
          name: "asc",
        },
        include: {
          products: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="pb-2">
      {/* IMAGEM */}
      <RestaurantImage restaurant={restaurant} />

      <div className="relative z-50 mt-[-1.5rem] flex items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-white px-5 pt-5">
        {/* IMAGEM E TÍTULO */}
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-8 w-8">
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold">{restaurant.name}</h1>
        </div>

        {/* AVALIAÇÃO */}
        <div className="flex items-center gap-2 rounded-full bg-foreground px-2 py-1 text-white">
          <StarIcon size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">5.0</span>
        </div>
      </div>

      {/* DETALHES DA ENTREGA */}
      <div className="px-5">
        <DeliveryDetails restaurant={restaurant} />
      </div>

      {/* CATEGORIAS */}
      <div className="mt-3 flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {restaurant.categories.map((category) => (
          <div
            key={category.id}
            className="min-w-[167px] rounded-lg bg-[#F4F4F4] py-1 text-center"
          >
            <span className="text-sm text-muted-foreground">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      {/* MAIS PEDIDOS */}
      <div className="mt-6 space-y-4">
        {/* TODO: mostrar produtos mais pedidos quando implementarmos a realização dos pedidos */}
        <h2 className="px-5 font-semibold">Mais Pedidos</h2>
        <ProductList products={restaurant.products} />
      </div>

      {/* PRODUTOS POR CATEGORIA */}
      {restaurant.categories.map((category) => (
        <div className="mt-6 space-y-4" key={category.id}>
          <h2 className="px-5 font-semibold">{category.name}</h2>
          <ProductList products={category.products} />
        </div>
      ))}

      <CartBanner restaurant={restaurant} />
    </div>
  );
};

export default RestaurantPage;
