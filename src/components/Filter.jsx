const Filter = ({ cuisine, setCuisine, cuisines }) => {
  return (
    <select
      value={cuisine}
      onChange={(e) => setCuisine(e.target.value)}
      className="p-2 border"
    >
      <option value="">All</option>
      {cuisines.map((c, i) => (
        <option key={i} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default Filter;