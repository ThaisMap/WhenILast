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
  remove(activity: Activity): void;
  sort(ascending: boolean): void;
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
      act.visible = act.title.toLowerCase().includes(filter.toLowerCase());
      return act;
    });
    setActivityList(list);
  }

  function addOrUpdate(activity: Activity) {
    activity.id >= 0 ? update(activity) : add(activity);
  }

  function add(activity: Activity) {
    activity.id = activityList.length;
    activity.visible = true;
    sortAndUpdateList([activity, ...activityList]);
  }

  function update(activity: Activity) {
    const list = activityList.map((act) => {
      if (act.id === activity.id) {
        return activity;
      } else {
        return act;
      }
    });

    sortAndUpdateList(list);
  }

  function remove(activity: Activity) {
    const list = activityList.filter((act) => {
      return act.id !== activity.id;
    });
    setActivityList(list);
  }

  function sortAndUpdateList(ascending: boolean, newList?: Activity[]) {
    if (!newList) newList = [...activityList];

    const list = newList.sort(function (a, b) {
      if (ascending) return b.date.getTime() - a.date.getTime();
      else return a.date.getTime() - b.date.getTime();
    });

    setActivityList(list);
  }

  return (
    <ActivitiesContext.Provider
      value={{
        activities: activityList,
        addOrUpdate,
        applyFilter,
        remove,
        sort: sortAndUpdateList,
      }}>
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
    title: 'Fiz caminhada',
    date: new Date('2021-03-06 12:00'),
    comment: 'Pra ir na sobrancelha',
    visible: true,
  },
  {
    id: 3,
    title: 'Revisão no carro',
    date: new Date('2020-12-05 12:00'),
    comment: 'Trocou tanta coisa...',
    visible: true,
  },
];

export default ActivitiesContext;
