import { CarSectionDetail } from "../types/car-types";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
     maxWidth: 500,
    margin: "2em"
  },
  media: {
    height: 140,
  },
});
interface carSectionDetailsProps {
  section: Array<CarSectionDetail>;
  setChildID: React.Dispatch<React.SetStateAction<number>>
  setOptionVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export default  function CarSectionDetailCard(props: carSectionDetailsProps) {
    const classes = useStyles();

    const homeButtonClick = () => {
      props.setChildID(0);
      props.setOptionVisible(true);
    }

    return (
      <div style={{marginTop: "3.5em", marginLeft: "20%" }}>
         <Button onClick={homeButtonClick}>HOME</Button>
        {props.section.map((item) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.sectionImageURL}
                title={item.sectionTitle}
              />
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {item.sectionTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.sectionDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    );
}