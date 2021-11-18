import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme/GlobalStyles';
// import MetaTags from 'react-meta-tags';
import { OuterContainer, H1 } from './theme/GlobalStyles';
import LeftBar from './components/LeftBar';
import Categories from './components/Categories';

import ListOfCategories from './censors/bad_phrases.json';

console.log('loc',ListOfCategories)

export default function App() {
  const [selectedPhrases, setSelectedPhrases] = useState([]);
  const [categoryList, setCategoryList] = useState(null);
  const [filterCategories, setFilterCategories] = useState([]);
  const [globalState, setGlobalState] = useState({
    preset: 'gearbot',
    presetSplit: '\n'
  })

  useEffect(() => {
    const LoadWords = () => {
      try {
        setCategoryList([...ListOfCategories]);
        ListOfCategories.forEach(category => {
          setFilterCategories(cats => {
            if(cats && !cats.includes(category.categoryName)) {
              return [...cats, category.categoryName]
            }
          });
        });
      }
      catch (err) {
        console.log(err)
      }
    }
    LoadWords();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('-----', selectedPhrases)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <OuterContainer>
        <LeftBar 
          filterCategories={filterCategories} 
          selectedPhrases={selectedPhrases}
          globalState={globalState}
          setGlobalState={setGlobalState}
        />
        <Wrap>
          <Explainer>
            <H1>Censors</H1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Explainer>
          <CategoryOverheadWrap>
            <Categories 
              categoryList={categoryList}
              selectedPhrases={selectedPhrases}
              setSelectedPhrases={setSelectedPhrases}
            />
          </CategoryOverheadWrap>
        </Wrap>
      </OuterContainer>
    </ThemeProvider>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin-left: 340px;
`;

const CategoryOverheadWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Explainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${props => props.theme.colors.boxColor};
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px;
  max-width: 1200px;
  margin-right: 40px;
`;