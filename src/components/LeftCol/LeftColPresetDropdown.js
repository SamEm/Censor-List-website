import { useState, useEffect } from 'react';
import styled from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const ListOfOptions = [
  {
    name: 'Automod - (Native)',
    preset: 'copyPreset',
    join: ', ',
    selected: true,
  },
  {
    name: 'Gearbot - (Bot)',
    preset: 'downloadPreset',
    join: '\n',
    selected: false,
  },
  {
    name: 'Dyno - (Bot)',
    preset: 'copyPreset',
    join: ', ',
    selected: false,
  },
]

export default function LeftColPresetDropdown({ setButtonState, selected, setSelected }) {
  const [options, setOptions] = useState([]);
  const [dropdownClick, setDropdownClick] = useState(false);

  useEffect(() => {
    setOptions(ListOfOptions);
    const SelectedOption = ListOfOptions.find(e => !!e.selected);
    setButtonState({
      downloadPreset: false,
      copyPreset: false,
      [SelectedOption.preset]: true,
    })
    setSelected({
      name: SelectedOption.name,
      presetSplit: SelectedOption.join
    })
  }, [])

  const clickedDropdown = () => {
    setDropdownClick(!dropdownClick);
  }

  const changePreset = async (e, i) => {
    const buttonPreset = e.target.dataset.preset;
    const name = e.target.dataset.name;
    options.forEach(e => {
      if(e.name === name) {
        e.selected = true;
      }
      else {
        e.selected = false;
      }
    })
    setButtonState({
      downloadPreset: false,
      copyPreset: false,
      [buttonPreset]: true,
    })
    setSelected({
      name: name,
      presetSplit: e.target.dataset.join
    })

    setDropdownClick(!dropdownClick);
  }

  return (
    <Container>
      <Dropdown>
        <SelectedCont className='Testing' onClick={clickedDropdown}>
          <Selected
            data-preset={selected.preset}
            data-join={selected.join}
            data-name={selected.name}
          >{selected.name}</Selected>
          <Arrow>
            {
              !dropdownClick ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
            }
          </Arrow>
        </SelectedCont>
        <DropdownOptions dropdownState={dropdownClick}>
        {
          options.map((e, i) => {
            if (!e.selected) {
              return (
                <Option 
                  key={i}

                  onClick={changePreset}
                  data-preset={e.preset}
                  data-join={e.join}
                  data-name={e.name}
                  >{e.name}</Option>
              )
            }
          })
        }
        </DropdownOptions>

      </Dropdown>

      <DropdownOptions>
        <Option dropdownState={dropdownClick}>Gearbot (Bot)</Option>
        <Option dropdownState={dropdownClick}>Dyno (Bot)</Option>
      </DropdownOptions>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`
const Dropdown = styled.div`
`;

const SelectedCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.black};
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 15px;
    margin: 5px 0;
    
    ${props => props.theme.shading.soft};
    :hover {
      background-color: ${props => props.theme.colors.greenHover};
    }
`;

const Selected = styled.div`

`;

const Arrow = styled.div`
  /* border: 1px solid red; */
  font-size: 30px;
  height: 25px;
  margin-top: -5px;
`;

const DropdownOptions = styled.div`
  position: absolute;
  width: 100%;
  display: ${({ dropdownState }) => !!dropdownState ? 'flex' : 'none'};
  flex-direction: column;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.boxColor};
`;

// const Option = styled.div``;

const Option = styled.div`
  background-color: ${props => props.selected ? props.theme.colors.green : props.theme.colors.button};
  color: ${props => props.selected && props.theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  
  ${props => props.theme.shading.soft};
  :hover {
    background-color: ${props => props.selected ? props.theme.colors.greenHover : props.theme.colors.buttonHover};
  }
`;