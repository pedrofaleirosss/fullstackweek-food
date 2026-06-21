import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";
import { redirect } from "next/navigation";
import Header from "../_components/header";
import OrderItem from "./_components/order-item";
import Footer from "../_components/footer";

const MyOrdersPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      restaurant: true,
      products: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="min-h-screen">
        <Header />

        <div className="px-5 py-6">
          <h2 className="pb-6 text-lg font-semibold md:text-xl">
            Meus Pedidos
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {orders.length > 0 ? (
              orders.map((order) => <OrderItem key={order.id} order={order} />)
            ) : (
              <h3 className="text-gray-500">Você não possui pedidos.</h3>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrdersPage;
