import { Typography } from "@mui/joy";
import {
  AlignCon,
  CreateBtn,
  IconCon,
  InputCon,
  KeepMeCon,
  MainCon,
  MainMainCon,
  OrCon,
  SingInBtn,
} from "./style";

import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  return (
    <>
      <MainMainCon>
        <MainCon>
          <Typography
            level="title-lg"
            sx={{
              color: "#006DAB !important",
              fontSize: "32px !important",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Camper
          </Typography>
          <h2>Sign in</h2>
          <form>
            <InputCon>
              <p>Email</p>
              <input type="text" placeholder="Your email" required />
              <p>Password</p>
              <input type="text" placeholder="Your password" required />
            </InputCon>
            <KeepMeCon>
              <AlignCon>
                {" "}
                <input type="checkbox" />
                <p>Keep me logged in</p>
              </AlignCon>
              <a href="#">Forget your password ?</a>
            </KeepMeCon>
            <NavLink to={"/motor"}>
              <SingInBtn type="submit">SIGN IN</SingInBtn>
            </NavLink>
          </form>
        </MainCon>
      </MainMainCon>
    </>
  );
};

export default LoginComponent;
