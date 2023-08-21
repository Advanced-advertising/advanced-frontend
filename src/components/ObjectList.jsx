import React from 'react';
import {AdminScreens} from "./AdminScreens";
import {AdminAds} from "./AdminAds";

function ObjectList({ category }) {
    switch (category) {
        case "screens":
            return <AdminScreens />
        case "ads":
            return <AdminAds />
    }
}

export default ObjectList;
