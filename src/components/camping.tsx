import { Button, Sheet, Table, Typography } from "@mui/joy";
import { CampingProps, UsedCarProps } from "../data";
import ModalCampingPlace from "./Modal/modalCampingPlace";

const CampingComponent = (props: CampingProps) => {
  return (
    <div>
      <div>
        <Typography
          sx={{
            fontSize: 44,
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
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
              <th>No</th>
              <th>Camping Place Name</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Brand</th>
              <th>People</th>
              <th>Type</th>
              <th>License</th>
              <th>Cost</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {props.maindata.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.camping.name}</td>
                  <td>{value.camping.phone}</td>
                  <td>{value.camping.location}</td>
                  <td>{value.camping.company}</td>
                  <td>{value.camping.people}</td>
                  <td>{value.camping.type}</td>
                  <td>{value.camping.license}</td>
                  <td>{value.camping.cost}</td>
                  <td>{value.camping.site}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default CampingComponent;
