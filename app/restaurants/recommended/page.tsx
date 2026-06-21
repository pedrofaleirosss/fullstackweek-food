import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";

const RecommendedRestaurants = async () => {
  const session = await getServerSession(authOptions);
  const userFavoriteRestaurants = await db.userFavoriteRestaurants.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      restaurant: true,
    },
  });

  const restaurants = await db.restaurant.findMany({});
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />

      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold md:text-xl">
          Restaurantes Recomendados
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              className="min-w-full max-w-full"
              userFavoriteRestaurants={userFavoriteRestaurants}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RecommendedRestaurants;
