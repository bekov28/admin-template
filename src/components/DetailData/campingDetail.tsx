import Table from "@mui/joy/Table";
import { DetailStyle } from "../style";
import { useParams } from "react-router-dom";
import { campcarCampingPlace } from "../mockdata/mockdatacamping";



export default function CampingDetail() {
  const { id } = useParams<{ id: string }>();
  const data = campcarCampingPlace.maindata;

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
              {value.camping.name}
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
                <td>{value.camping.type}</td>
              </tr>
              <tr>
                <td>License</td>
                <td>{value.camping.license}</td>
              </tr>
              <tr>
                <td>People</td>
                <td>{value.camping.people}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{value.camping.phone}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>{value.camping.company}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{value.camping.location}</td>
              </tr>
              <tr>
                <td>Open</td>
                <td>{value.camping.open}</td>
              </tr>
              <tr>
                <td>Close</td>
                <td>{value.camping.close}</td>
              </tr>
              <tr>
                <td>Site</td>
                <td>{value.camping.site}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total cost</th>
                <td style={{ fontWeight: "600" }}>{value.camping.cost}</td>
              </tr>
            </tfoot>
          </Table>
        );
      })}
    </DetailStyle>
  );
}
