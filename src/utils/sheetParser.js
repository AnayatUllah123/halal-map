export const sheetParser = (csvText) => {
  const rows = csvText
    .split("\n")
    .map((row) => row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g));

  const headers = rows[0].map((h) => h.replace(/"/g, "").trim());

  return rows.slice(1).map((row) => {
    const obj = {};

    row.forEach((val, i) => {
      obj[headers[i]] = val.replace(/"/g, "").trim();
    });

    return obj;
  });
};
