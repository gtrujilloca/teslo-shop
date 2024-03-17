'use client';

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/interfaces";
import { formatPrice } from "@/lib";
import { useState } from "react";


interface Props {
  product: Product;
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {
  const [ productImage, setProductImage ] = useState(product.images[0]);

  const formatedPrice = formatPrice(product.price);

  return (
    <Link
      className="rounded-md overflow-hidden fade-in"
      href={`/products/${product.slug}`}
    >
      <Image
        className="w-full object-cover transition-all rounded"
        src={`/products/${productImage}`}
        alt={product.title}
        width={500}
        height={500}
        onMouseEnter={() => setProductImage(product.images[1])}
        onMouseLeave={() => setProductImage(product.images[0])}
      />
      <div className="p-4 flex flex-col hover:text-blue-500">
        <p className="text-xs">{product.title}</p>
        <span className="font-bold">{formatedPrice}</span>
      </div>
    </Link>
  );
};