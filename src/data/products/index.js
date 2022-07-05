/* ARRAY OF DATA */

const products = [
  {
    id: 1,
    title: "One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: "$1.99",
    pictureUrl: `${process.env.PUBLIC_URL}/assets/1.png`,
    category: "category",
  },
  {
    id: 2,
    title: "Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: "$2.99",
    pictureUrl: `${process.env.PUBLIC_URL}/assets/2.png`,
    category: "category",
  },
  {
    id: 2,
    title: "Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: "$3.99",
    pictureUrl: `${process.env.PUBLIC_URL}/assets/1.png`,
    category: "category",
  },
];

/* PROMISES ARE REALLY GREAT WHEN YOU NEED TO DO STH THAT CAN TAKE A WHILE TO COMPLETE
  AND YOU JUST WANT TO DO STH AFTER IT IS COMPLETED INSTEAD OF MAKING EVERYTHING ELSE WAIT 
  FOR IT TO COMPLETE. AND THEN ALSO YOU CAN CATCH IT TO SEE IF IT FAILS.
  PROMISE HAS 3 STATES – resolved, rejected and pending.
*/

const getData = new Promise((resolve, reject) => {
  let afterPromises = true;
  setTimeout(() => {
    if (afterPromises) {
      resolve(products);
    } else {
      reject("Failed to get data");
    }
  }, 2000);
});

export default getData;
