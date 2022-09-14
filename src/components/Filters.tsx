//typescript react compenent
import React from 'react';
import { Container, RangeSlider, Paper, SegmentedControl, Checkbox } from '@mantine/core';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { filterByFiltersRequest } from '../store/filter/actions';

type FiltersProps = {
    pageTitle?: string;
};

const Filters: React.FC<FiltersProps> = () => {
    const loading = useAppSelector((state) => state.filter.pending);
    const woodFilter = useAppSelector(state => state.filter.costFilters.filters.includes("Wood"));
    const foodFilter = useAppSelector(state => state.filter.costFilters.filters.includes("Food"));
    const goldFilter = useAppSelector(state => state.filter.costFilters.filters.includes("Gold"));
    const woodFilterRange = useAppSelector(state => state.filter.costFilters.filtersRanges.Wood);
    const foodFilterRange = useAppSelector(state => state.filter.costFilters.filtersRanges.Food);
    const goldFilterRange = useAppSelector(state => state.filter.costFilters.filtersRanges.Gold);

    const dispatch = useAppDispatch();

    return (
        <Container
        >
            <Paper shadow="sm" style={{ margin: "0 20px 0 20px", padding: "5px 20px 20px 20px" }}>
                <h2> Ages</h2>
                <SegmentedControl
                    data={[
                        { label: 'All', value: 'All' },
                        { label: 'Dark', value: 'Dark' },
                        { label: 'Feudal', value: 'Feudal' },
                        { label: 'Castle', value: 'Castle' },
                        { label: 'Imperial', value: 'Imperial' },
                    ]}
                    orientation="horizontal"
                    onChange={(value) =>
                        dispatch(filterByFiltersRequest({ ageFilter: value }))
                    }
                    fullWidth
                    disabled={loading ? true : false}
                    className="age-filter"
                />    <h2> Costs</h2>

                <Checkbox label="Wood"
                    onChange={(event) => {
                        dispatch(filterByFiltersRequest({ woodFilter: event.currentTarget.checked }))
                    }}
                />
                <RangeSlider max={200} color={"indigo"} sx={{
                    margin: "10px 0 15px 0",
                }}
                    onChangeEnd={(value) => {
                        dispatch(filterByFiltersRequest({ woodFilterRange: value }))
                    }
                    }
                    disabled={loading || !woodFilter ? true : false}
                    defaultValue={woodFilterRange}
                    data-testid="wood-filter-slider"
                />

                <Checkbox label="Food"
                    onChange={(event) => {
                        dispatch(filterByFiltersRequest({ foodFilter: event.currentTarget.checked }))
                    }} />
                <RangeSlider max={200} color={"lime"} sx={{
                    margin: "10px 0 15px 0",
                }}
                    onChangeEnd={(value) => {
                        dispatch(filterByFiltersRequest({ foodFilterRange: value }))
                    }
                    }
                    disabled={loading || !foodFilter ? true : false}
                    defaultValue={foodFilterRange}
                />

                <Checkbox label="Gold"
                    onChange={(event) => {
                        dispatch(filterByFiltersRequest({ goldFilter: event.currentTarget.checked }))
                    }}
                />
                <RangeSlider max={200} color="yellow" sx={{
                    margin: "10px 0 15px 0",
                }}
                    onChangeEnd={(value) => {
                        dispatch(filterByFiltersRequest({ goldFilterRange: value }))
                    }
                    }
                    disabled={loading || !goldFilter ? true : false}
                    defaultValue={goldFilterRange}
                />
            </Paper>
        </Container>
    );
}

export default Filters;