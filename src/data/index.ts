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
        url: process.env.NEXT_PUBLIC_SITE_URL ? process.env.NEXT_PUBLIC_SITE_URL : "http://localhost:3000",
        siteName: "Hydrogen Building & Maintenance Ltd.",
        countryName: "United Kingdom",
        description: "Hydrogen Building & Maintenance LTD, based in Essex, UK, is a construction company. We specialize in work like construction, restoration and remodeling.",
        emails: "contact@hbmconstruction.co.uk",
        phoneNumbers: "07915368262",
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ? process.env.NEXT_PUBLIC_SITE_URL : "http://localhost:3000")
    }



}