import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const makeStyle = (status, darkMode) => {
  if (status === "Completed") return { background: darkMode ? "rgb(34 197 94 / 30%)" : "rgb(145 254 159 / 47%)", color: "green" };
  if (status === "Rejected") return { background: darkMode ? "rgb(248 113 113 / 40%)" : "#ffadad8f", color: "red" };
  return { background: "orange", color: "white" };
};

const ProjectTable = ({ filter, darkMode }) => {
  const [tab, setTab] = useState("Ongoing");

  useEffect(() => {
    if (filter === "All Projects") setTab("All Projects");
    else if (filter === "Ongoing") setTab("Ongoing");
    else if (filter === "Negotation") setTab("Negotation");
    else if (filter === "Completed") setTab("Completed");
  }, [filter]);

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
    <div className={`w-full h-full rounded-lg shadow flex flex-col p-4 overflow-hidden ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>

      {/* Tabs */}
      <div className={`flex flex-wrap items-center gap-4 p-2 border-b ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-[#27AE60] bg-[#27AE60]/10 text-[#222]"} font-medium cursor-pointer`}>
        {["Ongoing", "Negotation", "Completed"].map((t) => (
          <h3
            key={t}
            onClick={() => setTab(t)}
            className={`cursor-pointer text-sm sm:text-base ${tab === t ? "underline font-bold text-green-500" : ""}`}
          >
            {t}
          </h3>
        ))}
      </div>

      {/* Table Area */}
      <div className="flex-1 mt-3 overflow-y-auto overflow-x-auto max-h-full">
        <TableContainer
          component={Paper}
          className="shadow-none"
          style={{ width: "100%", overflowX: "auto", background: darkMode ? "#1F2937" : "white" }}
        >
          <Table stickyHeader aria-label="project table">

           <TableHead>
            <TableRow>
              {["Project","Project Id","Date","Progress","Amount","Service","Status"].map((title) => (
                <TableCell
                  key={title}
                  sx={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: darkMode ? "#f3f4f6" : "#222222",
                     backgroundColor: darkMode ? "#1F2937" : "#F3F4F6",
                    whiteSpace: "nowrap"
                  }}
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow
                  key={row.project}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: darkMode
                      ? index % 2 === 0 ? "#374151" : "#1F2937"
                      : index % 2 === 0 ? "#F9FAFC" : "white"
                  }}
                >

                  <TableCell component="th" scope="row">{row.project}</TableCell>
                  <TableCell>{row.projectId}</TableCell>
                  <TableCell>{row.date}</TableCell>

                  <TableCell>
                    <div className="flex items-center space-x-2 whitespace-nowrap">
                      <div className={`w-20 sm:w-15 h-2 sm:h-3 rounded-full overflow-hidden ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}>
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${row.progress < 20 ? "bg-red-500" : row.progress < 40 ? "bg-green-400" : row.progress < 70 ? "bg-yellow-400" : "bg-green-500"}`}
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold">{row.progress}%</span>
                    </div>
                  </TableCell>

                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.servicetype}</TableCell>

                  <TableCell>
                    <span
                      className="status px-2 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap"
                      style={makeStyle(row.status, darkMode)}
                    >
                      {row.status}
                    </span>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>

      </div>
    </div>
  );
};

export default ProjectTable;









