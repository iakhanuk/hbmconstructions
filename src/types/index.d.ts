export interface IGalleryImage {
    url: string;
    alt: string;
    height: number;
    width: number;
    _createdAt: Date;
    tags: string[]
    smartTags: string[],
    size: number

}


export interface IContactInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
}

export interface ISocialLink {
    url: string;
    username: string;
}

export interface IProvidedService{
    id?: any;
    serviceName: string;
    description: string;
    image: {
        url: string;
        width: number;
        height: number;
        alt: string;
    };
}