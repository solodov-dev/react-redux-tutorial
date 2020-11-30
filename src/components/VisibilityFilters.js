import React from 'react';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import { setFilter } from '../redux/actions';

function VisibilityFilters({ activeFilter, setFilter }) {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={`filter ${
              currentFilter === activeFilter && 'filter--active'
            }`}
            onClick={() => setFilter(VISIBILITY_FILTERS[filterKey])}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({ activeFilter: state.visibilityFilter });
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
