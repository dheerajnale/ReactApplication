import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';
import departments from './departmentData.json'; // Update the path to your JSON data file
import styles from './SecondPage.module.css';

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

const SecondPage: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: Post[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div className={styles.container}>
      <h1>Second Page</h1>
      <DepartmentList departments={departments} />
      <div className={styles.dataGridContainer}>
        <DataGrid rows={data} columns={columns} />
      </div>
      <p>This is the content of the second page.</p>
      <h2>JSON Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecondPage;


/* USING AXIOS
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  */
