<template>
  <v-col class="my-8 px-16 gx-3">
    <v-card
      variant="outlined"
      max-width="1000"
      class="d-flex mx-auto justify-center px-8"
    >
      <h3>Review Information</h3>
    </v-card>

    <v-card
      elevation="0"
      max-width="1000"
      class="d-flex mx-auto justify-center pa-1 mt-8"
    >
      <v-expansion-panels v-model="expandedPanel" class="" variant="accordion">
        <v-expansion-panel>
          <template #title>
            <span style="font-weight: bold"
              ><v-icon class="mr-4">mdi-alarm-panel-outline</v-icon>Company
              Details</span
            >
          </template>
          <v-expansion-panel-text>
            <v-card
              max-width="1000"
              variant="outline"
              elevation="0"
              class="mx-auto justify-center pa-4"
            >
              <h3 class="text-center text-h5 font-weight-bold">
                <!-- <v-icon icon="mdi-check-circle"></v-icon> -->
              </h3>
              <!-- <v-divider class="pb-8"> </v-divider> -->
              <v-row dense class="no-gutters">
                <v-col class="no-gutters">
                  <v-row class="text-h6 font-weight-bold text-medium-emphasis">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-account</v-icon>
                      <span class="font-weight-bold"> Name: </span>
                      <span v-for="item in companyDetails">
                        {{ item.name }}
                      </span>
                    </span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-abjad-arabic</v-icon>
                      <span class="font-weight-bold"> Name: </span>
                      Shelby LTD</span
                    >
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-link</v-icon>
                      <span class="font-weight-bold">URL </span>
                    </span>
                    <span class="font-weight-light ml-3">
                      {{ companyDetails.companyDetails.url }}</span
                    >
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-passport-biometric</v-icon>
                      <span class="font-weight-bold">
                        Visa Allocation(s) :
                      </span>
                    </span>

                    <span class="font-weight-light ml-3">
                      {{ companyDetails.companyDetails.visaAllocations }}
                      slots</span
                    >
                  </v-row>
                </v-col>
                <v-col class="no-gutters">
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-account-multiple-check</v-icon>
                      <span class="font-weight-bold"> Shareholders: </span>
                    </span>

                    <span class="font-weight-light ml-3">{{
                      companyDetails.companyDetails.shareholders
                    }}</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-cash-multiple</v-icon>
                      <span class="font-weight-bold"> Share Capital:</span>
                    </span>

                    <span class="font-weight-light ml-3"
                      >AED
                      {{ companyDetails.companyDetails.shareCapital }}</span
                    >
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light ml-3 text-medium-emphasis">
                      <v-icon class="mr-4">mdi-cash-refund</v-icon>
                      <span class="font-weight-bold"> Estimated turnover:</span>
                    </span>

                    <span class="font-weight-light ml-3">
                      AED
                      {{
                        companyDetails.companyDetails.estimatedTurnover
                      }}</span
                    >
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <template #title>
            <span style="font-weight: bold">
              <v-icon class="mr-4">mdi-shopping-outline</v-icon> Supplier
              Markets</span
            >
          </template>
          <v-expansion-panel-text>
            <v-card
              variant="outlined"
              elevation="0"
              class="mx-auto flex-wrap pa-3"
              style="
                max-width: 1000px;
                margin-top: 10px;
                display: flex;
                justify-content: space-around;
              "
            >
              <v-card
                variant="outline"
                elevation="0"
                class="mt-8 pa-8"
                max-width="800"
              >
                <h3 class="font-weight-bold d-flex justify-cente">
                  Key markets for Service
                </h3>
                <v-divider class="mb-8"></v-divider>

                <ul class="" style="list-style-type: circle">
                  <li>Market 1</li>
                  <li>Market 2</li>
                  <li>Market 3</li>
                  <li>Market 4</li>
                  <li>Market 5</li>
                </ul>
              </v-card>
              <v-divider class="border-opacity-100" vertical></v-divider>
              <v-card
                variant="outline"
                elevation="0"
                class="mt-8 pa-8"
                max-width="800"
              >
                <v-card-title class="font-weight-bold d-flex justify-cente"
                  >Supplier Markets
                </v-card-title>
                <v-divider class="mb-8"></v-divider>

                <ul class="" style="list-style-type: circle">
                  <li>Market 1</li>
                  <li>Market 2</li>
                  <li>Market 3</li>
                  <li>Market 4</li>
                  <li>Market 5</li>
                </ul>
              </v-card>
              <v-divider vertical></v-divider>
              <v-card
                variant="outline"
                elevation="0"
                class="mt-8 pa-8"
                max-width="800"
              >
                <v-card-title class="font-weight-bold d-flex justify-cente"
                  >Company Activities
                </v-card-title>
                <v-divider class="mb-8"></v-divider>

                <ul style="list-style-type: circle" lass="">
                  <li>Imitation Jewellery Smithing</li>
                  <li>3D Printing Products Production</li>
                  <li>Buses & Trucks Trading</li>
                </ul>
              </v-card>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <template #title>
            <span style="font-weight: bold"
              ><v-icon class="mr-4">mdi mdi-gift</v-icon> Packages</span
            >
          </template>
          <v-expansion-panel-text>
            <v-card
              max-width="1000"
              variant="outline"
              elevation="0"
              class="mx-auto justify-center px-8 pa-8 mt-8"
            >
              <v-row>
                <v-col>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light">
                      <v-icon>mdi-lightbulb-group-outline</v-icon>

                      Emirate:
                    </span>
                    <span class="font-weight-light ml-3">Dubai</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span class="font-weight-light">
                      <v-icon>mdi-map-clock-outline</v-icon>
                      Zone:
                    </span>
                    <span class="font-weight-light ml-3">SHAMS</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <span>
                      <v-icon>mdi-gift-open-outline</v-icon>
                      Selected Package :
                    </span>
                    <span class="font-weight-light ml-3">
                      2 Visa allocations</span
                    >
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="text-h6 font-weight-bold">
                    <span>
                      <v-icon>mdi-passport</v-icon>
                      Visa :
                    </span>
                    <span class="font-weight-light ml-3">
                      1 Employement Visa & 1 Investor Visa
                    </span>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <template #title>
            <v-icon class="mr-4">mdi-account-group</v-icon>
            <span style="font-weight: bold"> Signatories </span>
          </template>
          <v-expansion-panel-text>
            <v-list lines="one">
              <v-list-item
                v-for="n in 3"
                :key="n"
                :title="'John Doe ' + n"
                subtitle="Manager"
                prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"
              >
              </v-list-item>
              <!-- :prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg" -->
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-card
      variant="outlined"
      max-width="1000"
      class="text-center d-flex mx-auto justify-center"
      :style="{
        color: maxViolated ? 'red' : 'black',
        animation: maxViolated ? 'blinking 1s 3' : 'none',
      }"
    >
      <div class="error" style="color: red">{{ errorMessage }}</div>
      <div class="bbtn">
        <v-btn @click="checkMax()" variant="outlined"> Check </v-btn>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th class="text-left">Role</th>
            <th>Minimum</th>
            <th>Maximum</th>
          </tr>
        </thead>
        <tbody v-for="item in getZoneData().roles">
          <tr>
            <td class="font-weight-bold">{{ item.signatories }}</td>
            <td class="font-weight-bold text-left">{{ item.role }}</td>
            <td class="font-weight-bold">{{ item.minimum }}</td>
            <td class="font-weight-bold">{{ item.maximum }}</td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref } from "vue";

