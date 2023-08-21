import React from 'react';
import {AdminScreens} from "./AdminScreens";

function ObjectList({ category }) {
    switch (category) {
        case "screens":
            return <AdminScreens />
    }
}

export default ObjectList;
