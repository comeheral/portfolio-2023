'use client'

import { useState, useEffect } from 'react';
import fetchData from '@/utils/fetchData';

function Header(){
  const [items, setItems] = useState([]);

  async function fetchHeader(){
    let response = await fetchData('/items/header');

    if(response.ok){
      let json = await response.json();
      let data = json.data;
      setItems(data.items);
    }
  }

  useEffect(() =>{
    fetchHeader();
  }, [])

  if(true){
    return (
      <header className="bg-white flex items-center fixed top-6 left-1/2 translate-x-[-50%] py-4 px-6 rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(78,115,210,0.1)] z-40">
        <div className="w-px self-stretch shrink-0 bg-slate-200 mx-6"></div>
        <ul className="flex items-center gap-6">
          {items.map((item, index) => (
            <li className="font-heading" key={`item-${index}`}>
              {item.link !== undefined
                ? <a className="block relative after:absolute after:hidden after:-inset-x-3 after:-inset-y-2 after:bg-slate-100 after:z-[-1] after:rounded-lg hover:after:block" href={item.link}>{item.label}</a>
                : <span className="block">{item.label}</span>
              }
            </li>
          ))}
        </ul>
      </header>
    )
  }
}

export default Header;