import { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./settings.css";

export default function Settings() {
  const [level, setlevel] = useState("");

  const handleChange = (event) => {
    setlevel(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "500px",
    },
  }));

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <FormControl className={useStyles().formControl} variant="filled">
          <InputLabel id="label-level">Level</InputLabel>
          <Select
            labelId="label-level"
            id="select-level"
            value={level}
            onChange={handleChange}
          >
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={useStyles().formControl} variant="filled">
          <TextField
            id="turns"
            type="number"
            label="Turns number"
            variant="filled"
          />
        </FormControl>
        <FormControl className={useStyles().formControl}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<PlayArrowIcon />}
          >
            Start
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
