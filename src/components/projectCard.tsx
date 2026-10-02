import { useEffect, useRef, useState } from 'react'
import { Folder } from 'lucide-react'
import { Link } from 'react-router-dom'

type ProjectCardProps = {
    number: string
    title: string
    category: string
    description: string
    myRole: string
    tags: string[]
    status: string
    delay: number
    link: string
}

function ProjectCard ({
    number,
    title,
    category,
    description,
    myRole,
    tags,
    status,
    delay,
    link,
}: ProjectCardProps) {

    const cardRef = useRef<HTMLAnchorElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = cardRef.current

        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.15,
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    const getStatusStyle = () => {
        switch (status) {
            case 'ACTIVE':
                return 'border-[#17E58F] bg-[#17E58F]/5 text-[#17E58F] text-md'

            case 'DEVELOPMENT':
                return 'border-[#FFFFFF] bg-[#FFFFFF]/5 text-[#FFFFFF] text-md'

            default:
                return 'border-[#E6DF14] bg-[#E6DF14]/3 text-[#E6DF14] text-md'
        }
    }

    return (
        <Link
            ref={cardRef}
            to={link}
            className={`project-card flex h-full flex-col rounded-2xl bg-linear-to-br from-[#79a3ff]/20 
                to-[#0051ff]/15 border border-[#FFFFFF] p-7 hover:border-[#FFFFFF] hover:bg-[#3b99e6]/25
                ${isVisible ? 'project-card-visible' : ''}
            `}
            style={{
                transitionDelay: isVisible ? `${delay}ms` : '0ms',
            }}
        >

            {/* Header */}  
            <div className='flex h-12 items-start justify-between gap-4'>

                <div className='flex items-center gap-3'>

                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border 
                        border-[#07eaff]/20 bg-[#07eaff]/5'>
                        <Folder className='h-8 w-8 text-[#07eaff]' />
                    </div>

                    <div>
                        <p className='font-mono text-md text-[#FFFFFF]'>
                            PROJECT {number}
                        </p>

                        <p className='font-mono text-sm text-[#07eaff]'>
                            {category}
                        </p>
                    </div>

                </div>

                {/* Status */}
                <span
                    className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold ${getStatusStyle()}`}
                >
                    {status}
                </span>

            </div>

            <div className='ml-3 flex flex-1 flex-col'>
                {/* Title */}
                <div className='mt-3 h-8'>
                    <h2 className='font-montserrat text-xl font-bold text-[#FFFFFF]'>
                        {title}
                    </h2>
                </div>

                {/* My Role */}
                <div className='h-4'>
                    <p className='-mt-1 font-montserrat font-semibold text-md leading-6 text-[#ff9797]'>
                        {myRole}
                    </p>
                </div>

                {/* Description */}
                <div className='mt-3 h-18'>
                    <p className='font-montserrat text-md leading-6 text-[#C2C2C2]'>
                        {description}
                    </p>
                </div>



                {/* Tags */}
                <div className='mt-4 min-h-18'>
                    <div className='flex flex-wrap content-start gap-2'>
                        {tags.map((technology) => (
                            <span
                                key={technology}
                                className='rounded-md border border-[#FFFFFF]/50 bg-[#FFFFFF]/3 px-2.5 py-2 font-mono font-semibold text-[13px] text-[#C2C2C2]'
                            >
                                {technology}
                            </span>
                        ))}

                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className='mt-5 flex h-5 items-center justify-between border-t border-[#E67219] pt-5'>

                <span className='ml-2 font-mono text-md text-[#C2C2C2]'>
                    #{number}
                </span>
            </div>

        </Link>
    )
}

export default ProjectCard