'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'
import fetchData from '@/utils/fetchData';
import Logo from '@/components/Logo';

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

  const linkHoverStyles = "block relative before:absolute before:hidden before:-inset-x-3 before:-inset-y-2 before:bg-slate-100 before:z-[-1] before:rounded-lg hover:before:block"

  return items.length && (
    <header className="bg-white flex items-center fixed top-6 left-1/2 translate-x-[-50%] py-4 px-5 rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(78,115,210,0.1)] z-40">
      <Link className={linkHoverStyles} href="/">
        <Logo width="68px" />
      </Link>
      <div className="w-px self-stretch shrink-0 bg-slate-300 mx-6"></div>
      <ul className="flex items-center gap-6">
        {items.map((item, index) => (
          <li className="font-heading text-dark flex items-center" key={`item-${index}`}>
            {item.link !== undefined
              ? <Link className={linkHoverStyles} href={item.link}>{item.label}</Link>
              : <span className="block opacity-40">{item.label}</span>
            }
            {item.sticker !== undefined
              ? <span className="inline-block text-xs text-white leading-none bg-dark py-1 px-2 rounded-full ml-1">{item.sticker}</span>
              : null
            }
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header;