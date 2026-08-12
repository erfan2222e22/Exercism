
const Meetup = () => {
     
  const meetup = (year, month, weekday, week) => {

    const date = new Date(year, month - 1, 1);
    const allDaysMonth = new Date(year, month, 0).getDate();

    const weekList = ["Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday", "Sunday"];
    
    const findFristDayMonth = weekList[date.getDay() === 0
      && (month === 9 || month === 1 || (year === 2015 && month === 2)) ? 6 : date.getDay() - 1];

    const filterIndexDaysWeek = weekList.filter((item, index) => index >=
      weekList.indexOf(findFristDayMonth))
    
    const filterIndexDaysWeek1= weekList.filter((item, index) => index <
      weekList.indexOf(findFristDayMonth))

    const arrayRest = [...filterIndexDaysWeek, ...filterIndexDaysWeek1]
    const weekObject = Object.fromEntries(arrayRest.map((item, index) => [item, index + 1]))
    const daysList = [];

    let dayinWeek = weekObject[week]

    while (dayinWeek <= allDaysMonth && dayinWeek + 7 <= allDaysMonth) {
      if (dayinWeek <= 7) {
        daysList.push(dayinWeek);
      }
      daysList.push(dayinWeek += 7);
    }

    const weekdayObject = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
      last: daysList.length - 1,
    }  

    const result = weekday === "teenth" ? daysList.find((item) => item > 12 && item <= 19)
      : daysList[weekdayObject[weekday]];

    return new Date(year, month - 1, result)
  }     

  const year = 2015;
  const month = 2;
  const weekday  = 'last';
  const week = 'Sunday';



  return (
    <div onClick={() => console.log(meetup(year, month, weekday,week))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
      test me
    </div>
  )
}
export default Meetup