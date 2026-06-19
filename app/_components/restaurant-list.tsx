import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";
import { authOptions } from "../_lib/auth";

const RestaurantList = async () => {
  const session = await getServerSession(authOptions);

  const restaurants = await db.restaurant.findMany({ take: 6 });
  const userFavoriteRestaurants = await db.userFavoriteRestaurants.findMany({
    where: { userId: session?.user?.id },
  });
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          userFavoriteRestaurants={userFavoriteRestaurants}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
