
import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {

  const [sortedArticles, setSortedArticles] = useState(articles);
  const [sortBy, setSortBy] = useState("upvotes"); // Default sorting by upvotes
  useEffect(() => {
    // Sort articles by upvotes in descending order by default
    const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(sorted);
  }, [articles]);
  // Function to handle sorting by upvotes
  const handleSortByUpvotes = () => {
    const sorted = [...sortedArticles].sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(sorted);
    setSortBy("upvotes");
  };
  const handleSortByUpvote = () => {
    const sorted = [...sortedArticles].sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(sorted);
    setSortBy("upvotes")
  };

  // Function to handle sorting by date
  const handleSortByDate = () => {
    const sorted = [...sortedArticles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedArticles(sorted);
    setSortBy("date");
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className={`small ${sortBy === "upvotes" ? "active" : ""}`}
          onClick={handleSortByUpvotes}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className={`small ${sortBy === "date" ? "active" : ""}`}
          onClick={handleSortByDate}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;
