// searchFormData.js

import { createSlice } from '@reduxjs/toolkit';

const searchFormDataSlice = createSlice({
  name: 'formData',
  initialState: {},
  reducers: {
    setFormData: (state, action) => {
      const formData = action.payload;

      const formattedSearchData = {
        issueDateInterval: {
          startDate: formData.startDate,
          endDate: formData.endDate,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: 'company',
                sparkId: null,
                entityId: null,
                inn: formData.inn.replace(/\D/g, ''),
                maxFullness: formData.maxFullness,
                inBusinessNews: formData.inBusinessNews,
              },
            ],
            onlyMainRole: formData.onlyMainRole,
            tonality: formData.tonality,
            onlyWithRiskFactors: formData.onlyWithRiskFactors,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },

        attributeFilters: {
          excludeTechNews: !formData.includeTechNews,
          excludeAnnouncements: !formData.includeAnnouncements,
          excludeDigests: !formData.includeDigests,
        },
        similarMode: 'none',
        limit: formData.limit,
        sortType: 'sourceInfluence',
        sortDirectionType: 'desc',
        intervalType: 'month',
        histogramTypes: ['totalDocuments', 'riskFactors'],
      };
      state.data = formData;
      state.formattedSearchData = formattedSearchData;

      localStorage.setItem(
        'formattedSearchData',
        JSON.stringify(formattedSearchData),
      );
    },
  },
});

export const { setFormData } = searchFormDataSlice.actions;

export default searchFormDataSlice.reducer;
