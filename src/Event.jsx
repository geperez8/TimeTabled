import React from "react";

const Event = ({ event, location, color }) => {
  return (
    <td className={"Event " + color}>
      <h5>{event}</h5>
      <h6>{location}</h6>
    </td>
  );
};

export default Event;
