import React from "react";

interface Reminder {
  id: number;
  title: string;
}

interface ReminderListProps {
  items: Reminder[];
}

const RemindersList = (props: Reminder) => {
  return <div>RemindersList</div>;
};

export default RemindersList;
