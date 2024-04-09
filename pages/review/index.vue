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
      max-width="1000"
      variant="outline"
      elevation="1"
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
    </v-card>

    <div
      class="mx-auto flex-wrap"
      style="
        max-width: 1000px;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
      "
    >
      <v-card variant="outline" elevation="1" class="mt-8 pa-8" max-width="800">
        <h3 class="font-weight-bold d-flex justify-cente">
          Key markets for Service / Product
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
      <v-card variant="outline" elevation="1" class="mt-8 pa-8" max-width="800">
        <v-card-title class="font-weight-bold d-flex justify-cente"
          >Supplier Markets
        </v-card-title>
        <v-divider class="mb-8"></v-divider>

        <ol class="">
          <li>Market 1</li>
          <li>Market 2</li>
          <li>Market 3</li>
          <li>Market 4</li>
          <li>Market 5</li>
        </ol>
      </v-card>
      <v-card variant="outline" elevation="1" class="mt-8 pa-8" max-width="800">
        <v-card-title class="font-weight-bold d-flex justify-cente"
          >Company Activities
        </v-card-title>
        <v-divider class="mb-8"></v-divider>

        <ol class="">
          <li>Imitation Jewellery Smithing</li>
          <li>3D Printing Products Production</li>
          <li>Buses & Trucks Trading</li>
        </ol>
      </v-card>
    </div>

    <v-card
      max-width="1000"
      variant="outline"
      elevation="1"
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
    </v-card>

    <!-- <v-card
        variant="outline"
        elevation="1"
        class="px-8 pa- mt-8 mx-auto"
        max-width="800"
      >
        <v-card-title class="font-weight-bold d-flex justify-center"
          >Supplier Markets
        </v-card-title>

        <v-card-subtitle class="font-weight-bold">Key Markets:</v-card-subtitle>
        <ul>
          <li>Market 1</li>
          <li>Market 2</li>
          <li>Market 3</li>
          <li>Market 4</li>
          <li>Market 5</li>
        </ul>
      </v-card>

      <v-card variant="outlined" class="mx-auto mt-8 pa-4" max-width="800">
        <v-card-title class="font-weight-bold d-flex justify-center"
          >Supplier Markets
        </v-card-title>

        <v-card-subtitle class="font-weight-bold">Key Markets:</v-card-subtitle>
        <ul>
          <li>Market 1</li>
          <li>Market 2</li>
          <li>Market 3</li>
          <li>Market 4</li>
          <li>Market 5</li>
        </ul>
      </v-card>
      <v-card variant="outlined" class="mx-auto mt-8 pa-4" max-width="800">
        <v-card-title class="font-weight-bold d-flex justify-center"
          >Supplier Markets
        </v-card-title>

        <v-card-subtitle class="font-weight-bold">Key Markets:</v-card-subtitle>
        <ul>
          <li>Market 1</li>
          <li>Market 2</li>
          <li>Market 3</li>
          <li>Market 4</li>
          <li>Market 5</li>
        </ul> -->
    <!-- </v-card> -->

    <!-- <v-card class="mx-aut mt-8" max-width="800">
        <v-card-title class="font-weight-bold d-flex justify-center"
          >Company Details</v-card-title
        >
        <v-col dense class="pa-4">
          <v-col cols="12" md="6">
            <v-card-title class="font-weight-bold"
              >Company name: <span class="font-weight-light">Shelby LTD</span>
            </v-card-title>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title class="font-weight-bold"
              >Company name: <span class="font-weight-light">Shelby LTD</span>
            </v-card-title>
          </v-col>
        </v-col>

        <v-card-subtitle class="font-weight-bold"
          >Other Details:</v-card-subtitle
        >
        <ul>
          <li>Visa Allocation Number of Shareholders: XXXXXXX</li>
          <li>Company Website URL: www.example.com</li>
          <li>Shared Capital Info: $XXXXXX</li>
          <li>Estimated Turnover: $XXXXXX</li>
        </ul>

        <v-card-subtitle class="font-weight-bold">Key Markets:</v-card-subtitle>
        <ul>
          <li>Market 1</li>
          <li>Market 2</li>
          <li>Market 3</li>
          <li>Market 4</li>
          <li>Market 5</li>
        </ul>

        <v-card-subtitle class="font-weight-bold">Suppliers:</v-card-subtitle>
        <ul>
          <li>Supplier 1</li>
          <li>Supplier 2</li>
          <li>Supplier 3</li>
          <li>Supplier 4</li>
          <li>Supplier 5</li>
        </ul>
      </v-card> -->
  </v-col>
</template>

<script setup>
import { ref } from "vue";

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
