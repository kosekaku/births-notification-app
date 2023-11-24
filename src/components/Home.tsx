import { useEffect, useState } from 'react';
import {
  OrganisationUnitTree,
  Button,
  Box,
  AlertBar,
  DataTable,
  TableHead,
  DataTableRow,
  DataTableColumnHeader,
  TableBody,
  DataTableCell,
  TableFoot,
  Divider,
  Card,
} from '@dhis2/ui';
import ModalCard from './Modal';
import { dhisDates } from '../utils/dhisDates';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { PeriodCalendar } from './Calendar';
import {
  OrganizationUnitsProps,
  TrackedEntityInstanceProps,
} from '../types/trackedEntity';
import { ROOT_OU } from '../constants/organisationUnit';
import { useData } from '../hooks/useData';
import {
  FONT_SIZE_DEFAULT,
  HEIGHT_BOX,
  PADDING_ITEM,
  WIDTH_BOX,
} from '../constants/stylesConstants';
import Loader from './commons/Loader';
import { useNavigate } from 'react-router';
import { teiDataLocal } from '../data/data';
import { attributesData } from '../helpers/attributesData';

const Home = () => {
  // initizations
  const navigate = useNavigate();
 
  // states
  const [organisationUnit, setOrganisationUnit] =
    useState<OrganizationUnitsProps | null>(null);
  const [isOuSelected, setIsOuSelected] = useState(false);
  const [isPeriod, setIsPeriodSelected] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [generateReport, setGenerateReport] = useState(false);

  const [teiData, setTeiData] = useState<any[]>(
    teiDataLocal?.trackedEntityInstances || []
  ); // TODO replace current state default with [] and update any[] types to trackedInstanceProps- current data is for testing purpose to reduce internet connections band width

  // TODO get OU, periods from user before making calls
  const { loading, error, data, refetch } = useData(
    organisationUnit,
    selectedStartDate,
    selectedEndDate
  );
  useEffect(() => {
    // Call refetch with the data(OU, period) from user selections
    if (generateReport !== false && organisationUnit !== null) {
      // TODO add OU and period to conditional fetching startDate !== null && organisationUnit !== null
      // TODO App runtime unaithorized when fetching data and OUs
      refetch({
        lastUpdatedEndDate: selectedEndDate,
        organisationUnit: organisationUnit?.id || ROOT_OU,
        startDate: dhisDates(selectedStartDate),
        endDate: dhisDates(selectedEndDate),
      }); // "organisationUnit" variable in query is passed via refetch
      setGenerateReport(false);
    }
    if (!loading && !error && data) {
      setTeiData(data?.programs?.trackedEntityInstances);
    }
  }, [
    data,
    error,
    generateReport,
    loading,
    organisationUnit,
    refetch,
    selectedEndDate,
    selectedStartDate,
  ]);

  const handleOrganizationUnit = (ou: OrganizationUnitsProps) => {
    // set the OU display name and id selected
    setIsOuSelected(false);
    setOrganisationUnit(ou);
  };

  const handlePeriodSelection = () => {
    setIsPeriodSelected(false);
  };
  // Canceal modal for all OU and Period selection
  const handleCancelModal = () => {
    setIsOuSelected(false);
    setIsPeriodSelected(false);
  };
  const handleGenerateReport = () => {
    // Implement logic at useEffect to fetch data for the selected OU, period, and programs
    // generate report initiated and generateReport state is checked at useEffect
    setGenerateReport(true);
  };

  if (loading) return <Loader />;
  if (error)
    return (
      <AlertBar permanent danger duration={100}>
        Error! {error}
      </AlertBar>
    );



  const handleUserClick = ({
    trackedEntityInstance, // used for prints confirmation
    orgUnit,
    attributes,
  }: TrackedEntityInstanceProps) => {
    navigate('/certificate', {
      state: { trackedEntityInstance, orgUnit, attributes },
    });
  };

  return (
    <div>
      <div style={{ padding: PADDING_ITEM }}>
        <Box height={HEIGHT_BOX} padding={PADDING_ITEM} width='100%'>
          <Card>
            {/* <ButtonStrip> */}
            <Button
              name='ouSelection'
              onClick={() => setIsOuSelected(true)}
              value='default'
            >
              Organization Unit Selection
            </Button>
            <Button
              name='periodSelection'
              onClick={() => setIsPeriodSelected(true)}
              value='default'
            >
              Period
            </Button>

            <Button
              name='generateReport'
              onClick={handleGenerateReport}
              value='default'
              //disabled
            >
              Generate Report
            </Button>
            {/* </ButtonStrip> */}
          </Card>
        </Box>
        <Divider />
        {generateReport &&
          (organisationUnit === null ||
            selectedStartDate === null ||
            selectedEndDate === null) && (
            <AlertBar permanent warning duration={100}>
              Please select Facility name or dates to generate report
            </AlertBar>
          )}

        {
          <div>
            <Box height={HEIGHT_BOX} width={WIDTH_BOX}>
              <Card>
                <div>
                  <span style={{ fontSize: FONT_SIZE_DEFAULT }}>
                    Selected Organisation Unit:{' '}
                  </span>
                  {organisationUnit
                    ? organisationUnit?.displayName
                    : 'All/ South Sudan'}
                </div>
                <div>
                  <span style={{ fontSize: FONT_SIZE_DEFAULT }}>
                    Selected Dates:{' '}
                  </span>

                  {selectedStartDate && selectedEndDate
                    ? `${dhisDates(selectedStartDate)} to ${dhisDates(
                        selectedEndDate
                      )}`
                    : 'All Period'}
                </div>
              </Card>
            </Box>
          </div>
        }

        <Divider />

        {/* Organization units modal */}
        {isOuSelected && (
          <ModalCard
            title='Select Organization Units'
            content={
              <OrganisationUnitTree
                name='South Sudan'
                onChange={handleOrganizationUnit}
                roots={ROOT_OU}
                singleSelection={true}
              />
            }
            onSave={() => handleOrganizationUnit}
            onCancel={() => handleCancelModal}
          />
        )}
        {/* Periods modal */}

        {isPeriod && (
          <ModalCard
            title='Select Periods'
            content={
              <div>
                <PeriodCalendar
                  selectedStartDate={selectedStartDate}
                  selectedEndDate={selectedEndDate}
                  setSelectedStartDate={setSelectedStartDate}
                  setSelectedEndDate={setSelectedEndDate}
                />
              </div>
            }
            onSave={() => handlePeriodSelection}
            onCancel={() => handleCancelModal}
          />
        )}
        {/* Generate reports */}
        {teiData.length <= 0 ? (
          <div style={{ padding: PADDING_ITEM, fontSize: FONT_SIZE_DEFAULT }}>
            <Box height={HEIGHT_BOX} width={WIDTH_BOX}>
              <Card> There are no data available for current selection</Card>
            </Box>

            <Divider />
          </div>
        ) : (
          <DataTable>
            <TableHead>
              <DataTableRow>
                <DataTableColumnHeader>Full Name</DataTableColumnHeader>
                <DataTableColumnHeader>Mother Name</DataTableColumnHeader>
                <DataTableColumnHeader>Date of Birth</DataTableColumnHeader>
                <DataTableColumnHeader>Nature of Birth</DataTableColumnHeader>
                <DataTableColumnHeader>Gender</DataTableColumnHeader>
                <DataTableColumnHeader>Place of Birth</DataTableColumnHeader>
                <DataTableColumnHeader>Action</DataTableColumnHeader>
              </DataTableRow>
            </TableHead>

            <TableBody loading>
              {teiData?.map(
                ({ attributes, orgUnit }: TrackedEntityInstanceProps, index: number) => {
                  // Use Custom helper to get the individual attribute fiels like gender, age to display to the table row
                  const data = {attributes, orgUnit} as TrackedEntityInstanceProps;
                 // TODO fix any
                  const {fullNames, motherName, dateOfBirth,placeOfBirth, natureOfBirth, gender, others}:any  = data!==undefined && attributesData(data)
                  // return table rows here
                  return (
                    <DataTableRow>
                      <DataTableCell>{fullNames}</DataTableCell>
                      <DataTableCell>{motherName}</DataTableCell>
                      <DataTableCell>{dateOfBirth}</DataTableCell>
                      <DataTableCell>{natureOfBirth}</DataTableCell>
                      <DataTableCell>{gender}</DataTableCell>
                      <DataTableCell>{placeOfBirth}</DataTableCell>
                      <DataTableCell>
                        <Button
                          secondary
                          large
                          onClick={() => handleUserClick(teiData[index])}
                        >
                          View
                        </Button>
                      </DataTableCell>
                    </DataTableRow>
                  );
                }
              )}
            </TableBody>
            <TableFoot>
              <DataTableRow>
                <DataTableCell colSpan='4'>
                  South Sudan Births Notification Certificate:  &copy;{ new Date().getFullYear()} .....Footer content- paginations
                </DataTableCell>
              </DataTableRow>
            </TableFoot>
          </DataTable>
        )}
      </div>
    </div>
  );
};

export default Home;
