import React, {useEffect, useContext} from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import View from './view/ListIdea';
import { GlobalContext } from '../../../context/Provider';
import getIdeas from '../../../context/actions/ideas/getIdeas';
import { useHistory } from 'react-router';
import deleteIdea from '../../../context/actions/ideas/deleteIdea';
import addIdea from '../../../context/actions/ideas/addIdea';
import updateIdea from '../../../context/actions/ideas/updateIdea';

const ListIdea = () => {
    const { ideaDispatch, ideaState, authState: {
        auth: {
            data:{
                user
            }
        }
    } } = useContext(GlobalContext);
    const history = useHistory(); 

    console.log("ideaState", ideaState);
    useEffect(() => {
        getIdeas(history, user.id)(ideaDispatch)
    }, [])

    const handleDeleteIdea = (idIdea) => {
        deleteIdea(history, idIdea)(ideaDispatch);
    }

    const handleAddIdea = (idea) => {
        idea = {
            ...idea,
            idUsuario: user.id,
            fechaPublicacion: new Date(),
            idIdea:0,
        }
        console.log("ideaaaaa!",idea);
        addIdea(history, idea)(ideaDispatch);
    }

    const handleUpdateIdea = (idea) => {
        console.log("idea", idea)
        updateIdea(history, idea)(ideaDispatch); 
    }

    

    return (
        <div>
            {<DashboardLayout 
                children={
                    <View 
                        state={ideaState} 
                        deleteIdea={handleDeleteIdea}
                        addIdea={handleAddIdea}
                        updateIdea={handleUpdateIdea}
                        ideaState={ideaState}
                    />} />}
        </div>
    );
}

export default ListIdea;