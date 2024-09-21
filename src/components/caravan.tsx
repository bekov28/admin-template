import { Button, Sheet, Table, Typography } from "@mui/joy";
import { CaravanProps } from "../data";
import ModalCaravan from "./Modal/modalCaravan";

const CaravanComponent = (props: CaravanProps) => {
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
    </div>
  );
};

export default CaravanComponent;
