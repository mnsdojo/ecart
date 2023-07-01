import { ProductCardType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast";
const ProductCard = ({
  product,
  index,
}: {
  product: ProductCardType;
  index: number;
}) => {
  const { addItem } = useShoppingCart();
  const addToCart = (e: any) => {
    e.preventDefault();
    const id = toast.loading("Adding 1 item...");
    addItem(product as any);
    toast.success(`${product.name} added`, { id });
  };
  return (
    <>
      <Link
        href={`/products/${product.id}`}
        className="border-2 rounded-md group overflow-hidden"
      >
        <div className="relative w-full h-64">
          <Image
            fill
            sizes="100%"
            src={product.image}
            alt={product.name}
            priority={index === 0}
          />
        </div>
        <div className="p-6 bg-white">
          <p className="font-semibold text-lg">{product.name}</p>
          <Rating stars={4} />
          <div className="mt-4 flex items-center justify-between space-x-2">
            <div>
              <p className="text-gray-500">Price</p>
              <p className="text-lg">
                {formatCurrencyString({
                  currency: product.currency,
                  value: Number(product.price),
                })}
              </p>
            </div>
            <button onClick={addToCart} className="border rounded-lg py-1 px-4">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
