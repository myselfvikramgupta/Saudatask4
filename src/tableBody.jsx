const TableBody = ({ data = [] }) => {
  return (
    <>
      {data.length > 0
        ? data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.Type || "N/A"}</td>
                <td>{d.Status || "N/A"}</td>
                <td>{d.Buyer || "N/A"}</td>
                <td>{d.Type || "N/A"}</td>
                <td>{d.Broker || "N/A"}</td>
                <td>{d.Variety || "N/A"}</td>
                <td>{d.Station || "N/A"}</td>
                <td>{d.Delivery_By || "N/A"}</td>
                <td>{d.Quantity || "N/A"}</td>
                <td>{d.Quantity_Unit || "N/A"}</td>
                <td>{d.Confirmation_ID || "N/A"}</td>
                <td>{d.Original_Price || "N/A"}</td>
                <td>{d.Accepted_Price || "N/A"}</td>
                <td>{d.Price_Unit || "N/A"}</td>
                <td>{d.Created_At || "N/A"}</td>
                <td>{d.Confirmed_At || "N/A"}</td>
                <td>{d.Staple || "N/A"}</td>
                <td>{d.Strength || "N/A"}</td>
                <td>{d.Trash || "N/A"}</td>
                <td>{d.Moisture || "N/A"}</td>
                <td>{d.Mic_Minimum || "N/A"}</td>
                <td>{d.Mic_Maximum || "N/A"}</td>
                <td>{d.Remarks || "N/A"}</td>
                <td>{d.Dhara || "N/A"}</td>
              </tr>
            );
          })
        : null}
    </>
  );
};
export default TableBody;
