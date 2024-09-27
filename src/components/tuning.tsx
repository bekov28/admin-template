import { Box, Button, Sheet, Table, Typography } from "@mui/joy";
import { TuningProps } from "../data";
import ModalTuning from "./Modal/modalTuning";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { StyleCon } from "./style";
import { useEffect, useState } from "react";
import { campcarTuning } from "./mockdata/mockdatatuning";
import { useNavigate } from "react-router-dom";

const TuningComponent = () => {
  const [data, setData] = useState<TuningProps | null>(null);
  useEffect(() => {
    setData(campcarTuning);
  }, []);
  console.log(data);

  const navigate = useNavigate();
  const handleRowClick = (id: string) => {
    navigate(`/tuning/${id}`);
  };

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
              <th className="IdCon">No</th>
              <th>Caravan Name</th>
              <th className="DataCon">Type</th>
              <th className="DataCon">License</th>
              <th className="DataCon">Cost</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {data?.maindata.map((value) => {
              return (
                <tr
                  key={value.id}
                  onClick={() => handleRowClick(value.id.toString())}
                >
                  <td className="IdCon">{value.id}</td>
                  <td>{value.car.name}</td>
                  <td>{value.car.type}</td>
                  <td>{value.car.license}</td>
                  <td className="AlignCon"> {value.car.cost}</td>
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

export default TuningComponent;
