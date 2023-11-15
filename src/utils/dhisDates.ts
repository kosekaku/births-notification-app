// Tranform date into a DHIS2 Year-Month-Date dates format string
// Ex lastUpdatedStartDate=2023-04-06
export const dhisDates = (date: Date | null) => {
  if (!date) return;
  const dhis2DateFormat = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return dhis2DateFormat;
};
