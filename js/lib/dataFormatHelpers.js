// Helper to format format individual Firebase records
export const formatDataObject = (data) => {
  const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
  return dataObject[0];
}

// Helper to format Firebase data into session listview data
export const formatSessionData = (sessions) => {
  let dataBlob = {};
  let sectionIds = [];
  let rowIds = [];

  if (sessions.length > 0) {
    // create array of unique section IDs
    sectionIds = sessions.map(session => session.start_time)
      .filter((time, index, startTimes) => {
        return index == startTimes.indexOf(time);
      }).sort();

    // create array of row ID arrays that correspond to section IDs
    rowIds = sectionIds.map(sectionId => {
      return sessions.filter(session => {
        return sectionId === session.start_time;
      }).map(session => session.session_id)
    });

    // create listview data blob
    sessions.map(session => session.start_time)
      .reduce((acc, time) => {
        acc[time] = {}

        for (let session of sessions) {
          if (session.start_time === time) {
            const sessionObj = {};
            const id = session.session_id;
            const start_time = session.start_time;
            sessionObj[id] = session;
            acc[start_time][id] = session;
          }
        }

        return acc;
      }, dataBlob);
  }

  return { dataBlob, sectionIds, rowIds };
}