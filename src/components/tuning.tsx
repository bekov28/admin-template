import { Box, Button, Sheet, Table, Typography } from "@mui/joy";
import { TuningProps } from "../data";
import ModalTuning from "./Modal/modalTuning";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const TuningComponent = (props: TuningProps) => {
  return (
    <div>
      <div>
        <Typography
          sx={{
            fontSize: 50,
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            color: "#006DAB",
          }}
        >
          Tuning Car
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          Tuning Data List
        </Typography>
        <ModalTuning />
      </div>
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <Table aria-labelledby="tableTitle" hoverRow>
          <thead style={{ padding: "20px 0" }}>
            <tr>
              <th>No</th>
              <th>Caravan Name</th>
              <th>Year</th>
              <th>Location</th>
              <th>Brand</th>
              <th>People</th>
              <th>Rate</th>
              <th>Type</th>
              <th>License</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {props.maindata.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.car.name}</td>
                  <td>{value.car.date}</td>
                  <td>{value.car.location}</td>
                  <td>{value.car.company}</td>
                  <td>{value.car.people}</td>
                  <td>{value.car.rate}</td>
                  <td>{value.car.type}</td>
                  <td>{value.car.license}</td>
                  <td>{value.car.cost}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          marginBottom: "20px",
          marginTop: "10px",
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? "outlined" : "plain"}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default TuningComponent;
