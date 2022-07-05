/* ARRAY OF DATA */

const products = [
  {
    id: 1,
    title: "One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: "$1.99",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NEngF8CBZ5tZd5h_GvPq-ZKh6ZHrrTQDPXaejv1TwW05Pkb0dSLxneeBHdL77cs9aTA&usqp=CAU",
    category: "category",
  },
  {
    id: 2,
    title: "Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: "$2.99",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWu_9QYSb1edI3ON8fQLBVV4s0C5RVNA8ibi2vH6ndERqAAyZk65hztl5D0N_0BaCWkI&usqp=CAU",
    category: "category",
  },
  {
    id: 2,
    title: "Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    price: "$3.99",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NEngF8CBZ5tZd5h_GvPq-ZKh6ZHrrTQDPXaejv1TwW05Pkb0dSLxneeBHdL77cs9aTA&usqp=CAU",
    category: "category",
  },
];

/* PROMISES ARE REALLY GREAT WHEN YOU NEED TO DO STH THAT CAN TAKE A WHILE TO COMPLETE
  AND YOU JUST WANT TO DO STH AFTER IT IS COMPLETED INSTEAD OF MAKING EVERYTHING ELSE WAIT 
  FOR IT TO COMPLETE. AND THEN ALSO YOU CAN CATCH IT TO SEE IF IT FAILS.
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
