import React from 'react';
import Select from 'react-select';
import { getTags } from '../../api/adds';

const SelectTag = ({ handleChange, setNewTags}) => {

    const [tags, setTags] = React.useState([]);
    React.useEffect( ()=> {
        getTags().then(setTags);
    },[])
    
    const tagsList = tags.map(tag => {
        return { label: tag, value: tag }
    })

    const changeTags = (event) => {
        if(handleChange){
            const changingTags = event.map( tag => tag.label );
            if(setNewTags) setNewTags(changingTags)
            handleChange(changingTags);
        }
    }
    return (
        <Select 
            options={ tagsList } 
            onChange={ changeTags } 
            isMulti
        />
    )
}

export default SelectTag;