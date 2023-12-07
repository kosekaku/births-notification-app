import styled from "styled-components";

const CertificateHeader = () => {
  return (
    <div>
      <CertificateHeaderWrapper>
        <LogoContainer>
          <Image src="/flag.webp" alt="South Sudan Flag logo" />
        </LogoContainer>

        <TextContainer>
          <h2>Republic of South Sudan</h2>
          <h2>Ministry of Health</h2>
          <h2>Birth Notifications Certificate</h2>
        </TextContainer>

        <MinistryLogoContainer>
          <Image src="/ministry.jpg" alt="Ministry of Health logo" />
        </MinistryLogoContainer>
      </CertificateHeaderWrapper>
    </div>
  );
};

export default CertificateHeader;

const CertificateHeaderWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 50%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextContainer = styled.div`
  text-align: center;
  color: black.900;
`;

const MinistryLogoContainer = styled.div`
  width: 50%;
  height: 150px;
  overflow: hidden;
`;

// const styles = {
//   image: { width: "50%", height: "200px", overflow: "hidden" },
// };
// const CertififcateHeader = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "grid",
//           gridAutoFlow: "column",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ width: "50%", height: "200px", overflow: "hidden" }}>
//           <img
//             style={{ width: "100%", height: "100%", objectFit: "contain" }}
//             src="/flag.webp"
//             alt="South Sudan Flag logo"
//           />
//         </div>

//         <div style={{ textAlign: "center", color: "black.900" }}>
//           <h2>Republic of South Sudan</h2>
//           <h2>Ministry of Health</h2>
//           <h2>Birth Notifications Certificate</h2>
//         </div>

//         <div style={{ width: "50%", height: "150px", overflow: "hidden" }}>
//           <img
//             style={{ width: "100%", height: "100%", objectFit: "contain" }}
//             src="/ministry.jpg"
//             alt="Ministry of Health logo"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertififcateHeader;
