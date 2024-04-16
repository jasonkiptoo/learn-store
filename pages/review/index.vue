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
              <v-row class="no-utters">
                <v-col
                  class="no-gtters"
                  style="display: flex; flex-direction: column; gap: 1rem"
                >
                  <v-row class="text-h6 font-weight-bold">
                    <div class="cont text-body-2 d-fle align-center">
                      <div class="ic d-flex align-center text-medium-emphasis">
                        <v-icon class="mr-4">mdi-account</v-icon>
                        <h3 class="text-h">Name (English)</h3>
                      </div>
                      <div class="name font-weight-black">
                        {{ formarted }}
                      </div>
                    </div>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <div class="cont text-body-2 d-fle align-center">
                      <div class="ic d-flex align-center">
                        <v-icon class="mr-4">mdi-abjad-arabic</v-icon>
                        <h3 class="text-medium-emphasis text-h">
                          Name (Arabic)
                        </h3>
                      </div>
                      <div class="font-weight-bold">
                        {{ formarted }}
                      </div>
                    </div>
                  </v-row>
                  <v-row class="text-h6">
                    <div class="cont text-body-2 d-fle align-center">
                      <div class="ic d-flex align-center text-medium-empassis">
                        <v-icon class="mr-4">mdi-link</v-icon>
                        <h3 class="text-medium-emphasis">Website URL</h3>
                      </div>
                      <div class="name font-weight-bold">
                        {{ companyDetails.companyDetails.url }}
                      </div>
                    </div>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    <div class="cont text-body-2 d-fle align-center">
                      <div class="ic d-flex align-center">
                        <v-icon class="mr-4">mdi-passport-biometric</v-icon>
                        <h3 class="text-medium-emphasis">
                          Visa Allocation(s) :
                        </h3>
                      </div>
                      <div class="name font-weight-bold">
                        {{ companyDetails.companyDetails.url }}
                      </div>
                    </div>
                  </v-row>
                </v-col>
                <v-col class="n">
                  <div class="ic d-flex align-cente">
                    <v-icon class="mr-4">mdi-account-multiple-check</v-icon>
                    <h3 class="text-medium-emphasis">Shareholders:</h3>
                  </div>
                  <div class="name font-weight-bold">
                    {{ companyDetails.companyDetails.shareholders }}
                  </div>

                  <div class="ic d-flex align-center">
                    <v-icon class="mr-4">mdi-cash-multiple</v-icon>
                    <h3 class="text-medium-emphasis">Share Capital:</h3>
                  </div>
                  <div class="name font-weight-bold">
                    {{ companyDetails.companyDetails.shareCapital }}
                  </div>

                  <div class="ic d-flex align-center">
                    <v-icon class="mr-4">mdi-cash-refund</v-icon>
                    <h3 class="text-medium-emphasis">Estimated turnover:</h3>
                  </div>
                  <div class="name font-weight-bold">
                    {{ companyDetails.companyDetails.estimatedTurnover }}
                  </div>
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
              variant="outlind"
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
                variant="outlined"
                elevation="0"
                class="mt-8 pa-8 d-fle"
                max-width="800"
              >
                <h3 class="font-weight-bold d-flex justify-cente">
                  Key markets for Service
                </h3>
                <v-divider class="mb-4"></v-divider>

                <ul class="d-fle" style="list-style-type: circle">
                  <li>Market 1</li>
                  <li>Market 2</li>
                  <li>Market 3</li>
                  <li>Market 4</li>
                  <li>Market 5</li>
                </ul>
              </v-card>
              <v-card
                variant="outlined"
                elevation="0"
                class="mt-8 pa-8"
                max-width="800"
              >
                <h3 class="font-weight-bold">Supplier Markets</h3>
                <v-divider class="mb-4"></v-divider>

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
                variant="outlined"
                elevation="0"
                class="mt-8 pa-8"
                max-width="800"
              >
                <h3 class="font-weight-bold d-flex justify-cente">
                  Company Activities
                </h3>
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
              class="mx-auto justify-center pa-8 mt-8"
            >
              <v-row>
                <v-col>
                  <div class="cont text-body-2 d-fle align-center">
                    <div class="ic d-flex align-center">
                      <v-icon class="mr-4">mdi-passport-biometric</v-icon>
                      <h3 class="text-medium-emphasis">Emirate</h3>
                    </div>
                    <div class="name text-h6 font-weight-black">Dubai</div>
                  </div>
                </v-col>
                <v-divider thickness="12" vertical></v-divider>
                <v-col>
                  <div class="cont text-body-2 d-fle align-center">
                    <div class="ic d-flex align-center">
                      <v-icon class="mr-4">mdi mdi-web</v-icon>
                      <h3 class="text-medium-emphasis">Zone</h3>
                    </div>
                    <div class="name text-h6 font-weight-black">Meydan Zone</div>
                  </div>
                </v-col>
                <v-divider thickness="12" color="warning" vertical></v-divider>


                <v-col>
                  <div class="cont text-body-2 d-fle align-center">
                    <div class="ic d-flex align-center">
                      <v-icon class="mr-4">mdi-gift-open-outline</v-icon>
                      <h3 class="text-medium-emphasis">Selected Package</h3>
                    </div>
                    <div class="name text-h6 font-weight-black">2 Visa allocations</div>
                  </div>
                </v-col>
                <v-divider inset thickness="12" color="warning" vertical></v-divider>


                <v-col>
                  <div class="cont text-body-2 d-fle align-center">
                    <div class="ic d-flex align-center">
                      <v-icon class="mr-4">mdi-passport</v-icon>
                      <h3 class="text-medium-emphasis">Visa package</h3>
                    </div>
                    <div class="name font-weight-black">2 Employement Visa (s)</div>
                    <div class="name font-weight-black">1 Investor Visa</div>
                  </div>
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
                v-for="n in companyDetails.signatories"
                :key="n"
                :title="n.name"
                :subtitle="n.role"
                :prepend-avatar="n.avatar"
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
const formarted = computed(() => {
  let names = companyDetails.value.companyDetails.name;
  return names.join(",");
});
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
      name: "Avila Johnes",
      role: "Manager",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "maruki Suziki",
      role: "Director",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "Angel Akii",
      role: "Share Holder",
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

      setTimeout(() => {
      maxViolated.value = false;
      errorMessage.value=""
        
      }, 3000);
      errorMessage.value = "Maximum number of managers exceeded for IFZA zone.";
      console.log("Maximum number of managers exceeded for IFZA zone.");
      return
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
