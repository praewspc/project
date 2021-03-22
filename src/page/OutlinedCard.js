import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    height : 420,
    width : 932
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h6" color="textSecondary" gutterBottom>
            CS401 / CS402
        </Typography>
        <Typography variant="h5" component="h2">
            วิชาบังคับก่อนศึกษา:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        สําหรับนักศึกษาตั้งแต่ชั้นปีที่ 4 ขึ้นไป และ สอบได้ระดับ S ในรายวิชา คพ.300 และเคยศึกษา คพ.301
        </Typography>
        <Typography variant="body2" component="p">
        คำอธิบายรายวิชา:
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
