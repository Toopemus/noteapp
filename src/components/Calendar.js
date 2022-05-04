import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Calendar({handleShowCalendar, addReminder}) {
    const months = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'];
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentDate = new Date();

    const [displayYear, setDisplayYear] = useState(currentDate.getFullYear());
    const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth());
    const [selectedDate, setSelectedDate] = useState({
        day: '',
        month: '',
        year: ''
    });
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();

    //Luo listan jossa on kalenterin päivät
    const updateDays = (month, year) => {
        let days = [];

        //Ensimmäinen viikonpäivä, 0 = sunnuntai, 1 = maanantai jne.
        let startingWeekday = new Date((month + 1) + '.1.' + year).getDay();
        startingWeekday = (startingWeekday === 0 ? 6 : startingWeekday - 1); //Flipataan alkamaan maanantaista

        //Ensin tyhjää tilaa jotta päivä saadaan oikean viikonpäivän kohdalle
        for(let i = 0; i < startingWeekday; i++) {
            days.push(<div key={nanoid()} className='emptyday'></div>);
        }

        //Jos karkausvuosi
        if((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) && month === 1) {
            for(let i = 0; i < 29; i++) {
                if(month === currentDate.getMonth() && i+1 === currentDate.getDate()) {
                    days.push(
                        <button
                            key={nanoid()}
                            className='day currentday'
                            onClick={() => handleSetDate(i+1)}
                        >{i+1}</button>
                    );
                } else {
                    days.push(
                        <button
                            key={nanoid()}
                            className='day'
                            onClick={() => handleSetDate(i+1)}
                            disabled={month === currentDate.getMonth() && i+1 < currentDate.getDate()}
                        >{i+1}</button>
                    );
                }
            }
        } else {
            for(let i = 0; i < monthDays[month]; i++) {
                if(month === currentDate.getMonth() && i+1 === currentDate.getDate()) {
                    days.push(
                        <button
                            key={nanoid()}
                            className='day currentday'
                            onClick={() => handleSetDate(i+1)}
                        >{i+1}</button>
                    );
                } else {
                    days.push(
                        <button
                            key={nanoid()}
                            className='day'
                            onClick={() => handleSetDate(i+1)}
                            disabled={month === currentDate.getMonth() && i+1 < currentDate.getDate()}
                        >{i+1}</button>
                    );
                }
            }
        }
        
        return days;
    }

    const [days, setDays] = useState(updateDays(displayMonth, displayYear));

    const handleSetDate = (day) => {
        setSelectedDate({
            day: day,
            month: displayMonth + 1,
            year: displayYear
        });
    }

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

    const handleHour = (event) => {
        setHour(event.target.value);
    }

    const handleMinute = (event) => {
        setMinute(event.target.value);
    }

    //Tarkistaa onko muistutuksen data syötetty oikein
    const dataCorrect = () => {
        let hourCheck = !isNaN(hour) && hour >= 0 && hour <= 23;
        let minuteCheck = !isNaN(minute) && minute >= 0 && minute <= 59;
        return hourCheck && minuteCheck && !isNaN(selectedDate.day);
    }

    const handleAddReminder = () => {
        if(dataCorrect) {
            let reminder = new Date(selectedDate.year, selectedDate.month, selectedDate.day, hour, minute);

            addReminder(reminder);
        }
    }

    return(
        <div className='calendarcontainer'>
            <div className='monthpicker'>
                <button className='monthbutton' onClick={() => lastMonth()} disabled={displayMonth === currentDate.getMonth()}>&lt;</button>
                <p>{months[displayMonth]} {displayYear}</p>
                <button className='monthbutton' onClick={() => nextMonth()}>&gt;</button>
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
            <div className='calendartime'>
                <div className='timelabel'>Aika: </div>
                <textarea rows='1' cols='2' maxLength='2' className='timebox' value={hour} onChange={handleHour}></textarea>
                <div>:</div>
                <textarea rows='1' cols='2' maxLength='2' className='timebox' value={minute} onChange={handleMinute}></textarea>
            </div>
            <div className='calendarsubmit'>
                <button className='calendarbutton' onClick={() => handleShowCalendar()}>Peru</button>
                <div>{selectedDate.day}.{selectedDate.month}.{selectedDate.year}</div>
                <button className='calendarbutton' onClick={() => handleAddReminder()} disabled={!dataCorrect()}>Lisää</button>
            </div>
        </div>
    )
}

export default Calendar;