import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";
import { notFound } from "next/navigation";
import Header from "../_components/header";
import RestaurantItem from "../_components/restaurant-item";

const MyFavoriteRestaurants = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }

  const userFavoriteRestaurants = await db.userFavoriteRestaurants.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      restaurant: true,
    },
  });

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />

      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold md:text-xl">
          Restaurantes Favoritos
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userFavoriteRestaurants.length > 0 ? (
            userFavoriteRestaurants.map(({ restaurant }) => (
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
                className="min-w-full max-w-full"
                userFavoriteRestaurants={userFavoriteRestaurants}
              />
            ))
          ) : (
            <h3 className="font-medium">Nenhum restaurante favoritado.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteRestaurants;
