import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'Test 1',
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
        price: 10.55
    },
    {
        id: 2,
        title: 'Test 2',
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
        price: 50
    },
    {
        id: 3,
        title: 'Test 3',
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
        price: 22.5
    },
    {
        id: 4,
        title: 'Test 4',
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
        price: 35
    }
];
// http://localhost:3000/api/product?id=1

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        // const detailProduct = data.find((item) => item.id === Number(id));
        const detailProduct = await retrieveDataById("products", id);
        if (detailProduct) {
            return NextResponse.json({status: 200, message: "Success", data: detailProduct });
        }
        return NextResponse.json({status: 404, message: "Not Found", data: {} });
    }
    const products = await retrieveData("products");
    return NextResponse.json({status: 200, message: "Success", data: products });
}