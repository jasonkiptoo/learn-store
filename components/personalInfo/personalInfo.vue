<template>
  <div class="container mx-aut p-4">
    <div class="max-w-md mx-aut">
      <div class="flex flex-row gap-4 mb-4">
        <div class="">
          <label for="firstName" class="text-sm">First Name</label>
          <InputText
            id="firstName"
            filled
            v-model="formData.firstName"
            required
            class="border rounded p-3"
          />
        </div>
        <div class="">
          <label for="middleName" class="text-sm">Middle Name</label>
          <InputText
            id="middleName"
            v-model="formData.middleName"
            class="border rounded p-3"
          />
        </div>
        <div class="">
          <label for="lastName" class="text-sm">Last Name</label>
          <InputText
            id="lastName"
            v-model="formData.lastName"
            required
            class="border rounded p-3"
          />
        </div>
      </div>

      <div class="flex flex-row gap-4 mb-4">
        <div class="">
          <label for="email" class="text-sm">Email</label>
          <InputText
            id="email"
            v-model="formData.email"
            required
            class="border rounded p-3"
          />
        </div>
        <div class="">
          <label for="phone" class="text-sm">Phone Number</label>
          <InputText
            id="phone"
            v-model="formData.phone"
            required
            class="border rounded p-3"
          />
        </div>
        <div class="">
          <label for="address" class="text-sm">Address</label>
          <InputText
            id="address"
            v-model="formData.address"
            class="border rounded p-3"
          />
        </div>
      </div>

      <div class="flex flex-row gap-3 mb-2">
        <div class="d">
          <label for="dob" class="text-sm">Date of Birth</label>
          <InputText
            type="date"
            id="dob"
            v-model="formData.dateOfBirth"
            required
            class="border rounded p-3"
          />
        </div>
        <div class="n">
          <label for="nationality" class="text-sm">Nationality</label>
          <InputText
            id="nationality"
            v-model="formData.nationality"
            required
            class="border rounded p-3"
          />
        </div>
        <div class="n">
          <label for="ethnicity" class="text-sm">Ethnicity</label>
          <InputText
            id="ethnicity"
            v-model="formData.ethnicity"
            required
            class="border rounded p-3"
          />
        </div>
      </div>
      <Button @click="submitInfo" label="Submit" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useApplicationStore } from "@/store/store.js";

const appStore = useApplicationStore();
const formData = ref({
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
});

const calculateAge = (dob) => {
  if (!dob) return "";

  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const submitInfo = () => {
  // Proceed with form submission
  console.log("info", formData.value);
  appStore.updatePersonalInfo(formData.value);
};
</script>

<style scoped>
/* No custom styles required, Tailwind CSS classes are used directly */
</style>
