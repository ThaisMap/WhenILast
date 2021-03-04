import React, { createContext, useState } from "react";

export interface Activity {
  id: number;
  title: string;
  date: Date;
  comment: string;
}

interface ActivityContextData {
  activities: Activity[];
  addOrUpdate(activity: Activity): void;
}

const ActivitiesContext = createContext<ActivityContextData>(
  {} as ActivityContextData
);

export const ActivitiesProvider: React.FC = ({ children }) => {
  const [activityList, setActivityList] = useState<Array<Activity>>(
    defaultActivities
  );

  function addOrUpdate(activity: Activity) {
    activity.id ? change(activity) : add(activity);
  }

  function add(activity: Activity) {
    activity.id = activityList.length;
    setActivityList([activity, ...activityList]);
  }

  function change(activity: Activity) {
    const list = activityList.map((act) => {
      if (act.id === activity.id) {
        return activity;
      } else {
        return act;
      }
    });
    setActivityList(list);
  }

  return (
    <ActivitiesContext.Provider
      value={{ activities: activityList, addOrUpdate }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

const defaultActivities: Activity[] = [
  {
    id: 0,
    title: "Tomei café puro",
    date: new Date("2021-02-09 12:00"),
    comment: "Just because why not",
  },
  {
    id: 1,
    title: "Doei Sangue",
    date: new Date("2021-01-20 12:00"),
    comment: "Correu tudo bem",
  },
  {
    id: 2,
    title: "Revisão no carro",
    date: new Date("2020-12-05 12:00"),
    comment: "Trocou tanta coisa...",
  },
];

export default ActivitiesContext;
