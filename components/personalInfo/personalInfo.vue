<template>
    <div class="container mx-aut p-4">
      <div class="max-w-md mx-aut">
  
        <div class="flex flex-row gap-4 mb-4">
          <label for="firstName" class="text-sm">First Name</label>
          <InputText id="firstName" filled  v-model="personalInfo.firstName" class="border rounded p-3" />
          <label for="lastName" class="text-sm">Middle Name</label>
          <InputText id="lastName" v-model="personalInfo.middleName" class="border rounded p-3" />
          <label for="lastName" class="text-sm">Last Name</label>
          <InputText id="lastName" v-model="personalInfo.lastName" class="border rounded p-3" />
        </div>
  
        <div class="flex flex-row gap-4 mb-4">
          <label for="email" class="text-sm">Email</label>  
          <InputText id="email" v-model="personalInfo.email" class="border rounded p-3" />
          <label for="phone" class="text-sm">Phone Number</label>
          <InputText id="phone" v-model="personalInfo.phone" class="border rounded p-3" />

            <label for="phone" class="text-sm">Address</label>
          <InputText id="phone" v-model="personalInfo.phone" class="border rounded p-3" />
        </div>
  
        <div class="">
          <label for="Date of Birth" class="text-sm">Date of Birth</label>
          <InputText type="date" id="dob" v-model="personalInfo.dateOfBirth" class="border rounded p-3" />
          <label for="nationality" class="text-sm">Nationality</label>
          <InputText id="nationality" v-model="personalInfo.nationality" class="border rounded p-3" />
        </div>
  
        <div class="flex flex-row gap-4 mb-4">
          <label for="ethnicity" class="text-sm">Ethnicity</label>
          <InputText id="ethnicity" v-model="personalInfo.ethnicity" class="border rounded p-3" />
          <label class="text-sm">Age</label>
          <div>{{ calculateAge(personalInfo.dateOfBirth) }}</div>
        </div>
  
        <div class="flex flex-col gap-4">
          <label for="comments" class="text-sm">Additional Comments</label>
          <textarea id="comments" v-model="personalInfo.comments" class="resize-none h-32 border rounded p-3"></textarea>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const personalInfo = ref({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    ethnicity: "",
    comments: ""
  });
  
  const calculateAge = (dob) => {
    if (!dob) return '';
    
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
  
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };
  </script>
  
  <style scoped>
  /* No custom styles required, Tailwind CSS classes are used directly */
  </style>
  