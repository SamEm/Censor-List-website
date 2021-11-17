import styled from "styled-components";
import { H3, ButtonDesign } from '../theme/GlobalStyles';
import Download from './Download';

export default function LeftBar({ filterCategories, selectedPhrases, globalState, setGlobalState }) {
  
  const changePreset = async (e, i) => {
    console.dir(e.target.dataset)
    //change color on click
    setGlobalState({
      preset: e.target.dataset.preset,
      presetJoin: e.target.dataset.join
    })
  }

  return(
    <Container>
      <HeaderWrap>
        <WordCountWrap>
          <H3>Phrases picked:</H3>
          <WordCount>
            {selectedPhrases.length <= 400 ? <Green>{selectedPhrases.length}</Green> : <Red>{selectedPhrases.length}</Red>}/<span>400</span>
          </WordCount>
        </WordCountWrap>
        <Wrap>
          <H3>Choose bot preset</H3>
          <Preset picked 
            onClick={changePreset}
            data-preset='gearbot'
            data-join='\n'
          >
            Gearbot</Preset>
          <Preset
            onClick={changePreset}
            data-preset='dyno'
            data-join=', '
          >
            Dyno</Preset>
        </Wrap>
        <Download
          selectedPhrases={selectedPhrases}
          globalState={globalState}
        />
        <PreviewWrap>
          <H3>File preview:</H3>
          <Preview>
            {selectedPhrases.join(globalState.presetJoin)}
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
  /* flex-direction: column; */
  align-items: center;
  gap: 5px;

  ${H3} {
    margin-bottom: 0;
  }
  margin-bottom: 5px;
`;

const WordCount = styled.div`
  display: flex;
  gap: 2px;
`;

const Green = styled.div`
  color: ${props => props.theme.colors.green};
`;
const Red = styled.div`
  color: ${props => props.theme.colors.red};
`;

const Wrap = styled.div`

`;

const Preset = styled.div`
  background-color: ${props => props.picked ? props.theme.colors.green : props.theme.colors.button};
  color: ${props => props.picked && props.theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
`;

const PreviewWrap = styled.div`

`;

const Preview = styled.pre`
  height: 200px;
  overflow: scroll;
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  padding: 15px;
`;