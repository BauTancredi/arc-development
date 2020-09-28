import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";

import animationData from "../animations/landinganimation/data";

const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container>
          <Grid item>
            <div>
              Bringing West Coast Technology <br /> to the Midwest
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">
                    Learn More <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;