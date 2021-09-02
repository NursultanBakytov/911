import React, { useState, useEffect } from "react"
import Service from "./services"

const Component = () => {
  const [user, setUser] = useState({
    "username":"",
    "password":""
  })
  const [token, setToken] = useState({
    "accessToken":"",
    "refreshToken":""
  })

  useEffect(() => {
    checkUser()
    checkToken()
  }, [])

  const checkUser = () => {
    Service.login(user)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const checkToken = () => {
    Service.getToken(token)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      });
  };

  return (
    <></>
  );
};

export default Component