import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import SnackbarInvertedColors from "./Snackbar";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { ModalButton } from "../style";

export default function ModalCampingPlace() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div>
        <ModalButton>
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<Add />}
            onClick={() => setOpen(true)}
          >
            New Camping Place
          </Button>
          <Button
            className="FixCon"
            color="primary"
            startDecorator={<DownloadRoundedIcon />}
            size="sm"
          >
            Download PDF
          </Button>
        </ModalButton>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Add New Camping Place</DialogTitle>
            <DialogContent>
              Fill in the new data for Camping Place List.
            </DialogContent>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack
                spacing={1}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: {
                    xs: "0px",
                    sm: "1rem",
                    md: "1rem",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginTop: "8px" }}>
                  <FormControl>
                    <FormLabel>Camping Place Name</FormLabel>
                    <Input autoFocus required />
                  </FormControl>
                </div>

                <FormControl>
                  <FormLabel>Year</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Contact</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>People</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Site</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl   sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                    },
                  }}>
                  <FormLabel>Type</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                    },
                  }}
                >
                  <FormLabel> License</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                    },
                  }}
                >
                  <FormLabel> Cost</FormLabel>
                  <Input required />
                </FormControl>
              </Stack>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SnackbarInvertedColors />
            </div>
          </ModalDialog>
        </Modal>
      </div>
    </React.Fragment>
  );
}
