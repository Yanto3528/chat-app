import React from "react";
import { Drawer, Button, Divider } from "rsuite";

import { useProfileContext } from "../../context/profile.context";
import Editableinput from "../Editableinput";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfileContext();

  const onSave = (newData) => {
    console.log(newData);
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title></Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Divider />
        <Editableinput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
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
