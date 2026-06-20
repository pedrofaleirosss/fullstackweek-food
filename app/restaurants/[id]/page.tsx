import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import DeliveryDetails from "@/app/_components/delivery-details";
import ProductList from "@/app/_components/product-list";
import CartBanner from "./_components/cart-banner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";

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

  const session = await getServerSession(authOptions);
  const userFavoriteRestaurants = await db.userFavoriteRestaurants.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <div className="mx-auto w-full max-w-7xl pb-2">
      {/* IMAGEM */}
      <RestaurantImage
        restaurant={restaurant}
        userFavoriteRestaurants={userFavoriteRestaurants}
      />

      <div className="relative z-50 -mt-6 flex items-center justify-between rounded-t-3xl bg-white px-5 pt-5 md:px-8 lg:px-10">
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
          <h1 className="text-xl font-semibold md:text-2xl">
            {restaurant.name}
          </h1>
        </div>

        {/* AVALIAÇÃO */}
        <div className="flex items-center gap-2 rounded-full bg-foreground px-2 py-1 text-white">
          <StarIcon size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">5.0</span>
        </div>
      </div>

      {/* DETALHES DA ENTREGA */}
      <div className="px-5 md:px-8 lg:px-10">
        <DeliveryDetails restaurant={restaurant} />
      </div>

      {/* CATEGORIAS */}
      <div className="mt-3 flex gap-4 overflow-x-auto px-5 md:flex-wrap md:overflow-visible md:px-8 lg:px-10 [&::-webkit-scrollbar]:hidden">
        {restaurant.categories.map((category) => (
          <div
            key={category.id}
            className="min-w-[167px] rounded-lg bg-[#F4F4F4] py-1 text-center md:min-w-0 md:px-4 md:py-2"
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
        <h2 className="px-5 font-semibold md:px-8 md:text-lg lg:px-10">
          Mais Pedidos
        </h2>
        <div className="md:px-3 lg:px-5">
          <ProductList products={restaurant.products} />
        </div>
      </div>

      {/* PRODUTOS POR CATEGORIA */}
      {restaurant.categories.map((category) => (
        <div className="mt-6 space-y-4" key={category.id}>
          <h2 className="px-5 font-semibold md:px-8 md:text-lg lg:px-10">
            {category.name}
          </h2>
          <div className="md:px-3 lg:px-5">
            <ProductList products={category.products} />
          </div>
        </div>
      ))}

      <CartBanner restaurant={restaurant} />
    </div>
  );
};

export default RestaurantPage;
