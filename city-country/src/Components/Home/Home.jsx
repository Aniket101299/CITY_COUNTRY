import { useEffect, useState } from "react";
import axios from "axios";
import "../Forms/Forms.css";

export const Home = () => {
    const [countryData, setCountryData] = useState([]);

    
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sortData,setSortData] = useState({sort:null,order:null});
  
    
    const fetchData = (sortData) => {
      setLoading(true);
      setErr(false);
      axios(`http://localhost:3002/countries`, {
        method: "GET",
        params: {
          _sort:sortData.sort,
          _order:sortData.order
        }
      })
        .then((res) => {
          setLoading(false);
          setCountryData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setCountryData([]);
          setErr(true);
        });
    };
  
    useEffect(() => {
      fetchData(sortData);
    }, [sortData]);





    return (
     
        <>  
            {err && <div className="error"> Something went wrong! Try again </div>}
            {loading && <div>...loading</div>}

             <div className="sortByCountry"> 
                <div>Sort by Country</div>
                <button onClick={()=> setSortData({sort:"country",order:"desc"})}>Sort High to Low</button>
                <button onClick={()=> setSortData({sort:"country",order:"asc"})}>Sort Low to High</button>
             </div> 

             <div className="sortByPopulation"> 
                <div>Sort by Population</div>
                <button onClick={()=> setSortData({sort:"population",order:"desc"})}>Sort High to Low</button>
                <button onClick={()=> setSortData({sort:"population",order:"asc"})}>Sort Low to High</button>
             </div> 
             


        <table className="countryTable" style={{border:"1px solid gray"}}>
            <thead>
              <tr>
                  <th style={{border:"1px solid gray"}}>id</th>
                  <th style={{border:"1px solid gray"}}>Country</th>
                  <th style={{border:"1px solid gray"}}>City</th>
                  <th style={{border:"1px solid gray"}}>Population</th>
                  <th style={{border:"1px solid gray"}}>Edit</th>
                  <th style={{border:"1px solid gray"}}>Delete</th>
              </tr>
            </thead>
               {countryData.map((item) => (
              <tr>
                  <td style={{border:"1px solid gray"}}>{item.id}</td>
                  <td style={{border:"1px solid gray"}}>{item.country}</td>
                  <td style={{border:"1px solid gray"}}>{item.city}</td>
                  <td style={{border:"1px solid gray"}}>{item.population}</td>
                  <td style={{border:"1px solid gray", fontWeight:"500", cursor:"pointer"}}>Edit</td>
                  <td style={{border:"1px solid gray", fontWeight:"500", cursor:"pointer"}}>Delete</td>
              </tr>
               ))}
            <tbody>
                
            </tbody>
        </table>
        </>
    );
};