'use client'

import { useState } from "react";

interface RepoModel {
    name: string;
    url: string;
}

interface CommitModel {
    sha: string;
    message: string;
    createdAt: string;
}

type Repositories = Record<string, RepoModel>;
// type RepoCommits = Record<string, CommitModel>;

const GithubPage = () => {

    // const [accessToken, setAccessToken] = useState("")
    const [githubUsername, setGithubUsername] = useState("")

    // Store the repository data
    const [repositories, setRepositories] = useState<Repositories>({});

    async function getGithubUserData() {
        let events = await fetch(`https://api.github.com/users/${githubUsername}/events`)
            .then((response) => response.json())
        // .then((data) => setGithubData(data));

        console.log(events)

        events.map(item => {
            let repo: RepoModel = { name: item.repo.name, url: item.repo.url };
            setRepositories(prev => ({
                ...prev,
                [item.repo.id]: repo,
            }));
        })

    }


    return (
        <>
            <section className="container mx-auto">

                <article className="columns">


                    <h3>Projects list</h3>

                    <div>
                        {/* <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github token</label>
                        <input 
                            type="password" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            placeholder="github token" 
                            value={accessToken} 
                            onChange={e => setAccessToken(e.target.value)}
                        /> */}

                        <div>
                            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github username</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="github token"
                                value={githubUsername}
                                onChange={e => setGithubUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                onClick={() => getGithubUserData()}
                            >
                                Send
                            </button>
                        </div>
                    </div>

                    <ul>
                        <li>test</li>
                    </ul>
                </article>


                <article>
                    <h2>Repositories</h2>

                    <div>
                        {Object.entries(repositories).map(([key, obj]) => (
                            <li key={key}>
                                {obj.name}
                            </li>
                        ))}
                    </div>
                </article>

            </section>

        </>
    )

}


export default GithubPage;