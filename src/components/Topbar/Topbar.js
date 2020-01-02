import React from "react"
import styles from "./Topbar.module.css"

const StyledTopbar = ({ children }) => (
  <div className={styles.Topbar}>{children}</div>
)

export default () => {
  return (
    <StyledTopbar>
      <h1>Okay!</h1>
    </StyledTopbar>
  )
}
