<template>
  <Menubar :model="items">
    <!-- Start slot -->
    <template #start>
      <!-- Your start template content -->
    </template>

    <!-- Item slot -->
    <template #item="{ item, props, hasSubmenu, root }">
      <!-- Use router-link to navigate to the page -->
      <router-link
        v-if="item && item.to"
        :to="item.to"
        v-ripple
        class="flex align-items-center"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          :class="{ 'ml-auto': !root, 'ml-2': root }"
          :value="item.badge"
        />
        <span
          v-if="item.shortcut"
          class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="[
            'pi pi-angle-down',
            { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
          ]"
        ></i>
      </router-link>
    </template>

    <!-- End slot -->
    <template #end>
      <div class="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
        <Avatar
          image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
          shape="circle"
        />
      </div>
    </template>
  </Menubar>
  <slot />
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Apply",
    icon: "pi pi-star",
    to: "/apply",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Core",
        icon: "pi pi-bolt",
        shortcut: "⌘+S",
        to: "/projects/core",
      },
      // Add other project items with their respective routes
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    badge: 3,
    to: "/contact",
  },
]);
</script>
