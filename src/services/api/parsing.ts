import { Group } from "models/Group";
import { Product } from "models/Product";
import { ProductDto } from "models/ProductDto";

export const parseData = ({ data, names }) => {
  const products: ProductDto[] = data.Value.Goods.map((item) => ({
    groupId: item.G,
    groupName: names[item.G].G,
    productId: item.T,
    productName: names[item.G].B[item.T].N,
    price: item.C,
    amount: item.P,
  }));

  const groupsDict: { [key: string]: Group } = products.reduce((acc, item) => {
    const product: Product = {
      id: item.productId,
      name: item.productName,
      priceUsd: item.price,
      amount: item.amount,
    };

    const group: Group = acc[item.groupId];

    if (group) {
      group.products.push(product);
    } else {
      const group: Group = {
        id: item.groupId,
        name: item.groupName,
        products: [product],
      };

      acc[item.groupId] = group;
    }

    return acc;
  }, {});

  return Object.values(groupsDict);
};
