<template>
  <div class="min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col xl:h-screen">
    <SiteHeader />
    <!-- Filter -->
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <SearchFilter />
      <main class="py-6 xl:flex-1 xl:overflow-x-hidden">
        <div :key="i" v-for="(location, i) in locations" :class="{'mt-6': i > 0}">
          <div class="px-4 xl:px-8">
            <h3 class="text-xl text-gray-900">{{ location.title }}</h3>
            <p class="text-gray-600">{{ location.description }}</p>
          </div>
          <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
            <div class="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
              <div
                v-for="(property, i) in location.properties"
                :key="i"
                :class="{'mt-10 sm:ml-4': i > 0 }"
                class="sm:mt-0 sm:w-80 sm:flex-shrink-0"
              >
                <PropertyCard :property="property" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PropertyCard from '@/components/workcation/Card'
import SiteHeader from '@/components/workcation/SiteHeader'
import SearchFilter from '@/components/workcation/SearchFilter'
export default {
  name: 'app',
  components: {
    PropertyCard,
    SiteHeader,
    SearchFilter
  },
    data() {
    return {
      locations: [
        {
          title: 'Los Angeles',
          description: "Live like the stars in these luxurious Southern California estates.",
          properties: [
            {
              imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "Modern home in city center",
              price: 190000,
              reviewCount: 34,
              rating: 4,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 4,
              baths: 1,
              title: "Quiet living outside the city",
              price: 175000,
              reviewCount: 12,
              rating: 3,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
              beds: 5,
              baths: 4,
              title: "Renovated apartment uptown",
              price: 200000,
              reviewCount: 54,
              rating: 5,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "Family home in the suburbs",
              price: 115000,
              reviewCount: 34,
              rating: 4,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1566908829550-e6551b00979b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 10,
              baths: 10,
              title: "Trees beside concrete building",
              price: 115000,
              reviewCount: 34,
              rating: 5,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "White concrete house surrounded by trees",
              price: 115000,
              reviewCount: 34,
              rating: 4,
            },
          ]
        },
        {
          title: 'Phoenix',
          description: "Escape the cold and enjoy great weather without breaking the bank.",
          properties: [
            {
              imageUrl: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "Modern home in city center",
              price: 190000,
              reviewCount: 34,
              rating: 4,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
              beds: 4,
              baths: 1,
              title: "Quiet living outside the city",
              price: 175000,
              reviewCount: 12,
              rating: 3,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 5,
              baths: 4,
              title: "Renovated apartment uptown",
              price: 200000,
              reviewCount: 54,
              rating: 5,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "Family home in the suburbs",
              price: 115000,
              reviewCount: 34,
              rating: 4,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1588557132645-ff567110cafd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 5,
              baths: 4,
              title: "Hidden house",
              price: 200000,
              reviewCount: 54,
              rating: 5,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1560026301-88340cf16be7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              beds: 3,
              baths: 2,
              title: "Family home in the suburbs",
              price: 115000,
              reviewCount: 34,
              rating: 4,
            },
          ]
        },
        {
          title: 'Dallas',
          description: "Experience Texas living in these awesome ranch-style homes.",
          properties: [
            {
              imageUrl: 'https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "Modern home in city center",
              price: 190000,
              reviewCount: 34,
              rating: 4,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
              beds: 4,
              baths: 1,
              title: "Quiet living outside the city",
              price: 175000,
              reviewCount: 12,
              rating: 3,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 5,
              baths: 4,
              title: "Renovated apartment uptown",
              price: 200000,
              reviewCount: 54,
              rating: 5,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "Family home in the suburbs",
              price: 115000,
              reviewCount: 34,
              rating: 4,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              beds: 5,
              baths: 4,
              title: "House with green yard",
              price: 200000,
              reviewCount: 54,
              rating: 5,
            },
            {
              imageUrl: 'https://images.unsplash.com/photo-1561753757-d8880c5a3551?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
              beds: 3,
              baths: 2,
              title: "White painted house",
              price: 115000,
              reviewCount: 34,
              rating: 4,
            },
          ]
        }
      ],
    }
  }
}
</script>
