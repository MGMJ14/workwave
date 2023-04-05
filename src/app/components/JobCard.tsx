
import { Job } from '../interface/interfaces';

export default function JobCard() {


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

