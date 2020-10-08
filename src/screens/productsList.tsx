import { useEffect } from "react";
import { getData } from "services/api";

const getDataTmp = async () => {
  const result = await getData();
  console.log(result);
}

export const ProductsList = () => {
  useEffect(() => {
    getDataTmp();
  }, []);

  return (
    <div>
      <h1>List</h1>
    </div>
  );
};
