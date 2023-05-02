import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data,setdata] = useState();
    const fetchApi = async()=>{
        const res  = await fetch('https://docs.github.com/en/rest/issues?apiVersion=2022-11-28');
        setdata(res.data);

    }
    useEffect(()=>{
        fetchApi();
    },[])
  return (
    <div>
    {data.map(()=>{
      return  <li>{setdata}</li>
    })}
    </div>
  )
}

export default Pagination