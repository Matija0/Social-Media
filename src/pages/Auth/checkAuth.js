import { useEffect, useState } from "react";
import { Token } from "./Token";
import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState();
  const [user, setUserId] = useState();
  const tokenCheck = async () => {
    const token = window.localStorage.getItem("token");
    const data = await Token(token);
    if (!data) {
      setAuth(false);
    } else {
      setAuth(true);

      setUserId(data.roleId);
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [navigate]);

  return {
    auth: auth,
    userId: user,
  };
}
