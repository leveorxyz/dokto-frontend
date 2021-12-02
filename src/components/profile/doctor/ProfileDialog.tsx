import React from "react";
import {
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

const ProfileDialog = () => (
  <>
    <AlertDialogOverlay />

    <AlertDialogContent>
      <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
      <AlertDialogCloseButton />
      <AlertDialogBody>
        Are you sure you want to discard all of your notes? 44 words will be
        deleted.
      </AlertDialogBody>
    </AlertDialogContent>
  </>
);

export default ProfileDialog;
