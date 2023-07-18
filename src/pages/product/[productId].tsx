import { useRouter } from "next/router";

const ProductId = () => {
    const router = useRouter();

    return (
        <p>
            Estas viendo este producto: {router.query.productId}
        </p>
    )
}

export default ProductId;