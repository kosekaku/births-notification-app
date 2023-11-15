import { Box } from '@dhis2/ui';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
interface CalenderProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  setSelectedStartDate: (value: any) => void;
  setSelectedEndDate: (value: any) => void;
}
export const PeriodCalendar = ({
  selectedStartDate,
  selectedEndDate,
  setSelectedStartDate,
  setSelectedEndDate,
}: CalenderProps) => {
  return (
    <div>
      <Box height='400px' width='600px'>
        <label>Select start Date: </label>
        <DatePicker
          onChange={(value: any) => {
            setSelectedStartDate(value);
          }}
          value={selectedStartDate}
          maxDate={new Date()}
          format='y-MM-dd'
        />

        <label>Select End Date: </label>
        <DatePicker
          onChange={(value: any) => {
            setSelectedEndDate(value);
          }}
          value={selectedEndDate}
          minDate={selectedStartDate ? selectedStartDate : new Date()}
          maxDate={new Date()}
          format='y-MM-dd'
        />
      </Box>

      {/* <label>Select Start Date:</label>
    <input
      type='date'
      value={
        selectedStartDate
          ? selectedStartDate?.toISOString().split('T')[0]
          : ''
      }
      onChange={(e) =>
        setSelectedStartDate(new Date(e.target.value))
      }
    />
    <span></span>
    <label>Select End Date:</label>
    <input
      type='date'
      value={
        selectedEndDate
          ? selectedEndDate.toISOString().split('T')[0]
          : ''
      }
      onChange={(e) => setSelectedEndDate(new Date(e.target.value))}
    /> */}
    </div>
  );
};
