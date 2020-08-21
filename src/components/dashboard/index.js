import React from "react";
import { Drawer, Button, Divider, Alert } from "rsuite";

import { useProfileContext } from "../../context/profile.context";
import Editableinput from "../Editableinput";
import { database } from "../../misc/firebase";
import ProviderBlock from "./ProviderBlock";
import AvatarUploadBtn from "./AvatarUploadBtn";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfileContext();

  const onSave = async (newData) => {
    const userNicknameRef = database
      .ref(`/profiles/${profile.uid}`)
      .child("name");

    try {
      await userNicknameRef.set(newData);

      Alert.success("Nickname has been updated", 4000);
    } catch (error) {
      Alert.info(error.message, 4000);
    }
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title></Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <Editableinput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
        <AvatarUploadBtn />
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
