import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class CourseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {title, desc, src} = this.props
        return (<Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{height: 140}}
                image={src}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>)
    }
}

export default CourseCard