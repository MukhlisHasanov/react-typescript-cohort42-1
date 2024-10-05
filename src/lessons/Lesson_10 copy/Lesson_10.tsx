

import { Div01, Div02, Div03, LabelCountry } from './style';

import React, { useState } from 'react';

interface University {
    name: string;
    country: string;
    web_pages: string[];
}

const Lesson_10b = () => {
    const [country, setCountry] = useState('');
    const [universities, setUniversities] = useState<University[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleGetUniversities = () => {
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    setError('No universities found');
                    setUniversities([]);
                } else {
                    setError(null);
                    setUniversities(data.slice(0, 15));
                }
            })
            .catch(() => {
                setError('Some Network Error');
                setUniversities([]);
            });
    };

    return (
        <Div01>
            <LabelCountry>
                Country:
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter Country for searching universities"
                />
            </LabelCountry>
            <button onClick={handleGetUniversities}>Get Universities</button>

            {error && <div style={{ color: 'red', marginTop: '20px' }}>{error}</div>}

            <Div02>
                {universities.map((university, index) => (
                    <Div03>
                        <h3>{university.name}</h3>
                        <p>{university.country}</p>
                        <p>Website: <a href={university.web_pages[0]}>{university.web_pages[0]}</a></p>
                    </Div03>
                ))}
            </Div02>
        </Div01>
    );
};

export default Lesson_10b;
