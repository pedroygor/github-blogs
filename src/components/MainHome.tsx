import { apiGithubUser } from "../lib/axios"
import { useEffect, useState } from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IUserProfile {
    avatarUrl: string
    name: string
    followers: number
    htmlUrl: string
    login: string
    bio: string

}

export default function MainHome() {
    const [user] = useState<string>('pedroygor')
    const [userProfile, setUserProfile] = useState<IUserProfile>()

    useEffect(() => {
        const getUser = async () => {
            const response = await apiGithubUser.get(`/${user}`)
            setUserProfile({
                avatarUrl: response.data.avatar_url,
                name: response.data.name,
                followers: response.data.followers,
                htmlUrl: response.data.html_url,
                login: response.data.login,
                bio: response.data.bio
            })
        }
        getUser()
    }, [])
    return (
        <div className="h-full bg-base-base-background relative">
            <div className="w-[800px] bg-base-base-profile rounded-[10px] absolute -top-20 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-8">
                    <img src={userProfile?.avatarUrl} alt="Avatar" className="w-[148px] h-[148px] rounded-lg my-8 ml-10" />
                    <div className="my-10 mr-8">
                        <div className="flex items-start flex-col font-nunito">
                            <div className="flex justify-between w-full font-bold">
                                <h1 className="text-2xl text-base-base-title">{userProfile?.name}</h1>
                                <a
                                    className="flex items-start gap-2 text-base-blue text-xs"
                                    href={userProfile?.htmlUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GITHUB
                                    <span>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </span>
                                </a>
                            </div>

                            <p className="text-base text-base-base-text font-normal mt-2">{userProfile?.bio}</p>

                            <div className="flex items-start gap-6 font-normal mt-6">
                                <span className="flex items-center gap-2 text-base-base-subtitle">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="w-[18px] h-[18px] text-base-base-label"
                                    />
                                    {userProfile?.login}
                                </span>
                                <span className="flex items-center gap-2 text-base-base-subtitle">
                                    <FontAwesomeIcon
                                        icon={faUserGroup}
                                        className="w-[18px] h-[18px] text-base-base-label"
                                    />
                                    {userProfile?.followers} seguidores
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}