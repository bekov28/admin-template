import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MotorComponent from "./components/MotorComponent";
import { campcar } from "./components/mockdata/motor";
import { campcarCaravan } from "./components/mockdata/mockdatacaravan";
import CaravanComponent from "./components/caravan";
import TuningComponent from "./components/tuning";
import { campcarTuning } from "./components/mockdata/mockdatatuning";
import UsedCarComponent from "./components/usedCar";
import { campcarUsedCar } from "./components/mockdata/mockdatausedcar";
import CampingComponent from "./components/camping";
import { campcarCampingPlace } from "./components/mockdata/mockdatacamping";
import CarouselComponent from "./components/Carousel";
import LoginComponent from "./components/SignIn/login";
import Settings from "./components/Settings/settings";

export default function JoyOrderDashboardTemplate() {
  const location = useLocation();
  const SidebarContainer = location.pathname === "/";

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        {!SidebarContainer && (
          <div style={{ position: "fixed", zIndex: "10" }}>
            <Sidebar />
          </div>
        )}

        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
            "@media (max-width:900px)": {
              marginLeft: "0px",
            },
          }}
        >
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route
              path="/motor"
              element={<MotorComponent maindata={campcar.maindata} />}
            />
            <Route
              path="/caravan"
              element={<CaravanComponent maindata={campcarCaravan.maindata} />}
            />
            <Route
              path="/tuning"
              element={<TuningComponent maindata={campcarTuning.maindata} />}
            />
            <Route
              path="/usedCar"
              element={<UsedCarComponent maindata={campcarUsedCar.maindata} />}
            />
            <Route
              path="/camping"
              element={
                <CampingComponent maindata={campcarCampingPlace.maindata} />
              }
            />
            <Route path="/carousel" element={<CarouselComponent />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
