import React from 'react';
import Card from '../ui/Card';

const HomeListingSection = () => {

    const listings = [1, 2, 3, 4, 5, 6, 8, 9,10]

    return (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 container mx-auto">
            {
                listings.slice(0,3).map(listing => {
                    return (
                        <Card number={listing}></Card>
                    )
                })
            }
        </div>
    );
};

export default HomeListingSection;