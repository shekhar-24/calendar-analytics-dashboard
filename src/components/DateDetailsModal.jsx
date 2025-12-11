import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogTitle,
  DialogCloseTrigger,
  DialogBackdrop,
  DialogPositioner,
  Text,
  Box,
  Heading
} from '@chakra-ui/react';
import { closeModal } from '../store/calendarSlice';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const DateDetailsModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, selectedDate, events } = useSelector((state) => state.calendar);

  // Data for the selected date
  const selectedData = selectedDate ? events[selectedDate] : null;

  const handleClose = () => {
    dispatch(closeModal());
  };

  // Prepare data for the chart if it exists
  const chartData = selectedData
    ? selectedData.map((item, index) => {
        const key = Object.keys(item)[0];
        return {
          name: key, // e.g., "user_1"
          value: item[key], // e.g., 1
        };
      })
    : [];

  return (
    <DialogRoot open={isModalOpen} onOpenChange={(e) => !e.open && handleClose()} size="lg">
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent>
           <DialogCloseTrigger />
          <DialogHeader>
            <DialogTitle>Events for {selectedDate}</DialogTitle>
          </DialogHeader>
          <DialogBody pb={6}>
            {selectedData ? (
              <Box height="300px" width="100%">
                 {/* Placeholder Chart / Actual Chart Logic */}
                 <Heading size="sm" mb={4}>Activity Overview</Heading>
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3182ce" />
                    </BarChart>
                 </ResponsiveContainer>
              </Box>
            ) : (
                <Text>No data found for the selected date.</Text>
            )}
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

export default DateDetailsModal;
