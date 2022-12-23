import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event(){
    const { slug } = useParams<{ slug: string }>()
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                { slug 
                    ? <Video lessonSlug={ slug } /> 
                    : <div className="flex flex-1 text-center align-middle"><span className="block">Selecione uma aula no menu</span></div>
                }
                <Sidebar />
            </main>
        </div>
    )
}