interface TimetableEntry {
  date: string;
  day: string;
  timing: string;
  subject: string;
  teacher: string;
}

export const secondYearData: TimetableEntry[] = [
  { date: '30th Sep', day: 'Mon', timing: '8.45am-9.45am', subject: 'COA', teacher: 'SUP' },
  { date: '30th Sep', day: 'Mon', timing: '9.45am-10.45am', subject: 'ED', teacher: 'DVB' },
  { date: '30th Sep', day: 'Mon', timing: '10.45am-11.00am', subject: 'Break', teacher: '' },
  { date: '30th Sep', day: 'Mon', timing: '11.00am-12.00pm', subject: 'SS', teacher: 'PNL' },
  // Add more second year data
];

export const thirdYearData: TimetableEntry[] = [
  { date: '30th Sep', day: 'Mon', timing: '8.45am-9.45am', subject: 'DBMS', teacher: 'DK' },
  { date: '30th Sep', day: 'Mon', timing: '9.45am-10.45am', subject: 'OOPM', teacher: 'PKB' },
  { date: '30th Sep', day: 'Mon', timing: '10.45am-11.00am', subject: 'Break', teacher: '' },
  { date: '30th Sep', day: 'Mon', timing: '11.00am-12.00pm', subject: 'SEWA', teacher: 'JMR' },
  // Add more third year data
];

export const fourthYearData: TimetableEntry[] = [
  { date: '30th Sep', day: 'Mon', timing: '8.45am-9.45am', subject: 'IDT', teacher: 'AL' },
  { date: '30th Sep', day: 'Mon', timing: '9.45am-10.45am', subject: 'FPTI', teacher: 'FJ' },
  { date: '30th Sep', day: 'Mon', timing: '10.45am-11.00am', subject: 'Break', teacher: '' },
  { date: '30th Sep', day: 'Mon', timing: '11.00am-12.00pm', subject: 'CC', teacher: 'VVG' },
  // Add more fourth year data
];

export const getTimetableData = (year: string) => {
  switch (year) {
    case '2':
      return secondYearData;
    case '3':
      return thirdYearData;
    case '4':
      return fourthYearData;
    default:
      return [];
  }
};