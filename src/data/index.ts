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
        url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        siteName: "Hydrogen Building & Maintenance Ltd.",
        countryName: "United Kingdom",
        images: ["/images/hbm-cover.png"],
        description: "Hydrogen Building & Maintenance LTD, based in Essex, UK, is your premier construction company. With decades of experience, we specialize in extensions, loft conversions, plumbing, electrical work, and roofing. Got a project? Just ask—we're here to help!",
        emails: ["contact@hbmconstruction.co.uk", "hydrogenbnm@gmail.com"],
        phoneNumbers: ["07915368262"]
    }



}