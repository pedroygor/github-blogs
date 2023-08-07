import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface IUserRepos {
    body: string;
    title: string;
}

export default function Publications() {
    const [user] = useState<string>('pedroygor')
    const [userRepos, setUserRepos] = useState<IUserRepos[]>([])

    useEffect(() => {
        const getUserRepos = async () => {
            const response = await axios.get(`https://api.github.com/search/issues?q=Typescript%20Generics%20repo:pedroygor/typescript-generics`)
            console.log(response.data.items);
            setUserRepos(response.data.items)

        }
        getUserRepos()
    }, []);

    return (
        <div className="container mt-48">
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl text-base-base-title font-bold">Publicações</h1>
                <div className="flex flex-col gap-8">
                    {userRepos.map((repo, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <a
                                className="flex items-start gap-2 text-base-blue text-xs"
                                href={repo.body}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {repo.body}
                                <span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </span>
                            </a>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )

}   