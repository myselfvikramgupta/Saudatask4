import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ data = [], columns = [] }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <TableHeader headers={columns} />
          </thead>
          <tbody>
            <TableBody data={data} />
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
