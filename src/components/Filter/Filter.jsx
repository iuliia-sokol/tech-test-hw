import { useEffect, useState } from "react";
import { FilterBox, FilterButton, FilterInput, SelectStyled } from "./Filter.styled"

export const FilterUI = ({ handleChangeType, setPageNumber, setUsers })=>{
    const [selectedOption, setSelectedOption] = useState({
        value: '',
        label: 'Show all'.toUpperCase(),
      });

      const options = [
        { value: '', label: 'show all'.toUpperCase() },
        { value: false, label: 'follow'.toUpperCase() },
        { value: true, label: 'followings'.toUpperCase() },
      ];

      useEffect(() => {
        handleChangeType(selectedOption);
      }, [selectedOption, handleChangeType]);

      const handleFilter = value => {
        setSelectedOption(value);
        setPageNumber(1);
        setUsers([])
      };
    

    return(
        <FilterBox>

        <FilterInput>
        <SelectStyled
        defaultValue={{
            value: '', label: 'show all'.toUpperCase()
        }}
        onChange={handleFilter}
        options={options}
        isSearchable={false}
        classNamePrefix="react-select"
      />
        </FilterInput>
        <FilterButton />
    </FilterBox>
    )
}