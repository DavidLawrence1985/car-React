import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  CarSection } from '../types/car-types';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      margin: "2em"
    },
  });

interface carSectionProps {
    section: Array<CarSection>;
    setChildID: React.Dispatch<React.SetStateAction<number>>
    setOptionVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CarSectionOptions(props: carSectionProps) {
    const classes = useStyles();
    const [carSection, setCarSection] = React.useState<Array<CarSection>>()
    const [isSectionSet, setIsSectionSet] = React.useState<boolean>(false);
    var img = "data:image/jpeg;base64,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";

    const handleImageButtonClick = (id : number) => {
        console.log(id)
        props.setChildID(id);
        props.setOptionVisible(false);
    }

    React.useEffect(() => {

        var items = [];
        for (const [key, value] of Object.entries(props.section))
        {
            items.push(value)
        }
        setCarSection(items);
        setIsSectionSet(true);
    }, [])

    return (
        <div style={{marginTop: "3.5em", marginLeft: "20%" }}>
        {isSectionSet && carSection.map((item) => (
            <Card className={classes.root} key={item.carSectionID}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Car"
                    height="140"
                    image={item.carSectionImageURL}
                    title="Car"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.carSectionName}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => handleImageButtonClick(item.carSectionID)}>
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        ))}
        </div>
    );
}
