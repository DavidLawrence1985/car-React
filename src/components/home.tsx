import React from 'react';
import { getCarSectionDetails }from "../clients/APICalls"
import { CarSection, CarSectionDetail } from '../types/car-types';
import CarSectionOptions  from "../components/car-section"
import CarSectionDetailCard from './car-section-detail';

interface homePageProps {
    section: Array<CarSection>;
}
    

export default function Home(props: homePageProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [childID, setChildID] = React.useState<number>(0);
    const [showOptionsVisible, setShowOptionsVisible] = React.useState<boolean>(true);
    const [carSectionDetails, setCarSectionDetails] = React.useState<Array<CarSectionDetail>>();

    React.useEffect(() => {
        if(!showOptionsVisible) {
            new Promise<CarSectionDetail>( () =>
            getCarSectionDetails(childID, d => {
                setCarSectionDetails(d)
            }))
        }
    }, [showOptionsVisible])

    React.useEffect(() => {
        if (!showOptionsVisible) {
            console.log(carSectionDetails)
            setIsLoading(false)
        }
    }, [carSectionDetails])

    return (
            <>
               {showOptionsVisible &&  <CarSectionOptions section={props.section} setChildID={setChildID} setOptionVisible={setShowOptionsVisible}/>}
               {!showOptionsVisible && !isLoading && <CarSectionDetailCard section={carSectionDetails} setChildID={setChildID} setOptionVisible={setShowOptionsVisible}/>}
            </>
    )
}