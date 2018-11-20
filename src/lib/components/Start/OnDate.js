import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'react-datetime';

import 'moment/locale/en-gb';
import 'moment/locale/en-ca';

import { DATE_TIME_FORMAT, DATE_FORMAT, TIME_FORMAT } from '../../constants/index';

const StartOnDate = ({
  id,
  onDate: {
    date,
    options,
  },
  handleChange,
}) => (
  <div className="row" style={{ marginLeft: '1px' }}>
    <div className="col-6">
      <DateTime
        inputProps={{
          id: `${id}-datetime`,
          name: 'start.onDate.date',
          placeholder: 'Select Start Date',
          readOnly: true,
        }}
        timeFormat={false}
        viewMode="days"
        onChange={(inputDate) => {
          const dateData = moment(inputDate).format(DATE_FORMAT);
          const timeData = moment(date).format(TIME_FORMAT);

          const editedEvent = {
            target: {
              value: moment(`${dateData} ${timeData}`).format(DATE_TIME_FORMAT),
              name: 'start.onDate.date',
            },
          };
          handleChange(editedEvent);
        }}
      />
    </div>

    <div className="col-6">
      <DateTime
        inputProps={{
          id: `${id}-datetime`,
          name: 'start.onDate.date',
          placeholder: 'Select Start Time',
          readOnly: true,
        }}
        dateFormat={false}
        viewMode="time"
        onChange={(inputDate) => {
          const dateData = moment(date).format(DATE_FORMAT);
          const timeData = moment(inputDate).format(TIME_FORMAT);

          const editedEvent = {
            target: {
              value: moment(`${dateData} ${timeData}`).format(DATE_TIME_FORMAT),
              name: 'start.onDate.date',
            },
          };
          handleChange(editedEvent);
        }}
      />
    </div>
  </div>
);

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
