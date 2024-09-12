// import { Link } from "react-router-dom";
// import "./itemList.css";

// function ItemListContainer({ product, error, ready, productsLimits }) {
//   /* if (ready) {
//     console.log(product.payload);
//   } */
//   console.log("ITEM", ready);
//   if (error) {
//     console.error(error);
//     return <h3>Problemas al traer los productos</h3>;
//   }
//   const renderCardsNumbers = () => {
//     const cardsNumbers = [];
//     for (let i = 1; i <= productsLimits; i++) {
//       cardsNumbers.push(
//         <div
//           key={i}
//           className="card"
//           aria-hidden="true"
//           style={{ width: "18rem" }}
//         >
//           <div className="spinner-border m-5" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//           <div className="card-body">
//             <h5 className="card-title placeholder-glow">
//               <span className="placeholder col-6"></span>
//             </h5>
//             <p className="card-text placeholder-glow">
//               <span className="placeholder col-7"></span>
//               <span className="placeholder col-4"></span>
//               <span className="placeholder col-4"></span>
//               <span className="placeholder col-6"></span>
//               <span className="placeholder col-8"></span>
//             </p>
//           </div>
//         </div>,
//       );
//     }
//     return cardsNumbers;
//   };

//   return (
//     <div className="d-flex flex-wrap container justify-content-center gap-3 my-4">
//       {!ready && renderCardsNumbers}
//       {ready &&
//         product.map((prod) => (
//           <div
//             key={prod.code}
//             className="card d-flex"
//             style={{ width: "18rem" }}
//           >
//             <Link to={`/product/${prod.id}`}>
//               <img
//                 src={prod.thumbnail[0]}
//                 className="card-img-top p-3 rounded-5"
//                 style={{ height: "240px" }}
//                 alt="..."
//               />
//             </Link>
//             <div className="card-body text-center">
//               <Link to={`/product/${prod.id}`} className="card-title text-card">
//                 {prod.title}
//               </Link>
//               <p style={{ fontWeight: "bold", color: "#cc486b" }}>
//                 ${prod.price}
//               </p>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default ItemListContainer;
