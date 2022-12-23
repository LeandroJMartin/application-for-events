import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classname from 'classname'


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){

    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast( props.availableAt )
    const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
    
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormated}
            </span>
            
            <div className={classname('round border border-gray-500 p-4 mt-2 group-hover:border-green-500', {'bg-green-500': isActiveLesson})}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classname('flex items-center gap-2 text-sm text-blue-500 font-medium', { 'text-white': isActiveLesson})}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className={classname('flex items-center gap-2 text-sm text-orange-500 font-medium', { 'text-white': isActiveLesson})}>
                            <Lock size={20}/>
                            Em breve
                        </span>
                    )}
                    
                    {props.type === 'live' ? (
                        <span className={classname('text-sm rounded py-[0.125rem] px-2 text-green-300 border border-green-300 font-bold', { 'text-white border-white': isActiveLesson})}>
                            AO VIVO
                        </span>
                    ) : (
                        <span className={classname('text-sm rounded py-[0.125rem] px-2 text-orange-500 border border-orange-500 font-bold', { 'text-white border-white': isActiveLesson})}>
                            AULA PRÁTICA
                        </span>
                    )}
                    
                </header>

                <strong className={classname('text-gray-200 block mt-5', { 'text-white': isActiveLesson})}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}