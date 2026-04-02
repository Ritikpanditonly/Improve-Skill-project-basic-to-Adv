import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';

const App = () => {

  const [courses, setCourses] = useState(null);

  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output);
    }
    catch (error) {
      console.error(error);
      toast.error("Network me koi dikkat hai");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
        <Cards />
      </div>
    </div>
  )
}

export default App