const errorMessage = ref(null);
const maxViolated = ref(false);
const expandedPanel = ref(0);
const roles = ref([
  {
    zone: "Meydan Freezone",
    roles: [
      {
        role: "Manager",
        minimum: 1,
        maximum: 1,
      },
      {
        role: "Director",
        minimum: 1,
        maximum: 4,
        signatories: "Signatories",
      },
      {
        role: "Shareholders",
        minimum: 1,
        maximum: 50,
      },
    ],
  },
  {
    zone: "IFZA",
    roles: [
      {
        role: "Manager",
        minimum: 1,
        maximum: 1,
      },
      {
        role: "Director",
        minimum: 1,
        maximum: 4,
        signatories: "Signatories",
      },
      {
        role: "Shareholders",
        minimum: 1,
        maximum: 10,
      },
    ],
  },
  {
    zone: "SHAMS",
    roles: [
      {
        role: "Manager",
        minimum: 1,
        maximum: 3,
      },
      {
        role: "Director",
        minimum: 1,
        maximum: 3,
        signatories: "Signatories",
      },
      {
        role: "Shareholders",
        minimum: 1,
        maximum: 50,
      },
    ],
  },
  {
    zone: "RAKEZ",
    roles: [
      {
        role: "Manager",
        minimum: 1,
        maximum: 3,
      },
      {
        role: "Director",
        minimum: 1,
        maximum: 3,
        signatories: "Signatories",
      },
      {
        role: "Shareholders",
        minimum: 1,
        maximum: 50,
      },
    ],
  },
]);
const getZoneData = () => {
  if (!roles.value) {
    return [];
  }
  return roles.value.find((item) => item.zone === "IFZA");
};
const displayRoles = () => {
  if (!roles.value || !this.getZoneData) {
    return [];
  }
  return this.roles.find((item) => item.zone === "IFZA");
};

