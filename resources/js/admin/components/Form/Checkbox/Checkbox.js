import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxLabel = ({label,...props}) => {
    return(
          <FormControlLabel
            control={
              <Checkbox
                {...props}
              />
            }
            label={label}
          />
    )
}

export default CheckboxLabel;