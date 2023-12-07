import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import CertificateBio from "./CertificateBio";
import { TrackedEntityInstanceProps } from "../../types/trackedEntity";
import CertififcateHeader from "./CertificateHeader";

import "./main.css";
import CertificateQrcCode from "./CertificateQrcCode";
import { useReactToPrint } from "react-to-print";
import { Button } from "@dhis2/ui";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
`;

const ActionButtons = styled.div`
  display: flex;
  margin: 10px 1px 1px 0px;

  & > button {
    margin-right: 3px;
  }
`;

const PrintContainer = styled.div`
  margin: 10px;
`;

// const BorderContainer = styled.div`
//   &.black-border {
//     border: 1px solid #000000;
//   }

//   &.white-border {
//     border: 1px solid #ffffff;
//   }

//   &.red-border {
//     border: 1px solid #da121a;
//   }

//   &.green-border {
//     border: 1px solid #078930;
//   }

//   &.yellow-border {
//     border: 1px solid #fcdd09;
//   }

//   &.blue-border {
//     border: 1px solid #0f47af;
//   }
// `;
interface BorderContainerProps {
  bordercolor?: string; // not using camalcase coz of issues on rendering
}

const BorderContainer = styled.div<BorderContainerProps>`
  border: 1px solid ${(props) => props.bordercolor || "#000"};
`;
const MainCertificate = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);
  const [teiData, setTeiData] = useState<
    TrackedEntityInstanceProps | undefined
  >();

  useEffect(() => {
    if (state === null) {
      // Request data from api if TrackedInstance is valid
      // Load data and render them,
      // Print results
    }
    setTeiData(state);
  }, [state]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    documentTitle: `births-notification-certificate-${teiData?.trackedEntityInstance}`,
    // onAfterPrint: printsTracking,
  });

  const borderColors = {
    red: "#da121a",
    white: "#ffffff",
    green: "#078930",
    yellow: "#fcdd09",
    blue: "#0f47af",
  };

  return (
    <Wrapper className="black-border">
      <ActionButtons>
        <Button
          className="btn btn-secondary"
          large
          secondary
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
        <Button
          className="btn btn-secondary"
          large
          secondary
          onClick={handlePrint}
        >
          Print
        </Button>
      </ActionButtons>
      <PrintContainer className="white-border" ref={componentRef}>
        {/*red border*/}
        <BorderContainer bordercolor={borderColors.red}>
          {/*white border*/}
          <BorderContainer bordercolor={borderColors.white}>
            {/*green border*/}
            <BorderContainer bordercolor={borderColors.green}>
              {/*yellow border*/}
              <BorderContainer bordercolor={borderColors.yellow}>
                {/*blue border*/}
                <BorderContainer bordercolor={borderColors.blue}>
                  <CertififcateHeader />
                  <CertificateBio data={teiData} />
                  <CertificateQrcCode data={teiData} />
                </BorderContainer>
              </BorderContainer>
            </BorderContainer>
          </BorderContainer>
        </BorderContainer>
      </PrintContainer>
    </Wrapper>
  );
});

export default MainCertificate;
