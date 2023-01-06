import React, { useState, useEffect } from "react";
import Posts from "../posts";
import Pagination from "../pagination";

import axios from "axios";
import "../../assets/css/table.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("json/Data.json");
      setPosts(res.data.products);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts, "curr");

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  return (
    <div className="container ">
      <div>
        <h1 className="text-primary text-center ">PRODUCTS</h1>

        <div id="pagination" className="container">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
        <Posts posts={currentPosts} loading={loading} />
      </div>
    </div>
  );
};

export default App;
