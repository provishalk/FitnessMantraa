import React, { useEffect, useState } from "react";
import MyNavBar from "../MyNavBar";
import axios from "axios";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/feedback/allFeedback")
      .then((response) => {
        setFeedbacks(response.data.data);
      })
      .catch((error) => console.log(error.response));
  }, []);
  return (
    <div>
      <MyNavBar />
      <div className="container">
        <h3 className="mt-5">User Feedbacks</h3>

        {feedbacks.map((feedback) => (
          <div class="card mt-3">
            <div class="card-body p-3">
              <h5 class="card-title">{feedback.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{feedback.email}</h6>
              <p class="card-text">{feedback.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeedback;
