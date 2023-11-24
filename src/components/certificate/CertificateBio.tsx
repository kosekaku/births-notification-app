import { Table, TableBody, TableHead, TableRow, TableCell } from '@dhis2/ui';
import './main.css'
import { attributesData } from '../../helpers/attributesData';
import { BioDataProps } from '../../types/bioAttributes';

const  CertificateBio = ({data}:any) => { // Fix any prop type
  if(!data) return <p>undefined</p>
  const {fullNames, motherName, dateOfBirth,placeOfBirth, natureOfBirth, gender, others}:BioDataProps  = data && attributesData(data)
  
  return (
    <div className="black-border">
    <div className="white-border">
      <div className="red-border">
        <div className="white-border">
          <div className="green-border">
            <div className="yellow-border">
              <div className="blue-border">
                <div
                  style={{
                    width: 'calc(100% - 20px) !important',
                    backgroundImage: 'url(icons/ministry.png)',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9,
                    backgroundPosition: 'center 60%',
                    backgroundSize: '25%',
                  }}
                >
                  {/* <div
                    style={{
                      tableLayout: 'fixed !important',
                      width: '100% !important',
                      wordWrap: 'break-word !important',
                      wordBreak: 'break-all !important',
                      marginBottom: '0px !important',
                      backgroundColor: '#fff',
                      opacity: '0.9',
                    }}
                  >
                    {/* <CertificateHeader />
                    <CertificateBio state={teiData} teiId={id} /> 
                  </div> */}
                  main  certificate bio content
                  <div className="row">
        <div className="col">
          <div className="vaccine-card-bio-info">
            <p>
              This is to certify that{' '}
              <b>
               {fullNames}
              </b>
              , born on <b>{dateOfBirth}</b>, was born at <b>{placeOfBirth}</b> 
              </p> 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="vaccine-card-dose-container">
            <Table className="table-responsive table-borderless table-hover">
              <TableHead>
                <TableRow className="vaccine-card-dose-table-header">
                  <TableCell>Full Name </TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Sex</TableCell>
                  <TableCell>Mother Name</TableCell>
                  <TableCell>Father Name</TableCell>
                  <TableCell>Nature of Birth</TableCell>
                  <TableCell>Place of Birth</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow className="vaccine-card-dose-table-header">
                  <TableCell>{fullNames} </TableCell>
                  <TableCell>{dateOfBirth}</TableCell>
                  <TableCell>{gender}</TableCell>
                  <TableCell>{motherName}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{natureOfBirth}</TableCell>
                  <TableCell>{placeOfBirth}</TableCell>
                </TableRow>
              </TableBody>
            
            </Table>
          </div>
        </div>
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CertificateBio