// store.ts
import { defineStore } from "pinia";

interface PersonalInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  nationality: string;
  ethnicity: string;
  comments: string;
}

interface State {
  applicationData: {
    personalInfo: PersonalInfo;
    employmentHistory: any[]; // You might want to define a proper type for employment history
  };
}

const initialState: State = {
  applicationData: {
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      dateOfBirth: "",
      nationality: "",
      ethnicity: "",
      comments: "",
    },
    employmentHistory: [],
  },
};

export const useApplicationStore = defineStore("application", {
  state: (): State => {
    // Retrieve state from local storage if available, otherwise use initial state
    let savedState: State | null = null;
    if (typeof localStorage !== "undefined") {
      savedState = JSON.parse(
        localStorage.getItem("applicationData") || "null"
      );
    }
    return {
      applicationData: { ...initialState.applicationData, ...savedState },
    };
  },

  getters: {
    // Add getters if needed
  },

  actions: {
    // Mutation to update personalInfo
    updatePersonalInfo(newPersonalInfo: PersonalInfo): void {
      this.applicationData.personalInfo = newPersonalInfo;
      // Save state to local storage if available
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(
          "applicationData",
          JSON.stringify(this.applicationData)
        );
      }
    },

    // Mutation to update employmentHistory
    updateEmploymentHistory(newEmploymentHistory: any[]): void {
      this.applicationData.employmentHistory = newEmploymentHistory;
      // Save state to local storage if available
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(
          "applicationData",
          JSON.stringify(this.applicationData)
        );
      }
    },
  },
});
