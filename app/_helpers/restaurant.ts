import { UserFavoriteRestaurants } from "@prisma/client";

export const isRestaurantFavorited = (
  restaurantId: string,
  userFavoriteRestaurants: UserFavoriteRestaurants[],
) => {
  return userFavoriteRestaurants?.some(
    (fav) => fav.restaurantId === restaurantId,
  );
};
