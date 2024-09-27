import { Box, Button, Sheet, Table, Typography } from "@mui/joy";
import { CaravanProps } from "../data";
import ModalCaravan from "./Modal/modalCaravan";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { StyleCon } from "./style";
import { useEffect, useState } from "react";
import { campcarCaravan } from "./mockdata/mockdatacaravan";
import { useNavigate } from "react-router-dom";

const CaravanComponent = () => {
  const [data, setData] = useState<CaravanProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(campcarCaravan);
  }, []);

  console.log(data);

  const handleRowClick = (id: string) => {
    navigate(`/caravan/${id}`);
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
          Caravan
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
          Caravan Data List
        </Typography>
        <ModalCaravan />
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
          <tbody>
            {data?.maindata.map((value) => {
              return (
                <tr
                  key={value.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(value.id.toString())}
                >
                  <td className="IdCon">{value.id}</td>
                  <td>{value.car.name}</td>
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

export default CaravanComponent;
