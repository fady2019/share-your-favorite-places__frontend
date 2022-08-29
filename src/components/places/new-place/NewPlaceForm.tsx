import React from 'react';

import FormInput from '../../ui/input/Input';

import { VALIDATOR_REQUIRE, VALIDATOR_MIN_LENGTH } from '../../../utilities/validators';

const NewPlaceForm: React.FC<any> = (props) => {
    return <form>
        <FormInput 
            type="text" 
            label='Title' 
            validators={[
                VALIDATOR_REQUIRE("Place title is required"),
                VALIDATOR_MIN_LENGTH(5, "PLace title must be at least 5 characters")
            ]}
        />
    </form>;
};

export default NewPlaceForm;
