import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PageTitle from '../../components/titles/pageTitle/PageTitle';
import ScreenCard from '../../components/cards/screenCard/ScreenCard';
import FlexSpacerContainer from '../../components/containers/flexSpacerContainer/FlexSpacerContainer';
import { Link } from 'react-router-dom';

const ScreenListPage = () => {
    const [screenList, setScreenList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/screen/');
                setScreenList(response.data);
            } catch (error) {
                console.error('Error fetching screens:', error);
            }
        };

        fetchData();
    }, []); // Empty array as the second argument makes useEffect only run once after the initial render

    return (
        <div>
            <FlexSpacerContainer>
                <PageTitle title="Экраны для трансляций"/>
            </FlexSpacerContainer>
            <ul>
                {screenList.map(screen => (
                    <li key={screen.id}>
                        <Link to={`/screen/${screen.id}`}>
                            <ScreenCard screen={screen}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScreenListPage;