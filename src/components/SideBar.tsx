import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaravan } from "@fortawesome/free-solid-svg-icons";
import { Navlink } from "./style";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import photo from "../components/assets/berd.jpg";

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: "grid",
            transition: "0.2s ease",
            "& > *": {
              overflow: "hidden",
            },
          },
          open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(227, 239, 251)",
            width: "32px",
            height: "32px",
            padding: "5px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faCaravan} style={{ color: "#006DAB" }} />
        </div>

        <Typography
          level="title-lg"
          sx={{ color: "#006DAB", fontSize: "24px" }}
        >
          Camper
        </Typography>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            marginTop: "20px",
          }}
        >
          <Navlink to={"/motor"}>
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Motor</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Navlink>
          <Navlink to={"/caravan"}>
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Caravan</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Navlink>
          <Navlink to={"/tuning"}>
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Tuning Car</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Navlink>
          <Navlink to={"usedCar"}>
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Used Car</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Navlink>
          <Navlink to={"/camping"}>
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Camping Place</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Navlink>
          <Navlink to={"/carousel"}>
            {" "}
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Carousel</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Navlink>
          <Navlink to={"/settings"}>
            {" "}
            <ListItem sx={{ marginTop: "40px" }}>
              <ListItemButton>
                <SettingsRoundedIcon />
                <Typography level="title-sm"> Settings</Typography>
              </ListItemButton>
            </ListItem>
          </Navlink>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar variant="outlined" size="sm" src={photo} alt="profile-photo" />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Mister Berd</Typography>
          <Typography level="body-xs">berd@gmail.com</Typography>
        </Box>
        <Navlink to="/">
          <IconButton size="sm" variant="plain" color="neutral">
            <LogoutRoundedIcon />
          </IconButton>
        </Navlink>
      </Box>
    </Sheet>
  );
}
