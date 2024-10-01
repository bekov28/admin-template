import { Box, Button, IconButton, Sheet, Table, Typography } from "@mui/joy";
import { MotorProps } from "../data";
import ModalComponent from "./Modal/modalMotor";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { iconButtonClasses } from "@mui/joy/IconButton";
import { PaginationCon, SheetCon, StyleCon } from "./style";
import { useEffect, useState } from "react";
import { campcar } from "./mockdata/motor";
import { useNavigate } from "react-router-dom";

const MotorComponent = () => {
  const [data, setData] = useState<MotorProps | null>(null);
  useEffect(() => {
    setData(campcar);
  }, []);
  console.log(data);

  const navigate = useNavigate();
  const handleRowClick = (id: string) => {
    navigate(`/motor/${id}`);
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
      <SheetCon>
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
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleRowClick(value.id.toString())}
                  >
                    <td className="IdCon">{value.id}</td>
                    <td>{value.car.name}</td>
                    <td>{value.car.type}</td>
                    <td>{value.car.license}</td>
                    <td className="AlignCon">{value.car.cost}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Sheet>
      </SheetCon>
      <PaginationCon>
        <Box
          className="Pagination-laptopUp"
          sx={{
            pt: 2,
            gap: 1,
            mt: 1,
            padding: "10px 0px",
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
      </PaginationCon>
    </StyleCon>
  );
};

export default MotorComponent;
