import React from "react";
import { Chip, useTheme } from "@mui/material";

function SkillChips({ skills }) {
  const theme = useTheme();

  return (
    <>
      {skills.slice(0, 4).map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          sx={{
            margin: "0.2rem",
            backgroundColor: theme.palette.tertiary.lighter,
            color: theme.palette.tertiary.light,
          }}
        />
      ))}
    </>
  );
}

export default SkillChips;
