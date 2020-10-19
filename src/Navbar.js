import React, {useContext} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {ThemeContext} from "./contexts/ThemeContext";

export default function Navbar() {
  const {isDarkMode, setIsDarkMode}= useContext(ThemeContext);
    return (
       <div style={{marginBottom:"5rem"}}>
        <AppBar className="p-2" color={isDarkMode?"default":"primary"}>
            <Toolbar>
              <Typography  variant="h5" color="inherit">
              GitHub Jobs
              </Typography>
              {isDarkMode? <Brightness1Icon className="ml-3" fontSize="large"/> : <Brightness5Icon className="ml-3" fontSize="large"/>}
                  <Switch 
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              </Toolbar>
          </AppBar>
        </div>
    )
}
