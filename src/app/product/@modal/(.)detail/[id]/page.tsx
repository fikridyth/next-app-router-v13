// import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import('@/components/core/Modal'))

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <Modal>
      <Image
        src={product.data.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
        width={500}
        height={500}
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data.title}</h3>
        <h3>$ {product.data.price}</h3>
      </div>
    </Modal>
  );
}
