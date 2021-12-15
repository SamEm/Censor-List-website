import { useRef, useState } from 'react';
import styled from "styled-components";
import { RoundButtonDesign } from '../theme/GlobalStyles';

export default function Download({ selectedPhrases, globalState }) {
  const [fileName, setFileName] = useState(null);
  const [fileDownloadUrl, setFileDownloadUrl] = useState(null);
  const downloadButton = useRef(null);

  const setFileNameFunc = () => {
    //censor-time-date
    const currentDate = new Date();
    const constructDateTime = `${currentDate.getHours()}${currentDate.getMinutes()}-${currentDate.getDate()}${currentDate.getMonth() + 1}${currentDate.getFullYear()}`;
    const fileName = `censor-${constructDateTime}`;
    setFileName(fileName);
  }

  const downloadFile = async e => {
    if (selectedPhrases.length === 0) {
      // error
    } else {
      setFileNameFunc()
      let output = selectedPhrases.join(globalState.presetJoin);
      const blob = new Blob([output], { type: 'text/plain' });
      setFileDownloadUrl(URL.createObjectURL(blob));
      downloadButton.current.click();
    }
  }

  return(
    <DownloadBar>
      <RoundButtonDesign onClick={downloadFile}>
        Download file
      </RoundButtonDesign>
      <HiddenLink
        download={fileName}
        href={fileDownloadUrl}
        ref={downloadButton}
      >download</HiddenLink>
    </DownloadBar>
  )
}

const HiddenLink = styled.a`
  display: none;
`;

const DownloadBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;