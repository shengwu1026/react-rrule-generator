import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'react-datetime';

import 'moment/locale/en-gb';
import 'moment/locale/en-ca';

import { DATE_TIME_FORMAT } from '../../constants/index';

const StartOnDate = ({
  id,
  onDate: {
    date,
    options,
  },
  handleChange,
}) => {
  const CustomCalendar = options.calendarComponent;
  const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
  const calendarAttributes = {
    'aria-label': 'Datetime picker for start on date',
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    locale,
    readOnly: true,
  };

  return (
    <div className="col-6 col-sm-3">
      {
        CustomCalendar
          ? <CustomCalendar
            key={`${id}-calendar`}
            {...calendarAttributes}
            onChange={(event) => {
              const editedEvent = {
                target: {
                  value: event.target.value,
                  name: 'start.onDate.date',
                },
              };
              handleChange(editedEvent);
            }}
          />

          : <DateTime
            inputProps={
              {
                id: `${id}-datetime`,
                name: 'start.onDate.date',
                placeholder: 'Select Start Time',
                readOnly: true,
              }
            }
            timeFormat
            viewMode="days"
            onChange={(inputDate) => {
              const editedEvent = {
                target: {
                  value: moment(inputDate).format(DATE_TIME_FORMAT),
                  name: 'start.onDate.date',
                },
              };
              handleChange(editedEvent);
            }}
          />
      }
    </div>
  );
};

StartOnDate.propTypes = {
  id: PropTypes.string.isRequired,
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
      calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StartOnDate;
