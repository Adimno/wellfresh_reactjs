import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const renderDateButtons = () => {
    let dateButtons = [];
    let currentDate = new Date();

    for (let i = 0; i < 7; i++) {
      let date = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000));
      let isActive = (date.getDate() === selectedDate.getDate());

      dateButtons.push(
        <button
          key={i}
          className={`date-button ${isActive ? 'active' : ''}`}
          onClick={() => handleDateChange(date)}
        >
          {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </button>
      );
    }

    return dateButtons;
  }

  return (
    <div className="date-selection">
      {renderDateButtons()}
    </div>
  );
}

export default DateSelection;