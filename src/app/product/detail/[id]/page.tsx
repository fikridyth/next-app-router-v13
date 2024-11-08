"use client";

// import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
  const { params } = props;
  // const product = await getData(
  //   `${process.env.NEXTAUTH_URL}/api/product/?id=` + params.id
  // );
  const { data } = useSWR(`/api/product/?id=${params.id}`, fetcher);
  const product = data?.data ? { data: data.data } : { data: [] };

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          src={product.data?.image}
          alt="product"
          width={100}
          height={100}
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{product.data?.title}</h3>
          <h3>$ {product.data?.price}</h3>
          <Link href={`/product`}>Back</Link>
        </div>
      </div>
    </div>
  );
}
