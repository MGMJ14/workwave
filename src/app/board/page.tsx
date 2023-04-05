'use client'

import { Job } from '../interface/interfaces';

function Board() {


    return (
        <div>
            {data.map((item: Job, i: number) => (
                <div key={i} className="text-white">
                    <h2 className="text-white">{item.title}</h2>
                    <p className="text-white">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Board;
