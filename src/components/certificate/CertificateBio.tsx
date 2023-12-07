import { Table, TableBody, TableHead, TableRow, TableCell } from "@dhis2/ui";
import { attributesData } from "../../helpers/attributesData";
import { BioDataProps } from "../../types/bioAttributes";
import styled from "styled-components";
// import "./main.css";

const CertificateBio = ({ data }: any) => {
  // Fix any prop type
  if (!data) return <p>undefined</p>;
  const {
    fullNames,
    motherName,
    fatherName,
    dateOfBirth,
    placeOfBirth,
    natureOfBirth,
    gender,
  }: BioDataProps = data && attributesData(data);

  return (
    <CertificateBioWrapper>
      <div className="row">
        <div className="col">
          <TextContainer>
            <p>
              This is a certificate of birth Notification for child{" "}
              <b>{fullNames}</b>, born on <b>{dateOfBirth}</b>
            </p>
          </TextContainer>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="vaccine-card-dose-container">
            <Table className="table-responsive table-borderless table-hover">
              <TableHead>
                <TableRowContainer>
                  <TableCell>Full Name </TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Sex</TableCell>
                  <TableCell>Mother Name</TableCell>
                  <TableCell>Father Name</TableCell>
                  <TableCell>Nature of Birth</TableCell>
                  <TableCell>Place of Birth</TableCell>
                </TableRowContainer>
              </TableHead>
              <TableBody>
                <TableRowContainer>
                  <TableCell>{fullNames} </TableCell>
                  <TableCell>{dateOfBirth}</TableCell>
                  <TableCell>{gender}</TableCell>
                  <TableCell>{motherName}</TableCell>
                  <TableCell>{fatherName}</TableCell>
                  <TableCell>{natureOfBirth}</TableCell>
                  <TableCell>{placeOfBirth}</TableCell>
                </TableRowContainer>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </CertificateBioWrapper>
  );
};

export default CertificateBio;

// Styled components
const CertificateBioWrapper = styled.div`
  width: "calc(100% - 20px) !important";
  backgroundimage: "url(icons/ministry.png)";
  backgroundrepeat: "no-repeat";
  opacity: 0.9;
  backgroundposition: "center 6%";
  backgroundsize: "25%";
`;

const TextContainer = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
  overflow-wrap: break-word;
`;

const TableRowContainer = styled(TableRow)`
  // referencing external library elements ie TableRow from @dhis2/ui
  background-color: #b1d0fe;
  font-weight: bold;
`;
