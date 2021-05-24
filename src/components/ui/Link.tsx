import React from "react"
import { Link as MuiLink, LinkProps } from "@material-ui/core"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"

const Link = React.forwardRef<any, GatsbyLinkProps<any> & LinkProps>(
  (props, ref) => {
    return <MuiLink component={GatsbyLink} {...props} ref={ref} />
  }
)

export default Link
