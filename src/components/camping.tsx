import { Box, Button, Sheet, Table, Typography } from "@mui/joy";
import { CampingProps, UsedCarProps } from "../data";
import ModalCampingPlace from "./Modal/modalCampingPlace";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { StyleCon } from "./style";
import { useEffect, useState } from "react";
import { campcarCampingPlace } from "./mockdata/mockdatacamping";
import { useNavigate } from "react-router-dom";

const CampingComponent = () => {
  const [data, setData] = useState<CampingProps | null>(null);
  useEffect(() => {
    setData(campcarCampingPlace);
  });
  console.log(data);

  const navigate = useNavigate();
  const handleRowClick = (id: string) => {
    navigate(`/camping/${id}`);
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
          Camping Place
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
          Camping Data List
        </Typography>
        <ModalCampingPlace />
      </div>
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <Table aria-labelledby="tableTitle" hoverRow>
          <thead style={{ padding: "20px 0" }}>
            <tr>
              <th className="IdCon">No</th>
              <th>Camping Place Name</th>
              <th>Type</th>
              <th>License</th>
              <th>Site</th>
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
                  <td>{value.camping.name}</td>
                  <td>{value.camping.type}</td>
                  <td className="AlignCon">{value.camping.license}</td>
                  <td className="AlignCon">{value.camping.site}</td>
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

export default CampingComponent;
