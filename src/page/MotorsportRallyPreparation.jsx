import React from 'react';
// Components
import ServiceBanner from '../Common/ServiceBanner';
import ServiceDetail from '../Common/ServiceDetail';
import DiscoverServices from '../Common/DiscoverServices';
import CallToAction from '../Common/CallToAction';

// Data - Single source of truth for this page
import { 
  serviceBannerData, 
  serviceDetailData, // Assuming you refactor this next
  discoverServicesData, 
  ctaData 
} from '../Data/MotorsportRallyPreparation/data';

const MotorsportRallyPreparation = () => {
    return (
        <div className="bg-black">
            <ServiceBanner data={serviceBannerData} />
            
            <ServiceDetail data={serviceDetailData} />
            
            <DiscoverServices data={discoverServicesData} />
            
            <CallToAction data={ctaData} />
        </div>
    );
};

export default MotorsportRallyPreparation;