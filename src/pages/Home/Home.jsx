import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import { useNavigate, Link } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { AppState } from "../../App";
import axiosBase from "../../axiosConfig";

const Home = () => {
  const { user } = useContext(AppState);
  const [question, setQuestion] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getQuestion() {
      try {
        const { data } = await axiosBase.get("/questions/all-questions", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        // console.log(data)
        setQuestion(data.allquestion); // Assuming data holds the question value
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    }
    getQuestion();
  }, []);

  // console.log(question);
  // console.log(user.username);

  const navigate = useNavigate();
  const handleAnswerClick = () => {
    navigate("/answer"); // Navigates to the "/answer" route
  };

  const handleAskQuestionClick = () => {
    navigate("/questions"); // Navigates to the "/questions" route
  };

  return (
    <>
      <Header />
      <section className=" bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5  ">
          <a
            href="#"
            onClick={handleAskQuestionClick}
            className="btn btn-primary action_btn px-5"
          >
            Ask Question
          </a>
          {/* <button className="btn btn-primary action_btn px-5">
            Ask Question
          </button> */}

          <p className="fw-semibold">
            <span className="text-warning">Welcome, </span>
            {user.username}
          </p>
        </div>

        <div className="container mt-5">
          <h2>Question</h2>

          {question &&
            question.map((item, index) => (
              <Link
                className="text-decoration-none text-black"
                key={index}
                to={`/answer?title=${encodeURIComponent(
                  item.title
                )}&description=${encodeURIComponent(
                  item.description
                )}&questionid=${encodeURIComponent(item.questionid)}`}
              >
                <hr />
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-md-flex align-items-center gap-4">
                    <div className="d-flex flex-column align-items-center gap-3 ">
                
                      <div>
                        <PiUserCircleDuotone size={100} />
                      </div>
                      <div>{item.username}</div>
                    </div>
                    <div>
                  
                      <p>{item.title}</p>
                    </div>
                  </div>

                  <div>
              
                    <FaAngleRight size={30} />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
