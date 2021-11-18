import { useState, useEffect } from 'react';
import styled from "styled-components";
import { H3, RoundButtonDesign } from '../theme/GlobalStyles';
import Download from './Download';

export default function LeftBar({ filterCategories, selectedPhrases, globalState, setGlobalState }) {
  const [buttonState, setButtonState] = useState({
    gearbot: true,
    dyno: false,
  });
  const [phraseCountHigh, setPhraseCountHigh] = useState(false);
  const {gearbot, dyno} = buttonState;
  
  useEffect(() => {
    if (selectedPhrases.length <= 400) {
      setPhraseCountHigh(false);
    }
    else {
      setPhraseCountHigh(true);
    }
  }, [selectedPhrases.length])

  const changePreset = async (e, i) => {
    const buttonID = e.target.dataset.preset;
    setButtonState({
      gearbot: false,
      dyno: false,
      [buttonID]: true
    })
    setGlobalState({
      preset: buttonID,
      presetSplit: e.target.dataset.join
    })
  }

  const copyText = () => {
    navigator.clipboard.writeText(selectedPhrases);
  }
  
  return(
    <Container>
      <HeaderWrap>
        <WordCountWrap phraseCountHigh={phraseCountHigh}>
          <H3>Phrases picked:</H3>
          <WordCount>
            <Count phraseCountHigh={phraseCountHigh}>{selectedPhrases.length}</Count>/<span>400</span>
          </WordCount>
        </WordCountWrap>
        <Wrap>
          <H3>Choose bot preset</H3>
          <Preset 
            onClick={changePreset}
            data-preset='gearbot'
            data-join={'\n'}
            selected={gearbot}
          >
            Gearbot</Preset>
          <Preset
            onClick={changePreset}
            data-preset='dyno'
            data-join={', '}
            selected={dyno}
          >
            Dyno</Preset>
        </Wrap>
        <Wrap>
          <H3>Instructions</H3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Wrap>
        {
          !!gearbot && 
          <Download
            selectedPhrases={selectedPhrases}
            globalState={globalState}
          />
        }
        {
          !!dyno && 
          <RoundButtonDesign onClick={copyText}>
            Copy phrases
          </RoundButtonDesign>
        }
        
        <PreviewWrap>
          <H3>File preview:</H3>
          <Preview>
            {selectedPhrases.join(globalState.presetSplit)}
          </Preview>
        </PreviewWrap>
      </HeaderWrap>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background: ${props => props.theme.colors.boxColor};
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 30px;
  gap: 20px;
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

const Preset = styled.div`
  background-color: ${props => props.selected ? props.theme.colors.green : props.theme.colors.button};
  color: ${props => props.selected && props.theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  margin: 5px 0;
  
  ${props => props.theme.shading.soft};
  :hover {
    background-color: ${props => props.selected ? props.theme.colors.greenHover : props.theme.colors.buttonHover};
  }
`;

const PreviewWrap = styled.div``;

const Preview = styled.pre`
  height: 200px;
  overflow: scroll;
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  padding: 15px;
`;