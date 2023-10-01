/* eslint-disable */
import { InputAdornment, TextField, Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchField = styled(TextField)`
margin: 10px;
`;

function SuperheroSearchField() {
    return (
        <SearchField
            id="outlined-adornment"
            label="Search"
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SuperheroSearchField;