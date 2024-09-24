import * as React from "react";
import Snackbar from "@mui/joy/Snackbar";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";

export default function SnackbarInvertedColors() {
  const [openFirstSnackbar, setOpenFirstSnackbar] = React.useState(false);
  const [openSecondSnackbar, setOpenSecondSnackbar] = React.useState(false);

  const handleYesClick = () => {
    setOpenFirstSnackbar(false);
    setTimeout(() => {
      setOpenSecondSnackbar(true);
    }, 300);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpenFirstSnackbar(true)}
        sx={{
          width: "32%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#006dab",
            color: "white",
          },
        }}
      >
        Add
      </Button>
      <Snackbar
        autoHideDuration={5000}
        variant="solid"
        color="primary"
        size="lg"
        invertedColors
        open={openFirstSnackbar}
        onClose={() => setOpenFirstSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={(theme) => ({
          background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
          maxWidth: 360,
        })}
      >
        <div>
          <Typography level="title-lg">Hey, Wait!!</Typography>
          <Typography sx={{ mt: 1, mb: 2 }}>
            Are you sure, you want to add this?
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="solid" color="primary" onClick={handleYesClick}>
              Yes, please!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpenFirstSnackbar(false)}
            >
              No, let me check again!
            </Button>
          </Stack>
        </div>
      </Snackbar>
      <Snackbar
        variant="soft"
        color="success"
        open={openSecondSnackbar}
        onClose={() => setOpenSecondSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            onClick={() => setOpenSecondSnackbar(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Dismiss
          </Button>
        }
      >
        Added successfully.
      </Snackbar>
    </React.Fragment>
  );
}
