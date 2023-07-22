<template>
  <div
    id="create-car"
    class="bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
  >
    <div class="container p-5">
      <page-scroll-button></page-scroll-button>
      <div class="gap-10 lg:grid lg:grid-cols-2">
        <!-- Car information -->
        <div>
          <!-- Basic Information -->
          <app-accordion class="mb-4">
            <template #title>
              <span class="text-xl font-semibold">Basic Information</span>
            </template>
            <template #content>
              <div class="mt-5 grid grid-flow-row">
                <div class="flex items-center">
                  <div>
                    <Switch
                      v-model="car.is_active"
                      :class="car.is_active ? 'bg-green-400' : 'bg-gray-200'"
                      class="relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      <span class="sr-only">Toggle Theme</span>
                      <span
                        aria-hidden="true"
                        :class="
                          car.is_active
                            ? 'translate-x-5 bg-white'
                            : 'translate-x-0 bg-white'
                        "
                        class="pointer-events-none inline-block h-[22px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                      />
                    </Switch>
                  </div>
                  <div class="ml-2">
                    <span v-if="car.is_active">Active</span>
                    <span v-if="!car.is_active" class="text-gray-400"
                      >Set to active</span
                    >
                  </div>
                </div>
              </div>

              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="brand"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Brand</label
                  >
                  <select
                    v-model="car.car_brand_id"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option
                      v-for="(val, key) in carBrands"
                      :key="key"
                      :value="val.id"
                    >
                      {{ val.brand_name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="vehicle-type"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Vehicle Type</label
                  >
                  <select
                    v-model="car.vehicle_type_id"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option
                      v-for="(val, key) in vehicleTypes"
                      :key="key"
                      :value="val.id"
                    >
                      {{ val.vehicle_type_name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="model"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Model</label
                  >
                  <input
                    id="model"
                    v-model="car.model"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Model"
                    required
                  />
                </div>
                <div>
                  <label
                    for="model-year"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Year</label
                  >
                  <input
                    id="model-year"
                    v-model="car.model_year"
                    type="tel"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    for="cost"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Cost</label
                  >
                  <input
                    id="cost"
                    v-model="car.cost"
                    type="tel"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div class="grid grid-flow-row">
                <div>
                  <label
                    for="dealership_url"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Dealership URL</label
                  >
                  <input
                    id="dealership_url"
                    v-model="car.dealership_url"
                    type="tel"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Dimensions -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Dimensions</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="dimension_length_mm"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Length(mm)</label
                  >
                  <input
                    id="dimension_length_mm"
                    v-model="car.dimension_length_mm"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="dimension_width_mm"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Width(mm)</label
                  >
                  <input
                    id="dimension_width_mm"
                    v-model="car.dimension_width_mm"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="dimension_height_mm"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Height(mm)</label
                  >
                  <input
                    id="dimension_height_mm"
                    v-model="car.dimension_height_mm"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="dimension_ground_clearance_mm"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Ground Clearance(mm)</label
                  >
                  <input
                    id="dimension_ground_clearance_mm"
                    v-model="car.dimension_ground_clearance_mm"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="dimension_kerb_weight_kg"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Kerb Weight(kg)</label
                  >
                  <input
                    id="dimension_kerb_weight_kg"
                    v-model="car.dimension_kerb_weight_kg"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="seat_capacity"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Seat Capacity</label
                  >
                  <input
                    id="seat_capacity"
                    v-model="car.seat_capacity"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="doors"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Doors</label
                  >
                  <input
                    id="doors"
                    v-model="car.doors"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="boot_space_l"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Boot/Load Space Min(L)</label
                  >
                  <input
                    id="boot_space_l"
                    v-model="car.boot_space_l"
                    type="number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Engine -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Engine</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="engine_type"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Engine Type</label
                  >
                  <input
                    id="engine_type"
                    v-model="car.engine_type"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="engine_size"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Size</label
                  >
                  <input
                    id="engine_size"
                    v-model="car.engine_size"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="engine_config"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Config</label
                  >
                  <input
                    id="engine_config"
                    v-model="car.engine_config"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="engine_cylinders"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Cylinders</label
                  >
                  <input
                    id="engine_cylinders"
                    v-model="car.engine_cylinders"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="engine_induction"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Induction</label
                  >
                  <input
                    id="engine_induction"
                    v-model="car.engine_induction"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="engine_horseppower"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Horsepower</label
                  >
                  <input
                    id="engine_horseppower"
                    v-model="car.engine_horseppower"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Drivetrain -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Drivetrain</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="drive_train_transmission"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Transmission</label
                  >
                  <input
                    id="drive_train_transmission"
                    v-model="car.drive_train_transmission"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="drive_train_type"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Drive Type</label
                  >
                  <input
                    id="drive_train_type"
                    v-model="car.drive_train_type"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Fuel -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Fuel</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="fuel_type2"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Fuel Type</label
                  >
                  <select
                    v-model="car.fuel_type2"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option
                      v-for="(val, key) in fuel_types"
                      :key="key"
                      :value="val.value"
                    >
                      {{ val.type }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="fuel_type"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Fuel Type(Deprecated)</label
                  >
                  <input
                    id="fuel_type"
                    v-model="car.fuel_type"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="fuel_capacity_l"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Capacity</label
                  >
                  <input
                    id="fuel_capacity_l"
                    v-model="car.fuel_capacity_l"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="fuel_RON_rating"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >RON Rating</label
                  >
                  <input
                    id="fuel_RON_rating"
                    v-model="car.fuel_RON_rating"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="fuel_consumption_combined"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Fuel Consumption Combined</label
                  >
                  <input
                    id="fuel_consumption_combined"
                    v-model="car.fuel_consumption_combined"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="fuel_co2_emission_combined"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >CO2 Emission Combined</label
                  >
                  <input
                    id="fuel_co2_emission_combined"
                    v-model="car.fuel_co2_emission_combined"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Warranty -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Warranty</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="warranty_coverage"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Coverage</label
                  >
                  <input
                    id="warranty_coverage"
                    v-model="car.warranty_coverage"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- ANCAP -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">ANCAP</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <label
                    for="ANCAP_rating"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Rating</label
                  >
                  <input
                    id="ANCAP_rating"
                    v-model="car.ANCAP_rating"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Description -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Description</span>
            </template>
            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    for="overview"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Overview</label
                  >
                  <textarea
                    id="overview"
                    v-model="car.overview"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label
                    for="positives"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Positives</label
                  >
                  <textarea
                    id="positives"
                    v-model="car.positives"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label
                    for="consideration"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Consideration</label
                  >
                  <textarea
                    id="consideration"
                    v-model="car.consideration"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label
                    for="verdict"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Verdict</label
                  >
                  <textarea
                    id="verdict"
                    v-model="car.verdict"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Features -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Features</span>
            </template>
            <template #content>
              <div class="mb-6 mt-6">
                <label
                  for="features"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Specifications</label
                >
                <textarea
                  id="features"
                  v-model="car.features"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                ></textarea>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />

          <!-- Images -->
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Images</span>
            </template>
            <template #content>
              <div class="mb-6 mt-6">
                <label
                  for="image_url"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Image URL</label
                >

                <div
                  v-for="(val, key) in car.images"
                  :key="key"
                  class="mt-4 flex gap-3"
                >
                  <input
                    v-model="car.images[key]"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />

                  <AppButton
                    v-if="key > 0"
                    warning
                    class="mr-2 p-3 text-sm"
                    @click="removeImage(key)"
                  >
                    <template #text>
                      <XMarkIcon class="ml-2 mr-2 mt-0 h-4 w-4" />
                      <span class="sr-only">Remove Image</span>
                    </template>
                  </AppButton>
                </div>

                <AppButton
                  class="mx-auto mt-5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  @click="addMoreCarImage()"
                >
                  <template #text> Add more image </template>
                </AppButton>
              </div>
            </template>
          </app-accordion>

          <hr class="mb-5" />
        </div>

        <!-- Persona -->
        <div>
          <app-accordion class="mb-8">
            <template #title>
              <span class="text-xl font-semibold">Persona</span>
            </template>

            <template #content>
              <div class="mb-6 mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    for="gender"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Gender</label
                  >
                  <select
                    v-model="car.persona.gender"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="na">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label
                    for="ages"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Ages</label
                  >
                  <Multiselect
                    v-model="car.persona.ages"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    :options="ages"
                  />
                </div>

                <div>
                  <label
                    for="ages"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Personalities</label
                  >
                  <Multiselect
                    v-model="car.persona.personalities"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="label"
                    :options="personalities_data"
                  />
                </div>

                <div>
                  <label
                    for="perks"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Perks</label
                  >
                  <Multiselect
                    v-model="car.persona.perks"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="car_text"
                    :options="perks"
                  />
                </div>

                <div>
                  <label
                    for="activities"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Activities</label
                  >
                  <Multiselect
                    v-model="car.persona.activities"
                    mode="tags"
                    :close-on-select="false"
                    :searchable="true"
                    :create-option="true"
                    label="label"
                    :options="activities_data"
                  />
                </div>
              </div>
            </template>
          </app-accordion>
        </div>
      </div>
    </div>

    <div class="submit-btn create-submit-button-container container p-5">
      <button
        ref="createSubmitButton"
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        @click="submit()"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import {
  ChevronRightIcon,
  PlusIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import CircleSvg from '@components/CircleSvg.vue';
import axios from 'axios';
import AppAccordion from '@components/AppAccordion.vue';
import PageScrollButton from '@components/PageScrollButton.vue';
import Multiselect from '@vueform/multiselect';
import { Switch } from '@headlessui/vue';

export default {
  name: 'CreateCar',
  components: {
    Multiselect,
    ChevronRightIcon,
    PlusIcon,
    CircleSvg,
    PencilSquareIcon,
    AppAccordion,
    XMarkIcon,
    PageScrollButton,
    Switch,// eslint-disable-line
  },
  props: {
    showingForm: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      showCreateUserForm: false,
      showModal: false,
      brandName: null,
      car: {
        images: [''],
        persona: {
          gender: null,
          ages: [],
          personalities: [],
          perks: [],
          activities: [],
        },
        is_active: true,
      },
      filters: {},
      carBrands: [],
      vehicleTypes: [],
      activities: [],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
      ages: 'funnel/getAges',
      personalities: 'funnel/getPersonalities',
      perks: 'funnel/getPersonalPreferences',
      fuel_types: 'funnel/getFuelTypes',
    }),
    activities_data() {
      const data = [];

      this.activities.forEach((v, index) => {
        const obj = {
          value: v.slug,
          label: v.activity_name,
        };
        data.push(obj);
      });

      return data;
    },
    personalities_data() {
      const data = [];
      this.personalities.forEach((v, index) => {
        const obj = {
          value: v.value,
          label: v.text,
        };
        data.push(obj);
      });

      return data;
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.getCarBrands();
    this.getVehicleTypes();
    this.getActivities();
  },
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    resetCarAttributes() {
      this.car = {
        images: [''],
        persona: {
          gender: null,
          ages: [],
          personalities: [],
          perks: [],
          activities: [],
        },
      };
    },
    showModalForm() {
      this.showModal = true;
    },
    async getCarBrands() {
      await axios.get('../../api/car_brands').then((response) => {
        this.carBrands = response.data;
      });
    },
    async getVehicleTypes() {
      await axios.get('../../api/vehicle_types').then((response) => {
        this.vehicleTypes = response.data;
      });
    },
    async getActivities() {
      await axios.get('../../api/activities').then((response) => {
        this.activities = response.data;
      });
    },
    async submit() {
      await axios
        .post('../../api/car', this.car)
        .then((response) => {
          this.popToast({
            message: 'Car saved!',
            timer: 5000,
            icon: 'success',
          });
          this.resetCarAttributes();
          this.scrollToTop();
        })
        .catch((error) => {
          this.popToast({
            message: error.response.data.message,
            timer: 5000,
            icon: 'error',
          });
        });
    },
    addMoreCarImage() {
      if (this.car.images.length >= 10) {
        this.popToast({
          message: 'You can only add up to 10 images.',
          timer: 5000,
          icon: 'error',
        });
      } else {
        this.car.images.push('');
      }
    },
    removeImage(index: boolean) {
      this.car.images.splice(index, 1);
    },
    toggleActive() {
      return 0;
    },
  },
};
</script>

<style scoped>
input:focus,
select:focus,
textarea:focus,
button:focus,
option:focus {
  outline: none !important;
  border: none !important;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
