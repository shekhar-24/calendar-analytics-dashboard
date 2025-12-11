import React, { useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, selectDate, selectCalendarEvents } from '../store/calendarSlice';
import { Box, Heading } from '@chakra-ui/react';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = () => {
    const dispatch = useDispatch();
    const events = useSelector(selectCalendarEvents);
    
    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);

    const handleSelectEvent = (event) => {
        // When an event ("Data Available") is clicked, we select that date.
        // We can pass the raw date object or formatted string.
        // For consistency with the slice, let's just pass the ISO string or date object
        // The slice expects us to handle the selection.
        const dateStr = format(event.start, 'dd-MM-yyyy');
        dispatch(selectDate(dateStr));
    };

    const handleSelectSlot = (slotInfo) => {
        // Also allow clicking on the empty day cell if we want to handle that case
        // But for this assignment, we mostly care about dates WITH data.
        // However, requirements say "Highlight highlighted date"
        const dateStr = format(slotInfo.start, 'dd-MM-yyyy');
        // Check if we have data for this date? 
        // The requirement says: "If the selected date has no data, show: 'No data found...'"
        // So we should allow selecting ANY date.
        dispatch(selectDate(dateStr));
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        // Highlight dates that contain data
        return {
            style: {
                backgroundColor: '#3182ce',
                borderRadius: '5px',
                opacity: 0.8,
                color: 'white',
                border: '0px',
                display: 'block'
            }
        };
    };

    return (
        <Box height="90vh" p={5}>
            <Heading mb={4} textAlign="center">Calendar Analytics Dashboard</Heading>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100% - 60px)' }}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                eventPropGetter={eventStyleGetter}
                views={['month', 'week', 'day']}
                defaultView='month'
            />
        </Box>
    );
};

export default CalendarView;
