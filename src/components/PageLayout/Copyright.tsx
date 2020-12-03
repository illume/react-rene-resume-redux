import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://renesd.blogspot.com/">
        René Dudfield
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
