import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BasicTable from "./BasicTable";

export default function ButtonAppBar() {
  const [resourceType, setResourceType] = useState("all");

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              KONTESTS
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button color="inherit" onClick={() => setResourceType("all")}>
              All
            </Button>
            <Button
              color="inherit"
              onClick={() => setResourceType("hacker_rank")}
            >
              HackerRank
            </Button>
            <Button
              color="inherit"
              onClick={() => setResourceType("leet_code")}
            >
              LeetCode
            </Button>
            <Button
              color="inherit"
              onClick={() => setResourceType("top_coder")}
            >
              TopCoder
            </Button>
            <Button color="inherit" onClick={() => setResourceType("at_coder")}>
              AtCoder
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <BasicTable value={resourceType}></BasicTable>
    </div>
  );
}
