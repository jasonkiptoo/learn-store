<template>
    <Card>
        <template #content>

            <Stepper linear>
                <StepperPanel header="Personal Info">
                    <template #content="{ nextCallback }">
                        <div class="main flex  mb-4">
                            <PersonalInfo/>

                        </div>
                        <div class="flex pt-4 justify-content-end">
                            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                        </div>
                    </template>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <template #content="{ prevCallback, nextCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                        </div>
                        <div class="flex pt-4 justify-content-between">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                        </div>
                    </template>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <template #content="{ prevCallback }">
                        <div class="flex flex-column h-12rem">
                            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                        </div>
                        <div class="flex pt-4 justify-content-start">
                            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        </div>
                    </template>
                </StepperPanel>
            </Stepper>
        </template>
    </Card>
</template>
  
  <script setup>
  import { ref } from "vue";
  import PersonalInfo from '@/components/personalInfo/personalInfo.vue'
  
  const active = ref(0);
  
  const personalInfo = ref({
    name: ''
  });
  
  const reservationInfo = ref({
    date: ''
  });
  
  const reviewInfo = ref({
    comment: ''
  });
  
  const items = ref([
      {
          label: 'Personal Info'
      },
      {
          label: 'Reservation'
      },
      {
          label: 'Review'
      }
  ]);
  </script>
  
  <style scoped>
  .card{
      background-color: red;
  }
  .step-content {
    margin-top: 20px;
  }
  .main{
    margin-bottom: 20px;
  }
  </style>
  