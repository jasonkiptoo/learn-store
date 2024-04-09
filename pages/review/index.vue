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
            <span style="font-weight: bold">Company Details</span>
          </template>
          <v-expansion-panel-text>
            <v-card
              max-width="1000"
              variant="outlined"
              elevation="0"
              class="mx-auto justify-center px-8 pa-8 mt-8"
            >
              <h3 class="text-center text-h5 font-weight-bold">
                Company details
              </h3>
              <v-divider class="pb-8"> </v-divider>
              <v-row>
                <v-col>
                  <v-row class="text-h6 font-weight-bold">
                    Company name (English):
                    <span class="font-weight-light ml-3">Shelby LTD</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Company name (Arabic):
                    <span class="font-weight-light ml-3">Shelby LTD</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Company URL:
                    <span class="font-weight-light ml-3">
                      http://www.localhost.com</span
                    >
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Visa Allocation(s) :
                    <span class="font-weight-light ml-3"> 50 slots</span>
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="text-h6 font-weight-bold">
                    Shareholders:
                    <span class="font-weight-light ml-3">24</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Share Capital:
                    <span class="font-weight-light ml-3">AED 2000</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Estimated turnover:
                    <span class="font-weight-light ml-3"> AED 63100</span>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <template #title>
            <span style="font-weight: bold">Supplier Markets</span>
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
            <span style="font-weight: bold">Packages</span>
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
                    Emirate:
                    <span class="font-weight-light ml-3">Dubai</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Zone:
                    <span class="font-weight-light ml-3">SHAMS</span>
                  </v-row>
                  <v-row class="text-h6 font-weight-bold">
                    Selected Package :
                    <span class="font-weight-light ml-3">
                      2 Visa allocations</span
                    >
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="text-h6 font-weight-bold">
                    Visa :
                    <span class="font-weight-light ml-3">
                      1 Employement Visa & 1 Investor Visa
                    </span>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <!-- <v-card
      max-width="1000"
      variant="outlined"
      elevation="0"
      class="mx-auto justify-center px-8 pa-8 mt-8"
    >
      <h3 class="text-center text-h5 font-weight-bold">Company details</h3>
      <v-divider class="pb-8"> </v-divider>
      <v-row>
        <v-col>
          <v-row class="text-h6 font-weight-bold">
            Company name (English):
            <span class="font-weight-light ml-3">Shelby LTD</span>
          </v-row>
          <v-row class="text-h6 font-weight-bold">
            Company name (Arabic):
            <span class="font-weight-light ml-3">Shelby LTD</span>
          </v-row>
          <v-row class="text-h6 font-weight-bold">
            Company URL:
            <span class="font-weight-light ml-3">
              http://www.localhost.com</span
            >
          </v-row>
          <v-row class="text-h6 font-weight-bold">
            Visa Allocation(s) :
            <span class="font-weight-light ml-3"> 50 slots</span>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="text-h6 font-weight-bold">
            Shareholders:
            <span class="font-weight-light ml-3">24</span>
          </v-row>
          <v-row class="text-h6 font-weight-bold">
            Share Capital:
            <span class="font-weight-light ml-3">AED 2000</span>
          </v-row>
          <v-row class="text-h6 font-weight-bold">
            Estimated turnover:
            <span class="font-weight-light ml-3"> AED 63100</span>
          </v-row>
        </v-col>
      </v-row>
    </v-card> -->
  </v-col>
</template>

<script setup>
import { ref } from "vue";

const expandedPanel = ref(2);

const companyDetails = {
  englishNames: ["English Name 1", "English Name 2", "English Name 3"],
  arabicNames: ["Arabic Name 1", "Arabic Name 2", "Arabic Name 3"],
  visaAllocationNumber: "XXXXXXXX",
  companyWebsiteURL: "www.example.com",
  sharedCapitalInfo: "$XXXXXX",
  estimatedTurnover: "$XXXXXX",
  keyMarkets: ["Market 1", "Market 2", "Market 3", "Market 4", "Market 5"],
  suppliers: [
    "Supplier 1",
    "Supplier 2",
    "Supplier 3",
    "Supplier 4",
    "Supplier 5",
  ],
};
</script>
