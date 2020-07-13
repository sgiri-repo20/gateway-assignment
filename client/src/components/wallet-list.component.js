import React, { useState,useCallback,useEffect,useMemo } from 'react';
import axios from 'axios';

const ItemSearch = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');
  
    
    // const apiCall = useCallback((event) => {
    //   const request = axios.get(
    //     `http://localhost:4000/gateway-test/list/${item}`
    //   );
    //   request
    //     .then(response => {
    //       setLoading(false);
    //       setItems(response.data);
    //       //setItems(response.data.filter(c => c.id !== id));
    //     })
    //     .catch(error => {
    //       setLoading(false);
          
    //     });
        
    // },[item]);

    useEffect(() => {
      setLoading(true);
      const request = axios.get(
        `http://localhost:4000/gateway-test/list/${item}`
      );
      request
        .then(response => {
          setLoading(false);
          setItems(response.data);
          //setItems(response.data.filter(c => c.id !== id));
        })
        .catch(error => {
          setLoading(false);
          
        });
      
        
        
    },[item])

    return useMemo(() => {
        return (
          <form>
            <input type="text" name="item" class="form-control" autoComplete="off" placeholder="Search" onChange={e => setItem(e.target.value)} />
                 
            {loading && <p>Loading...</p>}
            <h1>Result</h1>
            {items && (
              <div>
                
                <ul>
                  {
                    items.map((item) => {
                    return(<li key={item._id}>{item.item}</li>)
                    })
                  }
                </ul>
              </div>
            )}
          </form>
        );
    },[items,setItems])   
    
  };

  export default ItemSearch;