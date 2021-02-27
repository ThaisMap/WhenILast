import { createContext, useState } from 'react';

export interface Activity {
  id: number;
  title: string;
  date: Date;
  comment: string;
}

interface ActivityContextData {
  activities: Activity[];
  add(activity: Activity): void;
  change(activity: Activity): void;
}

const ActivitiesContext = createContext<ActivityContextData>(
  {} as ActivityContextData
);

export const ActivitiesProvider: React.FC = ({ children }) => {
  const [activityList, setActivityList] = useState<Activity[]>(
    defaultActivities
  );

  function add(activity: Activity) {
    setActivityList([...activityList, activity]);
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
      value={{ activities: activityList, add, change }}>
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
  },
  {
    id: 1,
    title: 'Doei Sangue',
    date: new Date('2021-01-20 12:00'),
    comment: 'Correu tudo bem',
  },
  {
    id: 2,
    title: 'Revisão no carro',
    date: new Date('2021-01-05 12:00'),
    comment: 'Trocou tanta coisa...',
  },
];

export default ActivitiesContext;
