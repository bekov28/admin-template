import Table from "@mui/joy/Table";
import { DetailStyle } from "../style";
import { campcar } from "../mockdata/motor";
import { useParams } from "react-router-dom";

export default function MotorDetail() {
  const { id } = useParams<{ id: string }>();
  const data = campcar.maindata;

  const filteredData = data.filter(
    (value) => value.id === (id ? parseInt(id) : null)
  );
  console.log(filteredData);

  return (
    <DetailStyle>
      {filteredData.map((value, index) => {
        return (
          <Table borderAxis="both" key={index}>
            <caption style={{ fontSize: "30px", fontWeight: "600" }}>
              {value.car.name}
            </caption>
            <thead>
              <tr>
                <th>Product</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Type</td>
                <td>{value.car.type}</td>
              </tr>
              <tr>
                <td>License</td>
                <td>{value.car.license}</td>
              </tr>
              <tr>
                <td>People</td>
                <td>{value.car.people}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{value.car.date}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>{value.car.company}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{value.car.location}</td>
              </tr>
              <tr>
                <td>Rate</td>
                <td>{value.car.rate}</td>
              </tr>
              <tr>
                <td>Details</td>
                <td>{value.car.word2}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total cost</th>
                <td style={{ fontWeight: "600" }}>{value.car.cost}</td>
              </tr>
            </tfoot>
          </Table>
        );
      })}
    </DetailStyle>
  );
}
