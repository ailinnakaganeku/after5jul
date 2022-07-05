import React, { useEffect, useState } from "react";
import "./styles.css";
import getData from "../../data/products";
import ItemList from "../ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("products: ", products);

  /* CHOOSE ONE OF THEM: PROMISES OR ASYNC AWAIT */

  /* PROMISES WITH THEN CATCH AND FINALLY 
    THEN IS GOING TO BE CALLED WHEN OUR PROMISE IS RESOLVED
    CATCH IS USED TO HANDLE ERRORS
    FINALLY IS USED TO HANDLE THE END OF THE PROMISE REGARDLESS OF THE STATE OF THE PROMISE. */

  useEffect(() => {
    console.log("WITH THEN CATCH AND FINALLY");
    getData
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* WITH ASYNC/AWAIT TRY CATCH FINALLY
    ASYNC/AWAIT IS A SYNTACTIC SUGAR FOR PROMISES.
    ASYNCHRONOUS CODE IS USED TO EXECUTE STH (ASYNC)
    IN THE BACKGROUND SO THAT IT DOESN'T BLOCK THE EXECUTION OF THE REST OF THE CODE.
    IT IS GOING TO EXECUTE THAT ASYNC CODE AND THE REST OF THE CODE (NOT ASYNC CODE) AT THE SAME TIME.
    SO YOU MAY HAVE MULTIPLE DIFFERENT THREADS RUNNING YOUR CODE.
   */

  useEffect(() => {
    console.log("WITH ASYNC/AWAIT TRY CATCH FINALLY");
    const getProducts = async () => {
      try {
        const response = await getData;
        setProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="greeting">{greeting}</h1>
      {loading ? <span>Loading...</span> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
