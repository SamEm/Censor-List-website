import { useState, useEffect } from 'react';
import styled from "styled-components";
import { H3, RoundButtonDesign } from '../../theme/GlobalStyles';
import Download from './Download';
import { SiKofi, SiTwitter, SiGithub } from 'react-icons/si';
import frootIcon from '../../assets/logo.png';
import LeftColPresetDropdown from './LeftColPresetDropdown';

export default function LeftCol({ filterCategories, selectedPhrases }) {
  const [buttonState, setButtonState] = useState({
    downloadPreset: true,
    copyPreset: false,
  });
  const [selected, setSelected] = useState({});

  const [phraseCountHigh, setPhraseCountHigh] = useState(false);
  const { downloadPreset, copyPreset } = buttonState;

  useEffect(() => {
    if (selectedPhrases.length <= 400) {
      setPhraseCountHigh(false);
    }
    else {
      setPhraseCountHigh(true);
    }
  }, [selectedPhrases.length])

  const copyText = () => {
    navigator.clipboard.writeText(selectedPhrases);
  }

  console.log(buttonState);
  return (
    <Container>
      <InnerCont>

        <LeftBarWrap>
          <WordCountWrap phraseCountHigh={phraseCountHigh}>
            <H3>Phrases picked:</H3>
            <WordCount>
              <Count phraseCountHigh={phraseCountHigh}>{selectedPhrases.length}</Count>/<span>400</span>
            </WordCount>
          </WordCountWrap>
          <Wrap>
            <H3>Choose preset</H3>
            <LeftColPresetDropdown 
              setButtonState={setButtonState}
              buttonState={buttonState}
              setSelected={setSelected}
              selected={selected}
            />
          </Wrap>
          <Wrap>
            <H3>Instructions</H3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Wrap>
          <Wrap>
            {
              !!downloadPreset &&
              <Download
                selectedPhrases={selectedPhrases}
                selected={selected}
              />
            }
            {
              !!copyPreset &&
              <RoundButtonDesign onClick={copyText}>
                Copy phrases
              </RoundButtonDesign>
            }

            <PreviewWrap>
              {!!downloadPreset && <H3>File preview:</H3>}
              {!!copyPreset && <H3>List preview:</H3>}
              
              <Preview>
                {selectedPhrases.join(selected.presetSplit)}
              </Preview>
            </PreviewWrap>
          </Wrap>
        </LeftBarWrap>
        <Socials>
          <Link target="_blank" href="https://logiz.net/"><Froot src={frootIcon} /></Link>
          <Link target="_blank" href="https://twitter.com/Logiz_"><SiTwitter /></Link>
          <Link target="_blank" href="https://github.com/SamEm/Censor-List-website"><SiGithub /></Link>
          <Link target="_blank" href="https://ko-fi.com/R5R47HAVP"><SiKofi /></Link>
        </Socials>
        
      </InnerCont>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background: ${props => props.theme.colors.boxColor};
  overflow-y: scroll;
`;

const InnerCont = styled.div`
  min-height: 100vh;
  position: relative;
`;

const LeftBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 45px 30px;
  gap: 20px;
  padding-bottom: 70px;
`;

const WordCountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${H3} {
    margin-bottom: 0;
  }
  padding-bottom: 5px;
  border-bottom: 2px solid ${props => props.phraseCountHigh ? props.theme.colors.red : props.theme.colors.green};
`;

const WordCount = styled.div`
  display: flex;
  gap: 2px;
`;

const Count = styled.div`
  color: ${props => props.phraseCountHigh ? props.theme.colors.red : props.theme.colors.green};
`;

const Wrap = styled.div``;

const PreviewWrap = styled.div`
  margin-top: 15px;
`;

const Preview = styled.div`
  height: 200px;
  overflow-y: scroll;
  white-space: pre-wrap;
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  padding: 15px;
`;

const Socials = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.boxColor};
`;

const Link = styled.a`
  font-size: 25px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :hover {
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Froot = styled.img`
  width: 25px;
`;