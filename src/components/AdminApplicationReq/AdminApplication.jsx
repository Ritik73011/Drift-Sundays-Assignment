import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../../config/config";
import jspdf from "jspdf";
import "jspdf-autotable";
const AdminApplication = () => {
  const starCountRef = ref(database, "applications/");
  const [data, setData] = useState({
    1010:{
      name:"No Data Found"
    }
  });

  let style = {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  };

  const handleClick = () => {
    //PDF
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";
    const marginLeft = 40;
    const doc = new jspdf(orientation, unit, size);
    doc.setFontSize(15);
    const title = "All Application Report";
    const headers = [["ID", "NAME", "NUMBER", "EMAIL"]];
    const datas = Object.keys(data).map((elt, idx) => [
      idx + 1,
      data[elt].name,
      data[elt].number,
      data[elt].email,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: datas,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("applications-reports.pdf");
  };
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if(data){
        setData(data);
      }
    });
  }, []);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <table
          style={{
            borderCollapse: "collapse",
            maxWidth: "500px",
            width: "100%",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={style}>ID</th>
              <th style={style}>NAME</th>
              <th style={style}>NUMBER</th>
              <th style={style}>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).length > 0 ? (
              Object.keys(data).map((ele, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td style={style}>{idx + 1}</td>
                    <td style={style}>{data[ele].name}</td>
                    <td style={style}>{data[ele].number}</td>
                    <td style={style}>{data[ele].email===""?"No Email Available":data[ele].email}</td>
                  </tr>
                );
              })
            ) : (
              <tr><td>No Request Found</td></tr>
            )}
          </tbody>
        </table>
      </Box>
      <Button
        onClick={handleClick}
        sx={{
          width: "100%",
          maxWidth: "320px",
          background: "aqua",
          color: "black",
          padding: "16px",
          fontWeight: "bolder",
          ":hover": { background: "green" },
          display: "block",
          margin: "auto",
          marginTop: "32px",
        }}
      >
        download in pdf
      </Button>
    </Box>
  );
};

export default AdminApplication;
