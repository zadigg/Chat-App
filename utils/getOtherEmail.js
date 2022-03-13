import React from "react";

function getOtherEmail(users, currentUser) {
  return users.filter((user) => user !== currentUser)[0];
}

export default getOtherEmail;
