"use client";

import { Restaurant, UserFavoriteRestaurants } from "@prisma/client";
import { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { searchForRestaurants } from "../_actions/search";
import Footer from "@/app/_components/footer";

interface RestaurantsProps {
  userFavoriteRestaurants: UserFavoriteRestaurants[];
}

const Restaurants = ({ userFavoriteRestaurants }: RestaurantsProps) => {
  const searchParams = useSearchParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const searchFor = searchParams.get("search");

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!searchFor) return;
      const foundRestaurants = await searchForRestaurants(searchFor);
      setRestaurants(foundRestaurants);
    };

    fetchRestaurants();
  }, [searchFor]);

  if (!searchFor) {
    return notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="min-h-screen">
        <Header />

        <div className="px-5 py-6">
          <h2 className="mb-6 text-lg font-semibold md:text-xl">
            Restaurantes Encontrados
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => (
                <RestaurantItem
                  key={restaurant.id}
                  restaurant={restaurant}
                  className="min-w-full max-w-full"
                  userFavoriteRestaurants={userFavoriteRestaurants}
                />
              ))
            ) : (
              <h3 className=" text-gray-500">Nenhum restaurante encontrado.</h3>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurants;
