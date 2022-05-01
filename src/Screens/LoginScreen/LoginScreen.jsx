import React, { useState } from "react";
import { SignupScreen } from "../../Screens";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix background"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>
              Unlimited movies, TV
              <br /> shows, and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input ">
              <form>
                <input type="email" placeholder="Email address" />
                <button className="loginScreen__getStarted">
                  <span onClick={() => setSignIn(true)}>Get Started</span>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      {/* <section>
        <h1>Enjoy on your TV.</h1>
        <h2>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h2>
        <img
          src="https://9to5mac.com/2015/06/15/netflix-redesigned-homepage/jaw_en/"
          alt=""
        />
      </section>
      <section>
        <h1>Download your shows to watch offline.</h1>
        <h2>Save your favorites easily and alwys have something to watch.</h2>
        <img src="" alt="" />
      </section>
      <section>
        <h1>Watch everywhere.</h1>
        <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
          <img src="" alt="" />
        </h2>
      </section>
      <section>
        <h1>Create profiles for kids.</h1>
        <h2>
          send kids on adventures with their favorite characters in a space made
          just for them - free with your membership.
        </h2>
        <img src="" alt="" />
      </section> */}
    </div>
  );
};

export default LoginScreen;
