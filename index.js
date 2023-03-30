const XLSX = require('xlsx-color');

const data = [  
  {"name":"Ram", "email":"Ram@gmail.com"},  
  {"name":"Bob", "email":"bob32@gmail.com"},
  {"name":"John", "email":"john12@gmail.com"},
  {"name":"Raj", "email":"raj5@gmail.com"},
];

const ws = XLSX.utils.json_to_sheet(data, { header: ["name", "email"], cellStyles: true });

// Color the email column background cells in yellow
ws.B2.s = {
  ...ws.B2.s,
  fill: {
    patternType: "solid",
    fgColor: { rgb: "FFFF00" },
    bgColor: { rgb: "FFFF00" }
  }
};

console.log(JSON.stringify(ws.B2, null, 2));

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "data");

// Write to /tmp/test.xlsx

XLSX.writeFile(wb, '/tmp/test.xlsx', { cellStyles: true });

