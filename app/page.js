"use client"
import { Button, Grid, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Data from "./Data"
import Cultting from "./Cultting";




export default function Home() {
  const [anchorEl, setEnchorEl] = useState()
  const [menuData, setMenuData] = useState([])
  const [componentRender, setComponentRender] = useState(false)
  const open = Boolean(anchorEl)

  const handleClick = () => {
    alert("Clicked")
  }

  const data = [{
    title: "Sports",
    icon: <SportsSoccerIcon />,
    menus: [{
      title: "Active Matches",
      onClick:()=>setComponentRender(<Data handleClick={handleClick}/>)
    }]
  }, {
    title: "Cultting",
    icon: <SportsSoccerIcon />,
    // onClick: () => setComponentRender(<Data handleClick={handleClick} />),
    menus: [{
      title: "Cultting Agents",
      onClick: () => setComponentRender(<Cultting handleClick={handleClick} />)
    }]
  }]

  const onMouseEnter = (event, menus) => {
    console.log("Enter", event, menus)
    setEnchorEl(event.currentTarget)
    setMenuData(menus)
  }

  const onMouseLeave = () => {
    console.log("Leave");
    setEnchorEl(null)
  }


  const handleMenuItemClick = (menu) => {
    console.log("Menu ", menu)
    if (menu.onClick) {
      menu.onClick();
    }
    setEnchorEl(null);
  };

  console.log("Menus", menuData)


  return (
    <Grid container >
      <Grid item height={"50px"} alignItems={"center"} xs={12} bgcolor={"black"} display={"flex"} justifyContent={"flex-start"}>
        {data.map((element, index) => (
          <Button key={index}
            startIcon=<SportsSoccerIcon />
            onMouseEnter={(e) => onMouseEnter(e, element.menus)}>
            {element.title}
          </Button>
        ))}
        <Menu
          open={open}
          anchorEl={anchorEl}
          MenuListProps={{
            onMouseLeave: onMouseLeave
          }}
        >
          {menuData?.map((element, index) => (
            <MenuItem key={index} onClick={() => handleMenuItemClick(element)} >
              <ListItemIcon>
                <SportsSoccerIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{element.title}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      {componentRender}
    </Grid>
  );
}
