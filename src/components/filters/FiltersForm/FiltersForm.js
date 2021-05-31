import React from 'react';
import { FormField, Checkbox, Button, Select } from '../../shared';
import './FiltersForm.css';

function FiltersForm({ beforeFilters, tags, onSubmit}) {

    const [filters, setFilters] = React.useState(beforeFilters);

    const handleFiltersForm = event => {

        let tagsValues = [];

        if (event.target.name === 'tags') {
            for (const option of event.target.options) {
                if (option.selected) {
                    tagsValues.push(option.value);
                }
            }
        }

        setFilters(filters => {
            return {
                ...filters,
                [event.target.name]: event.target.type === 'checkbox' ? 
                                     event.target.checked : 
                                     event.target.name === 'tags' ?
                                     tagsValues :
                                     event.target.value
            };
        });
    }

    const handleSubmitFilterForm = event => {
        event.preventDefault();
        onSubmit(filters);
    };

    return (
        <form onSubmit={handleSubmitFilterForm} className='form-filters'>
            <FormField 
                className={'input-Filter'}
                type={'text'}
                name={'name'}
                placeholder={'name'}
                value={filters.name || ''}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input-Filter'}
                type={'number'}
                name={'minPrice'}
                placeholder={'min price'}
                value={filters.minPrice || ''}
                onChange={handleFiltersForm}
            />
            <FormField 
                className={'input-Filter'}
                type={'number'}
                name={'maxPrice'}
                placeholder={'max price'}
                value={filters.maxPrice || ''}
                onChange={handleFiltersForm}
            />
            <Checkbox
                name={'sale'}
                type={'checkbox'}
                text={'Sale'}
                disabled={false}
                checked={filters.sale || ''}
                onChange={handleFiltersForm}
            />
            <Checkbox
                name={'purchase'}
                type={'checkbox'}
                text={'Purchase'}
                disabled={false}
                checked={filters.purchase || ''}
                onChange={handleFiltersForm}
            />
            <Select 
                tags={tags}
                name={'tags'}
                multiple
                onChange={handleFiltersForm}
            />
            <Button>Apply filters for the Adds</Button>
        </form>
    );
}

export default FiltersForm;