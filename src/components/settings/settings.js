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

export default function Settings({ handleSetTurns }) {
  const [level, setlevel] = useState("");
  const [turns, setTurns] = useState(0);

  const handleChangeLevel = (event) => {
    setlevel(event.target.value);
    setTurns(
      getTurns(event.target.value !== "custom" ? event.target.value : 0)
    );
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "500px",
    },
  }));

  const handlePlay = () => {
    console.log(level);
    console.log(turns);
  };

  const getTurns = (level) => {
    let value = 0;
    switch (level) {
      case "easy":
        value = Infinity;
        break;
      case "medium":
        value = 100;
        break;
      case "hard":
        value = 50;
        break;
      case "custom":
        value = 0;
        break;
      default:
        value = 0;
    }

    return value;
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <FormControl className={useStyles().formControl} variant="filled">
          <InputLabel id="label-level">Level</InputLabel>
          <Select
            labelId="label-level"
            id="select-level"
            value={level}
            onChange={handleChangeLevel}
          >
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
            <MenuItem value={"custom"}>Custom</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={useStyles().formControl} variant="filled">
          <TextField
            id="turns"
            type="text"
            label="Turns number"
            variant="filled"
            disabled={level !== "custom"}
            value={turns}
            onChange={(event) => setTurns(event.target.value)}
          />
        </FormControl>

        <FormControl className={useStyles().formControl}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<PlayArrowIcon />}
            onClick={handlePlay}
          >
            Start
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
