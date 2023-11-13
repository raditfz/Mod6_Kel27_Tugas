import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import DetailPage from "../pages/DetailPage";
import Card from "../components/card";

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("Naruto");

    const [detailData, setDetailData] = useState(null);
    const [showDetailPage, setShowDetailPage] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                "https://imdb8.p.rapidapi.com/auto-complete",{
                params: { q: query },
                headers: {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    'X-rapidAPI-Key': 'ce05fa6ee3msha78b00de0712be5p1f6720jsne4d4ec9b11cd'
                },
                }
            );
            if (response.status === 200) {
                setData(response.data);
                setisLoaded(true);
                setIsLoading(false);

            }
        } catch (err) {
        console.log(err);
        setIsLoading(false);
        }
        };
    if (!isLoaded) {
    fetchData(query);
    }
    }, [isLoaded, query]);
        const onSearch = (e) => {
        if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
    }
    };
    const handleClick = (item) => {
        setDetailData(item);
        setShowDetailPage(true);
        navigate(`/LandingPage/DetailPage`, { state: { data: item } });
    };

    return (
        <main>
            <input
                type="text"
                placeholder="Search film by name"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                {data.d.map((item, index) => {
                    return (
                    <Card data={item} key={index} onClick={()=>handleClick(item)} />
                    );
                })}
                </div>
            )}
            
            <DetailPage data={detailData} onClose={() => setDetailData(null)} />
        </main>
    );
}