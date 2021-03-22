import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import View from './view/EditIdea';


const ListIdea = () => {

    return (
        <div>
            {<DashboardLayout children={<View />} />}
        </div>
    );
}

export default ListIdea;