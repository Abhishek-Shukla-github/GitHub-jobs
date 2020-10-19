import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Brightness5Icon from '@material-ui/icons/Brightness5';

export default function Navbar() {
    return (
       <div style={{marginBottom:"5rem"}}>
          <AppBar className="p-2">
            <Toolbar>
              <Typography  variant="h6" color="inherit">
                  GitHub Jobs
              </Typography>
                <Brightness5Icon className="ml-3" fontSize="large"/>
                  <Switch 
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              </Toolbar>
          </AppBar>
        </div>
    )
}
