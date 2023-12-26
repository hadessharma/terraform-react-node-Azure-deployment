import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function CreateResources() {
  return (
    <div>
      <h1>Create Resources: </h1>
      <List>
        <Link to="rg" style={{ textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Resource Group" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
