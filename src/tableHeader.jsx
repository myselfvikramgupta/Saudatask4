const TableHeader = ({ headers = [] }) => {
  return (
    <>
      <tr className="bg-dark  text-light">
        {headers.length > 0
          ? headers.map((head, i) => {
              return <th key={i}>{head.title}</th>;
            })
          : null}
      </tr>
    </>
  );
};
export default TableHeader;
