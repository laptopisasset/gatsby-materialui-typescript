import React, { FC } from "react"
import Typography from "@material-ui/core/Typography"
import MuiLink from "@material-ui/core/Link"

export const Copyright: FC = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <MuiLink color="inherit" href="https://material-ui.com/">
      Your Website
    </MuiLink>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
)
