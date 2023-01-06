import React from "react";
import "../../assets/css/post.css";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="list-group mb-4">
      {posts.map((post) => (
        <div key={post.id} className="list-group-item" class="table-responsive">
          <table class="table table-bordered border-dark  ">
            <thead>
              <tr class="table-primary">
                <th>products</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="table-success">
                  <img src={post.thumbnail} alt="products" />{" "}
                </td>
                <b>Product Name :</b>
                {post.title}
                <br />
                <b>Description :</b>
                {post.description}
                <br />
                <b>Price :</b>
                {post.price}
                <br />
                <b>Discount :</b>
                {post.discountPercentage}
                <br />
                <b>Rating :</b>
                {post.rating}
                <br />
                <b>Stock :</b>
                {post.stock}
                <br />
                <b>Category :</b>
                {post.category}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Posts;

//     <div class="container text-center">
//       <div>
//         {post.map((post) => {
//           return (
//             <div
//               class="table-responsive"
//               key={post.id}
//               className="list-group-item"
//             >
//               <table class="table table-bordered border-dark">
//                 <thead>
//                   <tr class="table-primary">
//                     <th>products</th>
//                     <th>Product Name</th>
//                     <th>Description</th>
//                     <th>Price</th>
//                     <th>Discount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td class="table-success">
//                       {" "}
//                       <img src={post.thumbnail} alt="products" />
//                     </td>
//                     <td class="table-danger"> {post.title}</td>
//                     <td class="table-info">{post.description}</td>
//                     <td class="table-warning">{post.price}</td>
//                     <td class="table-active">{post.discountPercentage}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   }
// };

// export default Posts;
