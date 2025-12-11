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
    const { events: rawEvents, selectedDate } = useSelector((state) => state.calendar);
    const events = useSelector(selectCalendarEvents);
    const [currentDate, setCurrentDate] = React.useState(new Date()); // Start at today
    
const [view, setView] = React.useState('month');

    useEffect(() => {
        dispatch(loadData());
    }, [dispatch]);

    const handleSelectEvent = (event) => {
        const dateStr = format(event.start, 'dd-MM-yyyy');
        dispatch(selectDate(dateStr));
    };

    const handleSelectSlot = (slotInfo) => {
        const dateStr = format(slotInfo.start, 'dd-MM-yyyy');
        dispatch(selectDate(dateStr));
    };

    const handleNavigate = (newDate) => {
        setCurrentDate(newDate);
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const eventStyleGetter = () => {
        return {
            style: {
                backgroundColor: '#3182ce',
                borderRadius: '4px',
                opacity: 0.9,
                color: 'white',
                border: '0px',
                display: 'block',
                fontSize: '0.8em',
                textAlign: 'center'
            }
        };
    };

    const dayPropGetter = (date) => {
        const dateStr = format(date, 'dd-MM-yyyy');
        const isSelected = selectedDate === dateStr;
        
        if (isSelected) {
            return {
                style: {
                    backgroundColor: 'rgba(49, 130, 206, 0.1)',
                    border: '2px solid #3182ce',
                }
            };
        }
        return {};
    };

    return (
        <Box 
            height="100vh" 
            p={[2, 4, 6]} // Responsive padding: 2 on mobile, 4 on tablet, 6 on desktop
            bg="gray.50"
            display="flex"
            flexDirection="column"
        >
            <Box 
                bg="white" 
                p={4} 
                borderRadius="xl" 
                boxShadow="lg" 
                height="100%"
                display="flex"
                flexDirection="column"
            >
                <Heading mb={6} textAlign="center" color="blue.600" size={['md', 'lg', 'xl']}>
                    Analytics Dashboard
                </Heading>
                
                <Box flex="1" overflow="hidden">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '100%' }}
                        onSelectEvent={handleSelectEvent}
                        onSelectSlot={handleSelectSlot}
                        selectable
                        eventPropGetter={eventStyleGetter}
                        dayPropGetter={dayPropGetter}
                        views={['month', 'week', 'day']}
                        view={view} // Controlled view
                        onView={handleViewChange} // Handler for view changes
                        date={currentDate}
                        onNavigate={handleNavigate}
                        popup
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default CalendarView;
