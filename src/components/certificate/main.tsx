import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CertificateBio from './CertificateBio';
import { attributesData } from '../../helpers/attributesData';
import { TrackedEntityInstanceProps } from '../../types/trackedEntity';
import { BioDataProps } from '../../types/bioAttributes';

const MainCertificate = () => {
  const { state } = useLocation();
  
  const [teiData, setTeiData] = useState<TrackedEntityInstanceProps>();
  useEffect(() => {
    if (state === null) {
      // Request data from api if TrackedInstance is valid
      // Load data and render them,
      // Print results
    }
    setTeiData(state);
  }, [state]);
 
  if(teiData===undefined){
    // do nothing or render loading screen or some message to users
    
  }else{
    const {fullNames, motherName, dateOfBirth,placeOfBirth, natureOfBirth, gender, others}: BioDataProps = attributesData(teiData) as unknown as any
  }
  return (
  <div>
    <div>Certificate Header content  title and flag</div>
    <CertificateBio data={teiData}/>
    <div>Certificate Footer content- QRCODE</div>
  </div>

  )
};

export default MainCertificate;
