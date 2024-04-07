// store.js
import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applicationData: {
      personalInfo: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        dateOfBirth: '',
        nationality: '',
        ethnicity: '',
        comments: '',
      },
      employmentHistory: [],
    },
  }),

  getters: {
    // Add getters if needed
  },

  actions: {
    // Mutations to update personalInfo
    updatePersonalInfo(newPersonalInfo) {
      this.applicationData.personalInfo = newPersonalInfo;
    },

    // Mutations to update employmentHistory
    updateEmploymentHistory(newEmploymentHistory) {
      this.applicationData.employmentHistory = newEmploymentHistory;
    },
  },
});
