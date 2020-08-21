import React from "react";
import { Drawer, Button } from "rsuite";

import { useProfileContext } from "../../context/profile.context";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfileContext();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title></Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