const companyDetails = ref({
  companyDetails: {
    name: [" Shelby LTD", "Shelby Limited"],
    alternativeName: "Shelby LTD",
    url: "http://www.localhost.com",
    visaAllocations: "50 slots",
    shareholders: 24,
    shareCapital: "AED 2000",
    estimatedTurnover: "AED 63100",
  },
  supplierMarkets: {
    keyMarketsForService: [
      "Market 1",
      "Market 2",
      "Market 3",
      "Market 4",
      "Market 5",
    ],
    supplierMarkets: [
      "Market 1",
      "Market 2",
      "Market 3",
      "Market 4",
      "Market 5",
    ],
    companyActivities: [
      "Imitation Jewellery Smithing",
      "3D Printing Products Production",
      "Buses & Trucks Trading",
    ],
  },
  packages: {
    emirate: "Dubai",
    zone: "SHAMS",
    selectedPackage: "2 Visa allocations",
    visa: "1 Employement Visa & 1 Investor Visa",
  },
  signatories: [
    {
      name: "John Doe 1",
      role: "Manager",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "John Doe 2",
      role: "Manager",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "John Doe 3",
      role: "Manager",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ],
});
const signatoriesData = ref({
  manager: 2,
  shareholders: 10,
  director: 1,
});

const checkMax = () => {
  let selectedZone = "IFZA";

  if (selectedZone === "IFZA") {
    const { manager, shareholders, director } = signatoriesData.value;

    if (manager > 1) {
      maxViolated.value = true;
      errorMessage.value = "Maximum number of managers exceeded for IFZA zone.";
      console.log("Maximum number of managers exceeded for IFZA zone.");
    }

    if (shareholders > 10) {
      maxViolated.value = true;

      errorMessage.value =
        "Maximum number of shareholders exceeded for IFZA zone.";
      console.log("Maximum number of shareholders exceeded for IFZA zone.");
    }

    if (director > 1) {
      maxViolated.value = true;

      errorMessage.value =
        "Maximum number of directors exceeded for IFZA zone.";
      console.log("Maximum number of directors exceeded for IFZA zone.");
    }
  }
};
</script>

<style>
.table-container {
  max-height: 400px; /* Adjust the maximum height as needed */
  overflow-y: auto;
}

table {
  /* border-collapse: collapse; */
  width: 60%;
}

th,
td {
  /* border: 1px solid #dddddd; */
  text-align: center;
  padding: 8px;
  max-width: 150px; /* Adjust the maximum width as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

td.action {
  max-width: 100px; /* Adjust the maximum width for action column */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-padding .v-input {
  padding: 0 !important;
}

.no-margin {
  margin: 0 !important;
}
@keyframes blinking {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
