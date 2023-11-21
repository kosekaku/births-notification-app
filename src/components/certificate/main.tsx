import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  DataContextProvider,
  useDataContext,
} from '../../contexts/teiDataContext';

const MainCertificate = () => {
  const { state } = useLocation();
  const { data: dataContext } = useDataContext();
  console.log('CONTEXT', dataContext);
  const [teiData, setTeiData] = useState([]);
  useEffect(() => {
    if (state === null) {
      return console.log('Data state is null, ', state);
      // request data from api if TrackedInstance is valid
      // load data and render them,
      // print results
    }
    setTeiData(state);
    //return console.log('Data state is present: proper routes, ', state);
  }, [state]);
  console.log('Data state is present: proper routes, ', teiData);
  return <div>main</div>;
};

export default MainCertificate;
