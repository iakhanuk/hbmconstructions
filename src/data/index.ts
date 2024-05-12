export const SITE_DATA = {
    navbar_title: "Hydrogen Building & Maintenance Ltd.",
    navbar_logo: "/images/hbm-logo.jpeg",
    nav_links: [
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Services",
            url: "/#services",
        },
        {
            name: "Gallery",
            url: "/gallery",
        },
        {
            name: "Contact",
            url: "/#contact",
        },
    ],

    meta_data: {
        url: process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
        siteName: "Hydrogen Building & Maintenance Ltd.",
        countryName: "United Kingdom",
        images: "/images/hbm-cover.png",
        description: "Hydrogen Building & Maintenance LTD, based in Essex, UK, is a construction company. We specialize in work like construction, restoration and remodeling.",
        emails: "contact@hbmconstruction.co.uk",
        phoneNumbers: "07915368262"
    }



}