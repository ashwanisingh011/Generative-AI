import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;
    onSent();
    setInput("");
  };

  return (
    <div className="main">
      <div className="nav">
        <p>VIOLA</p>
        <img src={assets.user_icon} alt="" />
      </div>
      {!showResult ? (
        <>
          <div className="greet">
            <p>
              <span>Hello, Ash.</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstrom team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Imporve the readability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </>
      ) : (
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader"></div> /* If loading  is true then it will generate a loading animation or if loading is false it generates the result */
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            )}
          </div>
        </div>
      )}
      <div className="main-container">
        <div className="main-button">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            VIOLA may display inaccurate info, including about people, so
            double-check its responses. Your privacy and VIOLA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
