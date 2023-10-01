import { Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const BaseTab = styled(Tab)`
    @media screen and (max-width: 425px) {
        padding:2px;
        font-size:12px;
        min-width: 70px;
    }
`

export default BaseTab;