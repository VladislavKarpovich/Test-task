import { useProducts } from "services/hooks/use-products";

export const ProductsList = () => {
  const { isLoaded, isLoading, groups } = useProducts();

  return (
    <div>
      <h1>List</h1>
      {groups.map((group) => (
        <div key={group.id} data-group-id={group.id}>
          <h2>{group.name}</h2>

          {group.products.map((product) => (
            <div key={product.id} data-product-id={product.id}>
              <h3>{product.name}</h3>
              <p>{product.priceUsd} $</p>
              <p>Всего: {product.amount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
