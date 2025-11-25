import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Sample data
function createData(project, projectId, date, progress, amount, servicetype, status) {
  return { project, projectId, date, progress, amount, servicetype, status };
}

const rows = [
  createData("New Work Les Do", 232323, "12/12/2023", 33, "$45454,888", "Navy", "Completed"),
  createData("You Can Change the text and all", 232323, "12/12/2023", 55, "$45454,888", "Navy", "Completed"),
  createData("Landing Page Design1", 232323, "12/12/2023", 12, "$45454,888", "Navy", "In.Progress"),
  createData("Landing Page Design2", 232323, "12/12/2023", 24, "$45454,888", "Navy", "Completed"),
  createData("Landing Page Design3", 232323, "12/12/2023", 12, "$45454,888", "Navy", "Rejected"),
];

// Status color styles
const makeStyle = (status) => {
  if (status === "Completed") return { background: "rgb(145 254 159 / 47%)", color: "green" };
  if (status === "Rejected") return { background: "#ffadad8f", color: "red" };
  return { background: "orange", color: "white" };
};

const ProjectTable = ({ filter }) => {
  // Local tab state
  const [tab, setTab] = useState("Ongoing");

 
  useEffect(() => {
    if (filter === "All Projects") setTab("All Projects");
    else if (filter === "Ongoing") setTab("Ongoing");
    else if (filter === "Negotation") setTab("Negotation");
    else if (filter === "Completed") setTab("Completed");
  }, [filter]);

  // Filter rows based on active tab
  const filteredRows =
    tab && tab !== ""
      ? rows.filter((row) => {
          if (tab === "Ongoing") return row.status === "In.Progress";
          if (tab === "Negotation") return row.status === "Rejected";
          if (tab === "Completed") return row.status === "Completed";
          return true;
        })
      : rows;

  return (
    <div className="Table">
      {/* Tabs */}
      <div className="bg-[#27AE60]/10 flex items-center gap-6 p-2 border-b border-[#27AE60] text-[#222222] font-medium cursor-pointer">
        {["Ongoing", "Negotation", "Completed"].map((t) => (
          <h3
            key={t}
            onClick={() => setTab(t)}
            className={`cursor-pointer ${tab === t ? "underline font-bold text-[#27AE60]" : ""}`}
          >
            {t}
          </h3>
        ))}
      </div>

      {/* Table */}
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ "& .MuiTableCell-root": { fontWeight: "bold", fontSize: "14px", color: "#222222" } }}>
              <TableCell >Project</TableCell>
              <TableCell align="left" >Project Id</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Progress</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Service</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "& .MuiTableCell-root": { fontSize: "14px", color: "#222222" } }}>
            {filteredRows.map((row) => (
              <TableRow key={row.project} sx={{ "&:last-child td, &:last-child th": { border: 0 },
               }}>
                <TableCell component="th" scope="row" sx={{ py: 2.5 }}>{row.project}</TableCell>
                <TableCell align="left">{row.projectId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <div className="flex items-center space-x-2">
                    <div className="w-15 bg-gray-200 h-3 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          row.progress < 50
                            ? "bg-red-500"
                            : row.progress < 80
                            ? "bg-yellow-400"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold">{row.progress}%</span>
                  </div>
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.servicetype}</TableCell>
                <TableCell align="left">
                  <span className="status p-2 rounded-full" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectTable;

