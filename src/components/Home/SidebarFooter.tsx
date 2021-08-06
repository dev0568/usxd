import React from 'react';
import {Facebook, SupervisorAccount, Telegram, Twitter, YouTube} from '@material-ui/icons';

export default function Footer() {
  return (
    <React.Fragment>
    
      <div style={{display:"flex"}}>
          <p>USxD © 2021 • support@usxd.io • All rights reserved. Designed by ftribe</p>
          <Telegram/>
          <Twitter/>
          <Facebook/>
          <SupervisorAccount/>
          <YouTube/>
      </div>
      
    </React.Fragment>
  );
}