export type CarSection = {
    carSectionID: number;
    carSectionName: string;
    carSectionImageURL: string
}

export type CarSections = {
    section: CarSection[];
}

export type CarSectionDetail = {
    sectionDetailID: number;
    sectionTitle: string;
    sectionDescription: string;
    sectionImageURL: string;
}

export type CarSectionDetails = {
    details: CarSectionDetail[];
}