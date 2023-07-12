import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { Typography } from '@mui/material';

interface Dataset {
  id: number;
  name: string;
}

const HomeBody = () => {
  const [data, setData] = useState<Dataset[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get<Dataset[]>('/dataset');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Data from Backend
      </Typography>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <Typography>No data available</Typography>
      )}
    </div>
  );
};

export default HomeBody;
