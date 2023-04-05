'use client';
import React from 'react';

type SaveListingProps = {
  item: any;
  index: number;
  session: any;
};

function SaveListing({ item, index, session }: SaveListingProps) {
  async function handleSave() {
    const res = await fetch('/api/saveListing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item,
        session,
      }),
    });
    const data = await res.json();
  }

  return (
    <button
      onClick={handleSave}
      className="hover:bg-green-400 self-center my-4 border-black border-2 w-fit p-2"
    >
      Save
    </button>
  );
}

export default SaveListing;
