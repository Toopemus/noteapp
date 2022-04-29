import React, { useState } from 'react';

function Calendar() {
    const months = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'];
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const [currentDate, setCurrentDate] = useState(new Date());
    const [displayYear, setDisplayYear] = useState(currentDate.getFullYear());
    const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth());

    const updateDays = (month, year) => {
        let days = [];

        //Ensimmäinen viikonpäivä, 0 = sunnuntai, 1 = maanantai jne.
        let startingWeekday = new Date((month + 1) + '.1.' + year).getDay();
        startingWeekday = (startingWeekday === 0 ? 6 : startingWeekday - 1); //Flipataan alkamaan maanantaista

        for(let i = 0; i < startingWeekday; i++) {
            days.push(<div className='emptyday'></div>);
        }
        for(let i = 0; i < monthDays[month]; i++) {
            days.push(<button className='day'>{i+1}</button>);
        }
        
        return days;
    }

    const [days, setDays] = useState(updateDays(displayMonth, displayYear));

    const lastMonth = () => {
        if(displayMonth === 0) {
            setDisplayYear(displayYear - 1);
            setDisplayMonth(11);
            setDays(updateDays(11, displayYear - 1));
        } else {
            setDisplayMonth(displayMonth - 1);
            setDays(updateDays(displayMonth - 1, displayYear));
        }
    }

    const nextMonth = () => {
        if(displayMonth === 11) {
            setDisplayYear(displayYear + 1);
            setDisplayMonth(0);
            setDays(updateDays(0, displayYear + 1));
        } else {
            setDisplayMonth(displayMonth + 1);
            setDays(updateDays(displayMonth + 1, displayYear));
        }
    }


    return(
        <div className='calendarcontainer'>
            <div className='monthpicker'>
                <button className='monthbutton' onClick={lastMonth}>&lt;</button>
                <p>{months[displayMonth]} {displayYear}</p>
                <button className='monthbutton' onClick={nextMonth}>&gt;</button>
            </div>
            <div className='calendardays'>
                <div className='weekdayindicator'>Ma</div>
                <div className='weekdayindicator'>Ti</div>
                <div className='weekdayindicator'>Ke</div>
                <div className='weekdayindicator'>To</div>
                <div className='weekdayindicator'>Pe</div>
                <div className='weekdayindicator'>La</div>
                <div className='weekdayindicator'>Su</div>
                {days}
            </div>
        </div>
    )
}

export default Calendar;