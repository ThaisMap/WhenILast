import { report } from 'node:process';
import React, { createContext, useState } from 'react';

export interface Activity {
  id: number;
  title: string;
  date: Date;
  comment: string;
  visible: boolean;
}

interface ActivityContextData {
  activities: Activity[];
  addOrUpdate(activity: Activity): void;
  applyFilter(filter: string): void;
}

const ActivitiesContext = createContext<ActivityContextData>(
  {} as ActivityContextData
);

export const ActivitiesProvider: React.FC = ({ children }) => {
  const [activityList, setActivityList] = useState<Array<Activity>>(
    defaultActivities
  );

  function applyFilter(filter: string) {
    const list = activityList.map((act) => {
      if (act.title.toLowerCase().includes(filter.toLowerCase())) {
        act.visible = true;
      } else {
        act.visible = false;
      }
      return act;
    });
    setActivityList(list);
  }

  function addOrUpdate(activity: Activity) {
    activity.id >= 0 ? change(activity) : add(activity);
  }

  function add(activity: Activity) {
    activity.id = activityList.length;
    activity.visible = true;
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
      value={{ activities: activityList, addOrUpdate, applyFilter }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

const defaultActivities: Activity[] = [
  {
    id: 0,
    title: 'Tomei café puro',
    date: new Date('2021-02-09 12:00'),
    comment: 'Just because why not',
    visible: true,
  },
  {
    id: 1,
    title: 'Doei Sangue',
    date: new Date('2021-01-20 12:00'),
    comment: 'Correu tudo bem',
    visible: true,
  },
  {
    id: 2,
    title: 'Revisão no carro',
    date: new Date('2020-12-05 12:00'),
    comment: 'Trocou tanta coisa...',
    visible: true,
  },
];

export default ActivitiesContext;
