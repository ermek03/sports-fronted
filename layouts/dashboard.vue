<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>

  export default {
    name: "dashboard",
    head: {
      link: [
        {rel: 'stylesheet', href: '/css_dashboard/calendar/core.css'},
        {rel: 'stylesheet', href: '/css_dashboard/calendar/daygrid.css'},
        {rel: 'stylesheet', href: '/css_dashboard/calendar/timegrid.css'},
        {rel: 'stylesheet', href: '/css_dashboard/index/uikit.min.css'},
        {rel: 'stylesheet', href: '/css_dashboard/dashboard/libs.css'},
        {rel: 'stylesheet', href: '/css_dashboard/dashboard/style.css'},
      ]
    }
  };
</script>
