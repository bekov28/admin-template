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

export default function ModalCaravan() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div>
        <Button
          variant="outlined"
          color="neutral"
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
        >
          New Caravan
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Add New Caravan Car</DialogTitle>
            <DialogContent>Fill in the new data for Caravan List.</DialogContent>

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
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginTop: "8px" }}>
                  <FormControl>
                    <FormLabel>Caravan Name</FormLabel>
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
                  <FormLabel>Brand</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>People</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Rate</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel> License</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel> Cost</FormLabel>
                  <Input required />
                </FormControl>
                <Button
                  type="submit"
                  sx={{
                    justifySelf: "center",
                    gridColumn: "span 3",
                    width: "32%",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </div>
    </React.Fragment>
  );
}
