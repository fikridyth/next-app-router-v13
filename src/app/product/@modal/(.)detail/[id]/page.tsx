"use client";

// import Modal from "@/components/core/Modal";
// import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";
import useSWR from "swr";

const Modal = dynamic(() => import('@/components/core/Modal'))

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
  const { params } = props;
  // const product = await getData(
  //   `${process.env.NEXTAUTH_URL}/api/product/?id=` + params.id
  // );

  const { data } = useSWR(`/api/product/?id=${params.id}`, fetcher);
  const product = data?.data ? { data: data.data } : { data: [] };
  return (
    <Modal>
      <Image
        src={product.data?.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
        width={100}
        height={100}
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data?.title}</h3>
        <h3>$ {product.data?.price}</h3>
      </div>
    </Modal>
  );
}
