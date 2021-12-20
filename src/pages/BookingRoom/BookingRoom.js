import React from "react";
import TextField from "@mui/material/TextField";

function BookingRoom() {
  return (
    <div>
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
    </div>
  );
}

export default BookingRoom;
