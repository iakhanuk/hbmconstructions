import { SITE_DATA } from '@/data';
import { IContactInfo, IGalleryImage, IProvidedService, ISocialLink } from '@/types';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://graphql.datocms.com/',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    },

});


export const fetch_seo = async () => {
    try {
        const res = await apolloClient.query({
            query: gql`
            query GetSEO {
                seo: allProvidedservices {
                    id
                    serviceName
                    description
                    image {
                        url
                        width
                        height
                        alt
                    
                    }
                }
            }
            `
        })

        return res.data.services

    } catch (error) {

        console.log(error)

        return []

    }
}



export const fetch_services = async (): Promise<IProvidedService[]> => {
    try {
        const res = await apolloClient.query({
            query: gql`
            query GetServices {
                services: allProvidedservices {
                    id
                    serviceName
                    description
                    image {
                        url
                        width
                        height
                        alt
                    
                    }
                }
            }
            `
        })

        return res.data.services

    } catch (error) {

        console.log(error)

        return []

    }

}

export const fetch_contact = async (): Promise<{
    socials: ISocialLink[],
    contact: IContactInfo
}> => {
    try {
        const res = await apolloClient.query({
            query: gql`
            query GetContact {

                    socials: allSocials {
                        id
                        url
                        username
                    }
                    contact {
                        name
                        address
                        email
                        phone
                    }

            }
            `
        })

        return res.data

    } catch (error) {

        console.log(error)


        return {
            socials: [],
            contact: {
                name: '',
                address: '',
                email: '',
                phone: ''
            },


        }

    }

}


export const fetch_gallery = async (n: number = 100): Promise<IGalleryImage[]> => {
    try {
        const res = await apolloClient.query({
            query: gql`
            query GetGallery {
        
                allGalleries(first:${n}) {

                    photo {
                    id
                    _createdAt
                    alt
                    url
                    height
                    width
                    size
                    tags
                    smartTags
                    
                }}

            }
            `
        })

        return res.data.allGalleries.map((p: any) => p.photo) as IGalleryImage[]

    } catch (error) {

        console.log(error)

        return []

    }



}