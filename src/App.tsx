import { Button, Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import "./App.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    document.addEventListener("keydown", keyDown);

    function keyDown(event: KeyboardEvent) {
      if (event.key === "ArrowUp") {
        add();
      } else if (event.key === "ArrowDown") {
        minus();
      }
    }

    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  function formatNumber(number: number, decimalPlaces = 0): string {
    return number.toLocaleString(navigator.language, {
      maximumFractionDigits: decimalPlaces,
    });
  }

  function minus() {
    setCounter((prev) => {
      return prev - 1;
    });
  }

  function add() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className="App h100">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="h100"
      >
        <Grid item xs={12} className="ta-center">
          <div className="d-inline-block glass-card">
            <div>
              <Typography variant="h1">
                <IconButton
                  aria-label="minus"
                  onClick={minus}
                  size="large"
                  color="primary"
                >
                  <RemoveIcon fontSize="inherit" />
                </IconButton>
                {formatNumber(counter)}
                <IconButton
                  aria-label="add"
                  onClick={add}
                  size="large"
                  color="secondary"
                >
                  <AddIcon fontSize="inherit" />
                </IconButton>
              </Typography>
            </div>
            <div>
              <Button onClick={() => setCounter(0)} size="large">
                Reset
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
