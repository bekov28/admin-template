import { Box, Button, IconButton, Sheet, Table, Typography } from "@mui/joy";
import { MotorProps } from "../data";
import ModalComponent from "./Modal/modalMotor";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { iconButtonClasses } from "@mui/joy/IconButton";
import { StyleCon } from "./style";
import { useEffect, useState } from "react";
import { campcar } from "./mockdata/motor";

const MotorComponent = () => {
  const [data, setData] = useState<MotorProps | null>(null);
  useEffect(() => {
    setData(campcar);
  }, []);
  console.log(data);

  return (
    <StyleCon>
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
          Motor
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
          Motor Data List
        </Typography>

        <ModalComponent />
      </div>
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",
          boxShadow: "sm",
          borderRadius: "sm",
          marginRight: "5%",
        }}
      >
        <Table aria-labelledby="tableTitle" hoverRow>
          <thead style={{ padding: "20px 0" }}>
            <tr>
              <th className="IdCon">No</th>
              <th>Motor Name</th>
              <th>Year</th>
              <th>Location</th>
              <th>Brand</th>
              <th>People</th>
              <th className="DataCon">Rate</th>
              <th className="DataCon">Type</th>
              <th className="DataCon">License</th>
              <th className="DataCon">Cost</th>
            </tr>
          </thead>
          <tbody
            style={{
              cursor: "pointer",
            }}
          >
            {data?.maindata.map((value) => {
              return (
                <tr key={value.id}>
                  <td className="IdCon">{value.id}</td>
                  <td>{value.car.name}</td>
                  <td>{value.car.date}</td>
                  <td>{value.car.location}</td>
                  <td>{value.car.company}</td>
                  <td>{value.car.people}</td>
                  <td className="DataCon">{value.car.rate}</td>
                  <td className="DataCon">{value.car.type}</td>
                  <td className="DataCon">{value.car.license}</td>
                  <td className="DataCon AlignCon">{value.car.cost}</td>
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
    </StyleCon>
  );
};

export default MotorComponent;
