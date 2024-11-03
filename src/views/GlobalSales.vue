<template>
  <div class="card">
    <div class="card-body">
      <div class="border-bottom">
        <div>
          <h3>Global Sales by Top Locations</h3>
          <span>All products that were shipped</span>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-lg-7">
            <JsvectorMap />
          </div>
          <div class="col-12 col-lg-5">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(country, index) in countries" :key="index">
                  <td>
                    <img :src="country.flag" alt="" style="width: 20px; height: auto;" />
                  </td>
                  <td>{{ country.name }}</td>
                  <td>{{ country.sales }}</td>
                  <td>{{ country.percentage }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import JsvectorMap from './JsvectorMap.vue';

// Define your countries data
const countries = [
  {
    name: 'USA',
    sales: '2,920',
    percentage: '53.23%',
    flag: 'src/assets/country img/US.webp' 
  },
  {
    name: 'Germany',
    sales: '1,300',
    percentage: '20.43%',
    flag: 'src/assets/country img/DE.webp'
  },
  {
    name: 'Australia',
    sales: '760',
    percentage: '7.87%',
    flag: 'src/assets/country img/AU.webp'
  },
  {
    name: 'Romania',
    sales: '600',
    percentage: '5.94%',
    flag: 'src/assets/country img/RO.png'
  },
  {
    name: 'Brazil',
    sales: '550',
    percentage: '4.34%',
    flag: 'src/assets/country img/BR.webp' 
  },
];
</script>
