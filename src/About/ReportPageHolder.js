import React from 'react';
import './ReportPageHolder.css';
import DoctorKindervater from './RyanProfile';
import DoctorNelson from './NelsonProfile';

import LargeGreenEllipse from './Photos/Ellipse 23LargeGreenElipseSecond.png';
import DarkGreenMediumCircle from './Photos/Ellipse 25DarkGreenMediumCircle.png';
import SmallGreenCircle from './Photos/Ellipse 26SmallGreenCircle.png';
import DarkGreenHalfDonut from './Photos/EllipseDarkGreenHalfDounut.png';
import MediumYellowCircle from './Photos/Ellipse 30MediumYellowCircle.png';
import DarkYellowCircleSmall from './Photos/Ellipse 31DarkYelloCircleSmall.png';

function ReportPageHolder() {
    return (
      <div className="white-page">
        <img src={LargeGreenEllipse} alt="Large Green Ellipse" className="large-green-ellipse"/>
        <img src={DarkGreenMediumCircle} alt="Dark Green Medium Circle" className="dark-green-medium-circle"/>
        <img src={SmallGreenCircle} alt="Small Green Circle" className="small-green-circle"/>
        <img src={DarkGreenHalfDonut} alt="Dark Green Half Donut" className="dark-green-half-donut"/>
        <img src={MediumYellowCircle} alt="Medium Yellow Circle" className="medium-yellow-circle"/>
        <img src={DarkYellowCircleSmall} alt="Dark Yellow Circle Small" className="dark-yellow-circle-small"/>
        <div className="kindervater-position">
          <DoctorKindervater />
        </div>
        <div className="nelson-position">
          <DoctorNelson />
        </div>
      </div>
    );
}

export default ReportPageHolder;
