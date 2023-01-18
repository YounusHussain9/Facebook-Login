import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Initial_State = [
  {
    userId: "",
    name: "",
    email: "",
    picture: "",
  },
];

const Facebook = () => {
//declare states
    const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(Initial_State);

  //fb variable
  let facebookContent;

  //responding function
  const responseFacebook = (response) => {
    const { name, email, picture } = response;
    setIsLogin(true);
    setUserData({
      name: name,
      email: email,
      picture: picture.data.url,
    });
  };

  //data condition flow
  if (!isLogin) {
    facebookContent = (
      <FacebookLogin
        appId="864274964820963"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    );
  }

  return (
    <>

    {/* data conditio flow */}
      {isLogin === true ? (
        <div>
          {
            (facebookContent = (
              <div
                style={{
                  width: "400px",
                  margin: "auto",
                  marginTop: "10rem",
                  backgroundColor: "#f4f4f4",
                  padding: "3rem",
                }}
              >
                <img src={userData.picture} alt={userData.name} />
                <h3>{userData.name}</h3>
                <>{userData.email}</>
              </div>
            ))
          }
        </div>
      ) : (
        <>{facebookContent}</>
      )}
    </>
  );
};

export default Facebook;
