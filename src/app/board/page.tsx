'use client';
import { useState, useEffect } from 'react';
type Props = {};

export default function Board({}: Props) {
  const [data, setUserData] = useState<any>([]);
  async function getData() {
    const res = await fetch('/api/saveListing');
    const userData = res.json();
    console.log(userData);
    // setUserData([...userData]);
  }
  useEffect(() => {
    getData();
  }, []);

  if (!data.length)
    return (
      <div className="bg-green-400 w-screen h-screen text-center mx-auto">
        Nothing Saved Yet!
      </div>
    );

  const displayedData = data.map((item: any, i: number) => (
    <div className="flex flex-col">
      <div>{item.title}</div>
      <div>{item.company}</div>
      <div>{item.location}</div>
    </div>
  ));
  return <>{displayedData}</>;
}
